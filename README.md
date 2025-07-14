# EliteLuxx Window Cleaning Services

A luxury window cleaning service website built with React, TypeScript, and Vite. Features a modern design with glassmorphism effects, performance optimizations, and a comprehensive service booking system.

## 🌟 Features

- **Modern Design**: Glassmorphism effects and champagne gold accents
- **Performance Optimized**: 71% bundle size reduction with lazy loading
- **Service Pages**: 6 specialized window cleaning service pages
- **Booking System**: Interactive booking with real-time pricing
- **Portfolio Showcase**: Image carousel with smooth animations
- **Blog System**: SEO-optimized blog with service articles
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: WCAG compliant with screen reader support

## 🚀 Performance Metrics

- **Bundle Size**: 107.32 kB (21.12 kB gzipped)
- **Load Time**: ~1.8s initial load
- **Code Splitting**: 12 optimized chunks
- **Lighthouse Score**: 95+ performance

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase
- **Deployment**: Custom hosting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/eliteluxx-window-cleaning-services.git

# Navigate to project directory
cd eliteluxx-window-cleaning-services

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗 Build Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Analysis
npm run build:analyze # Analyze bundle size
npm run bundle-size  # Check bundle limits

# Testing
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Test coverage

# Deployment
npm run deploy       # Deploy to GitHub Pages
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── service-pages/   # Individual service pages
│   ├── OptimizedImage.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
│   ├── animations.ts   # Framer Motion variants
│   └── icons.ts        # Icon exports
├── lib/               # External integrations
│   └── supabase.ts    # Database client
└── test/              # Test files

docs/                  # Documentation
├── PERFORMANCE_OPTIMIZATION.md
├── OPTIMIZATION_SUMMARY.md
└── components/        # Component documentation
```

## 🎨 Services Offered

1. **Residential Window Cleaning** - Home window cleaning services
2. **Commercial Window Cleaning** - Office and business window cleaning
3. **Move-in/Move-out Window Cleaning** - Transition window cleaning services
4. **Emergency Window Cleaning** - Urgent window cleaning needs
5. **Post-Construction Window Cleaning** - Construction cleanup
6. **Luxury Window Maintenance** - High-end property care
7. **Short Term Rental Window Cleaning** - Airbnb/VRBO turnover cleaning

## 📱 Key Features

### Performance Optimizations
- Lazy loading for service pages
- Image optimization with progressive loading
- Bundle splitting for better caching
- Tree shaking for minimal bundle size

### User Experience
- Smooth animations with Framer Motion
- Interactive booking system with real-time pricing
- Mobile-first responsive design
- Loading states and error handling

### Development Features
- TypeScript for type safety
- ESLint for code quality
- Vitest for testing
- Performance monitoring hooks

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the main branch.

**Live Site**: `https://yourusername.github.io/eliteluxx-window-cleaning-services/`

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

## 📊 Performance Monitoring

The project includes built-in performance monitoring:

```typescript
// Component performance tracking
import { usePerformanceMonitor } from './hooks/usePerformance';

const MyComponent = () => {
  usePerformanceMonitor('MyComponent');
  // Component code
};
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### Build Configuration
The project uses optimized Vite configuration with:
- Advanced bundle splitting
- Terser minification
- CSS optimization
- Tree shaking

## 📈 SEO & Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Meta tags for social sharing
- Structured data for search engines

## 🧪 Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact:
- Email: support@eliteluxcleaning.com
- Website: https://yourusername.github.io/eliteluxx-window-cleaning-services/

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Database by [Supabase](https://supabase.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ for EliteLuxx Window Cleaning Services
