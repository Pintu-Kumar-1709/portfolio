import React, { memo } from 'react';

const MobileParticles = memo(function MobileParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple CSS-only particles for mobile */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-violet-400/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300/25 rounded-full animate-pulse animation-delay-3000"></div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-blue-400/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-violet-400/5 to-transparent rounded-full"></div>
    </div>
  );
});

export default MobileParticles;
