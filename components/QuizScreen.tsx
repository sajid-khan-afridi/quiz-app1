import React from 'react';
import { Question, OptionKey } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswers: OptionKey[];
  onSelectAnswer: (answer: OptionKey) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswers,
  onSelectAnswer,
  onNext,
  onPrev
}) => {
  const options = (['A', 'B', 'C', 'D', 'E'] as const).filter((k) => question.options[k]);
  const isSelectTwo = question.selectCount === 2;
  const limitReached = isSelectTwo && selectedAnswers.length >= 2;

  return (
    <div className="max-w-6xl mx-auto px-4 pb-28 pt-8">
      {/* Question Card */}
      <div className="glass-card-elevated rounded-3xl overflow-hidden animate-fade-in-up">
        {/* Question Header */}
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              <span className="font-mono">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-gray-500">/</span>
              <span className="font-mono text-gray-400">{totalQuestions}</span>
            </span>

            {/* Quick nav dots */}
            <div className="hidden md:flex items-center gap-1">
              {Array.from({ length: Math.min(10, totalQuestions) }, (_, i) => {
                const dotIndex = Math.floor(currentIndex / 10) * 10 + i;
                if (dotIndex >= totalQuestions) return null;
                return (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all ${
                      dotIndex === currentIndex
                        ? 'bg-accent w-4'
                        : dotIndex < currentIndex
                        ? 'bg-accent/40'
                        : 'bg-muted'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed whitespace-pre-line">
            {question.text}
          </h2>

          {isSelectTwo ? (
            <p className="mt-3 text-sm font-semibold text-accent underline">Select TWO answers</p>
          ) : (
            <p className="mt-3 text-sm font-medium text-gray-500">Select ONE answer</p>
          )}
        </div>

        {/* Options */}
        <div className="p-6 md:p-8 pt-4 space-y-3 stagger-children">
          {options.map((opt, index) => {
            const isSelected = selectedAnswers.includes(opt);
            const isDisabled = !isSelected && limitReached;

            return (
              <label
                key={opt}
                className={`option-card w-full text-left flex items-start gap-4 group opacity-0 animate-slide-in ${
                  isSelected ? 'selected' : ''
                } ${isDisabled ? 'disabled' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <input
                  type={isSelectTwo ? 'checkbox' : 'radio'}
                  name={`question-${question.id}`}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => onSelectAnswer(opt)}
                  className="mt-1 w-5 h-5 shrink-0"
                />

                <div className="option-badge">
                  {opt}
                </div>

                <span className={`text-base md:text-lg pt-0.5 flex-1 transition-colors ${
                  isSelected
                    ? 'text-white font-medium'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {question.options[opt]}
                </span>

                {/* Selection indicator line */}
                <div className={`w-1 self-stretch rounded-full transition-all ${
                  isSelected
                    ? 'bg-accent'
                    : 'bg-transparent group-hover:bg-muted'
                }`} />
              </label>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="quiz-footer fixed bottom-0 left-0 right-0 p-4 safe-area-bottom z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="btn-secondary flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Center progress indicator (mobile) */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <span className="font-mono text-accent font-bold">{currentIndex + 1}</span>
            <span className="text-gray-600">/</span>
            <span className="font-mono text-gray-500">{totalQuestions}</span>
          </div>

          <button
            onClick={onNext}
            className="btn-primary flex items-center gap-2"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next'}</span>
            {currentIndex !== totalQuestions - 1 && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
