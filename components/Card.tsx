import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: 'academic-cap' | 'video-camera'; // Add more as needed
}

const Icon: React.FC<{ name: CardProps['icon'] }> = ({ name }) => {
    switch (name) {
        case 'academic-cap':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.042.941l-1.061 4.243a1 1 0 00.28 1.062l4.004 4.004a1 1 0 001.414 0l4.004-4.004a1 1 0 00.28-1.062l-1.06-4.243a.999.999 0 01.042-.941l1.636-1.125a1 1 0 000-1.84l-7-3zM10 8a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
            );
        case 'video-camera':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 001.553.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
            );
        default:
            return null;
    }
}

const Card: React.FC<CardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-slate-800 border border-slate-700/50 rounded-xl shadow-lg shadow-black/20 overflow-hidden backdrop-blur-sm bg-opacity-80">
      <div className="bg-slate-700/50 px-6 py-4 flex items-center">
        {icon && <Icon name={icon} />}
        <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;