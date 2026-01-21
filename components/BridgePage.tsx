
import React from 'react';

interface BridgePageProps {
  onContinue: () => void;
}

const BridgePage: React.FC<BridgePageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-12 font-sans overflow-x-hidden">
      <div className="max-w-2xl w-full space-y-12">
        
        {/* Minimalist Logo */}
        <div className="flex justify-center text-[#B8860B] opacity-60">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* MAIN COPY SECTION */}
        <div className="text-center space-y-10 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight">
            Calma, você ainda não está perdido, está apenas <span className="text-red-600">desorganizado espiritualmente</span> e isso muda tudo
          </h2>

          <div className="space-y-6 max-w-xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              se aproxime novamente de Deus e fazendo a vontade dele com uma <span className="text-[#B8860B]">Estrutura bem simples</span> de aplicar na sua Vida
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed italic">
              você não chegou até aqui por um acaso, esse é o grande sinal para a mudança que te transformará hoje mesmo
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="flex flex-col items-center gap-8 pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <p className="text-sm font-black text-gray-500 uppercase tracking-[0.3em] mb-4">
              O próximo passo mostra exatamente como
            </p>
            <button 
              onClick={onContinue}
              className="w-full max-w-sm bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 rounded-full transition-all duration-300 uppercase tracking-[0.1em] text-lg active:scale-95 shadow-[0_10px_50px_rgba(220,38,38,0.4)] animate-pulse-subtle"
            >
              Quero entender essa estrutura
            </button>
          </div>
          
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/20"></div>
            ))}
          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-subtle {
          0% { transform: scale(1); box-shadow: 0 10px 40px rgba(220, 38, 38, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 15px 60px rgba(220, 38, 38, 0.6); }
          100% { transform: scale(1); box-shadow: 0 10px 40px rgba(220, 38, 38, 0.4); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BridgePage;
