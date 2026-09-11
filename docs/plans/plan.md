# Plan: Migrate the quiz app to the PCAO-F question set

## Context

`CLAUDE.md` now names `questions-answers/` as the source of truth for quiz content (PCAO-F: 60 questions, 7 domains). The app still runs the old 65-question Ch1–3 set from `AI_Agent_Factory_MCQ_Assessment_65Q.md`.

The new set has 10 **Select TWO** questions with five options (A–E) and exactly two correct answers: Q03, Q09, Q14, Q20, Q23, Q25, Q29, Q40, Q52, Q57. The source scores by exact match with no partial credit; the app will give partial credit instead (#16). The app today only supports four options and one answer.

The Gemini AI Tutor is also being removed (#13). Every explanation comes from the answer key, which already covers why the right answer is right and why each wrong option is wrong. The app will then need **no API key**.

What I verified in the sources:
- There is no inline markdown in any stem, option, or explanation.
- Every explanation is one paragraph, followed by a `**Sources:**` line of `[label](url)` links.
- The answer key ends with a `## Score by domain` section, so the parser must stop there.
- Q05's stem contains a numbered list, but `QuizScreen` has no `whitespace-pre-line`, so its line breaks would collapse today.
- The official exam guide (`Claude+Certified+Associate+–+Foundations+Exam+Guide.pdf`) gives 60 items, 120 minutes, and multiple-choice plus multiple-response items that each state how many answers to pick. It publishes **no per-question scoring rule**. It reports pass/fail with a scaled score of 100–1,000 (pass mark 720, set by a standard-setting study), plus the percentage of items answered correctly in each domain.

## Confirmed decisions (all approved by the user)

| # | Topic | Decision |
|---|---|---|
| 1 | Scope | Migrate the app fully to PCAO-F (replace the 65Q set). |
| 2 | Time limit | **120 minutes**. |
| 3 | Old source file | **Delete** `AI_Agent_Factory_MCQ_Assessment_65Q.md`. |
| 4 | App name | **PCAO-F Practice Quiz**, used everywhere (intro title, header, tab title, metadata, README). |
| 5 | Intro screen | List the **7 topic areas** in place of the 3 chapters. |
| 6 | Answer-count label | Every question states its answer count at the end of the question text, as the guide describes. Select TWO questions show a **coloured, underlined "Select TWO answers"**. Select ONE questions show a **plain grey "Select ONE answer"**. Both labels stay alongside the radio buttons and checkboxes (#22), since a checkbox alone doesn't say "exactly two". |
| 7 | Third pick | **Stop at 2, and show it.** Once two boxes are ticked on a Select TWO question, the other boxes **turn grey and can't be ticked**. Unticking one brings them back. |
| 8 | Getting questions into the app | Keep a **converter script** (`npm run gen:questions`) that rebuilds `questions.ts` from the markdown and checks every answer. |
| 9 | Topic scores | **Add** a score for each of the 7 topic areas on the results screen, shown as **points and percent** (e.g. "D2 · 10.5 / 13 · 81%"), like the guide's per-domain score report. |
| 10 | Review cards | Show each question's **topic area tag and lesson source links**. |
| 11 | Question order | **Shuffle every attempt** (on start and on retake). Question numbers shown are positions (1–60) in the shuffled order, so they won't match the answer key. |
| 12 | Grades | **Pass / Fail plus levels** on the 1,000-point score: **Fail** below 720, **Pass** 720+, **Excellent** 820+ (48 of 60, 80%), **Outstanding** 910+ (54 of 60, 90%). The grade shows **with the percentage** (e.g. "Excellent · 83%"). This replaces today's labels. |
| 13 | Explanations | **Predetermined, no API key.** Each review card shows the answer key's explanation and its lesson links. The Gemini AI Tutor is removed. This replaces the earlier "retune the AI Tutor prompt" decision. |
| 14 | `1.md` | **Leave alone**. |
| 15 | `package.json` name | **Rename** to `pcao-f-practice-quiz`. |
| 16 | Scoring | **Every question is worth 1 point**, whether it takes one answer or two. On a Select TWO question: **1** when both picks are right, **0.5** when the only pick is right, **0** when any pick is wrong or nothing is picked. This differs from the answer key's exact-match rule. |
| 17 | Explaining the scoring rule | **Nowhere.** The app does not explain the 0.5 rule. |
| 18 | Score scale | Follow the official exam's style: a **1,000-point scale with 720 as the pass mark**. Grade levels are in #12. |
| 19 | Conversion | **100–1,000, like the guide:** `score = 100 + 900 × points / 60`, rounded to a whole number. 0 points shows 100. A pass (720) needs 41.5 of 60 points (69%). |
| 20 | Score caveat | **One short line** under the score: "Practice score converted from raw points, not an official scaled score." |
| 21 | Stats row | **Four cards**, each counting questions: Correct / Partial / Incorrect / Total. |
| 22 | Answer controls | **Radio buttons** on Select ONE questions and **checkboxes** on Select TWO questions, so the control's shape shows whether one answer or several can be picked. The control sits **beside the letter**: control, then the A–E letter badge, then the option text. |
| 23 | Gemini code | **Remove it fully**: the "Ask AI to explain further" button, `services/geminiService.ts`, the `@google/genai` package, and the API-key settings. |
| 24 | Intro card | The third stats card shows **"7 · Topic areas"** in place of "AI · Tutor". |
| 25 | `.env.local` | **Delete** it. It only holds a placeholder Gemini key, and it isn't in git. |
| 26 | Fail message | "Keep learning! Use the **explanations and lesson links** below to master these concepts." |

**Constraint (not a choice): option order is never shuffled.** `CLAUDE.md` requires the 10 imported questions to keep their option order, and the answer key's letters depend on it. Only the question order is shuffled.

## 1. Converter script → `questions.ts`

New file `scripts/generate-questions.mjs` (plain Node ESM, no dependencies), plus `"gen:questions": "node scripts/generate-questions.mjs"` in `package.json`.

It parses these files:
- `questions-answers/PCAO-F_Practice_Quiz.md`:
  - Split on `### Question NN`.
  - Read `**Select ONE.**` / `**Select TWO.**` as `selectCount`.
  - Take the stem paragraphs up to the first option and join them with `\n\n`.
  - Read options from `- **X.** text`.
- `questions-answers/PCAO-F_Answer_Key.md`:
  - Read `### Question NN — C, E` as `correctAnswers`.
  - Read `**Domain N: Name · Primary objective X.Y**` as `domain: "D{N} · Name"`.
  - Take the paragraph that follows as `explanation`.
  - Read `**Sources:**` links into `sources: {label, url}[]`.
  - Stop at the first `## ` heading after the explanations.

The script checks the parsed data and fails loudly on any mismatch:
- There are 60 questions, with ids 1–60 matching in both files.
- Exactly those 10 ids are Select TWO, and each has options A–E and 2 answers.
- Every Select ONE question has options A–D and 1 answer.
- Every answer letter exists among its question's options.
- Answers match the Quick answer grid table.

Output: `questions.ts` in source order (1–60), with a header comment saying "Generated from questions-answers/ — edit the markdown and run `npm run gen:questions`". Strings are escaped with `JSON.stringify`.

## 2. Types — `types.ts`

```ts
export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';
export interface Question {
  id: number;
  text: string;
  options: { A: string; B: string; C: string; D: string; E?: string };
  selectCount: 1 | 2;
  correctAnswers: OptionKey[];
  explanation: string;
  domain: string;                          // "D1 · Prompting and Task Execution"
  sources: { label: string; url: string }[];
}
export interface UserAnswers { [questionId: number]: OptionKey[] }
```

## 3. Components

**`App.tsx`**
- Set `TOTAL_TIME = 120 * 60`. The intro "Minutes" card shows `TOTAL_TIME / 60` instead of the hard-coded `90`.
- **Shuffle (#11):**
  - Add `quizQuestions` state, initialised to `QUESTIONS`.
  - `handleStart` (used by both Begin and Retake) sets it to a Fisher–Yates–shuffled copy of `QUESTIONS`.
  - `QuizScreen`, `ProgressBar` and `ResultScreen` read from `quizQuestions`.
  - Answers stay keyed by the real `id`, so shuffling never mixes them up.
- **`handleAnswerSelect(opt: OptionKey)`:**
  - Select ONE: replace the answer with `[opt]`.
  - Select TWO: toggle `opt`. When 2 are already chosen, ignore a new pick (#7).
- **Intro screen:** title **PCAO-F Practice Quiz**, then the 7 topic areas (#5) where the chapter lines were. The third stats card changes from "AI · Tutor" to "7 · Topic areas" (#24). Its number is counted from the distinct `domain` values in `QUESTIONS`, and its style and icon stay the same. The author block, the other two cards, and the button stay unchanged.
- **Header label:** change "Agentic AI Quiz" to "PCAO-F Practice Quiz" (#4).

**`components/QuizScreen.tsx`**
- Props: `selectedAnswers: OptionKey[]` and `onSelectAnswer(opt: OptionKey)`.
- Build the option list as `(['A','B','C','D','E'] as const).filter(k => question.options[k])`, so E renders only on Select TWO questions.
- After the question text, append the answer count (#6):
  - Select TWO: **"Select TWO answers"** in the theme's accent colour, underlined.
  - Select ONE: **"Select ONE answer"** in plain grey.
- **Answer controls (#22):**
  - Each option card becomes a `<label className="option-card …">` that holds a real `<input>`. Select ONE questions use `type="radio"`, with one shared `name` per question. Select TWO questions use `type="checkbox"`. Keyboards and screen readers then work without extra code.
  - Order inside the card: the control, then the A–E letter badge, then the option text.
  - The letter badge always shows its letter. It no longer swaps to the `CheckCircle2` icon, because the control now shows the pick.
  - A picked card still gets the existing `.option-card.selected` class.
- **Limit (#7):** on a Select TWO question with 2 picks, each unticked input gets `disabled` and its card gets `.disabled`. Unticking one removes both. `handleAnswerSelect` keeps its own "ignore a third pick" guard as a backstop.
- Add `whitespace-pre-line` to the question `<h2>` so Q05's numbered steps render on separate lines.
- The counter already shows the position (`currentIndex + 1`), which fits #11.

**`components/ResultScreen.tsx`**
- **Points (#16):** add a local helper `getPoints(q, selected)` that returns 0, 0.5 or 1:
  - Select ONE: 1 when the pick matches the key, otherwise 0.
  - Select TWO: 0 when nothing is picked or any pick is wrong; 1 when both picks are right; 0.5 when the only pick is right.
  - Use it for the score, the stats row, the topic-area grid, and each review card.
- **Score:** the sum of points, shown with halves where needed (e.g. "47.5 / 60").
- **1,000-point score (#18, #19):** `Math.round(100 + 900 * points / questions.length)`. Spot checks: 60 → 1,000, 48 → 820, 41.5 → 723, 41 → 715, 0 → 100.
- **Grade (#12):**
  - Taken from the unrounded score: Outstanding ≥ 910, Excellent ≥ 820, Pass ≥ 720, Fail below.
  - The badge shows the grade with the percentage, e.g. "Excellent · 83%".
  - Outstanding and Excellent keep today's accent colour and trophy icon. Pass uses today's yellow, and Fail uses today's secondary colour.
- **Score ring:** the 1,000-point score in the centre, with "47.5 / 60 points" under it. The ring's fill still follows the percentage.
- **Caveat (#20):** one small grey line under the score: "Practice score converted from raw points, not an official scaled score."
- **Stats row (#21):** four cards, each counting questions: Correct (1 point), Partial (0.5), Incorrect (0, skipped included), and Total. This replaces today's "Incorrect = total − score", which would show halves.
- **Review card:**
  - Label each card by its position in this attempt (`Q{index + 1}`), not by the source id (#11).
  - Status badge: **Correct** (green), **Partial** (amber, "1 of 2 correct"), **Incorrect** (red), or **Skipped**.
  - Show the domain tag (#10).
  - List every selected answer and every correct answer (one line per letter), or show "Skipped".
  - Under the explanation, render the `sources` links (`target="_blank" rel="noopener noreferrer"`) (#10).
- **Score by topic area (#9):**
  - A compact D1–D7 grid showing points / total (halves allowed) and a whole-number percentage, e.g. "D2 · 10.5 / 13 · 81%". Grouped by `domain`, sorted D1 to D7.
  - Placed between the stats row and the detailed review.
  - Carries the source's caveat that raw domain scores are study feedback only.
- The praise line follows the grade:
  - Outstanding and Excellent get today's "Excellent work!" line, with "using Claude effectively" in place of "Agentic AI concepts".
  - Pass gets "Good effort…".
  - Fail gets "Keep learning! Use the explanations and lesson links below to master these concepts." (#26)
- **Remove the AI Tutor (#13, #23):**
  - Delete the `getAIExplanation` import, the `aiExplanations` and `loadingExplanationId` state, and `handleAskAI`.
  - Delete the AI Tutor box and its "Ask AI to explain further" button.
  - Delete the `Sparkles` import, which nothing else uses.
  - The built-in "Explanation" box stays, with the source links under it (#10).

**`index.css`**
- Add a `.result-card.partial` style in amber, next to the existing `.result-card.correct` and `.result-card.incorrect`.
- Style the option inputs (#22) with `accent-color: var(--accent)`, sized to line up with the letter badge.
- Change `.option-card:focus-visible` to `.option-card:focus-within`, because keyboard focus now lands on the input inside the card.
- Add `.option-card.disabled` (#7): greyed out (lower opacity), `cursor: not-allowed`, and no hover movement, border change, or glow.
- Remove the `.ai-box` and `.ai-box::before` rules. Nothing uses them once the AI Tutor is gone (#23).

**`vite.config.ts`** (#23)
- Remove the `define` block that injects `process.env.API_KEY` and `process.env.GEMINI_API_KEY`, along with the `loadEnv` call and import it needs.

**`index.html`** (#23)
- Remove the `"@google/genai"` line from the import map.

`Timer.tsx` needs no change: its 5-minute and 1-minute thresholds are absolute, and `formatTime` already handles hours (2:00:00).

## 4. Files removed or left alone

- `git rm AI_Agent_Factory_MCQ_Assessment_65Q.md` (#3).
- `git rm services/geminiService.ts`. The `services/` folder is then empty and goes too (#23).
- `npm uninstall @google/genai` removes the package from `package.json` and `package-lock.json` (#23).
- Delete `.env.local` (#25). Git doesn't track it, so this only changes the local copy.
- `1.md` is not touched (#14).

**Manual step for you:** you can delete the `GEMINI_API_KEY` variable in the Cloudflare dashboard. The app no longer reads it, so leaving it there does no harm.

## 5. Docs and metadata

- **`CLAUDE.md`**
  - Overview: PCAO-F Practice Quiz, 60 questions, 7 domains, 120 minutes, shuffled order, and a written explanation for every answer. Drop "AI Tutor powered by Google Gemini".
  - Remove the Tech Stack "AI Service" line, the whole Environment Variables section, and the Deployment line saying `GEMINI_API_KEY` must be set (#23).
  - Architecture Notes:
    - Intro screen: topic areas replace the chapters, and the stats cards read Questions / Minutes / Topic areas (#24).
    - Questions: generated, with `selectCount` / `correctAnswers` / `domain` / `sources`, and shuffled per attempt (option order fixed).
    - Answers: `questionId → OptionKey[]`. Select ONE questions use radio buttons. Select TWO questions use checkboxes with a limit of 2, and the unticked boxes grey out once 2 are picked.
    - Timer: 120 min / 7200 s.
    - Results: partial-credit scoring (#16), 1,000-point scale with a 720 pass mark (#18, #19), Pass / Fail with levels and percentage (#12), per-domain scores, and source links.
    - Explanations: the answer key's text and lesson links on each review card. No AI Tutor and no API key (#13).
  - In the Question & Answer Source section:
    - In the source table's "Feeds `questions.ts` field" column, change the quiz file row to `id`, `text`, `options`, `selectCount` and the answer key row to `correctAnswers`, `explanation`, `domain`, `sources`.
    - Replace the "Current app vs. source (not yet migrated)" block, including its pointer to this plan, with the regenerate workflow (`npm run gen:questions`).
    - Next to "Scoring is exact match", note that the app gives 0.5 for one right pick on Select TWO questions (#16).
  - Update the "All questions are hardcoded" convention to say generated.
  - Add `npm run gen:questions` to Key Commands.
- **`docs/project-structure.md`**
  - Remove the 65Q line.
  - Add `scripts/generate-questions.mjs`. (`docs/plans/` and the exam guide PDF are already listed.)
  - Change the `questions.ts` description to "60 PCAO-F questions — generated".
  - Update the `types.ts` description.
  - Remove the `services/geminiService.ts` and `.env.local` lines, and drop "AI tutor integration" from the `ResultScreen.tsx` description (#23).
- **`README.md`**
  - Title and intro. Drop "powered by Google Gemini AI".
  - Features: 60 questions (50 single-answer, 10 select-two), 120-minute timer, shuffled order, 1,000-point score with a 720 pass mark, topic-area scores, a written explanation for every answer, and lesson links. Remove the AI Tutor feature.
  - Remove the Gemini row from the tech stack table, the API key from Prerequisites, the `.env.local` setup step, How It Works step 4 (AI Tutor), and the `GEMINI_API_KEY` deployment step. After this, the app needs no setup beyond `npm install` (#23).
  - Project tree: add `questions-answers/` and `scripts/`, and remove `services/`.
  - How It Works: the intro describes the topic areas; the quiz screen covers radio buttons vs. checkboxes and the "Select ONE answer" / "Select TWO answers" labels.
  - Replace "Quiz Topics (Chapters 1–3)" with the 7 domains and weights.
  - Add a short "Updating questions" section.
  - Keep the clone URL and the other deployment steps unchanged.
- **`metadata.json`**: name "PCAO-F Practice Quiz". Also fix the description, which wrongly says "90-question".
- **`index.html`**: update `<title>` and the meta description.
- **`package.json`**: add the `gen:questions` script, rename the package to `pcao-f-practice-quiz` (#15), and drop `@google/genai` with `npm uninstall` (#23).
- **`package-lock.json`**: update its two `name` fields to match. Refreshing the lockfile with `npm install --package-lock-only` does this.

## Verification

1. `npm run gen:questions`: all checks pass, 60 questions are written, and there are 10 Select TWO questions.
2. `npx tsc --noEmit`: no type errors, including the removed `correctAnswer` field.
3. `npm run build` succeeds with no `.env.local` present, and a search of the source files (excluding `node_modules`) finds no `@google/genai`, `getAIExplanation`, or `API_KEY`.
4. `npm run dev`, then check in the browser at http://localhost:3000:
   - The intro shows "PCAO-F Practice Quiz", 60 questions, 120 minutes, and the 7 topic areas. The third card reads "7 · Topic areas".
   - The timer starts at 2:00:00.
   - Question order is shuffled, and a Retake gives a different order.
   - A Select TWO question shows options A–E with checkboxes and the coloured, underlined "Select TWO answers". After two picks, the other three boxes turn grey and can't be ticked. Unticking one brings them back.
   - A Select ONE question shows options A–D with radio buttons and a plain grey "Select ONE answer".
   - Each card reads control, letter badge, text. The Tab and arrow keys move between options and pick them.
   - Q05 (the ordering question) shows its numbered steps on separate lines.
   - Answer these (looked up in the answer key), then finish:
     - One Select ONE question right and one wrong.
     - One Select TWO question with both picks right.
     - One Select TWO question with only one pick, and it is right.
     - One Select TWO question with one right pick and one wrong pick.
   - On the results screen:
     - The score is 3.5 points: 1 + 0 + 1 + 0.5 + 0.
     - The stats row reads Correct 2, Partial 1, Incorrect 57 (55 skipped included), Total 60.
     - The review cards show Correct, Partial ("1 of 2 correct"), and Incorrect states.
     - Review cards show position numbers, two-letter answers, domain tags, and working source links.
     - The topic-area grid totals 60 available points.
     - The 1,000-point score reads 153 (100 + 900 × 3.5 / 60 = 152.5, rounded up), and the badge reads "Fail · 6%".
     - The message reads "Keep learning! Use the explanations and lesson links below to master these concepts."
     - Each review card shows the Explanation box with lesson links, and there is no "Ask AI to explain further" button.
   - Pause/resume still works.
5. `git status`: the old 65Q file and `services/geminiService.ts` are deleted, `1.md` is unchanged, and no stray files were added.
