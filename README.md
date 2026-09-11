# Agentic AI Mastery Quiz

A comprehensive MCQ assessment application for testing knowledge on Agentic AI, Agent Factories, and enterprise automation protocols (Chapters 1–3).

Built with React, TypeScript, Vite, and powered by Google Gemini AI for intelligent tutoring.

## Features

- **65 Multiple Choice Questions** covering Agentic AI concepts, Agent Factory architecture, Spec-Driven Development, monetization models, security frameworks, and more
- **90-Minute Timed Assessment** with visual countdown and warning states
- **AI Tutor** — get on-demand explanations from Google Gemini for any question after completing the quiz
- **Detailed Results** — animated score ring, grade classification, and per-question review with correct/incorrect breakdown
- **Modern Dark UI** — "Neural Network Noir" theme with glassmorphism, animated backgrounds, and smooth transitions
- **Responsive Design** — optimized for desktop and mobile

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | React 19 + TypeScript               |
| Build     | Vite 6                              |
| Styling   | Tailwind CSS + Custom CSS           |
| Icons     | Lucide React                        |
| AI        | Google Gemini (`gemini-3-flash-preview`) |
| Fonts     | Outfit, JetBrains Mono              |

## Live Demo

[https://sajid-khan-afridi.uetianafridi.workers.dev/](https://sajid-khan-afridi.uetianafridi.workers.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A [Google Gemini API key](https://ai.google.dev/) (optional, for AI Tutor feature)

### Installation

```bash
# Clone the repository
git clone https://github.com/sajid-khan-afridi/quiz_app-ch1_to_ch3.git
cd quiz_app-ch1_to_ch3

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> The AI Tutor feature requires a valid Gemini API key. The quiz itself works without it.

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

## Project Structure

```
├── App.tsx                  # Root component — quiz state machine & intro screen
├── index.tsx                # React entry point
├── index.html               # HTML shell with Tailwind config
├── index.css                # Custom theme (Neural Network Noir)
├── types.ts                 # TypeScript interfaces
├── questions.ts             # 65 MCQ questions with answers & explanations
├── components/
│   ├── QuizScreen.tsx       # Question display & option selection
│   ├── ResultScreen.tsx     # Score display, review & AI tutor
│   ├── Timer.tsx            # Countdown timer
│   └── ProgressBar.tsx      # Progress indicator
├── services/
│   └── geminiService.ts     # Google Gemini API integration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

## How It Works

1. **Intro Screen** — Displays author info with social links (LinkedIn, YouTube, GitHub) at the top, followed by the three chapter titles covered in the quiz (The AI Agent Factory Paradigm, Markdown - Writing Instructions, Working with General Agents), stats cards (question count, time limit, AI tutor badge), and a "Begin Assessment" button
2. **Quiz Screen** — Presents questions one at a time with A/B/C/D options, navigation controls, progress bar, and countdown timer
3. **Result Screen** — Shows animated score ring, grade (Outstanding/Excellent/Good/Passing/Keep Learning), and expandable per-question review
4. **AI Tutor** — Click "Ask AI to explain further" on any question in the review to get a Gemini-powered explanation

## Quiz Topics (Chapters 1–3)

- Three Waves of AI (Predictive, Generative, Agentic)
- Agent Factory Architecture & Workflow
- General Agents vs Custom Agents vs Coding Agents
- Agent Skills (SKILL.md) & Model Context Protocol (MCP)
- Spec-Driven Development vs Vibe Coding
- Enterprise Architecture Shift (Tool-Centric → Agent-Centric)
- Agent Evals, Golden Dataset & Regression Testing
- Monetization Models (Digital FTE, Success Fee, License, Skill Marketplace)
- Security & Compliance Framework
- Scaling Paradox & Cloud Native Deployment
- Case Studies (CoCounsel, Digital SDR)

## Deployment

Deployed on **Cloudflare Pages** with Git integration. Every push to `main` triggers an auto-deploy.

To deploy your own:

1. Fork this repo
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select the repo and set:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variable: `GEMINI_API_KEY` = your key
5. Click **Save and Deploy**

## License

This project is private.
