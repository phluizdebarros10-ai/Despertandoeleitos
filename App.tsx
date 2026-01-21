
import React, { useState, useCallback, useMemo } from 'react';
import { AppState } from './types';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Analyzing from './components/Analyzing';
import TransitionPage from './components/TransitionPage';
import BridgePage from './components/BridgePage';
import SalesPage from './components/SalesPage';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.LANDING);

  const navigateTo = useCallback((step: AppState) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderStep = useMemo(() => {
    switch (currentStep) {
      case AppState.LANDING:
        return <Landing onStart={() => navigateTo(AppState.QUIZ)} />;
      case AppState.QUIZ:
        return <Quiz onComplete={() => navigateTo(AppState.ANALYZING)} />;
      case AppState.ANALYZING:
        return <Analyzing onComplete={() => navigateTo(AppState.TRANSITION)} />;
      case AppState.TRANSITION:
        return <TransitionPage onContinue={() => navigateTo(AppState.BRIDGE_PAGE)} />;
      case AppState.BRIDGE_PAGE:
        return <BridgePage onContinue={() => navigateTo(AppState.SALES_PAGE)} />;
      case AppState.SALES_PAGE:
        return <SalesPage />;
      default:
        return <Landing onStart={() => navigateTo(AppState.QUIZ)} />;
    }
  }, [currentStep, navigateTo]);

  const isDarkTheme = [AppState.LANDING, AppState.TRANSITION, AppState.BRIDGE_PAGE, AppState.SALES_PAGE].includes(currentStep);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkTheme ? 'bg-[#0e1a22]' : 'bg-white'} text-gray-900 selection:bg-red-200`}>
      {renderStep}
      
      <footer className={`py-12 text-center text-[10px] uppercase tracking-[0.2em] ${isDarkTheme ? 'bg-[#0a0c10] text-gray-600' : 'bg-gray-50 text-gray-400'}`}>
        <p>&copy; 2025 Guia de Oração | Central de anúncios</p>
        <p className="mt-2 opacity-50">Privacidade • Termos de Uso</p>
      </footer>
    </div>
  );
};

export default App;
