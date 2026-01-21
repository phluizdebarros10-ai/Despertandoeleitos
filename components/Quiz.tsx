
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants.tsx';

interface QuizProps {
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleOptionClick = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  if (showIntro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto text-center animate-fade-in">
        <div className="mb-10 text-red-700 opacity-60">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
          Antes de continuar, responda com sinceridade.
        </h1>

        <div className="space-y-4 mb-14">
          <p className="text-xl text-gray-500 font-medium">
            Ninguém além de você verá isso.
          </p>
          <p className="text-xl text-gray-500 font-medium">
            Mas você vai se reconhecer.
          </p>
        </div>

        <button
          onClick={() => setShowIntro(false)}
          className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.3)] uppercase tracking-[0.2em] transition-all active:scale-95 text-sm"
        >
          COMEÇAR
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 max-w-2xl mx-auto animate-fade-in">
      <div className="mb-6 text-red-700 opacity-60">
        <svg width="20" height="28" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight px-4">
          Responda com verdade absoluta.
        </h1>
      </div>

      <div className="w-full bg-gray-100 h-1.5 rounded-full mb-12 overflow-hidden">
        <div 
          className="bg-red-600 h-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="w-full bg-white border border-gray-100 shadow-2xl rounded-[32px] p-8 md:p-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
             <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Pergunta {currentQuestionIndex + 1}</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
            {currentQuestion.question}
          </p>
        </div>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={handleOptionClick}
              className="w-full text-left p-5 rounded-2xl border-2 border-gray-50 bg-gray-50/50 hover:border-red-600 hover:bg-red-50 transition-all duration-300 group flex items-center justify-between"
            >
              <span className="font-bold text-gray-700 group-hover:text-red-700 text-base md:text-lg">{option.label}</span>
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-colors flex-shrink-0 ml-4">
                <svg className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center gap-2 text-gray-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-widest">Privacidade Total Garantida</span>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
