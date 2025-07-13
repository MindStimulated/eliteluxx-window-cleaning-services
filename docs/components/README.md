# Component Documentation Index

This directory contains comprehensive documentation for all reusable components in the EliteLuxx Cleaning project.

## Documentation Standards

All component documentation follows the [Component Documentation Template](../COMPONENT_DOCUMENTATION_TEMPLATE.md) to ensure consistency and completeness.

## Component Library

### Core Components

| Component | Status | Last Updated | Description |
|-----------|--------|--------------|-------------|
| [Button](./Button.md) | ✅ Complete | 2024-03-01 | Primary interactive element for user actions |
| [Header](./Header.md) | 📝 Planned | - | Main navigation header with dropdown menus |
| [Footer](./Footer.md) | 📝 Planned | - | Site footer with service links and contact info |

### Layout Components

| Component | Status | Last Updated | Description |
|-----------|--------|--------------|-------------|
| [Hero](./Hero.md) | 📝 Planned | - | Homepage hero section with video background |
| [Services](./Services.md) | 📝 Planned | - | Service cards grid with routing functionality |
| [Portfolio](./Portfolio.md) | 📝 Planned | - | Image carousel with navigation and descriptions |

### Form Components

| Component | Status | Last Updated | Description |
|-----------|--------|--------------|-------------|
| [BookingInterface](./BookingInterface.md) | 📝 Planned | - | Multi-step booking form with validation |
| [LocationQuote](./LocationQuote.md) | 📝 Planned | - | Location-based pricing calculator |
| [Contact](./Contact.md) | 📝 Planned | - | Contact form with validation |

### Utility Components

| Component | Status | Last Updated | Description |
|-----------|--------|--------------|-------------|
| [FloatingBookingButton](./FloatingBookingButton.md) | 📝 Planned | - | Sticky CTA button for mobile/desktop |

### Service Pages

| Component | Status | Last Updated | Description |
|-----------|--------|--------------|-------------|
| [ResidentialCleaning](./ResidentialCleaning.md) | 📝 Planned | - | Residential cleaning service page |
| [CommercialCleaning](./CommercialCleaning.md) | 📝 Planned | - | Commercial cleaning service page |
| [EmergencyCleaning](./EmergencyCleaning.md) | 📝 Planned | - | Emergency cleaning service page |
| [MoveInOutCleaning](./MoveInOutCleaning.md) | 📝 Planned | - | Move-in/out cleaning service page |
| [PostConstructionCleaning](./PostConstructionCleaning.md) | 📝 Planned | - | Post-construction cleaning service page |
| [LuxuryMaintenance](./LuxuryMaintenance.md) | 📝 Planned | - | Luxury maintenance service page |
| [ShortTermRentalCleaning](./ShortTermRentalCleaning.md) | 📝 Planned | - | Short-term rental cleaning service page |

## Status Legend

- ✅ **Complete**: Full documentation available
- 📝 **Planned**: Documentation scheduled for creation
- 🚧 **In Progress**: Documentation being written
- ⚠️ **Needs Update**: Documentation exists but requires updates
- ❌ **Deprecated**: Component no longer in use

## How to Use This Documentation

### For Developers
1. Read the component documentation before using any component
2. Follow the usage examples and prop specifications
3. Test accessibility requirements
4. Update documentation when modifying components

### For Designers
1. Reference visual examples and styling information
2. Understand responsive behavior across devices
3. Note accessibility and usability considerations
4. Ensure designs align with existing component capabilities

### For QA/Testing
1. Use testing checklists for manual testing
2. Reference edge cases and error handling
3. Verify accessibility requirements
4. Test responsive design requirements

## Contributing to Documentation

### Creating New Component Documentation
1. Copy the [Component Documentation Template](../COMPONENT_DOCUMENTATION_TEMPLATE.md)
2. Fill in all sections with component-specific information
3. Include comprehensive usage examples
4. Add accessibility and testing information
5. Update this index file with the new component

### Updating Existing Documentation
1. Follow the established template structure
2. Update the "Last Updated" date
3. Add entries to the changelog section
4. Ensure all examples are tested and working

### Documentation Best Practices
- **Be Comprehensive**: Cover all props, edge cases, and usage scenarios
- **Include Examples**: Provide real, working code examples
- **Consider Accessibility**: Document ARIA attributes and keyboard navigation
- **Show Responsive Behavior**: Explain how components adapt to different screen sizes
- **Document Edge Cases**: Include error handling and loading states
- **Keep Current**: Update documentation when components change

## Project Context

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase

### Design System
- **Colors**: Champagne gold (#d4af37) primary, black/white contrast
- **Typography**: Inter (body), Lora (headings)
- **Effects**: Glassmorphism, smooth animations
- **Responsive**: Mobile-first approach

### Accessibility Standards
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast requirements
- Focus management

## Quick Reference Links

- [Project README](../README.md)
- [Component Template](../COMPONENT_DOCUMENTATION_TEMPLATE.md)
- [Styling Guidelines](../STYLING_GUIDELINES.md)
- [Accessibility Checklist](../ACCESSIBILITY_CHECKLIST.md)
- [Testing Guidelines](../TESTING_GUIDELINES.md)
