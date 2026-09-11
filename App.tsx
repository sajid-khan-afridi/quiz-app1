import React, { useEffect, useState } from 'react';
import { QUESTIONS } from './questions';
import { QuizState, UserAnswers, OptionKey, Question } from './types';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { Brain, Zap, Clock, Target, Sparkles, Pause, Play, Linkedin, Youtube, Github } from 'lucide-react';

// 120 Minutes in Seconds
const TOTAL_TIME = 120 * 60;

const TOPIC_AREAS = Array.from(new Set(QUESTIONS.map((q) => q.domain))).sort();

function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);
  const [isPaused, setIsPaused] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentQuestionId = currentQuestion.id;
  const currentSelectedAnswers = userAnswers[currentQuestionId] ?? [];

  const handleStart = () => {
    setQuizQuestions(shuffleQuestions(QUESTIONS));
    setQuizState('active');
    setTimeRemaining(TOTAL_TIME);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsPaused(false);
    window.scrollTo(0, 0);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Hidden shortcut: Ctrl+Shift+P toggles pause while the quiz is active
  useEffect(() => {
    if (quizState !== 'active') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyP') {
        e.preventDefault();
        if (!e.repeat) handleTogglePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizState]);

  const handleAnswerSelect = (opt: OptionKey) => {
    setUserAnswers((prev) => {
      const existing = prev[currentQuestionId] ?? [];

      if (currentQuestion.selectCount === 1) {
        return { ...prev, [currentQuestionId]: [opt] };
      }

      if (existing.includes(opt)) {
        return { ...prev, [currentQuestionId]: existing.filter((a) => a !== opt) };
      }

      if (existing.length >= 2) {
        return prev;
      }

      return { ...prev, [currentQuestionId]: [...existing, opt] };
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setQuizState('finished');
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleTimeUp = () => {
    setQuizState('finished');
  };

  // Intro Screen
  if (quizState === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="max-w-2xl w-full animate-fade-in-up">
          {/* Author Info */}
          <div className="mb-8 pb-6 border-b border-muted/30 text-center">
            <p className="text-sm text-gray-400 mb-4">
              Created by <span className="text-white font-semibold">Sajid Khan Afridi</span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sajid-khan-afridi-1984-ess/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@uetianafridi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/sajid-khan-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary hover:bg-tertiary/20 hover:border-tertiary/40 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Logo & Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-tertiary/20 border border-accent/30 mb-6 relative">
              <Brain className="w-12 h-12 text-accent" />
              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl -z-10"></div>
              <Sparkles className="w-5 h-5 text-secondary absolute -top-2 -right-2 animate-pulse" />
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              PCAO-F Practice Quiz
            </h1>

            <div className="space-y-3 text-left max-w-lg mx-auto">
              {TOPIC_AREAS.map((domain) => {
                const [tag, ...rest] = domain.split(' · ');
                return (
                  <p key={domain} className="text-lg md:text-xl text-white font-semibold">
                    <span className="text-accent">{tag}:</span> {rest.join(' · ')}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10 stagger-children">
            <div className="stat-card text-center opacity-0 animate-fade-in-up">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 mx-auto mb-3">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <span className="block text-2xl font-bold text-white mb-1">{QUESTIONS.length}</span>
              <span className="text-sm text-gray-500 font-medium">Questions</span>
            </div>

            <div className="stat-card text-center opacity-0 animate-fade-in-up">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10 mx-auto mb-3">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <span className="block text-2xl font-bold text-white mb-1">{TOTAL_TIME / 60}</span>
              <span className="text-sm text-gray-500 font-medium">Minutes</span>
            </div>

            <div className="stat-card text-center opacity-0 animate-fade-in-up">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-tertiary/10 mx-auto mb-3">
                <Zap className="w-5 h-5 text-tertiary" />
              </div>
              <span className="block text-2xl font-bold text-white mb-1">{TOPIC_AREAS.length}</span>
              <span className="text-sm text-gray-500 font-medium">Topic areas</span>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={handleStart}
              className="btn-primary text-lg font-bold px-12 py-4 inline-flex items-center gap-3"
            >
              <span>Begin Assessment</span>
              <Zap className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-600 mt-4">
              Press <kbd className="px-2 py-1 bg-surface border border-muted rounded text-accent font-mono text-xs">Enter</kbd> to start
            </p>
          </div>

        </div>
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="quiz-header sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-accent" />
            </div>
            <span className="hidden sm:inline font-semibold text-white">
              PCAO-F Practice Quiz
            </span>
          </div>

          <div className="flex-1 max-w-md mx-4 md:mx-8">
            <ProgressBar current={currentQuestionIndex + 1} total={quizQuestions.length} />
          </div>

          <div className="flex items-center gap-2">
            <Timer
              timeRemaining={timeRemaining}
              setTimeRemaining={setTimeRemaining}
              onTimeUp={handleTimeUp}
              isActive={quizState === 'active' && !isPaused}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto">
        {quizState === 'active' ? (
          <QuizScreen
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            selectedAnswers={currentSelectedAnswers}
            onSelectAnswer={handleAnswerSelect}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        ) : (
          <ResultScreen
            questions={quizQuestions}
            userAnswers={userAnswers}
            onRestart={handleStart}
          />
        )}
      </main>

      {/* Pause Overlay */}
      {isPaused && quizState === 'active' && (
        <div className="pause-overlay">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-md w-full mx-4 animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
              <Pause className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quiz Paused</h2>
            <p className="text-gray-400 mb-8">Your progress is saved. Resume when you're ready.</p>
            <button
              onClick={handleTogglePause}
              className="btn-primary text-lg font-bold px-10 py-3 inline-flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
