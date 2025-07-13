import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../../App';

// Mock Supabase
vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
      signInWithOAuth: vi.fn().mockResolvedValue({ error: null }),
    },
    from: vi.fn().mockReturnValue({
      insert: vi.fn().mockResolvedValue({ error: null }),
    }),
  },
}));

describe('Complete Booking Flow Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('completes full booking flow from hero to checkout', async () => {
    const user = userEvent.setup();
    render(<App />);

    // 1. Start with Hero component
    expect(screen.getByText('Elite Service,')).toBeInTheDocument();
    
    // 2. Expand instant quote
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Space Details')).toBeInTheDocument();
    });

    // 3. Modify some values
    const bedroomsInput = screen.getByDisplayValue('1');
    const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
    await user.click(incrementButton!);
    await user.click(incrementButton!); // Set to 3 bedrooms

    // 4. Select frequency
    const weeklyButton = screen.getByText('Weekly').closest('button');
    await user.click(weeklyButton!);

    // 5. Add some add-ons
    const deepCleaningButton = screen.getByText('Deep Cleaning').closest('button');
    await user.click(deepCleaningButton!);

    // 6. Click Book My Clean
    const bookButton = screen.getByText('Book My Clean!');
    await user.click(bookButton);

    // 7. Should navigate to checkout
    await waitFor(() => {
      expect(screen.getByText('Complete Your Booking')).toBeInTheDocument();
    });

    // 8. Verify booking data is passed correctly
    expect(screen.getByText('Service Summary')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument(); // bedrooms
    expect(screen.getByText('Weekly')).toBeInTheDocument(); // frequency
  });

  it('handles service selection from services page', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Navigate to services section
    const servicesLink = screen.getByText('Services');
    await user.click(servicesLink);

    await waitFor(() => {
      expect(screen.getByText('Our Premium Services')).toBeInTheDocument();
    });

    // Click on a service
    const residentialService = screen.getByText('Residential Cleaning').closest('div');
    await user.click(residentialService!);

    // Should navigate to booking page with selected service
    await waitFor(() => {
      expect(screen.getByText('Book Your Residential Cleaning')).toBeInTheDocument();
    });
  });

  it('maintains data consistency across navigation', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Start booking from hero
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Space Details')).toBeInTheDocument();
    });

    // Modify values
    const bedroomsInput = screen.getByDisplayValue('1');
    const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
    await user.click(incrementButton!);

    // Book the service
    const bookButton = screen.getByText('Book My Clean!');
    await user.click(bookButton);

    await waitFor(() => {
      expect(screen.getByText('Complete Your Booking')).toBeInTheDocument();
    });

    // Go back to booking
    const backButton = screen.getByText('Back to Quote');
    await user.click(backButton);

    await waitFor(() => {
      expect(screen.getByText('Book Your Residential Cleaning')).toBeInTheDocument();
    });

    // Values should be preserved
    const expandButtonAgain = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButtonAgain!);
    
    await waitFor(() => {
      expect(screen.getByDisplayValue('2')).toBeInTheDocument(); // bedrooms should still be 2
    });
  });
});