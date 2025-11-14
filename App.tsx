import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // The splash screen will be visible for 3 seconds

    const contentTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, 3200); // Content appears slightly after splash screen fades

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-gray-200 flex flex-col items-center justify-between p-4 selection:bg-cyan-500 selection:text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {showSplash && <SplashScreen />}
      </div>

      {!showSplash && (
        <div className={`flex flex-col items-center w-full transition-opacity duration-700 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <MainContent />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;