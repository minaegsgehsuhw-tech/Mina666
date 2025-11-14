import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-6 mt-8 max-w-4xl mx-auto">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6"></div>
      <p className="text-gray-400 text-xl font-semibold">
        مع النجاح و التوفيق
      </p>
    </footer>
  );
};

export default Footer;