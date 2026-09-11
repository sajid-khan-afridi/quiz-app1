import React, { useState, useEffect } from 'react';
import { UserAnswers, Question, OptionKey } from '../types';
import { Check, X, RefreshCcw, Trophy, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface ResultScreenProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onRestart: () => void;
}

type Status = 'correct' | 'partial' | 'incorrect' | 'skipped';

function getPoints(question: Question, picks: OptionKey[]): number {
  if (question.selectCount === 1) {
    return picks.length === 1 && picks[0] === question.correctAnswers[0] ? 1 : 0;
  }
  if (picks.length === 0) return 0;
  const allPicksCorrect = picks.every((p) => question.correctAnswers.includes(p));
  if (!allPicksCorrect) return 0;
  return picks.length === 2 ? 1 : 0.5;
}

function getStatus(points: number, picks: OptionKey[]): Status {
  if (points === 1) return 'correct';
  if (points === 0.5) return 'partial';
  return picks.length === 0 ? 'skipped' : 'incorrect';
}

function formatPoints(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

const ResultScreen: React.FC<ResultScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [animatedScore, setAnimatedScore] = useState(0);

  const results = questions.map((q) => {
    const picks = userAnswers[q.id] ?? [];
    const points = getPoints(q, picks);
    return { question: q, picks, points, status: getStatus(points, picks) };
  });

  const totalPoints = results.reduce((acc, r) => acc + r.points, 0);
  const percentage = Math.round((totalPoints / questions.length) * 100);
  const rawThousandScore = 100 + (900 * totalPoints) / questions.length;
  const thousandScore = Math.round(rawThousandScore);

  const correctCount = results.filter((r) => r.status === 'correct').length;
  const partialCount = results.filter((r) => r.status === 'partial').length;
  const incorrectCount = results.filter((r) => r.status === 'incorrect' || r.status === 'skipped').length;

  const getGrade = () => {
    if (rawThousandScore >= 910) return { label: 'Outstanding', color: 'text-accent', icon: Trophy };
    if (rawThousandScore >= 820) return { label: 'Excellent', color: 'text-accent', icon: Trophy };
    if (rawThousandScore >= 720) return { label: 'Pass', color: 'text-yellow-400', icon: Target };
    return { label: 'Fail', color: 'text-secondary', icon: Target };
  };

  const grade = getGrade();
  const GradeIcon = grade.icon;

  // Animate score ring fill on mount
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

  const toggleQuestion = (id: number) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const domainOrder = Array.from(new Set(questions.map((q) => q.domain))).sort();
  const domainStats = domainOrder.map((domain) => {
    const domainResults = results.filter((r) => r.question.domain === domain);
    const points = domainResults.reduce((acc, r) => acc + r.points, 0);
    const total = domainResults.length;
    return {
      domain,
      points,
      total,
      percentage: total > 0 ? Math.round((points / total) * 100) : 0,
    };
  });

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
                {thousandScore}
              </span>
              <span className="text-gray-400 font-medium">
                {formatPoints(totalPoints)} / {questions.length} points
              </span>
            </div>
          </div>

          {/* Floating grade badge */}
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 whitespace-nowrap ${grade.color}`}>
            <GradeIcon className="w-4 h-4" />
            <span className="font-bold text-sm">{grade.label} · {percentage}%</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-6">
          Practice score converted from raw points, not an official scaled score.
        </p>

        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          {grade.label === 'Outstanding' || grade.label === 'Excellent'
            ? "Excellent work! You've demonstrated strong expertise in using Claude effectively."
            : grade.label === 'Pass'
            ? "Good effort. Review the detailed breakdown below to strengthen your understanding."
            : "Keep learning! Use the explanations and lesson links below to master these concepts."}
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-10 stagger-children">
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-accent">{correctCount}</span>
          <span className="text-sm text-gray-500">Correct</span>
        </div>
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-yellow-400">{partialCount}</span>
          <span className="text-sm text-gray-500">Partial</span>
        </div>
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-secondary">{incorrectCount}</span>
          <span className="text-sm text-gray-500">Incorrect</span>
        </div>
        <div className="stat-card text-center opacity-0 animate-fade-in-up">
          <span className="block text-2xl font-bold text-tertiary">{questions.length}</span>
          <span className="text-sm text-gray-500">Total</span>
        </div>
      </div>

      {/* Score by Topic Area */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-accent" />
          Score by Topic Area
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {domainStats.map((d) => (
            <div key={d.domain} className="stat-card flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">{d.domain}</span>
              <span className="text-sm font-mono text-accent">
                {formatPoints(d.points)} / {d.total} · {d.percentage}%
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Topic-area scores are study feedback only, not an official per-domain result.
        </p>
      </div>

      {/* Detailed Review */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-accent" />
          Detailed Review
        </h2>

        {results.map((r, index) => {
          const { question: q, picks, status } = r;
          const isExpanded = expandedQuestions.has(q.id);
          const cardClass = status === 'correct' ? 'correct' : status === 'partial' ? 'partial' : 'incorrect';

          const badge = {
            correct: { label: 'Correct', className: 'bg-green-500/20 text-green-400' },
            partial: { label: `${q.correctAnswers.filter((a) => picks.includes(a)).length} of ${q.correctAnswers.length} correct`, className: 'bg-yellow-500/20 text-yellow-400' },
            incorrect: { label: 'Incorrect', className: 'bg-red-500/20 text-red-400' },
            skipped: { label: 'Skipped', className: 'bg-gray-500/20 text-gray-400' },
          }[status];

          const iconWrapClass = status === 'correct'
            ? 'bg-gradient-to-br from-green-500 to-green-600'
            : status === 'partial'
            ? 'bg-gradient-to-br from-yellow-500 to-yellow-600'
            : 'bg-gradient-to-br from-red-500 to-red-600';

          return (
            <div
              key={q.id}
              className={`result-card ${cardClass} opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${Math.min(index * 0.03, 0.5)}s` }}
            >
              {/* Collapsed Header */}
              <button
                onClick={() => toggleQuestion(q.id)}
                className="w-full flex items-start gap-4 text-left"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${iconWrapClass}`}>
                  {status === 'correct' || status === 'partial' ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono text-gray-500">Q{index + 1}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${badge.className}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent">
                      {q.domain}
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
                      status === 'correct'
                        ? 'bg-green-500/10 border border-green-500/20'
                        : status === 'partial'
                        ? 'bg-yellow-500/10 border border-yellow-500/20'
                        : 'bg-red-500/10 border border-red-500/20'
                    }`}>
                      <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-500">
                        Your Answer{picks.length > 1 ? 's' : ''}
                      </span>
                      {picks.length === 0 ? (
                        <span className="font-medium text-gray-400">Skipped</span>
                      ) : (
                        <div className="space-y-1">
                          {picks.map((letter) => (
                            <div
                              key={letter}
                              className={`font-medium ${
                                status === 'correct'
                                  ? 'text-green-400'
                                  : status === 'partial'
                                  ? 'text-yellow-400'
                                  : 'text-red-400'
                              }`}
                            >
                              {letter}) {q.options[letter]}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {status !== 'correct' && (
                      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-500">
                          Correct Answer{q.correctAnswers.length > 1 ? 's' : ''}
                        </span>
                        <div className="space-y-1">
                          {q.correctAnswers.map((letter) => (
                            <div key={letter} className="font-medium text-green-400">
                              {letter}) {q.options[letter]}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Built-in Explanation */}
                  <div className="p-4 rounded-xl bg-surface border border-muted">
                    <span className="font-semibold block mb-2 text-white text-sm">Explanation</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{q.explanation}</p>
                    {q.sources.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-muted flex flex-wrap gap-x-4 gap-y-1">
                        {q.sources.map((source) => (
                          <a
                            key={source.url}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent hover:text-white underline transition-colors"
                          >
                            {source.label}
                          </a>
                        ))}
                      </div>
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
