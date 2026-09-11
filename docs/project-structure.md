# Project Structure

```
├── App.tsx                  # Root component — intro screen, quiz state machine
├── index.tsx                # React entry point
├── index.html               # HTML shell with Tailwind config & import map
├── index.css                # Full custom theme (Neural Network Noir)
├── types.ts                 # TypeScript interfaces (Question, QuizState, UserAnswers)
├── questions.ts             # 60 PCAO-F questions — generated
├── scripts/
│   └── generate-questions.mjs # Parses questions-answers/*.md into questions.ts
├── questions-answers/       # Source of truth for quiz content (PCAO-F, 60 Qs) — see CLAUDE.md
│   ├── PCAO-F_Practice_Quiz.md  # Question stems + options (no answers)
│   ├── PCAO-F_Answer_Key.md     # Answer grid + explanations, domains, source links
│   ├── PCAO-F_Source_Map.md     # Domain blueprint, objective coverage, source register, provenance
│   └── Claude+Certified+Associate+–+Foundations+Exam+Guide.pdf  # Official CCAO-F exam guide (reference)
├── components/
│   ├── QuizScreen.tsx       # Question display + option selection + navigation
│   ├── ResultScreen.tsx     # Score ring, per-domain scores, detailed review
│   ├── Timer.tsx            # Countdown timer with warning states
│   └── ProgressBar.tsx      # Animated progress bar
├── docs/
│   ├── project-structure.md # This file — project structure reference
│   └── plans/
│       └── plan.md          # Approved plan: migrate the app to the PCAO-F question set
├── vite.config.ts           # Vite config (port 3000, path aliases)
├── tsconfig.json            # TypeScript config (ES2022, bundler resolution)
├── metadata.json            # App metadata (name, description)
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── CLAUDE.md                # Project instructions for Claude Code
├── README.md                # Project documentation
├── .gitignore               # Git ignore rules
└── .gitattributes           # Git attributes config
```
