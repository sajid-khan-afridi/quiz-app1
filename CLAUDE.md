# CLAUDE.md

## Project Overview

PCAO-F Practice Quiz — a React + TypeScript quiz app covering all seven Claude Certified Associate – Foundations (CCAO-F) domains. Features 60 questions (50 Select ONE, 10 Select TWO) in shuffled order, a 120-minute countdown timer, and a written explanation with lesson-source links for every answer.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (CDN) + custom CSS (`index.css`, "Neural Network Noir" theme)
- **Icons:** lucide-react
- **Fonts:** Outfit (sans), JetBrains Mono (mono)

## Project Structure

Read `@docs/project-structure.md` before when need to review or make change in the project structure.

## Question & Answer Source

`questions-answers/` is the source of truth for quiz content. It holds the **PCAO-F Practice Quiz** (CCAO-F-aligned revision, 11 September 2026): 60 questions, 7 domains, suggested time 120 minutes. Read these files before adding, editing, or regenerating questions. Do not write question content from memory.

| File | Contents | Feeds `questions.ts` field |
|---|---|---|
| `PCAO-F_Practice_Quiz.md` | Question stems and options only (no answers) | `id`, `text`, `options`, `selectCount` |
| `PCAO-F_Answer_Key.md` | Quick answer grid, then per-question explanation, domain, primary objective, and `**Sources:**` links | `correctAnswers`, `explanation`, `domain`, `sources` |
| `PCAO-F_Source_Map.md` | Domain blueprint, objective coverage matrix, source register (G00, M00, R00, S00–S10), imported-question provenance, and per-question domain/objective/source mapping | Reference only |
| `Claude+Certified+Associate+–+Foundations+Exam+Guide.pdf` | Official CCAO-F exam guide: 60 items, 120 minutes, multiple-choice and multiple-response items, scaled score of 100–1,000 with a 720 pass mark, per-domain score report. It gives no per-question scoring rule. | Reference only |

**Markdown format (for parsing):**
- Quiz: `### Question NN`, then `**Select ONE.**` or `**Select TWO.**`, the scenario paragraph, and options as `- **A.** …`. Questions are separated by `---`.
- Answer key: `### Question NN — D` (or `— C, E` for Select TWO), then `**Domain N: … · Primary objective X.Y**`, the explanation paragraph, and a `**Sources:**` line linking agentfactory.panaversity.org lessons.

**Question mix:**
- 50 **Select ONE** items with four options (A–D).
- 10 **Select TWO** items with five options (A–E) and exactly two correct answers: Q03, Q09, Q14, Q20, Q23, Q25, Q29, Q40, Q52, Q57.
- Scoring is exact match: all selected answers must match the key. No partial credit, no negative marking. (The app itself gives 0.5 points on a Select TWO question when the one answer picked is right — see Architecture Notes.)

**Domains (weights from the official CCAO-F guide):** D1 Prompting and Task Execution (8 Qs), D2 Output Evaluation and Validation (13), D3 Product and Model Selection (7), D4 Workflow Integration and Solution Design (10), D5 Configuration and Knowledge Management (7), D6 Governance, Risk, and Responsible Use (9), D7 Troubleshooting and Optimization (6).

**Imported questions:** Q05, Q06, Q13, Q21, Q24, Q39, Q42, Q44, Q50, and Q51 are exact imports from Matthew Purcell's *Claude Certified Associate – Foundations: Full Practice Question Set*. Keep their stem, option text, and option order unchanged, and keep the attribution in the source map.

**Regenerating `questions.ts`:** it is generated from `questions-answers/` by `scripts/generate-questions.mjs` — never edit it by hand. To change quiz content, edit the markdown source files, then run `npm run gen:questions`. The script fails loudly (non-zero exit, no file written) if the 60 questions, the 10 Select TWO ids, the option letters, or the Quick answer grid don't all agree.

## Key Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run gen:questions # Regenerate questions.ts from questions-answers/
```

## Architecture Notes

- **State machine:** `QuizState = 'intro' | 'active' | 'finished'` drives the entire UI flow in `App.tsx`.
- **Intro screen:** Displays author info with social links (LinkedIn, YouTube, GitHub) at the top, followed by the 7 topic areas (domains D1–D7), stats cards (question count, time limit, topic-area count), and a "Begin Assessment" button.
- **Questions:** Generated array in `questions.ts` (see "Regenerating `questions.ts`" above). 60 scenario-based questions — 50 Select ONE, 10 Select TWO — shuffled into a new order on every attempt (option order within a question is never shuffled). Each has `id`, `text`, `options` (A–D, plus `E` on Select TWO questions), `selectCount`, `correctAnswers`, `explanation`, `domain`, and `sources`.
- **Answers:** Stored as `UserAnswers` — a map of `questionId → OptionKey[]`. Select ONE questions use radio buttons (one answer). Select TWO questions use checkboxes capped at 2 picks — once 2 are ticked, the remaining boxes grey out and can't be ticked until one is unticked.
- **Timer:** 120 minutes (7200 seconds). Auto-finishes quiz when time runs out. Supports pause/resume.
- **Pause/Resume:** Transient `isPaused` state in `App.tsx` (not part of `QuizState`). A header toggle button pauses the timer and shows a full-screen overlay (`.pause-overlay` in `index.css`) that hides questions. Resume dismisses the overlay and continues the countdown. State resets on quiz restart.
- **Scoring & results:** Partial credit on Select TWO questions (1 point for both picks right, 0.5 for one right pick, 0 otherwise); every question is worth 1 point. Raw points convert to a 1,000-point scale (`100 + 900 × points / 60`) with a 720 pass mark, and a Pass/Fail grade with Excellent/Outstanding levels. The result screen also shows a per-domain (D1–D7) score breakdown.
- **Explanations:** Predetermined — each review card shows the answer key's explanation and its lesson-source links. There is no AI Tutor and no API key.
- **Styling:** Tailwind utility classes + custom CSS classes (`glass-card`, `option-card`, `btn-primary`, etc.) defined in `index.css`.
- **No routing:** Single-page app with conditional rendering based on quiz state.

## Conventions

- Components are functional React components with TypeScript interfaces for props.
- No state management library — uses `useState` and prop drilling.
- All questions are generated into `questions.ts` from `questions-answers/` (no backend/database).
- Tailwind is loaded via CDN in `index.html`, configured inline via `tailwind.config`.
- Path alias `@/` maps to the project root.

## Deployment

- **Platform:** Cloudflare Pages (Git integration, auto-deploys on push to `main`)
- **Live URL:** https://sajid-khan-afridi.uetianafridi.workers.dev/
- **Build command:** `npm run build`
- **Output directory:** `dist`
