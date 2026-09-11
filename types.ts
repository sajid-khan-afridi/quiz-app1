export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string;
  };
  selectCount: 1 | 2;
  correctAnswers: OptionKey[];
  explanation: string;
  domain: string;
  sources: { label: string; url: string }[];
}

export type QuizState = 'intro' | 'active' | 'finished';

export interface UserAnswers {
  [questionId: number]: OptionKey[];
}
