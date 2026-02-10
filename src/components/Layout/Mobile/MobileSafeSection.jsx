import { memo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useMobile';

const MobileSafeSection = memo(({ 
  children, 
  id, 
  className = "",
  fallback = null,
  priority = false 
}) => {
  const [ref, isIntersecting, hasBeenVisible] = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: priority ? '200px' : '100px'
  });

  // Render immediately for priority sections, otherwise wait for intersection
  const shouldRender = priority || hasBeenVisible || isIntersecting;

  return (
    <section 
      ref={ref}
      id={id}
      className={`min-h-[50vh] ${className}`}
    >
      {shouldRender ? children : (
        fallback || (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-slate-700 border-t-blue-400 rounded-full animate-spin"></div>
          </div>
        )
      )}
    </section>
  );
});

MobileSafeSection.displayName = 'MobileSafeSection';

export default MobileSafeSection;
