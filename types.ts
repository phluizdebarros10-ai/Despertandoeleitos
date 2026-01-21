
export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export enum AppState {
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  TRANSITION = 'TRANSITION',
  BRIDGE_PAGE = 'BRIDGE_PAGE',
  SALES_PAGE = 'SALES_PAGE'
}
