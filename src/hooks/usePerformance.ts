import { useEffect } from 'react';

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
        
        // Warn for slow renders
        if (renderTime > 16) { // 60fps = 16ms budget
          console.warn(`${componentName} is rendering slowly (${renderTime.toFixed(2)}ms)`);
        }
      }
    };
  });
};

// Web Vitals tracking
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // In production, you could send this to an analytics service
    console.log(metric);
  }
};

// Memory usage monitoring
export const useMemoryMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const logMemory = () => {
        const memory = (performance as any).memory;
        console.log(`Memory Usage:
          Used: ${Math.round(memory.usedJSHeapSize / 1048576)}MB
          Total: ${Math.round(memory.totalJSHeapSize / 1048576)}MB
          Limit: ${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`);
      };

      const interval = setInterval(logMemory, 30000); // Log every 30 seconds
      return () => clearInterval(interval);
    }
  }, []);
};
