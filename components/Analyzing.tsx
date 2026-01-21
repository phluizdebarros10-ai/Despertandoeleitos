
import React, { useState, useEffect } from 'react';

interface AnalyzingProps {
  onComplete: () => void;
}

const Analyzing: React.FC<AnalyzingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    "Processando suas respostas...",
    "Avaliando nível de constância...",
    "Identificando padrões de sabotagem...",
    "Sistematizando diagnóstico espiritual...",
    "Preparando seu roteiro personalizado..."
  ];

  useEffect(() => {
    let startTime = Date.now();
    const duration = 4000; // 4 segundos para uma análise "convincente"

    const update = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      // Atualiza o texto baseado no progresso
      const nextIndex = Math.min(
        Math.floor((currentProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setStatusIndex(nextIndex);

      if (currentProgress < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(onComplete, 800);
      }
    };

    requestAnimationFrame(update);
  }, [onComplete]);

  // Cálculo do círculo (raio 70, circunferência ~440)
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white animate-fade-in">
      {/* Ícone Minimalista de Identidade */}
      <div className="mb-12 text-red-700/40">
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Carregamento Circular Premium */}
      <div className="relative flex items-center justify-center mb-12">
        <svg width="200" height="200" viewBox="0 0 160 160" className="transform -rotate-90">
          {/* Círculo de Fundo (Trilha) */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-gray-100"
          />
          {/* Círculo de Progresso Ativo */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ 
              strokeDashoffset: offset,
              filter: 'drop-shadow(0px 0px 4px rgba(220, 38, 38, 0.2))'
            }}
            strokeLinecap="round"
            className="text-red-600 transition-all duration-100 ease-linear"
          />
        </svg>
        
        {/* Contador Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-gray-900 tracking-tighter">
            {Math.round(progress)}%
          </span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Analisando</span>
        </div>
      </div>
      
      {/* Mensagens de Status */}
      <div className="text-center space-y-3 h-16">
        <h2 className="text-xl font-bold text-gray-800 transition-all duration-500">
          {statusMessages[statusIndex]}
        </h2>
        <p className="text-gray-400 font-medium uppercase text-[9px] tracking-[0.3em]">
          Não feche esta janela
        </p>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Analyzing;
