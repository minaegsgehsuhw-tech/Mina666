import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50">
        <div className="text-center w-full max-w-md px-4 animate-pulse">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">هذا الموقع من صنع مينا</h1>
            <p className="text-2xl md:text-3xl mt-4 text-gray-300">اهلا 1/4</p>
        </div>
    </div>
  );
};

export default SplashScreen;