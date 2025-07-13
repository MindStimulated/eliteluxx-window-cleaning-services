import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Hero from '../../components/Hero';

// Mock the onBookingComplete callback
const mockOnBookingComplete = vi.fn();

describe('Hero Component - Instant Quote Functionality', () => {
  beforeEach(() => {
    mockOnBookingComplete.mockClear();
  });

  it('renders the instant quote widget', () => {
    render(<Hero onBookingComplete={mockOnBookingComplete} />);
    
    expect(screen.getByText('Get Instant Quote')).toBeInTheDocument();
    expect(screen.getByText('Customize your perfect cleaning service')).toBeInTheDocument();
  });

  it('displays initial price correctly', () => {
    render(<Hero onBookingComplete={mockOnBookingComplete} />);
    
    // Should show initial calculated price
    expect(screen.getByText(/\$\d+\.\d{2}/)).toBeInTheDocument();
  });

  it('expands quote widget when clicked', async () => {
    const user = userEvent.setup();
    render(<Hero onBookingComplete={mockOnBookingComplete} />);
    
    const expandButton = screen.getByText('Get Instant Quote').closest('div');
    await user.click(expandButton!);
    
    await waitFor(() => {
      expect(screen.getByText('Space Details')).toBeInTheDocument();
      expect(screen.getByText('Service Frequency')).toBeInTheDocument();
      expect(screen.getByText('Add-On Services')).toBeInTheDocument();
    });
  });

  describe('Number Input Controls', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Space Details')).toBeInTheDocument();
      });
    });

    it('increments bedrooms when + button is clicked', async () => {
      const user = userEvent.setup();
      
      // Find bedrooms input and its + button
      const bedroomsInput = screen.getByDisplayValue('1');
      const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
      
      expect(incrementButton).toBeInTheDocument();
      await user.click(incrementButton!);
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
      });
    });

    it('decrements bedrooms when - button is clicked (but not below minimum)', async () => {
      const user = userEvent.setup();
      
      // First increment to 2
      const bedroomsInput = screen.getByDisplayValue('1');
      const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
      await user.click(incrementButton!);
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
      });
      
      // Then decrement back to 1
      const decrementButton = bedroomsInput.parentElement?.querySelector('button:first-child');
      await user.click(decrementButton!);
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('1')).toBeInTheDocument();
      });
    });

    it('allows direct input in bedrooms field', async () => {
      const user = userEvent.setup();
      
      const bedroomsInput = screen.getByDisplayValue('1');
      
      await user.clear(bedroomsInput);
      await user.type(bedroomsInput, '3');
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('3')).toBeInTheDocument();
      });
    });

    it('clamps values to minimum and maximum ranges', async () => {
      const user = userEvent.setup();
      
      const bedroomsInput = screen.getByDisplayValue('1');
      
      // Test maximum clamping (assuming max is 6)
      await user.clear(bedroomsInput);
      await user.type(bedroomsInput, '10');
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('6')).toBeInTheDocument();
      });
      
      // Test minimum clamping
      await user.clear(bedroomsInput);
      await user.type(bedroomsInput, '0');
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('1')).toBeInTheDocument();
      });
    });
  });

  describe('Square Footage Input', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Space Details')).toBeInTheDocument();
      });
    });

    it('allows square footage input and clamps to valid range', async () => {
      const user = userEvent.setup();
      
      const sqFtInput = screen.getByDisplayValue('1000');
      
      await user.clear(sqFtInput);
      await user.type(sqFtInput, '2500');
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('2500')).toBeInTheDocument();
      });
      
      // Test minimum clamping (should be 200)
      await user.clear(sqFtInput);
      await user.type(sqFtInput, '100');
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('200')).toBeInTheDocument();
      });
    });
  });

  describe('Frequency Selection', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Service Frequency')).toBeInTheDocument();
      });
    });

    it('allows frequency selection and shows discounts', async () => {
      const user = userEvent.setup();
      
      // Click on Weekly option
      const weeklyButton = screen.getByText('Weekly').closest('button');
      await user.click(weeklyButton!);
      
      await waitFor(() => {
        expect(screen.getByText('30% off')).toBeInTheDocument();
      });
      
      // Click on Bi-weekly option
      const biweeklyButton = screen.getByText('Bi-weekly').closest('button');
      await user.click(biweeklyButton!);
      
      await waitFor(() => {
        expect(screen.getByText('20% off')).toBeInTheDocument();
      });
    });
  });

  describe('Add-On Services', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Add-On Services')).toBeInTheDocument();
      });
    });

    it('allows selecting and deselecting add-on services', async () => {
      const user = userEvent.setup();
      
      // Select Deep Cleaning
      const deepCleaningButton = screen.getByText('Deep Cleaning').closest('button');
      await user.click(deepCleaningButton!);
      
      // Check if it's selected (button should have different styling)
      expect(deepCleaningButton).toHaveClass('border-emerald-green');
      
      // Deselect it
      await user.click(deepCleaningButton!);
      
      // Should not have selected styling anymore
      expect(deepCleaningButton).not.toHaveClass('border-emerald-green');
    });

    it('shows correct pricing for add-ons', async () => {
      const user = userEvent.setup();
      
      // Check that Deep Cleaning shows +$95
      expect(screen.getByText('+$95')).toBeInTheDocument();
      
      // Check that Green Cleaning shows Free
      expect(screen.getByText('Free')).toBeInTheDocument();
    });
  });

  describe('Price Calculation', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Price Breakdown')).toBeInTheDocument();
      });
    });

    it('updates total price when inputs change', async () => {
      const user = userEvent.setup();
      
      // Get initial price
      const initialPriceElement = screen.getByText(/\$\d+\.\d{2}/).textContent;
      
      // Change bedrooms to 3
      const bedroomsInput = screen.getByDisplayValue('1');
      const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
      await user.click(incrementButton!);
      await user.click(incrementButton!);
      
      await waitFor(() => {
        expect(screen.getByDisplayValue('3')).toBeInTheDocument();
      });
      
      // Price should have changed
      await waitFor(() => {
        const newPriceElements = screen.getAllByText(/\$\d+\.\d{2}/);
        const newPrice = newPriceElements.find(el => el.textContent !== initialPriceElement);
        expect(newPrice).toBeInTheDocument();
      });
    });

    it('applies frequency discounts correctly', async () => {
      const user = userEvent.setup();
      
      // Select weekly frequency (30% discount)
      const weeklyButton = screen.getByText('Weekly').closest('button');
      await user.click(weeklyButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Frequency Discount')).toBeInTheDocument();
        expect(screen.getByText('-30%')).toBeInTheDocument();
      });
    });
  });

  describe('Service Overview', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Service Overview')).toBeInTheDocument();
      });
    });

    it('displays current selections in service overview', async () => {
      const user = userEvent.setup();
      
      // Change some values
      const bedroomsInput = screen.getByDisplayValue('1');
      const incrementButton = bedroomsInput.parentElement?.querySelector('button:last-child');
      await user.click(incrementButton!);
      
      // Select bi-weekly frequency
      const biweeklyButton = screen.getByText('Bi-weekly').closest('button');
      await user.click(biweeklyButton!);
      
      await waitFor(() => {
        // Check that service overview reflects changes
        const overviewSection = screen.getByText('Service Overview').closest('div');
        expect(overviewSection).toHaveTextContent('2'); // bedrooms
        expect(overviewSection).toHaveTextContent('Bi-weekly'); // frequency
      });
    });
  });

  describe('Book My Clean Button', () => {
    it('calls onBookingComplete when clicked', async () => {
      const user = userEvent.setup();
      render(<Hero onBookingComplete={mockOnBookingComplete} />);
      
      // Expand the widget first
      const expandButton = screen.getByText('Get Instant Quote').closest('div');
      await user.click(expandButton!);
      
      await waitFor(() => {
        expect(screen.getByText('Book My Clean!')).toBeInTheDocument();
      });
      
      const bookButton = screen.getByText('Book My Clean!');
      await user.click(bookButton);
      
      expect(mockOnBookingComplete).toHaveBeenCalledTimes(1);
      expect(mockOnBookingComplete).toHaveBeenCalledWith(
        expect.objectContaining({
          bedrooms: expect.any(Number),
          bathrooms: expect.any(Number),
          halfBaths: expect.any(Number),
          sqFt: expect.any(Number),
          frequency: expect.any(String),
          addOns: expect.any(Array),
          serviceType: expect.any(String),
          totalPrice: expect.any(Number),
        })
      );
    });
  });
});