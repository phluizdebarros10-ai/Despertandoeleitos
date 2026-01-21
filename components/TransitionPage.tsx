
import React from 'react';

interface TransitionPageProps {
  onContinue: () => void;
}

const TransitionPage: React.FC<TransitionPageProps> = ({ onContinue }) => {
  const thematicImageUrl = "https://i.ibb.co/LDXTQQcV/d4b7f1-4c6cb0720e134801b3b0081b75d64c0dmv2.jpg";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-start px-6 py-12 font-sans overflow-x-hidden">
      <div className="max-w-2xl w-full space-y-10">
        
        {/* Minimalist Logo */}
        <div className="flex justify-center text-[#B8860B] opacity-80 mb-4">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* MAIN HEADLINE */}
        <header className="text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-serif font-bold leading-tight animate-fade-in px-2">
            Suas respostas deixam claro: Você não está distante de Deus porque quer ou por Rebeldia. 
            <br/><br/>
            <span className="text-[#B8860B]">Você está distante por Falta de uma estrutura simples de aplicar na sua Vida.</span>
          </h1>
        </header>

        {/* IMPACT TEXT */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed italic">
            Você vive caindo nas tentações, cometendo os mesmos <span className="text-red-600 font-bold uppercase">Pecados</span> que te aproximam do <span className="text-red-700 font-bold underline decoration-red-900/40">Inferno...</span>
          </p>
        </div>

        {/* THEMATIC IMAGE CONTAINER - FULL AND ENTIRE */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(139,26,26,0.3)] bg-[#0f0f0f] mx-auto transition-all duration-1000">
          <img 
            src={thematicImageUrl} 
            alt="Confronto Espiritual" 
            className="w-full h-auto object-contain block animate-fade-in"
          />
        </div>

        {/* FINAL REFLECTION */}
        <div className="text-center space-y-10 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-100 px-4">
            Até quando vai continuar desapontando a Deus e com Vergonha de Orar?
          </h2>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={onContinue}
              className="w-full max-w-sm bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-full transition-all duration-300 uppercase tracking-[0.1em] text-lg active:scale-95 shadow-[0_10px_40px_rgba(220,38,38,0.5)] animate-pulse-red flex items-center justify-center gap-3"
            >
              Continuar...
            </button>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-black opacity-60">
              Este é o momento da decisão.
            </p>
          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-red {
          0% { transform: scale(1); box-shadow: 0 10px 40px rgba(220, 38, 38, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 10px 60px rgba(220, 38, 38, 0.6); }
          100% { transform: scale(1); box-shadow: 0 10px 40px rgba(220, 38, 38, 0.4); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-pulse-red {
          animation: pulse-red 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TransitionPage;
