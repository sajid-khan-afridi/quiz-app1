# Plan: Hide the pause button, pause/resume with Ctrl+Shift+P

## Context

The quiz header shows a Pause/Play toggle button next to the timer (`App.tsx`). The user wants that button hidden, so learners don't see a pause option. Pausing stays available as a hidden keyboard shortcut: **Ctrl+Shift+P** pauses, and pressing it again resumes.

The pause logic already exists: `isPaused` state, `handleTogglePause`, the Timer stops through `isActive={quizState === 'active' && !isPaused}`, and the `.pause-overlay` card (`App.tsx`, `index.css`). Only the trigger changes. Timer, overlay, and state reset on restart are left as they are.

## Confirmed decisions (all approved by the user)

| # | Topic | Decision |
|---|---|---|
| 1 | Pause card | **Leave it as it is.** Keep its Resume button and add no shortcut hint. |
| 2 | Intro screen hint | **None.** The shortcut isn't mentioned anywhere in the UI. |
| 3 | Firefox | **Keep Ctrl+Shift+P.** It works in Chrome and Edge. In Firefox the key opens a private window and won't pause the quiz. |
| 4 | Mac | **Ctrl+Shift+P only.** No Cmd+Shift+P. |
| 5 | Plan file | Save as **`docs/plans/2-plan.md`**. Leave `docs/plans/plan.md` untouched. |

Defaults used without asking (conventional choices):
- The shortcut only works while `quizState === 'active'`. It does nothing on the intro or results screen.
- Key auto-repeat is ignored (`e.repeat`), so holding the keys down doesn't make the pause flicker on and off.
- `preventDefault()` is called so Chrome/Edge don't also act on the key combo.

## Steps

1. **`App.tsx`: remove the header pause button.**
   - Delete the `{quizState === 'active' && (<button onClick={handleTogglePause} …>…</button>)}` block. The `<Timer>` stays in the same `flex items-center gap-2` wrapper.
   - `Pause` and `Play` icons stay imported, because the overlay still uses them.

2. **`App.tsx`: add the keyboard shortcut.**
   - Import `useEffect` from React.
   - After `handleTogglePause`, add a `useEffect` that, while `quizState === 'active'`, listens on `window` for `keydown` with `e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyP'`, calls `e.preventDefault()`, and calls `handleTogglePause()` unless `e.repeat`. It removes the listener on cleanup.
   - `handleTogglePause` uses the functional `setIsPaused((prev) => !prev)`, so it's safe to call from the listener. `e.code === 'KeyP'` matches the physical P key on any keyboard layout.
   - The existing overlay keeps its Resume button, so a mouse can still resume.

3. **`CLAUDE.md`: update the Pause/Resume note** (Architecture Notes) to describe the hidden Ctrl+Shift+P shortcut in place of the header button.

No changes to `index.css`, `Timer.tsx`, `QuizScreen.tsx`, or `questions.ts`.

## Verification

1. `npm run build`: TypeScript and Vite build with no errors.
2. `npm run dev`, then open http://localhost:3000 in Chrome:
   - On the intro screen, Ctrl+Shift+P does nothing.
   - Click **Begin Assessment**. The header shows the progress bar and timer, with **no pause button**.
   - Press Ctrl+Shift+P. The "Quiz Paused" overlay appears and the timer stops.
   - Press Ctrl+Shift+P again. The overlay closes and the timer counts down again.
   - Pause again and click the overlay's **Resume** button. It still resumes.
   - Hold Ctrl+Shift+P down. The pause toggles once, with no flicker.
   - Finish the quiz. On the results screen, Ctrl+Shift+P does nothing. **Restart** starts the new quiz unpaused.
