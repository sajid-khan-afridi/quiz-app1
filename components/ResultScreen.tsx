import React, { useState, useEffect } from 'react';
import { UserAnswers, Question } from '../types';
import { Check, X, Sparkles, RefreshCcw, Trophy, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { getAIExplanation } from '../services/geminiService';

interface ResultScreenProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const [loadingExplanationId, setLoadingExplanationId] = useState<number | null>(null);
  const [aiExplanations, setAiExplanations] = useState<{ [key: number]: string }>({});
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [animatedScore, setAnimatedScore] = useState(0);

  const score = questions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  // Animate score on mount
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setAnimatedScore(percentage);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [percentage]);

  const handleAskAI = async (question: Question) => {
    if (aiExplanations[question.id]) return;
    setLoadingExplanationId(question.id);
    const explanation = await getAIExplanation(question);
    setAiExplanations(prev => ({ ...prev, [question.id]: explanation }));
    setLoadingExplanationId(null);
  };

  const toggleQuestion = (id: number) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Outstanding', color: 'text-accent', icon: Trophy };
    if (percentage >= 80) return { label: 'Excellent', color: 'text-accent', icon: Trophy };
    if (percentage >= 70) return { label: 'Good', color: 'text-yellow-400', icon: Target };
    if (percentage >= 60) return { label: 'Passing', color: 'text-yellow-400', icon: Target };
    return { label: 'Keep Learning', color: 'text-secondary', icon: Target };
  };

  const grade = getGrade();
  const GradeIcon = grade.icon;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24">
      {/* Score Hero Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Assessment Complete
        </h1>

        {/* Animated Score Ring */}
        <div className="relative inline-block mb-8">
          <div
            className="score-ring"
            style={{ '--score': animatedScore } as React.CSSProperties}
          >
            <div className="score-inner">
              <span className="block text-5xl md:text-6xl font-extrabold text-white">
                {animatedScore}%
              </span>
              <span className="text-gray-400 font-medium">
                {score} / {questions.length}
              </span>
            </div>
          </div>

          {/* Floating grade badge */}
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 ${grade.color}`}>
            <GradeIcon className="w-4 h-4" />
            <span className="font-bold text-sm">{grade.label}</span>
          </div>
        </div>

        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          {percentage >= 80
            ? "Excellent work! You've demonstrated strong expertise in Agentic AI concepts."
            : percentage >= 60
            ? "Good effort. Review the detailed breakdown below to strengthen your understanding."
            : "Keep learning! Use the AI tutor explanations below to master these concepts."}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-10 stagger-children">
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-accent">{score}</span>
          <span className="text-sm text-gray-500">Correct</span>
        </div>
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-secondary">{questions.length - score}</span>
          <span className="text-sm text-gray-500">Incorrect</span>
        </div>
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-tertiary">{questions.length}</span>
          <span className="text-sm text-gray-500">Total</span>
        </div>
      </div>

      {/* Detailed Review */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-accent" />
          Detailed Review
        </h2>

        {questions.map((q, index) => {
          const isCorrect = userAnswers[q.id] === q.correctAnswer;
          const userAnswer = userAnswers[q.id];
          const isExpanded = expandedQuestions.has(q.id);

          return (
            <div
              key={q.id}
              className={`result-card ${isCorrect ? 'correct' : 'incorrect'} opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${Math.min(index * 0.03, 0.5)}s` }}
            >
              {/* Collapsed Header */}
              <button
                onClick={() => toggleQuestion(q.id)}
                className="w-full flex items-start gap-4 text-left"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${
                  isCorrect
                    ? 'bg-gradient-to-br from-green-500 to-green-600'
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                }`}>
                  {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-gray-500">Q{q.id}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      isCorrect
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white line-clamp-2">
                    {q.text}
                  </h3>
                </div>

                <div className="shrink-0 text-gray-500">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="mt-6 pl-14 space-y-4 animate-fade-in">
                  {/* Answers Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className={`p-4 rounded-xl ${
                      isCorrect
                        ? 'bg-green-500/10 border border-green-500/20'
                        : 'bg-red-500/10 border border-red-500/20'
                    }`}>
                      <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-500">
                        Your Answer
                      </span>
                      <span className={`font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {userAnswer ? `${userAnswer}) ${q.options[userAnswer]}` : 'Skipped'}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-500">
                          Correct Answer
                        </span>
                        <span className="font-medium text-green-400">
                          {q.correctAnswer}) {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Built-in Explanation */}
                  <div className="p-4 rounded-xl bg-surface border border-muted">
                    <span className="font-semibold block mb-2 text-white text-sm">Explanation</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{q.explanation}</p>
                  </div>

                  {/* AI Explanation */}
                  <div className="mt-4">
                    {aiExplanations[q.id] ? (
                      <div className="ai-box p-4">
                        <div className="flex items-center gap-2 mb-3 text-tertiary font-semibold relative z-10">
                          <Sparkles className="w-4 h-4" />
                          <span>AI Tutor Explanation</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                          {aiExplanations[q.id]}
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAskAI(q);
                        }}
                        disabled={loadingExplanationId === q.id}
                        className="text-tertiary hover:text-white text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-50 px-4 py-2 rounded-lg bg-tertiary/10 border border-tertiary/20 hover:bg-tertiary/20"
                      >
                        {loadingExplanationId === q.id ? (
                          <>
                            <div className="w-4 h-4 border-2 border-tertiary border-t-transparent rounded-full animate-spin" />
                            <span>Thinking...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Ask AI to explain further</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Restart Button */}
      <div className="mt-12 text-center">
        <button
          onClick={onRestart}
          className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-4"
        >
          <RefreshCcw className="w-5 h-5" />
          <span>Retake Assessment</span>
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
