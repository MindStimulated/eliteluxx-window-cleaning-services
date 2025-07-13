# Component Documentation: `Button`

### Table of Contents
- [Overview](#overview)
- [Props/Parameters](#propsparameters)
- [Usage Examples](#usage-examples)
- [Accessibility](#accessibility)
- [Styling & Theming](#styling--theming)
- [Edge Cases & Error Handling](#edge-cases--error-handling)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Changelog](#changelog)

---

## Overview

### Purpose
The `Button` component provides a consistent, reusable button interface for the EliteLuxx Cleaning website. It supports multiple variants, sizes, and states while maintaining the luxury brand aesthetic with champagne gold accents and glassmorphism effects.

### Key Features
- Multiple visual variants (primary, secondary, outline, ghost)
- Responsive sizing (small, medium, large)
- Loading and disabled states
- Icon support with flexible positioning
- Framer Motion animations
- Full accessibility support
- Consistent brand styling

### Visual Examples
```
Primary Button: [Champagne gold gradient with hover effects]
Secondary Button: [Transparent with gold border]
Loading Button: [With spinner animation]
```

---

## Props/Parameters

### Required Props
| Prop | Type | Description | Example |
|------|------|-------------|---------|
| `children` | `React.ReactNode` | Button content (text, icons, etc.) | `"Book Now"` |

### Optional Props
| Prop | Type | Default | Description | Example |
|------|------|---------|-------------|---------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant | `'secondary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size | `'lg'` |
| `disabled` | `boolean` | `false` | Disables button interaction | `true` |
| `loading` | `boolean` | `false` | Shows loading spinner | `true` |
| `icon` | `React.ReactNode` | `undefined` | Icon element | `<ChevronRight />` |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon placement | `'right'` |
| `fullWidth` | `boolean` | `false` | Makes button full container width | `true` |
| `onClick` | `(event: React.MouseEvent) => void` | `undefined` | Click handler | `() => handleClick()` |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type | `'submit'` |
| `className` | `string` | `''` | Additional CSS classes | `'custom-button'` |
| `ariaLabel` | `string` | `undefined` | Accessibility label | `'Open booking form'` |

### Prop Interfaces
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}
```

---

## Usage Examples

### Basic Usage
```tsx
import { Button } from './components/Button';

function App() {
  return (
    <Button>
      Book Cleaning
    </Button>
  );
}
```

### With Different Variants
```tsx
import { Button } from './components/Button';

function ServicePage() {
  return (
    <div className="space-y-4">
      <Button variant="primary">Book Now</Button>
      <Button variant="secondary">Learn More</Button>
      <Button variant="outline">Contact Us</Button>
      <Button variant="ghost">View Portfolio</Button>
    </div>
  );
}
```

### With Icons and Loading State
```tsx
import { Button } from './components/Button';
import { Calendar, ChevronRight, Loader2 } from 'lucide-react';

function BookingForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async () => {
    setIsLoading(true);
    try {
      await submitBooking();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button 
        icon={<Calendar />}
        onClick={handleBooking}
        loading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? 'Booking...' : 'Schedule Cleaning'}
      </Button>
      
      <Button 
        variant="secondary"
        icon={<ChevronRight />}
        iconPosition="right"
        size="lg"
      >
        Next Step
      </Button>
    </div>
  );
}
```

### Form Integration
```tsx
import { Button } from './components/Button';

function ContactForm() {
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <div className="flex gap-4">
        <Button type="submit" fullWidth>
          Send Message
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={resetForm}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
```

### Responsive Design
```tsx
<Button 
  size="sm"
  className="md:text-base lg:text-lg md:px-6 lg:px-8"
  fullWidth
>
  Mobile-First Button
</Button>
```

---

## Accessibility

### ARIA Labels
- `aria-label`: Custom accessibility label when button text isn't descriptive
- `aria-disabled`: Automatically set when `disabled` prop is true
- `aria-busy`: Set to true when `loading` prop is true

### Keyboard Navigation
- **Enter/Space**: Activates the button
- **Tab**: Focuses the button (when not disabled)
- **Escape**: No default behavior (can be customized via onKeyDown)

### Screen Reader Support
- Button content is automatically announced
- Loading state announces "busy" to screen readers
- Disabled state prevents interaction and announces "disabled"
- Icon-only buttons require `ariaLabel` prop for accessibility

### Color Contrast
- Primary variant: Meets WCAG AA standards (4.5:1 ratio)
- All text maintains high contrast against backgrounds
- Focus indicators use sufficient contrast
- Disabled states maintain readable contrast

---

## Styling & Theming

### CSS Classes
| Class | Purpose | Customizable |
|-------|---------|--------------|
| `.btn-primary` | Primary button styling | Yes (via CSS variables) |
| `.btn-secondary` | Secondary button styling | Yes |
| `.btn-outline` | Outline button styling | Yes |
| `.btn-ghost` | Ghost button styling | Yes |

### CSS Variables
```css
:root {
  --champagne-gold: #d4af37;
  --champagne-gold-dark: #b8941f;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-gold: rgba(212, 175, 55, 0.3);
}
```

### Responsive Behavior
- **Mobile (< 768px)**: Smaller padding, simplified animations
- **Tablet (768px - 1024px)**: Medium sizing, full animations
- **Desktop (> 1024px)**: Full sizing, enhanced hover effects

### Animation Classes
```css
/* Primary button animations */
.btn-primary {
  background: linear-gradient(135deg, var(--champagne-gold), var(--champagne-gold-dark));
  transition: all 0.3s ease;
  transform: translateY(0);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px var(--shadow-gold);
}
```

---

## Edge Cases & Error Handling

### Common Edge Cases
1. **Very Long Text**: Button expands horizontally, text wraps on small screens
2. **Icon Without Text**: Requires `ariaLabel` for accessibility
3. **Rapid Clicking**: Loading state prevents multiple submissions
4. **Network Failures**: Button returns to normal state, error handling via `onClick`

### Error States
```tsx
// Error handling example
const [error, setError] = useState<string | null>(null);

<Button
  onClick={async () => {
    try {
      setError(null);
      await riskyOperation();
    } catch (err) {
      setError('Operation failed. Please try again.');
    }
  }}
  disabled={!!error}
>
  {error ? 'Try Again' : 'Submit'}
</Button>
```

### Loading States
```tsx
// Proper loading implementation
<Button
  loading={isSubmitting}
  disabled={isSubmitting || !isFormValid}
  onClick={handleSubmit}
>
  {isSubmitting ? 'Processing...' : 'Submit Form'}
</Button>
```

### Disabled States
- Prevents all mouse and keyboard interactions
- Visual opacity reduced to 50%
- Cursor changes to 'not-allowed'
- Screen readers announce as disabled

---

## Testing

### Unit Tests
```typescript
describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows loading state correctly', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Integration Tests
- Button integration with forms
- Button behavior in different layout contexts
- Button accessibility with screen readers

### Manual Testing Checklist
- [ ] Button renders correctly in all variants
- [ ] Hover and focus states work properly
- [ ] Loading spinner appears and button is disabled during loading
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader announces button purpose
- [ ] Button works in different container sizes
- [ ] Animations perform smoothly
- [ ] Button maintains brand consistency

---

## Dependencies

### External Dependencies
- `framer-motion`: For smooth animations and transitions
- `lucide-react`: For optional icons (when using icon prop)

### Internal Dependencies
- Tailwind CSS configuration (champagne-gold color, glassmorphism utilities)
- Global CSS variables for theming
- Font configuration (Inter for button text)

---

## Changelog

### Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01-15 | Initial button component with basic variants |
| 1.1.0 | 2024-02-01 | Added loading state and icon support |
| 1.2.0 | 2024-02-15 | Improved accessibility and ARIA support |
| 1.3.0 | 2024-03-01 | Added glassmorphism effects and enhanced animations |

---

## Notes & Considerations

### Performance
- Uses CSS transforms for animations (hardware accelerated)
- Icons are lazy-loaded when needed
- Minimal re-renders due to optimized prop structure

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Graceful degradation for older browsers (animations disabled)
- Touch device support for mobile interactions

### Future Enhancements
- [ ] Add more size variants (xs, xl)
- [ ] Implement button groups component
- [ ] Add tooltip integration
- [ ] Create split button variant
- [ ] Add progress button variant for multi-step processes

### Known Issues
- None currently identified

### Usage Guidelines
- Use primary buttons for main actions (booking, contact)
- Use secondary buttons for alternative actions
- Limit to one primary button per section
- Ensure button text is action-oriented ("Book Now" vs "Booking")
- Always provide loading states for async operations
