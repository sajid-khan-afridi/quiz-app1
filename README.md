# PCAO-F Practice Quiz

A practice assessment application for the Claude Certified Associate – Foundations (CCAO-F) certification, covering all seven exam domains.

Built with React, TypeScript, and Vite.

## Features

- **60 Questions** — 50 Select ONE (four options) and 10 Select TWO (five options, exactly two correct answers)
- **120-Minute Timed Assessment** with visual countdown and warning states
- **Shuffled Question Order** — every attempt (including retakes) gets a fresh order
- **1,000-Point Scaled Score** with a 720 pass mark and Pass/Fail/Excellent/Outstanding grade levels
- **Score by Topic Area** — a per-domain (D1–D7) points and percentage breakdown
- **Written Explanations** — every question includes an explanation and lesson-source links, no AI lookup required
- **Modern Dark UI** — "Neural Network Noir" theme with glassmorphism, animated backgrounds, and smooth transitions
- **Responsive Design** — optimized for desktop and mobile

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | React 19 + TypeScript               |
| Build     | Vite 6                              |
| Styling   | Tailwind CSS + Custom CSS           |
| Icons     | Lucide React                        |
| Fonts     | Outfit, JetBrains Mono              |

## Live Demo

[https://sajid-khan-afridi.uetianafridi.workers.dev/](https://sajid-khan-afridi.uetianafridi.workers.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/sajid-khan-afridi/quiz_app-ch1_to_ch3.git
cd quiz_app-ch1_to_ch3

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

No environment variables or API keys are required.

## Project Structure

```
├── App.tsx                  # Root component — quiz state machine & intro screen
├── index.tsx                # React entry point
├── index.html               # HTML shell with Tailwind config
├── index.css                # Custom theme (Neural Network Noir)
├── types.ts                 # TypeScript interfaces
├── questions.ts             # 60 PCAO-F questions — generated, do not edit directly
├── questions-answers/       # Source of truth for quiz content (markdown)
├── scripts/
│   └── generate-questions.mjs  # Rebuilds questions.ts from questions-answers/
├── components/
│   ├── QuizScreen.tsx       # Question display & option selection
│   ├── ResultScreen.tsx     # Score display, per-domain breakdown & review
│   ├── Timer.tsx            # Countdown timer
│   └── ProgressBar.tsx      # Progress indicator
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

## How It Works

1. **Intro Screen** — Displays author info with social links (LinkedIn, YouTube, GitHub) at the top, followed by the seven topic areas covered by the quiz, stats cards (question count, time limit, topic-area count), and a "Begin Assessment" button
2. **Quiz Screen** — Presents questions one at a time in shuffled order. Select ONE questions show radio buttons and a plain "Select ONE answer" label; Select TWO questions show checkboxes (capped at two picks) and a coloured, underlined "Select TWO answers" label, alongside navigation controls, a progress bar, and a countdown timer
3. **Result Screen** — Shows an animated score ring with the 1,000-point score, a Pass/Fail grade with Excellent/Outstanding levels, a score-by-topic-area grid, and an expandable per-question review with explanations and lesson-source links

## Topic Areas (CCAO-F Domains)

- **D1** — Prompting and Task Execution
- **D2** — Output Evaluation and Validation
- **D3** — Product and Model Selection
- **D4** — Workflow Integration and Solution Design
- **D5** — Configuration and Knowledge Management
- **D6** — Governance, Risk, and Responsible Use
- **D7** — Troubleshooting and Optimization

## Updating Questions

Quiz content lives in `questions-answers/` (markdown), not in `questions.ts`. To change a question, its answer, or its explanation:

1. Edit the relevant file in `questions-answers/`.
2. Run `npm run gen:questions` to regenerate `questions.ts`.

The script validates the parsed data (question counts, option letters, Select TWO ids, and the answer grid) and fails loudly if anything doesn't match.

## Deployment

Deployed on **Cloudflare Pages** with Git integration. Every push to `main` triggers an auto-deploy.

To deploy your own:

1. Fork this repo
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select the repo and set:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**

## License

This project is private.
