# Project Structure

```
├── App.tsx                  # Root component — intro screen, quiz state machine
├── index.tsx                # React entry point
├── index.html               # HTML shell with Tailwind config & import map
├── index.css                # Full custom theme (Neural Network Noir)
├── types.ts                 # TypeScript interfaces (Question, QuizState, UserAnswers)
├── questions.ts             # All 65 MCQ questions with options, answers, explanations
├── AI_Agent_Factory_MCQ_Assessment_65Q.md  # Original MCQ source/reference document
├── components/
│   ├── QuizScreen.tsx       # Question display + option selection + navigation
│   ├── ResultScreen.tsx     # Score ring, detailed review, AI tutor integration
│   ├── Timer.tsx            # Countdown timer with warning states
│   └── ProgressBar.tsx      # Animated progress bar
├── services/
│   └── geminiService.ts     # Google Gemini API integration for AI explanations
├── docs/
│   └── project-structure.md # This file — project structure reference
├── vite.config.ts           # Vite config (port 3000, path aliases, env vars)
├── tsconfig.json            # TypeScript config (ES2022, bundler resolution)
├── metadata.json            # App metadata (name, description)
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── CLAUDE.md                # Project instructions for Claude Code
├── README.md                # Project documentation
├── .env.local               # Environment variables (GEMINI_API_KEY) — git-ignored
├── .gitignore               # Git ignore rules
└── .gitattributes           # Git attributes config
```
