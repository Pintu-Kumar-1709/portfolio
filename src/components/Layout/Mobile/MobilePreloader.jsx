import { memo } from 'react';

const MobilePreloader = memo(() => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Simple spinner - no heavy animations */}
        <div className="w-8 h-8 border-2 border-slate-700 border-t-blue-400 rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    </div>
  );
});

MobilePreloader.displayName = 'MobilePreloader';

export default MobilePreloader;
