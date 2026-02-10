// // Performance monitoring utility
// class PerformanceMonitor {
//   constructor() {
//     this.metrics = {
//       loadTime: 0,
//       firstContentfulPaint: 0,
//       largestContentfulPaint: 0,
//       cumulativeLayoutShift: 0,
//       firstInputDelay: 0
//     };
    
//     this.init();
//   }

//   init() {
//     // Monitor page load time
//     window.addEventListener('load', () => {
//       this.measureLoadTime();
//       this.measureWebVitals();
//     });
//   }

//   measureLoadTime() {
//     const navigation = performance.getEntriesByType('navigation')[0];
//     if (navigation) {
//       this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
//       console.log('🚀 Page load time:', this.metrics.loadTime + 'ms');
//     }
//   }

//   measureWebVitals() {
//     // First Contentful Paint
//     const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
//     if (fcpEntry) {
//       this.metrics.firstContentfulPaint = fcpEntry.startTime;
//       console.log('🎨 First Contentful Paint:', this.metrics.firstContentfulPaint + 'ms');
//     }

//     // Monitor memory usage if available
//     if (performance.memory) {
//       console.log('🧠 Memory usage:', {
//         used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + 'MB',
//         total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) + 'MB',
//         limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
//       });
//     }
//   }

//   // Monitor component rendering performance
//   measureComponentRender(componentName, startTime) {
//     const endTime = performance.now();
//     const renderTime = endTime - startTime;
//     console.log(`⚡ ${componentName} render time:`, renderTime + 'ms');
//     return renderTime;
//   }

//   // Check if device is low-performance
//   isLowPerformanceDevice() {
//     const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//     const memoryInfo = performance.memory;
    
//     // Check connection speed
//     const slowConnection = connection && (
//       connection.effectiveType === 'slow-2g' || 
//       connection.effectiveType === '2g' || 
//       connection.effectiveType === '3g'
//     );
    
//     // Check memory constraints
//     const lowMemory = memoryInfo && (
//       memoryInfo.jsHeapSizeLimit < 1073741824 // Less than 1GB
//     );
    
//     // Check hardware concurrency (CPU cores)
//     const lowCPU = navigator.hardwareConcurrency < 4;
    
//     return slowConnection || lowMemory || lowCPU;
//   }

//   // Get performance recommendations
//   getPerformanceRecommendations() {
//     const recommendations = [];
    
//     if (this.isLowPerformanceDevice()) {
//       recommendations.push('Device detected as low-performance');
//       recommendations.push('Consider disabling 3D animations');
//       recommendations.push('Reduce particle count');
//       recommendations.push('Enable performance mode');
//     }
    
//     if (this.metrics.loadTime > 3000) {
//       recommendations.push('Page load time is high (>3s)');
//       recommendations.push('Consider lazy loading more components');
//     }
    
//     return recommendations;
//   }

//   // Log performance summary
//   logSummary() {
//     console.group('📊 Performance Summary');
//     console.log('Load Time:', this.metrics.loadTime + 'ms');
//     console.log('FCP:', this.metrics.firstContentfulPaint + 'ms');
//     console.log('Low Performance Device:', this.isLowPerformanceDevice());
    
//     const recommendations = this.getPerformanceRecommendations();
//     if (recommendations.length > 0) {
//       console.log('💡 Recommendations:', recommendations);
//     }
//     console.groupEnd();
//   }
// }

// export default new PerformanceMonitor();
