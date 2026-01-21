
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#0e1a22] flex flex-col items-center justify-center px-6 py-12 text-white overflow-x-hidden font-serif">
      {/* Minimalist Logo */}
      <div className="mb-8 text-[#B8860B] opacity-80">
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Headline Container */}
      <div className="max-w-xl w-full text-center mb-12">
        <h1 className="text-[26px] md:text-3xl font-black leading-tight tracking-tight font-sans">
          Todo dia você tem tempo para o <span className="text-red-600 uppercase">Pecado</span>, Prazeres, Distrações e principalmente para <span className="text-red-600 uppercase">Satanás</span>.
          <br />
          <span className="text-gray-300">Mas não tem um</span> <span className="text-red-600">tempinho para Deus?</span>
        </h1>
      </div>

      {/* Artwork Container */}
      <main className="w-full max-w-[450px] mb-12">
        <figure className="bg-[#0b141b] rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative group">
          <img 
            src="https://i.ibb.co/5xMZwRQX/Gemini-Generated-Image-utc5hutc5hutc5hu.png" 
            alt="Arte Sacra"
            className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
          />
        </figure>
      </main>

      {/* Sub-caption */}
      <div className="max-w-md w-full text-center mb-10 font-sans">
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Se você chegou até aqui não foi por um caso. Quando clicar no botão abaixo vai entender o que quero dizer.
        </p>
      </div>

      {/* Call to Action Button */}
      <button 
        onClick={onStart}
        className="w-full max-w-xs bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-300 text-white text-xl font-bold py-5 px-8 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.4)] uppercase tracking-wide animate-pulse hover:animate-none font-sans"
      >
        Quero descobrir
      </button>

      {/* Footer subtle text */}
      <p className="mt-8 text-gray-600 text-[10px] uppercase tracking-widest font-sans">
        Acesso Único • 100% Seguro
      </p>
    </div>
  );
};

export default Landing;
