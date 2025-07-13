import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Booking from '../../components/Booking';

const mockOnBack = vi.fn();
const mockOnBookingComplete = vi.fn();

describe('Booking Component - Instant Quote Functionality', () => {
  beforeEach(() => {
    mockOnBack.mockClear();
    mockOnBookingComplete.mockClear();
  });

  it('renders with selected service', () => {
    render(
      <Booking 
        selectedService="Residential Cleaning"
        onBack={mockOnBack}
        onBookingComplete={mockOnBookingComplete}
      />
    );
    
    expect(screen.getByText('Book Your Residential Cleaning')).toBeInTheDocument();
  });

  it('expands booking interface when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Booking 
        selectedService="Commercial Cleaning"
        onBack={mockOnBack}
        onBookingComplete={mockOnBookingComplete}
      />
    );
    
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Space Details')).toBeInTheDocument();
    });
  });

  it('maintains same functionality as Hero component', async () => {
    const user = userEvent.setup();
    render(
      <Booking 
        selectedService="Luxury Maintenance"
        onBack={mockOnBack}
        onBookingComplete={mockOnBookingComplete}
      />
    );
    
    // Expand the widget
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Space Details')).toBeInTheDocument();
    });
    
    // Test number input functionality
    const bedroomsInput = screen.getByDisplayValue('1');
    const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
    await user.click(incrementButton!);
    
    await waitFor(() => {
      expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    });
  });

  it('calls onBookingComplete with correct data', async () => {
    const user = userEvent.setup();
    render(
      <Booking 
        selectedService="Move-In/Move-Out"
        onBack={mockOnBack}
        onBookingComplete={mockOnBookingComplete}
      />
    );
    
    // Expand and interact with the booking form
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Book My Clean!')).toBeInTheDocument();
    });
    
    const bookButton = screen.getByText('Book My Clean!');
    await user.click(bookButton);
    
    expect(mockOnBookingComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        serviceType: 'Move-In/Move-Out',
        totalPrice: expect.any(Number),
      })
    );
  });
});