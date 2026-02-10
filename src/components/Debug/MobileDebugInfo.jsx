import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function MobileDebugInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const testNavigation = () => {
    console.log('Testing navigation from mobile...');
    console.log('Current location:', location.pathname);
    
    if (location.pathname !== '/') {
      console.log('Navigating to home page...');
      navigate('/');
    } else {
      console.log('Already on home page');
    }
    
    setTimeout(() => {
      const element = document.getElementById('about');
      console.log('About element found:', !!element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-red-500 text-white p-2 rounded md:hidden">
      <button onClick={testNavigation} className="text-xs">
        Test Nav: {location.pathname}
      </button>
    </div>
  );
}

export default MobileDebugInfo;
