import { Question } from './types';

export const QUESTIONS: Question[] = [
  // Chapter 1: The AI Agent Factory Paradigm (Q1–Q20)
  {
    id: 1,
    text: "Scenario: A startup CTO discovers that 84% of developers use AI coding tools and the DORA report shows 90% adoption among enterprises. She wants to validate whether this signals a genuine paradigm shift rather than hype. She examines four categories of evidence: academic benchmarks, third-party surveys, startup behavior, and corporate acquisitions.\n\nAccording to the material, what makes this combination of evidence sources more compelling than any single source?",
    options: {
      A: "The sources are financially independent and reach the same conclusion through separate incentive structures",
      B: "Each source uses different AI models, proving platform independence",
      C: "The data was collected using identical methodologies across all four categories",
      D: "Each source measures a different aspect of the same proprietary AI system"
    },
    correctAnswer: "A",
    explanation: "The material explicitly describes \"convergent validation\" — independent sources reaching the same conclusion. Academic benchmarks, third-party research, startup economics, and financial decisions each come from separate stakeholder groups with different incentives. When all independently converge on the same signal, it reduces the chance of coordinated hype."
  },
  {
    id: 2,
    text: "Scenario: A developer named Tina has been building a customer support chatbot for three weeks using Claude Code. The prototype handles 80% of queries well, but requirements keep shifting as she discovers new edge cases. Her manager asks whether to continue iterating or invest in building a production Custom Agent.\n\nBased on the Agent Maturity Model, which diagnostic signal most strongly indicates Tina should remain in the incubation phase?",
    options: {
      A: "The prototype resolves most queries but latency exceeds production targets",
      B: "Requirements continue to change as new patterns emerge from testing",
      C: "The team has identified specific tools and guardrails the agent will need",
      D: "The cost per query is higher than the projected production budget allows"
    },
    correctAnswer: "B",
    explanation: "The material states you should stay in incubation when \"Requirements keep changing as I learn more\" and you're \"still discovering the problem shape.\" Shifting requirements are the primary signal that premature specialization would solve the wrong problem."
  },
  {
    id: 3,
    text: "Scenario: An enterprise team is debugging a recurring issue where their AI coding agent produces inconsistent outputs across sessions. On Monday it generates JWT-based authentication; on Wednesday, given an identical prompt, it generates session cookies. A junior developer suggests the model has \"forgotten\" the Monday decision.\n\nWhich combination of LLM constraints explains both the inconsistency and why the junior developer's framing is incorrect?",
    options: {
      A: "Limited context and probabilistic output — the model never stored the Monday session",
      B: "Statelessness and probabilistic nature — each session starts fresh and identical inputs produce variable outputs",
      C: "Probabilistic nature and limited context — randomness compounds with missing information",
      D: "Statelessness and limited context — the model cannot remember and was never briefed"
    },
    correctAnswer: "B",
    explanation: "Statelessness means the model has zero memory of Monday — it didn't \"forget\" because it never remembered. The probabilistic nature means identical inputs produce different outputs. Together these explain both the inconsistency and why \"forgetting\" is the wrong mental model."
  },
  {
    id: 4,
    text: "Scenario: A project manager calculates her team spends 140 hours per release traditionally: 20h planning, 80h coding, 30h testing, 10h deploying. She wants to adopt AI-orchestrated development but is skeptical about where time savings come from.\n\nAccording to the material, which phase experiences the smallest proportional time reduction, and why?",
    options: {
      A: "Planning — because requirements gathering and stakeholder judgment remain fundamentally human tasks",
      B: "Deployment — because infrastructure configuration was already largely automated",
      C: "Coding — because AI generates boilerplate but developers still architect",
      D: "Testing — because AI cannot understand business requirements well enough to test"
    },
    correctAnswer: "A",
    explanation: "The material shows planning stays at 20 hours in both models (AI only \"helps with specification\"). Coding drops 90% (80→8h), testing 90% (30→3h), deployment 80% (10→2h). Planning has the smallest reduction because it is fundamentally a judgment activity."
  },
  {
    id: 5,
    text: "Scenario: A healthcare compliance consultant named Marcus has 15 years of HIPAA audit experience. He builds a Digital FTE that automates compliance auditing. A generic AI startup launches a competing product that handles 90% of standard tasks but misses the nuanced 10%. The competitor improves their model to cover 95%.\n\nWhat does the material suggest happens to Marcus's competitive position as the generic tool improves?",
    options: {
      A: "His advantage shrinks proportionally as the generic tool improves",
      B: "His advantage strengthens because the remaining expert insight becomes more valuable as commodity work is automated",
      C: "His advantage disappears because customers only need the commodity coverage",
      D: "His advantage stays the same because the 10% moat is fixed regardless of competitor improvements"
    },
    correctAnswer: "B",
    explanation: "The material describes the \"10% moat\" as context-aware insights that generic AI cannot replicate. As generic tools commoditize standard work, the premium expertise becomes relatively more valuable. Specialists win through compounding improvement, regulatory moats, and switching costs."
  },
  {
    id: 6,
    text: "Scenario: A fintech startup evaluates the MCP architecture for their AI trading assistant. They need: (1) read market data from Bloomberg, (2) execute trades within risk parameters, and (3) follow reusable qualification checklists. An engineer maps each to MCP primitives.\n\nWhich mapping correctly assigns all three requirements to MCP's three universal primitives?",
    options: {
      A: "Resources for market data, Tools for trade execution, Prompts for checklists",
      B: "Prompts for market data, Tools for trade execution, Resources for checklists",
      C: "Resources for market data, Prompts for trade execution, Tools for checklists",
      D: "Tools for market data, Resources for trade execution, Prompts for checklists"
    },
    correctAnswer: "A",
    explanation: "Resources are read-only data (\"eyes\"), Tools change state (\"hands\"), Prompts are reusable templates (\"playbooks\"). Market data is read-only (Resource), executing trades changes state (Tool), checklists are reusable templates (Prompt)."
  },
  {
    id: 7,
    text: "Scenario: An AI consultancy prices a Digital SDR at $1,500/month subscription. A new enterprise client wants a success-fee model instead: $0 for months 1-2 during tuning, then $500 per qualified lead afterward.\n\nHow many leads per month must the agent qualify in month 3 to match the subscription model's cumulative 3-month revenue per client?",
    options: {
      A: "5 leads per month",
      B: "9 leads per month",
      C: "7 leads per month",
      D: "3 leads per month"
    },
    correctAnswer: "B",
    explanation: "Subscription: $1,500 × 3 = $4,500. Success-fee: $0 + $0 + (X × $500). To match: X × $500 = $4,500 → X = 9 leads."
  },
  {
    id: 8,
    text: "Scenario: A team lead reviews the Snakes and Ladders framework. She has deep expertise in insurance claims processing and 12 years of industry experience. She considers either building a consumer-facing general chatbot (Layer 1) or a vertical claims processing agent (Layer 3).\n\nWhat does the material predict if she competes at Layer 1?",
    options: {
      A: "She will succeed because consumer markets have higher volume",
      B: "She will succeed initially but lose once hyperscalers copy her product",
      C: "She will fail because Layer 1 is a two-player game between hyperscalers, and solo entrepreneurs cannot compete on consumer mindshare",
      D: "She will gain early traction but lack infrastructure to scale beyond 10,000 users"
    },
    correctAnswer: "C",
    explanation: "The material warns: \"Do not compete here as a solo entrepreneur. You will lose.\" Layer 1 is a \"brutal, expensive war for consumer mindshare\" between OpenAI and Google."
  },
  {
    id: 9,
    text: "Scenario: An engineering manager implements SDD. Developer X writes specifications first and iterates once. Developer Y skips specs, prompts AI directly, and iterates 5-7 times. Both eventually ship working code.\n\nWhat is the most significant long-term consequence of Developer Y's approach?",
    options: {
      A: "Developer Y accumulates invisible technical debt because AI amplifies vague requirements into confident-looking but subtly incorrect code",
      B: "Developer Y's features are more creative from unconstrained AI generation",
      C: "Developer Y produces equivalent quality because modern AI infers specifications from conversation",
      D: "Developer Y ships faster because rapid iteration compensates for missing specs"
    },
    correctAnswer: "A",
    explanation: "The material calls this \"Vibe Coding\" and warns: AI amplifies bad habits. Under Vibe Coding, \"each iteration introduces subtle bugs, technical debt compounds invisibly, the codebase becomes unmaintainable.\""
  },
  {
    id: 10,
    text: "Scenario: A systems architect designs context engineering for an AI agent on a 50,000-line codebase. She front-loads critical constraints at the top of her specification.\n\nWhat failure mode is she defending against?",
    options: {
      A: "If context is truncated, critical requirements at the top survive while lower-priority items at the bottom are lost",
      B: "The agent caches the first 1,000 tokens permanently while discarding the rest",
      C: "The agent refuses to process specifications exceeding a token threshold",
      D: "Front-loading ensures the agent processes requirements in priority order"
    },
    correctAnswer: "A",
    explanation: "The material states: \"Front-load the most important constraints. If context is truncated, critical requirements at the top survive while nice-to-haves at the bottom may be lost.\""
  },
  {
    id: 11,
    text: "Scenario: A company expects 5,000 onboarding sessions per day with strict compliance requirements. Vendor A offers a General Agent (Claude Code), Vendor B offers a Custom Agent (OpenAI Agents SDK) with hard-coded guardrails.\n\nWhich approach is better and why?",
    options: {
      A: "Vendor A — General Agents adapt to unexpected onboarding variations",
      B: "Vendor B — Custom Agents provide deterministic, guardrail-enforced behavior for high-volume compliance workloads",
      C: "Vendor A — General Agents cost less per request at high volume",
      D: "Vendor B — Custom Agents have larger context windows for tracking sessions"
    },
    correctAnswer: "B",
    explanation: "Custom Agents are purpose-built for \"reliability, speed, and governance.\" At 5,000 sessions/day with compliance needs, consistent, guardrail-enforced behavior is essential."
  },
  {
    id: 12,
    text: "Scenario: A developer's AI agent used bcrypt on Monday but proposes argon2 on Tuesday in a new session, creating incompatibility.\n\nWhich practice from the material would have prevented this?",
    options: {
      A: "Maintaining a PROJECT_CONTEXT.md that captures architecture decisions and gets injected at session start",
      B: "Increasing the context window to fit Monday's session",
      C: "Running both sessions in the same terminal window",
      D: "Using TDD to define password hashing as a test constraint"
    },
    correctAnswer: "A",
    explanation: "The material prescribes: \"Maintain a PROJECT_CONTEXT.md file that captures critical decisions. This becomes your 'state injection' for new sessions.\""
  },
  {
    id: 13,
    text: "Scenario: A team has mastered 6 of 9 AIDD pillars but skips Composable Skills, SDD, and Cloud Deployment. Applications break frequently in production.\n\nWhy do the three missing pillars specifically cause production failures?",
    options: {
      A: "The missing pillars are optional enhancements",
      B: "Skills and SDD are only relevant during incubation",
      C: "SDD prevents requirement drift, Skills provide domain deployment patterns, and Cloud Deployment standardizes infrastructure",
      D: "All nine pillars contribute equally, so missing three creates one-third less capability"
    },
    correctAnswer: "C",
    explanation: "The material describes a system effect where pillars amplify each other. SDD \"orchestrates all other pillars.\" Missing these three creates the \"brittle in others\" pattern from the comparison table."
  },
  {
    id: 14,
    text: "Scenario: An enterprise sales team pitches a Digital FTE to a hospital COO. She asks why she should buy from a small consultancy rather than using generic AI tools.\n\nWhich two factors most effectively address the COO's concern?",
    options: {
      A: "Domain expertise in healthcare regulations and outcome-based pricing tied to measurable results",
      B: "Broader AI model selection and better UI design",
      C: "Lower pricing and faster deployment than generic tools",
      D: "More API integrations and higher SWE-bench scores"
    },
    correctAnswer: "A",
    explanation: "Domain expertise (#4) and outcome-based pricing (#6) are among the six core enterprise selection factors. The COO cares about business outcomes and industry competence."
  },
  {
    id: 15,
    text: "Scenario: A startup founder evaluates Predictive AI, Generative AI, and Agentic AI. Her system uses Generative AI to draft replies when a human clicks \"suggest reply.\" She wants autonomous ticket handling.\n\nWhat is the fundamental change required to move from Generative to Agentic AI?",
    options: {
      A: "Implementing faster inference below 2 seconds",
      B: "Shifting from AI that generates on command to AI that autonomously initiates, coordinates, and completes workflows",
      C: "Upgrading to a larger language model",
      D: "Adding a fine-tuned model for customer service conversations"
    },
    correctAnswer: "B",
    explanation: "The material states: \"Earlier AI waited for commands. Agentic AI initiates, coordinates, and completes workflows autonomously.\""
  },
  {
    id: 16,
    text: "Scenario: A developer transitions to the Orchestrator role. She discovers a SQL injection vulnerability in AI-generated authentication code during code review.\n\nWhich SDLC phase does this validation belong to?",
    options: {
      A: "Coding — because the developer's role during this phase is validating AI output against security requirements",
      B: "Operations — vulnerabilities are found in production",
      C: "Testing — SQL injection is detected through automated suites",
      D: "Planning — the spec should have excluded SQL injection"
    },
    correctAnswer: "A",
    explanation: "The material describes the Coding phase's human judgment focus: \"Does this implementation match requirements? Are there security issues?\""
  },
  {
    id: 17,
    text: "Scenario: A consulting firm's Digital SDR needs to work across Client A (Claude), Client B (ChatGPT), and Client C (Gemini). Without standards, they'd rebuild for each.\n\nWhich AAIF standard specifically solves deploying the same expertise across all three platforms?",
    options: {
      A: "Agent Skills — encode domain expertise in portable markdown files that work across any platform",
      B: "MCP — standardizes tool connectivity",
      C: "AGENTS.md — provides universal project instructions",
      D: "goose — provides a reference architecture for agents"
    },
    correctAnswer: "A",
    explanation: "Skills encode domain expertise portably. The AAIF table shows they enable \"License to clients on any platform.\" Skills are \".md files making your agents independent of any single model provider.\""
  },
  {
    id: 18,
    text: "Scenario: The $3 trillion developer economy is described as uniquely self-disrupting. A CTO argues her company can adapt gradually, like agriculture adapted to tractors.\n\nWhy does the material argue this analogy fails for software?",
    options: {
      A: "AI advances too quickly for any industry to adapt",
      B: "Agricultural disruption was faster than commonly believed",
      C: "Software disrupts itself — tools, workflows, and mental models shift simultaneously — making gradual adaptation impossible",
      D: "Software developers are more resistant to change than agricultural workers"
    },
    correctAnswer: "C",
    explanation: "\"Software is the only industry that disrupts itself. Self-disruption is faster and more complete than external disruption.\""
  },
  {
    id: 19,
    text: "Scenario: A developer working on a monorepo finds her agent reads root AGENTS.md but ignores the frontend subdirectory's AGENTS.md with React-specific rules.\n\nWhat is the most likely cause?",
    options: {
      A: "The frontend AGENTS.md is missing required YAML frontmatter",
      B: "The agent has limited context and the subdirectory file was truncated",
      C: "The agent is not applying the nearest AGENTS.md hierarchy rule and defaults to root",
      D: "The root conventions override subdirectory rules by design"
    },
    correctAnswer: "C",
    explanation: "The material specifies the nearest-file-wins hierarchy rule. If the agent isn't honoring subdirectory conventions, it's failing to apply this rule."
  },
  {
    id: 20,
    text: "Scenario: A Digital FTE processes 1,000 support queries daily at $0.002/query with 92% resolution. The remaining 8% gets escalated. A product manager wants to push to 99% by using a General Agent instead of the Custom Agent.\n\nWhat is the most likely outcome?",
    options: {
      A: "General and Custom Agents have identical per-query economics",
      B: "The higher cost and inconsistent behavior of General Agents make high-volume production economically unsustainable",
      C: "Resolution improves because General Agents have superior reasoning",
      D: "The feedback loop will automatically optimize resolution rate"
    },
    correctAnswer: "B",
    explanation: "\"Perpetual Incubation\" anti-pattern: \"Using General Agents for production workloads. You'll pay too much, get inconsistent results, and struggle with governance.\""
  },

  // Chapter 2: Markdown — Writing Instructions (Q21–Q33)
  {
    id: 21,
    text: "Scenario: A developer writes an unstructured paragraph for a weather app spec. The AI generates minimal code missing humidity, wind speed, and error handling.\n\nWhat structural element was missing that caused the AI to miss requirements?",
    options: {
      A: "The paragraph lacked bold formatting for emphasis",
      B: "The paragraph was too short for AI comprehension",
      C: "Requirements were in prose instead of distinct, countable list items",
      D: "The developer forgot to include a code block"
    },
    correctAnswer: "C",
    explanation: "The material demonstrates that without list structure, the AI \"has to guess: How many features are there?\" When restructured as bullet lists, the AI identified and implemented all features."
  },
  {
    id: 22,
    text: "Scenario: A junior developer's heading hierarchy: # Weather App, ### Features, ## Installation, #### API Reference. The team lead spots a problem.\n\nWhich specific violation is present?",
    options: {
      A: "H3 appears directly under H1 without an H2, breaking the hierarchy AI uses to infer structure",
      B: "The headings use inconsistent capitalization",
      C: "The H4 should be replaced with bold text",
      D: "The document uses too many heading levels"
    },
    correctAnswer: "A",
    explanation: "Going from H1 to H3 without H2 breaks logical hierarchy. AI uses headings as navigation landmarks; skipping levels creates ambiguity."
  },
  {
    id: 23,
    text: "Scenario: A developer uses numbered lists for features (1. Dark mode, 2. Export to PDF) and bullets for installation steps (- Install Python, - Run program). Both are incorrect.\n\nWhat is the correct assignment?",
    options: {
      A: "Both should use numbered lists for explicit ordering",
      B: "Features should use bullets (independent items); Installation should use numbers (sequential steps)",
      C: "Both should use bullets because markdown numbering is unreliable",
      D: "Features should use numbers (priority ranking); Installation should use bullets"
    },
    correctAnswer: "B",
    explanation: "The material addresses this: features \"don't have a required order\" (bullets), installation steps \"must be in the right sequence\" (numbers)."
  },
  {
    id: 24,
    text: "Scenario: Terminal commands like pip install requests appear in paragraph text without backtick formatting. The AI treats \"pip\" as natural language rather than an executable command.\n\nWhat markdown feature prevents this?",
    options: {
      A: "Inline code backticks which signal to AI that text is executable code rather than natural language",
      B: "ALL CAPS for commands",
      C: "Placing commands in a separate paragraph",
      D: "Bold formatting to visually distinguish commands"
    },
    correctAnswer: "A",
    explanation: "Backticks \"visually separate code from prose\" and create a semantic boundary telling the parser \"this is an executable command, not conversational text.\""
  },
  {
    id: 25,
    text: "Scenario: A code block uses ``` without a language tag for expected program output. The AI generates Python code instead of displaying the output.\n\nWhy did the missing tag cause this?",
    options: {
      A: "Without a tag, the AI cannot distinguish code to implement from output to display, treating all blocks as implementation targets",
      B: "The AI defaults to Python because it's the most common language",
      C: "Language tags are cosmetic and the error was unrelated",
      D: "The AI requires the output tag specifically"
    },
    correctAnswer: "A",
    explanation: "Without a tag, the AI can't determine whether the block is \"code to implement\" or \"output to display.\" A text tag signals \"plain output, not code.\""
  },
  {
    id: 26,
    text: "Scenario: A product manager writes Layer 1 (specification), AI reasons in Layer 2, generates code in Layer 3. The code doesn't match intent. She blames the AI.\n\nWhere should she look first?",
    options: {
      A: "Layer 2 — the reasoning engine may have a bug",
      B: "Layer 3 — code generation produced syntax errors",
      C: "Layer 1 — the specification probably contains ambiguity the AI interpreted differently",
      D: "The connection between layers — a transmission error corrupted the spec"
    },
    correctAnswer: "C",
    explanation: "\"If your spec is clear and structured, the AI generates accurate code. If it's vague and messy, the AI has to guess.\" Diagnosis starts with examining specification clarity."
  },
  {
    id: 27,
    text: "Scenario: A junior developer uses 15 separate ### headings in the Features section, each with a one-line description. The document feels fragmented.\n\nWhat does the material recommend?",
    options: {
      A: "Replace the 15 sub-headings with fewer headings and nested bullet lists for details",
      B: "Keep all 15 but add horizontal rules for separation",
      C: "Convert sub-headings to bold text in a numbered list",
      D: "Remove all sub-headings and write a single paragraph"
    },
    correctAnswer: "A",
    explanation: "\"Rule of thumb: Use headings for major sections, nested lists for details. If you find yourself creating 10+ Level 3 headings, consider consolidating with nested lists.\""
  },
  {
    id: 28,
    text: "Scenario: One developer writes [click here](https://docs.python.org/) while another writes [Python Official Documentation](https://docs.python.org/).\n\nWhy is the second preferred for AI-native development?",
    options: {
      A: "Descriptive link text tells both humans and AI what the resource contains without following the link",
      B: "\"Click here\" is invalid markdown syntax",
      C: "AI agents cannot follow URLs, so descriptive text is the only way they know what exists",
      D: "Search engines rank descriptive links higher"
    },
    correctAnswer: "A",
    explanation: "Descriptive text communicates resource content directly within the specification without requiring link-following."
  },
  {
    id: 29,
    text: "Scenario: An image reference has alt text \"screenshot.\" An AI processes this in a text-only workflow.\n\nWhat information does the AI lose?",
    options: {
      A: "Formatting preferences; good alt text would specify CSS styling",
      B: "Visual context about the interface; good alt text would describe what the image shows",
      C: "Nothing — images are always ignored",
      D: "Color scheme; good alt text would list RGB values"
    },
    correctAnswer: "B",
    explanation: "\"In text-based workflows, AI sees only the alt text and filename.\" Good alt text like \"Task Tracker menu showing 5 options\" conveys visual information even without the image."
  },
  {
    id: 30,
    text: "Scenario: A numbered list starts with 11. followed by 2. and 3.. It renders as 11, 12, 13.\n\nWhat causes this and what does the material recommend?",
    options: {
      A: "This is a GitHub-specific rendering bug",
      B: "Markdown requires all items to use the same number",
      C: "Markdown auto-numbers from the first item's value; the material recommends always using sequential numbers from 1 because AI agents read source files directly",
      D: "The material recommends using 11., 12., 13. explicitly"
    },
    correctAnswer: "C",
    explanation: "\"Markdown auto-numbers based on the first number. For AI-native development: Always use correct sequential numbers (1. 2. 3.) because AI agents often read the source file directly.\""
  },
  {
    id: 31,
    text: "Scenario: Expected output is tagged ```python instead of ```text. The AI attempts to execute the output as code.\n\nWhy is the tag semantically important?",
    options: {
      A: "Python-tagged blocks are auto-executed; text-tagged blocks are displayed",
      B: "Tags only affect highlighting with no AI impact",
      C: "The python tag signals code to implement; text signals output to match — the wrong tag changes the AI's interpretation of the block's purpose",
      D: "The text tag prevents AI from reading the block"
    },
    correctAnswer: "C",
    explanation: "Language tags tell AI \"which language interpreter to use.\" A python tag says \"implement this\"; text says \"this is output.\" Wrong tags cause misinterpretation."
  },
  {
    id: 32,
    text: "Scenario: A manager asks for a 25-paragraph architecture comparison writeup. The developer wonders whether to create a markdown file or answer in conversation.\n\nShould this be a file or conversational text?",
    options: {
      A: "Conversational — architecture comparisons should be discussed verbally",
      B: "File — only if the manager specifically requests .md format",
      C: "Conversational — only code specs should be files",
      D: "Markdown file — this is written content intended for use outside the conversation"
    },
    correctAnswer: "D",
    explanation: "Markdown files should be created for \"Content intended for eventual use outside the conversation (such as reports).\" A 25-paragraph comparison clearly qualifies."
  },
  {
    id: 33,
    text: "Scenario: A developer argues modern AI parses unstructured text fine and markdown is unnecessary. Her AI did generate working code from a plain paragraph.\n\nWhat is the hidden cost?",
    options: {
      A: "Unstructured text costs more tokens",
      B: "Markdown is required by AI APIs",
      C: "The AI must guess at requirement boundaries, leading to missed features and unpredictable variation across sessions",
      D: "Code will lack comments"
    },
    correctAnswer: "C",
    explanation: "The weather app comparison showed unstructured text led to missing features. \"An AI reading this has to guess: How many features are there?\" Different sessions may interpret the same paragraph differently due to probabilistic nature."
  },

  // Chapter 3: Claude Code and Cowork (Q34–Q65)
  {
    id: 34,
    text: "Scenario: An engineer gives Claude filesystem access and observes it autonomously reads files, follows imports, and explores project structure without instruction.\n\nWhat does the material call this phenomenon?",
    options: {
      A: "\"Agentic bootstrapping\" — filesystem access created a self-improving feedback loop",
      B: "\"Fine-tuning transfer\" — code-specific training activated with file access",
      C: "\"Product Overhang\" — the capability already existed inside Claude and only needed filesystem access to unlock",
      D: "\"Emergent behavior\" — Claude developed new capabilities from code repository training"
    },
    correctAnswer: "C",
    explanation: "\"Product Overhang: the capability to be a genuine development partner already existed inside Claude. It was waiting. The model didn't need to become smarter.\""
  },
  {
    id: 35,
    text: "Scenario: A developer switches from ChatGPT (copy-paste workflow) to Claude Code and notices a fundamentally different workflow.\n\nWhat is the core architectural distinction?",
    options: {
      A: "Claude Code uses a more advanced model",
      B: "Claude Code stores conversation history permanently",
      C: "Claude Code runs locally without internet",
      D: "Claude Code reads project files, proposes specific changes, executes with approval, runs tests, and iterates — eliminating copy-paste"
    },
    correctAnswer: "D",
    explanation: "\"Passive AI is a consultant on the phone. Agentic AI is a pair programmer looking at your code.\""
  },
  {
    id: 36,
    text: "Scenario: During Anthropic's internal rollout, Claude Code adoption hit 50% by day five. Engineers averaged 5 PRs/day versus the usual 1-2.\n\nWhat metric quantifies the productivity impact during scaling from 2 to 10 team members?",
    options: {
      A: "50% decrease in review time",
      B: "400% increase in code quality scores",
      C: "67% jump in pull request throughput even as the team grew 5x",
      D: "90% reduction in bug reports"
    },
    correctAnswer: "C",
    explanation: "\"Pull request throughput jumped 67% even as the team grew from two to ten people.\""
  },
  {
    id: 37,
    text: "Scenario: A developer has both CLAUDE.md and AGENTS.md. The project uses TypeScript strict mode, has Claude-specific deployment skills, and requires all agents to follow kebab-case naming.\n\nWhich content goes in which file?",
    options: {
      A: "Everything goes in CLAUDE.md",
      B: "AGENTS.md is only for OpenAI tools",
      C: "Both files should contain identical content",
      D: "TypeScript conventions and kebab-case in AGENTS.md (universal); Claude-specific skills in CLAUDE.md, which references AGENTS.md"
    },
    correctAnswer: "D",
    explanation: "Universal context in AGENTS.md; Claude-specific features in CLAUDE.md. The recommended approach: reference AGENTS.md from CLAUDE.md."
  },
  {
    id: 38,
    text: "Scenario: A SKILL.md has a description \"A skill for notes.\" When she asks Claude to process meeting notes, the skill isn't activated.\n\nWhat is wrong?",
    options: {
      A: "The description is too vague — it should include specific trigger phrases like \"meeting transcript\" or \"action items\" so Claude can match user requests",
      B: "The description should include the full procedure",
      C: "The description is too short for valid YAML",
      D: "Descriptions must use imperative mood"
    },
    correctAnswer: "A",
    explanation: "\"The description determines when Claude activates your skill.\" It must be specific enough for Claude to match against user requests. \"A skill for notes\" provides no matching criteria."
  },
  {
    id: 39,
    text: "Scenario: 5 MCP servers consume 35,000+ tokens of context before any question is asked.\n\nWhat mechanism addresses this?",
    options: {
      A: "MCP Connection Pooling (50% reduction through shared channels)",
      B: "MCP Compression (binary format, 70% reduction)",
      C: "MCP Caching (local files that don't count against context)",
      D: "MCP Tool Search — automatic lazy loading achieving ~85% reduction by deferring tool definitions until needed"
    },
    correctAnswer: "D",
    explanation: "MCP Tool Search: \"Instead of loading all tools upfront, Claude searches for relevant tools on-demand. ~85% automatic reduction in MCP overhead.\""
  },
  {
    id: 40,
    text: "Scenario: Three settings files exist. A new team member clones the repo.\n\nWhat do they inherit automatically?",
    options: {
      A: "All three levels because Git tracks everything",
      B: "Nothing — all settings are outside the repo",
      C: "User-level settings from a shared team server",
      D: "Project-level settings from the repository; they must configure user-level and local-level personally"
    },
    correctAnswer: "D",
    explanation: "Project settings (.claude/settings.json) are in the repo and version-controlled. User settings are personal. Local settings are machine-specific."
  },
  {
    id: 41,
    text: "Scenario: A hook is configured on PreToolUse to block file writes containing API keys. The developer considers switching to PostToolUse.\n\nWhat changes?",
    options: {
      A: "Pre and Post hooks have identical capabilities",
      B: "PostToolUse hooks can't access file content",
      C: "The API key would already be written before the hook fires — it detects but can't prevent",
      D: "The hook would trigger an infinite loop"
    },
    correctAnswer: "C",
    explanation: "PreToolUse fires before the action; PostToolUse fires after. Switching means the write happens before the check."
  },
  {
    id: 42,
    text: "Scenario: Ralph Wiggum Loop with --completion-promise '0 problems' and --max-iterations 20. After 15 iterations, linter shows \"0 problems found\" in Claude's response.\n\nWill the loop stop?",
    options: {
      A: "No — it only checks linter's raw output",
      B: "Yes — it uses semantic matching",
      C: "No — it always runs all iterations",
      D: "Yes — it searches Claude's response text for the exact completion promise string"
    },
    correctAnswer: "D",
    explanation: "The Stop hook \"Checks if --completion-promise text appears in Claude's output\" using exact string matching. If Claude's response contains \"0 problems,\" the match triggers."
  },
  {
    id: 43,
    text: "Scenario: A non-technical marketing manager needs to create a quarterly report from data files. She has never used a terminal.\n\nWhich tool should she use?",
    options: {
      A: "Claude Code — it handles documents better",
      B: "Cowork — same agentic capabilities through a desktop GUI without terminal skills",
      C: "Claude Code — Cowork can't access the filesystem",
      D: "Neither — she should use Claude web chat"
    },
    correctAnswer: "B",
    explanation: "Cowork provides \"the same agent architecture, the same filesystem access\" via desktop GUI. It targets \"Knowledge Workers\" for \"Documents, data, organization.\""
  },
  {
    id: 44,
    text: "Scenario: A subagent can't access the main agent's conversation or modify its files.\n\nWhy is this isolation a design feature?",
    options: {
      A: "Technical API limitations prevent sharing",
      B: "Isolation is temporary and will be removed",
      C: "It prevents memory leaks between processes",
      D: "Subagents in separate contexts prevent uncontrolled interactions — a subagent modifying main agent files would create unpredictable side effects"
    },
    correctAnswer: "D",
    explanation: "Isolation prevents a research subagent from accidentally modifying production code. Controlled boundaries prevent cascading failures."
  },
  {
    id: 45,
    text: "Scenario: Compiling MCP into Skills achieves 98% token reduction. A colleague argues they should always compile and never use MCP directly.\n\nWhen should MCP be used directly?",
    options: {
      A: "When the server has more than 10 tools",
      B: "For simple, infrequent queries where overhead is acceptable and compilation effort isn't justified",
      C: "When the server is from an untrusted source",
      D: "Direct MCP should always be avoided"
    },
    correctAnswer: "B",
    explanation: "\"Simple, infrequent? → Let Tool Search handle it.\" \"One-off query → Direct MCP → Overhead acceptable for single use.\""
  },
  {
    id: 46,
    text: "Scenario: A developer needs temporary .env file access for debugging but the project-level settings deny it.\n\nHow should she configure this without affecting team policy?",
    options: {
      A: "Modify project settings then revert later",
      B: "Add an allow rule in .claude/settings.local.json which overrides project deny only on her machine",
      C: "Local settings cannot override project deny rules",
      D: "Create a CLAUDE.md file granting permission"
    },
    correctAnswer: "B",
    explanation: "Local settings are for \"Temporary overrides (you need different settings just for today)\" and apply to \"this project only, on your machine only.\""
  },
  {
    id: 47,
    text: "Scenario: A large reference dataset is needed for only 10% of a skill's activations. Three-level loading is available.\n\nAt which level should it be stored?",
    options: {
      A: "Level 1 — available immediately",
      B: "Level 2 — loads on every activation",
      C: "Outside the skill folder via MCP",
      D: "Level 3 — supporting file loaded only when referenced, keeping 90% of activations lean"
    },
    correctAnswer: "D",
    explanation: "Level 3 loads on-demand, so the 90% of activations that don't need the data remain lean."
  },
  {
    id: 48,
    text: "Scenario: A team lead considers writing \"Always run tests after modifying Python files\" in CLAUDE.md versus configuring a PostToolUse hook that runs pytest after any .py write.\n\nWhat's the critical difference?",
    options: {
      A: "CLAUDE.md rules and hooks are equally reliable",
      B: "The CLAUDE.md instruction is probabilistic (LLM might skip it); the hook is a programmatic guarantee that executes independently of Claude's reasoning",
      C: "CLAUDE.md is more reliable because it's read every session",
      D: "Hooks are less reliable because Claude must interpret them"
    },
    correctAnswer: "B",
    explanation: "CLAUDE.md instructions are followed through probabilistic reasoning. Hooks execute deterministically as shell scripts, independent of Claude's reasoning."
  },
  {
    id: 49,
    text: "Scenario: A freelance developer's \"contract review\" SKILL.md encodes 8 years of legal expertise. A competitor tries to replicate it through prompting.\n\nWhy can't the competitor replicate the value?",
    options: {
      A: "SKILL.md uses encryption preventing duplication",
      B: "Skills use a proprietary API",
      C: "The competitor's model lacks legal training data",
      D: "Skills are persistent, reusable expertise assets encoding procedures and edge cases; prompts are transient one-time events that cannot encode accumulated expertise"
    },
    correctAnswer: "D",
    explanation: "\"Skills are reusable assets; good prompts are one-time events.\" Domain expertise encoding cannot be replicated by a single prompt."
  },
  {
    id: 50,
    text: "Scenario: Ralph Wiggum Loop with --completion-promise \"ALL TESTS PASS\". After 8 iterations, Claude's output reads \"All tests pass — no failures.\" The loop continues.\n\nWhy didn't the loop stop?",
    options: {
      A: "The loop has a 10-iteration warm-up period",
      B: "The loop only checks at even-numbered iterations",
      C: "Max-iterations overrides the completion promise",
      D: "Exact string matching — \"ALL TESTS PASS\" doesn't match \"All tests pass\" due to case difference"
    },
    correctAnswer: "D",
    explanation: "\"Exact string matching — there's no dynamic adaptation or smart detection.\" Case matters."
  },
  {
    id: 51,
    text: "Scenario: A project has CLAUDE.md, skills folder, and two MCP servers. The developer removes the skills folder.\n\nWhat capability is lost?",
    options: {
      A: "Claude loses domain-specific procedures, falling back to generic behavior each session",
      B: "Claude can no longer read CLAUDE.md",
      C: "Claude loses database and Slack access",
      D: "Claude loses MCP connectivity"
    },
    correctAnswer: "A",
    explanation: "Skills = \"Claude knows YOUR PROCEDURES.\" Without skills, \"Claude repeats itself.\" Project context and MCP still work."
  },
  {
    id: 52,
    text: "Scenario: A product manager expects extensive prompt engineering to make Claude explore codebases. But filesystem access alone unlocks the behavior.\n\nWhat principle does this illustrate?",
    options: {
      A: "AI models require custom training for new capabilities",
      B: "Filesystem access is a form of fine-tuning",
      C: "Latent capabilities can be unlocked by changing the product interface rather than the model — access was the missing ingredient, not intelligence",
      D: "Claude was specifically trained on code exploration tasks"
    },
    correctAnswer: "C",
    explanation: "\"Product Overhang\" — product design unlocked existing capabilities without model changes."
  },
  {
    id: 53,
    text: "Scenario: A developer compares official Claude Code ($20/month) with the free setup using Claude Code Router and Gemini's free tier.\n\nWhat is the key architectural difference?",
    options: {
      A: "The free path doesn't support skills or MCP",
      B: "The official path provides larger context windows",
      C: "The free path runs entirely offline",
      D: "The official path uses Anthropic's models directly; the free path routes through any LLM backend via a production-grade router"
    },
    correctAnswer: "D",
    explanation: "\"Official path uses Anthropic's Claude models. Free path uses Claude Code's agentic architecture with any LLM backend through production-grade API routing.\" Both support identical features."
  },
  {
    id: 54,
    text: "Scenario: Agent A researches competitors, Agent B analyzes sales data, Agent C synthesizes both into a strategy document. C must wait for A and B.\n\nHow do agents coordinate?",
    options: {
      A: "Agents communicate through a shared memory bus",
      B: "Agents coordinate through the filesystem — earlier agents write output files that later agents read, with the developer managing sequence",
      C: "The Claude API provides agent-to-agent messaging",
      D: "A central coordinator agent accesses all contexts"
    },
    correctAnswer: "B",
    explanation: "Agent teams are separate sessions coordinated through filesystem artifacts. The developer orchestrates the sequence."
  },
  {
    id: 55,
    text: "Scenario: Claude's OODA Loop: Observe error → Orient to root cause → Decide where to look → Act by reading files → Correct if the fix fails.\n\nWhat distinguishes this from passive AI debugging?",
    options: {
      A: "The OODA Loop uses a more advanced model",
      B: "Passive AI has no internet access",
      C: "Passive AI works faster without file reading",
      D: "Passive AI provides a single suggestion and stops; the OODA Loop cycles continuously until the problem is solved"
    },
    correctAnswer: "D",
    explanation: "Passive AI: \"Single response.\" OODA Loop: \"Loops until goal is achieved. Tests its work, fixes mistakes.\""
  },
  {
    id: 56,
    text: "Scenario: Some developers disable safety checks via local settings. The security team wants non-overridable deny rules.\n\nHow to enforce?",
    options: {
      A: "User-level settings for global application",
      B: "Deploy external monitoring",
      C: "Project-level deny rules, which are additive across levels and cannot be overridden by more specific levels",
      D: "There is no way to prevent overrides"
    },
    correctAnswer: "C",
    explanation: "Deny rules at project level function as a security floor. The settings hierarchy prevents local settings from removing project deny rules."
  },
  {
    id: 57,
    text: "Scenario: A compiled skill wraps Playwright MCP. Instead of JSON-RPC requests, Python code calls Playwright directly.\n\nWhere do token savings come from?",
    options: {
      A: "The skill uses a smaller language model",
      B: "Tool definitions are eliminated from context — Claude doesn't need schemas when Python handles API calls locally",
      C: "The skill caches previous responses",
      D: "Markdown is compressed to binary"
    },
    correctAnswer: "B",
    explanation: "With compiled skills, \"Claude doesn't need tool schemas because code handles API calls directly.\" This eliminates 5,000-12,000 tokens per server."
  },
  {
    id: 58,
    text: "Scenario: A workflow runs 500x/day with strict compliance. Should it be a Skill or a Custom Agent (SDK-built)?\n\nWhen does building a Custom Agent remain necessary despite skills?",
    options: {
      A: "Always — skills can't handle production",
      B: "When the skill exceeds 1,000 lines",
      C: "Only when the workflow needs internet access",
      D: "When hard-coded guardrails, deterministic behavior, and production-scale reliability exceed what skills' probabilistic execution can guarantee"
    },
    correctAnswer: "D",
    explanation: "500 daily executions with compliance maps to Custom Agents: \"Users depend on consistent behavior\" and \"enforce specific constraints.\" Skills operate through probabilistic LLM; Custom Agents encode guardrails deterministically."
  },
  {
    id: 59,
    text: "Scenario: Developer enters claude in her project with CLAUDE.md, three skills, and two MCP servers.\n\nWhat happens at startup?",
    options: {
      A: "Claude scans the entire codebase and memorizes every file",
      B: "Claude downloads model weights optimized for the tech stack",
      C: "Claude reads CLAUDE.md for context, loads Level 1 skill metadata, and connects to MCP servers — all before the first prompt",
      D: "Claude authenticates with GitHub for commit history"
    },
    correctAnswer: "C",
    explanation: "CLAUDE.md auto-loads; Level 1 skill metadata loads at startup; MCP servers establish connections — all before the first prompt."
  },
  {
    id: 60,
    text: "Scenario: A SKILL.md must work across Claude Code, Codex CLI, and Gemini CLI.\n\nWhat enables portability and what changes?",
    options: {
      A: "Each vendor requires a different format; portability isn't possible",
      B: "The SKILL.md format is universal — only the directory path changes between vendors",
      C: "Skills must be rewritten in vendor-specific templates",
      D: "SKILL.md must be converted to JSON for non-Claude platforms"
    },
    correctAnswer: "B",
    explanation: "\"You can port it by moving the SKILL.md file to a different directory.\" The format is universal; directory paths differ."
  },
  {
    id: 61,
    text: "Scenario: A healthcare startup connects MCP to their patient database. A security auditor flags the risk.\n\nWhat is the recommended approach?",
    options: {
      A: "MCP is inherently secure",
      B: "Encrypt all MCP communications with custom certificates",
      C: "Don't use MCP for sensitive data — use local file access instead; treat MCP servers like any third-party dependency",
      D: "Only use MCP during monitored business hours"
    },
    correctAnswer: "C",
    explanation: "\"Don't use MCP for private/sensitive data.\" \"Better approach: Use local file access.\" Apply same caution as third-party dependencies."
  },
  {
    id: 62,
    text: "Scenario: A developer switches from plan mode (review before execution) to acceptEdits mode. Claude writes to a critical config file, breaking the build.\n\nWhat does this illustrate?",
    options: {
      A: "acceptEdits is always unsafe",
      B: "Permission mode should match task risk — plan mode provides review that acceptEdits bypasses, trading safety for speed",
      C: "The build break was unrelated to permissions",
      D: "acceptEdits only affects read operations"
    },
    correctAnswer: "B",
    explanation: "Permission modes are configurable safety levels. Using a permissive mode for sensitive operations removes the review checkpoint."
  },
  {
    id: 63,
    text: "Scenario: A \"tax preparation\" skill serves 200 clients at $500/month with $2,000/month maintenance.\n\nWhat is the monthly profit and economic principle?",
    options: {
      A: "$200,000/month — each client generates $1,000 profit",
      B: "$98,000/month — illustrating the subscription model where encoded expertise scales at near-zero marginal cost per additional client",
      C: "$48,000/month — illustrating 50/50 marketplace splits",
      D: "$100,000/month revenue — illustrating zero-cost scaling"
    },
    correctAnswer: "B",
    explanation: "Revenue = 200 × $500 = $100,000. Cost = $2,000. Profit = $98,000. Encoded expertise scales at near-zero marginal cost."
  },
  {
    id: 64,
    text: "Scenario: SWE-bench Verified shows Claude Opus 4.5 at 80.9%, GPT-5.2 at 80.0%. A developer concludes Claude is definitively best. A colleague notes GPT-5.3-Codex scores 56.8% on a different variant.\n\nWhy does the material caution against this conclusion?",
    options: {
      A: "Scores are too close for statistical significance",
      B: "SWE-bench only tests JavaScript",
      C: "Scores are from different time periods",
      D: "Different variants (Verified vs Pro) have different difficulty levels, making cross-variant comparison invalid — plus scores are self-reported"
    },
    correctAnswer: "D",
    explanation: "\"Companies report scores on different benchmark variants, making direct comparisons tricky. GPT-5.3-Codex scores 56.8% on SWE-bench Pro — which is a harder test, not a worse score.\""
  },
  {
    id: 65,
    text: "Scenario: A professional accountant with no coding experience wants to create a skill for quarterly financial reporting. She has 15 years of GAAP expertise but feels excluded because she thinks skills require programming.\n\nWhy is she well-positioned to create high-value skills?",
    options: {
      A: "Skills require Python proficiency",
      B: "She can only use pre-built marketplace skills",
      C: "Non-technical users must use Cowork, which doesn't support skills",
      D: "Skills are markdown files encoding procedures, not code — her accounting expertise is the scarce, high-value input that anyone who can write instructions can encode"
    },
    correctAnswer: "D",
    explanation: "\"Skills are intentionally simple (folders) to enable universal adoption\" and \"Non-technical users can create high-value skills.\" Her GAAP expertise is the \"10% moat\" that generic AI cannot replicate."
  }
];
