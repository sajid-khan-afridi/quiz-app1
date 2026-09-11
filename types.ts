export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export type QuizState = 'intro' | 'active' | 'finished';

export interface UserAnswers {
  [questionId: number]: 'A' | 'B' | 'C' | 'D';
}
