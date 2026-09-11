# CLAUDE.md

## Project Overview

Agentic AI Mastery Quiz — a React + TypeScript quiz app covering Agentic AI, Agent Factories, and enterprise automation protocols (Chapters 1–3). Features 65 MCQ questions, a 90-minute countdown timer, and an AI Tutor powered by Google Gemini for post-quiz explanations.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (CDN) + custom CSS (`index.css`, "Neural Network Noir" theme)
- **Icons:** lucide-react
- **AI Service:** Google Gemini (`@google/genai`, model: `gemini-3-flash-preview`)
- **Fonts:** Outfit (sans), JetBrains Mono (mono)

## Project Structure

Read `@docs/project-structure.md` before when need to review or make change in the project structure.

## Key Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## Environment Variables

- `GEMINI_API_KEY` — Required for AI Tutor explanations. Set in `.env.local`.
- Injected via Vite as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.

## Architecture Notes

- **State machine:** `QuizState = 'intro' | 'active' | 'finished'` drives the entire UI flow in `App.tsx`.
- **Intro screen:** Displays author info with social links (LinkedIn, YouTube, GitHub) at the top, followed by chapter listing (Ch1: The AI Agent Factory Paradigm, Ch2: Markdown - Writing Instructions, Ch3: Working with General Agents: Claude Code and Cowork), stats cards (question count, time limit, AI tutor badge), and a "Begin Assessment" button.
- **Questions:** Static array in `questions.ts`. 65 scenario-based MCQs (Ch1: Q1–Q20, Ch2: Q21–Q33, Ch3: Q34–Q65). Each has `id`, `text`, `options` (A–D), `correctAnswer`, and `explanation`.
- **Answers:** Stored as `UserAnswers` — a map of `questionId → selected option letter`.
- **Timer:** 90 minutes (5400 seconds). Auto-finishes quiz when time runs out. Supports pause/resume.
- **Pause/Resume:** Transient `isPaused` state in `App.tsx` (not part of `QuizState`). A header toggle button pauses the timer and shows a full-screen overlay (`.pause-overlay` in `index.css`) that hides questions. Resume dismisses the overlay and continues the countdown. State resets on quiz restart.
- **AI Tutor:** On-demand per question in the result screen. Calls Gemini API to generate a 3-sentence explanation.
- **Styling:** Tailwind utility classes + custom CSS classes (`glass-card`, `option-card`, `btn-primary`, etc.) defined in `index.css`.
- **No routing:** Single-page app with conditional rendering based on quiz state.

## Conventions

- Components are functional React components with TypeScript interfaces for props.
- No state management library — uses `useState` and prop drilling.
- All questions are hardcoded (no backend/database).
- Tailwind is loaded via CDN in `index.html`, configured inline via `tailwind.config`.
- Path alias `@/` maps to the project root.

## Deployment

- **Platform:** Cloudflare Pages (Git integration, auto-deploys on push to `main`)
- **Live URL:** https://sajid-khan-afridi.uetianafridi.workers.dev/
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variable:** `GEMINI_API_KEY` must be set in Cloudflare dashboard.
