// Parses questions-answers/*.md and writes questions.ts.
// Run with: npm run gen:questions

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const quizPath = path.join(root, 'questions-answers', 'PCAO-F_Practice_Quiz.md');
const answerKeyPath = path.join(root, 'questions-answers', 'PCAO-F_Answer_Key.md');
const outPath = path.join(root, 'questions.ts');

const SELECT_TWO_IDS = new Set([3, 9, 14, 20, 23, 25, 29, 40, 52, 57]);

const errors = [];
function fail(message) {
  errors.push(message);
}

function splitQuestionBlocks(text) {
  return text
    .split(/(?=^### Question \d+)/m)
    .filter((b) => /^### Question \d+/.test(b.trim()));
}

function parseQuizFile(text) {
  const blocks = splitQuestionBlocks(text);
  const byId = new Map();

  for (const block of blocks) {
    const idMatch = block.match(/^### Question (\d+)/);
    if (!idMatch) {
      fail(`Quiz file: could not read a question id from block starting "${block.slice(0, 40)}"`);
      continue;
    }
    const id = parseInt(idMatch[1], 10);

    const selectMatch = block.match(/\*\*Select (ONE|TWO)\.\*\*/);
    if (!selectMatch) {
      fail(`Q${id}: missing "**Select ONE.**" / "**Select TWO.**" marker`);
      continue;
    }
    const selectCount = selectMatch[1] === 'ONE' ? 1 : 2;

    const afterSelect = block.slice(selectMatch.index + selectMatch[0].length);
    const firstOptionMatch = afterSelect.match(/^- \*\*[A-E]\.\*\*/m);
    if (!firstOptionMatch) {
      fail(`Q${id}: no options found`);
      continue;
    }

    const stemText = afterSelect.slice(0, firstOptionMatch.index);
    const stem = stemText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .join('\n\n');
    if (!stem) {
      fail(`Q${id}: empty question stem`);
    }

    const optionsText = afterSelect.slice(firstOptionMatch.index);
    const options = {};
    const optionRe = /^- \*\*([A-E])\.\*\*\s*(.+)$/gm;
    let m;
    while ((m = optionRe.exec(optionsText))) {
      options[m[1]] = m[2].trim();
    }

    byId.set(id, { id, selectCount, text: stem, options });
  }

  return byId;
}

function parseAnswerKeyFile(text) {
  const explHeadingIdx = text.indexOf('## Explanations');
  if (explHeadingIdx === -1) {
    fail('Answer key: could not find "## Explanations" heading');
    return { byId: new Map(), gridAnswers: new Map() };
  }

  // Quick answer grid
  const gridSection = text.slice(0, explHeadingIdx);
  const gridAnswers = new Map();
  const gridLines = gridSection
    .split('\n')
    .filter((l) => /^\|/.test(l.trim()))
    .filter((l) => !/^\|\s*-{2,}/.test(l.trim()))
    .filter((l) => !/\bQuestion\b/.test(l));

  for (const line of gridLines) {
    const cells = line
      .split('|')
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    for (let i = 0; i + 1 < cells.length; i += 2) {
      const qid = parseInt(cells[i], 10);
      if (Number.isNaN(qid)) continue;
      const answers = cells[i + 1].split(',').map((s) => s.trim());
      gridAnswers.set(qid, answers);
    }
  }

  // Explanations, stopped at the next top-level heading (## Score by domain)
  let explSection = text.slice(explHeadingIdx);
  const stopMatch = explSection.match(/^## (?!Explanations)/m);
  if (stopMatch) {
    explSection = explSection.slice(0, stopMatch.index);
  }

  const blocks = splitQuestionBlocks(explSection);
  const byId = new Map();

  for (const block of blocks) {
    const headMatch = block.match(/^### Question (\d+)\s*—\s*(.+)$/m);
    if (!headMatch) {
      fail(`Answer key: bad question heading in block starting "${block.slice(0, 40)}"`);
      continue;
    }
    const id = parseInt(headMatch[1], 10);
    const correctAnswers = headMatch[2].split(',').map((s) => s.trim());

    const domainMatch = block.match(/\*\*Domain (\d+): (.+?) · Primary objective ([\d.]+)\*\*/);
    if (!domainMatch) {
      fail(`Q${id}: missing "**Domain N: ... · Primary objective X.Y**" line`);
      continue;
    }
    const domain = `D${domainMatch[1]} · ${domainMatch[2]}`;

    const sourcesIdx = block.indexOf('**Sources:**');
    if (sourcesIdx === -1) {
      fail(`Q${id}: missing "**Sources:**" line`);
      continue;
    }

    const domainEnd = domainMatch.index + domainMatch[0].length;
    const explanation = block
      .slice(domainEnd, sourcesIdx)
      .replace(/\s+/g, ' ')
      .trim();
    if (!explanation) {
      fail(`Q${id}: empty explanation`);
    }

    const sourcesLineEnd = block.indexOf('\n\n', sourcesIdx);
    const sourcesText = block.slice(sourcesIdx, sourcesLineEnd === -1 ? undefined : sourcesLineEnd);
    const sources = [];
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lm;
    while ((lm = linkRe.exec(sourcesText))) {
      sources.push({ label: lm[1], url: lm[2] });
    }
    if (sources.length === 0) {
      fail(`Q${id}: no source links parsed from Sources line`);
    }

    byId.set(id, { id, correctAnswers, domain, explanation, sources });
  }

  return { byId, gridAnswers };
}

const quizText = fs.readFileSync(quizPath, 'utf8');
const answerKeyText = fs.readFileSync(answerKeyPath, 'utf8');

const quizById = parseQuizFile(quizText);
const { byId: keyById, gridAnswers } = parseAnswerKeyFile(answerKeyText);

// 1. There are 60 questions, with ids 1-60 matching in both files.
for (let id = 1; id <= 60; id++) {
  if (!quizById.has(id)) fail(`Quiz file: missing Question ${id}`);
  if (!keyById.has(id)) fail(`Answer key: missing Question ${id}`);
}
if (quizById.size !== 60) fail(`Quiz file: expected 60 questions, found ${quizById.size}`);
if (keyById.size !== 60) fail(`Answer key: expected 60 questions, found ${keyById.size}`);

const questions = [];

for (let id = 1; id <= 60; id++) {
  const q = quizById.get(id);
  const k = keyById.get(id);
  if (!q || !k) continue; // already reported above

  const isSelectTwo = SELECT_TWO_IDS.has(id);

  // 2 & 3. Select TWO/ONE questions have the right option count and answer count.
  if (isSelectTwo) {
    if (q.selectCount !== 2) fail(`Q${id}: expected "Select TWO." (listed as a Select TWO question)`);
    const optionKeys = Object.keys(q.options).sort();
    if (optionKeys.join('') !== 'ABCDE') fail(`Q${id}: expected options A-E, found ${optionKeys.join(', ')}`);
    if (k.correctAnswers.length !== 2) fail(`Q${id}: expected 2 correct answers, found ${k.correctAnswers.length}`);
  } else {
    if (q.selectCount !== 1) fail(`Q${id}: expected "Select ONE." (not listed as a Select TWO question)`);
    const optionKeys = Object.keys(q.options).sort();
    if (optionKeys.join('') !== 'ABCD') fail(`Q${id}: expected options A-D, found ${optionKeys.join(', ')}`);
    if (k.correctAnswers.length !== 1) fail(`Q${id}: expected 1 correct answer, found ${k.correctAnswers.length}`);
  }

  // 4. Every answer letter exists among its question's options.
  for (const letter of k.correctAnswers) {
    if (!(letter in q.options)) {
      fail(`Q${id}: answer key letter "${letter}" is not one of its options (${Object.keys(q.options).join(', ')})`);
    }
  }

  // 5. Answers match the Quick answer grid table.
  const gridForId = gridAnswers.get(id);
  if (!gridForId) {
    fail(`Q${id}: missing from the Quick answer grid`);
  } else if (gridForId.join(',') !== k.correctAnswers.join(',')) {
    fail(`Q${id}: Quick answer grid says ${gridForId.join(', ')} but explanation heading says ${k.correctAnswers.join(', ')}`);
  }

  questions.push({
    id,
    text: q.text,
    options: q.options,
    selectCount: q.selectCount,
    correctAnswers: k.correctAnswers,
    explanation: k.explanation,
    domain: k.domain,
    sources: k.sources,
  });
}

if (errors.length > 0) {
  console.error(`\ngen:questions failed with ${errors.length} issue(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  console.error('');
  process.exit(1);
}

const header = [
  '// Generated from questions-answers/ — edit the markdown and run `npm run gen:questions`.',
  '// Do not edit this file directly.',
  '',
  "import { Question } from './types';",
  '',
  '',
].join('\n');

const body = `export const QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};\n`;

fs.writeFileSync(outPath, header + body, 'utf8');

const selectTwoCount = questions.filter((q) => q.selectCount === 2).length;
console.log(`Wrote ${questions.length} questions to ${path.relative(root, outPath)} (${selectTwoCount} Select TWO).`);
