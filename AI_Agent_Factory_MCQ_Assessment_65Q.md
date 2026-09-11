# AI Agent Factory Paradigm — Scenario-Based MCQ Assessment

**Total Questions: 65 | Time: 90 minutes | Difficulty: Advanced Graduate (MIT-Level)**

**Distribution:** Chapter 1 (Q1–Q20) | Chapter 2 (Q21–Q33) | Chapter 3 (Q34–Q65)

---

## Chapter 1: The AI Agent Factory Paradigm (20 MCQs)

---

Q1. Scenario: A startup CTO discovers that 84% of developers use AI coding tools and the DORA report shows 90% adoption among enterprises. She wants to validate whether this signals a genuine paradigm shift rather than hype. She examines four categories of evidence: academic benchmarks, third-party surveys, startup behavior, and corporate acquisitions.
Question: According to the material, what makes this combination of evidence sources more compelling than any single source?
A) The sources are financially independent and reach the same conclusion through separate incentive structures
B) Each source uses different AI models, proving platform independence
C) The data was collected using identical methodologies across all four categories
D) Each source measures a different aspect of the same proprietary AI system
Correct: A)
Explanation:
- Why correct: The material explicitly describes "convergent validation" — independent sources reaching the same conclusion. Academic benchmarks, third-party research, startup economics, and financial decisions each come from separate stakeholder groups with different incentives. When all independently converge on the same signal, it reduces the chance of coordinated hype.
- Why others are wrong:
  - B: The argument is about independence of evidence sources, not platform independence of AI models
  - C: The sources use entirely different methodologies; identical methods would actually weaken the argument
  - D: The sources measure different domains, not a single system

---

Q2. Scenario: A developer named Tina has been building a customer support chatbot for three weeks using Claude Code. The prototype handles 80% of queries well, but requirements keep shifting as she discovers new edge cases. Her manager asks whether to continue iterating or invest in building a production Custom Agent.
Question: Based on the Agent Maturity Model, which diagnostic signal most strongly indicates Tina should remain in the incubation phase?
A) The prototype resolves most queries but latency exceeds production targets
B) Requirements continue to change as new patterns emerge from testing
C) The team has identified specific tools and guardrails the agent will need
D) The cost per query is higher than the projected production budget allows
Correct: B)
Explanation:
- Why correct: The material states you should stay in incubation when "Requirements keep changing as I learn more" and you're "still discovering the problem shape." Shifting requirements are the primary signal that premature specialization would solve the wrong problem.
- Why others are wrong:
  - A: Latency is a production optimization concern, not an indicator of requirement instability
  - C: Having identified tools and guardrails actually suggests readiness for specialization
  - D: Higher cost is expected during incubation; it's a reason to eventually specialize, not to stay

---

Q3. Scenario: An enterprise team is debugging a recurring issue where their AI coding agent produces inconsistent outputs across sessions. On Monday it generates JWT-based authentication; on Wednesday, given an identical prompt, it generates session cookies. A junior developer suggests the model has "forgotten" the Monday decision.
Question: Which combination of LLM constraints explains both the inconsistency and why the junior developer's framing is incorrect?
A) Limited context and probabilistic output — the model never stored the Monday session
B) Statelessness and probabilistic nature — each session starts fresh and identical inputs produce variable outputs
C) Probabilistic nature and limited context — randomness compounds with missing information
D) Statelessness and limited context — the model cannot remember and was never briefed
Correct: B)
Explanation:
- Why correct: Statelessness means the model has zero memory of Monday — it didn't "forget" because it never remembered. The probabilistic nature means identical inputs produce different outputs. Together these explain both the inconsistency and why "forgetting" is the wrong mental model.
- Why others are wrong:
  - A: Limited context isn't the primary issue; statelessness alone prevents cross-session memory
  - B: This pair doesn't address why the "forgotten" framing is specifically wrong
  - D: The inconsistency between sessions is due to probabilistic outputs, not just limited context

---

Q4. Scenario: A project manager calculates her team spends 140 hours per release traditionally: 20h planning, 80h coding, 30h testing, 10h deploying. She wants to adopt AI-orchestrated development but is skeptical about where time savings come from.
Question: According to the material, which phase experiences the smallest proportional time reduction, and why?
A) Planning — because requirements gathering and stakeholder judgment remain fundamentally human tasks
B) Deployment — because infrastructure configuration was already largely automated
C) Coding — because AI generates boilerplate but developers still architect
D) Testing — because AI cannot understand business requirements well enough to test
Correct: A)
Explanation:
- Why correct: The material shows planning stays at 20 hours in both models (AI only "helps with specification"). Coding drops 90% (80→8h), testing 90% (30→3h), deployment 80% (10→2h). Planning has the smallest reduction because it is fundamentally a judgment activity.
- Why others are wrong:
  - A: Testing drops significantly (30→3h) as AI generates test cases from specifications
  - B: Deployment drops from 10 to 2 hours (80%), larger than planning's near-zero reduction
  - C: Coding shows the largest absolute reduction (80→8h)

---

Q5. Scenario: A healthcare compliance consultant named Marcus has 15 years of HIPAA audit experience. He builds a Digital FTE that automates compliance auditing. A generic AI startup launches a competing product that handles 90% of standard tasks but misses the nuanced 10%. The competitor improves their model to cover 95%.
Question: What does the material suggest happens to Marcus's competitive position as the generic tool improves?
A) His advantage shrinks proportionally as the generic tool improves
B) His advantage strengthens because the remaining expert insight becomes more valuable as commodity work is automated
C) His advantage disappears because customers only need the commodity coverage
D) His advantage stays the same because the 10% moat is fixed regardless of competitor improvements
Correct: B)
Explanation:
- Why correct: The material describes the "10% moat" as context-aware insights that generic AI cannot replicate. As generic tools commoditize standard work, the premium expertise becomes relatively more valuable. Specialists win through compounding improvement, regulatory moats, and switching costs.
- Why others are wrong:
  - A: The moat doesn't shrink linearly; domain expertise becomes more differentiated as commodity layers expand
  - B: In regulated verticals like healthcare, the expert 10% catches compliance violations — precisely what matters most
  - D: The advantage actively strengthens, not remains static

---

Q6. Scenario: A fintech startup evaluates the MCP architecture for their AI trading assistant. They need: (1) read market data from Bloomberg, (2) execute trades within risk parameters, and (3) follow reusable qualification checklists. An engineer maps each to MCP primitives.
Question: Which mapping correctly assigns all three requirements to MCP's three universal primitives?
A) Resources for market data, Tools for trade execution, Prompts for checklists
B) Prompts for market data, Tools for trade execution, Resources for checklists
C) Resources for market data, Prompts for trade execution, Tools for checklists
D) Tools for market data, Resources for trade execution, Prompts for checklists
Correct: A)
Explanation:
- Why correct: Resources are read-only data ("eyes"), Tools change state ("hands"), Prompts are reusable templates ("playbooks"). Market data is read-only (Resource), executing trades changes state (Tool), checklists are reusable templates (Prompt).
- Why others are wrong:
  - A: Reading market data doesn't change state (not a Tool); trade execution does (not a Resource)
  - B: Prompts are templates, not data sources; market data should be a Resource
  - C: Trade execution changes state and must be a Tool; Prompts are templates, not actions

---

Q7. Scenario: An AI consultancy prices a Digital SDR at $1,500/month subscription. A new enterprise client wants a success-fee model instead: $0 for months 1-2 during tuning, then $500 per qualified lead afterward.
Question: How many leads per month must the agent qualify in month 3 to match the subscription model's cumulative 3-month revenue per client?
A) 5 leads per month
B) 9 leads per month
C) 7 leads per month
D) 3 leads per month
Correct: B)
Explanation:
- Why correct: Subscription: $1,500 × 3 = $4,500. Success-fee: $0 + $0 + (X × $500). To match: X × $500 = $4,500 → X = 9 leads.
- Why others are wrong:
  - B: 5 × $500 = $2,500, falls $2,000 short
  - C: 7 × $500 = $3,500, $1,000 short
  - D: 3 × $500 = $1,500, equals only one month of subscription

---

Q8. Scenario: A team lead reviews the Snakes and Ladders framework. She has deep expertise in insurance claims processing and 12 years of industry experience. She considers either building a consumer-facing general chatbot (Layer 1) or a vertical claims processing agent (Layer 3).
Question: What does the material predict if she competes at Layer 1?
A) She will succeed because consumer markets have higher volume
B) She will succeed initially but lose once hyperscalers copy her product
C) She will fail because Layer 1 is a two-player game between hyperscalers, and solo entrepreneurs cannot compete on consumer mindshare
D) She will gain early traction but lack infrastructure to scale beyond 10,000 users
Correct: C)
Explanation:
- Why correct: The material warns: "Do not compete here as a solo entrepreneur. You will lose." Layer 1 is a "brutal, expensive war for consumer mindshare" between OpenAI and Google.
- Why others are wrong:
  - A: Layer 1 has the highest competition, not favorable economics for solo entrepreneurs
  - B: The material doesn't predict initial success; it predicts failure from the start
  - C: Infrastructure isn't the concern; the competitive dynamics preclude solo success

---

Q9. Scenario: An engineering manager implements SDD. Developer X writes specifications first and iterates once. Developer Y skips specs, prompts AI directly, and iterates 5-7 times. Both eventually ship working code.
Question: What is the most significant long-term consequence of Developer Y's approach?
A) Developer Y accumulates invisible technical debt because AI amplifies vague requirements into confident-looking but subtly incorrect code
B) Developer Y's features are more creative from unconstrained AI generation
C) Developer Y produces equivalent quality because modern AI infers specifications from conversation
D) Developer Y ships faster because rapid iteration compensates for missing specs
Correct: A)
Explanation:
- Why correct: The material calls this "Vibe Coding" and warns: AI amplifies bad habits. Under Vibe Coding, "each iteration introduces subtle bugs, technical debt compounds invisibly, the codebase becomes unmaintainable."
- Why others are wrong:
  - A: Vibe Coding is slower in aggregate because rework compounds
  - B: Unconstrained generation produces variation including bugs, not directed creativity
  - C: Probabilistic outputs from vague inputs yield wildly varying code

---

Q10. Scenario: A systems architect designs context engineering for an AI agent on a 50,000-line codebase. She front-loads critical constraints at the top of her specification.
Question: What failure mode is she defending against?
A) If context is truncated, critical requirements at the top survive while lower-priority items at the bottom are lost
B) The agent caches the first 1,000 tokens permanently while discarding the rest
C) The agent refuses to process specifications exceeding a token threshold
D) Front-loading ensures the agent processes requirements in priority order
Correct: A)
Explanation:
- Why correct: The material states: "Front-load the most important constraints. If context is truncated, critical requirements at the top survive while nice-to-haves at the bottom may be lost."
- Why others are wrong:
  - A: LLMs don't cache tokens permanently; context is re-sent each session
  - C: The agent doesn't refuse; it silently truncates
  - D: The issue is truncation from the end, not processing order

---

Q11. Scenario: A company expects 5,000 onboarding sessions per day with strict compliance requirements. Vendor A offers a General Agent (Claude Code), Vendor B offers a Custom Agent (OpenAI Agents SDK) with hard-coded guardrails.
Question: Which approach is better and why?
A) Vendor A — General Agents adapt to unexpected onboarding variations
B) Vendor B — Custom Agents provide deterministic, guardrail-enforced behavior for high-volume compliance workloads
C) Vendor A — General Agents cost less per request at high volume
D) Vendor B — Custom Agents have larger context windows for tracking sessions
Correct: B)
Explanation:
- Why correct: Custom Agents are purpose-built for "reliability, speed, and governance." At 5,000 sessions/day with compliance needs, consistent, guardrail-enforced behavior is essential.
- Why others are wrong:
  - A: Adaptability is a strength, but the scenario requires consistency, not flexibility
  - B: General Agents cost more per request; Custom Agents are "Optimized for volume"
  - D: Neither remembers across sessions; context windows aren't the distinguishing factor

---

Q12. Scenario: A developer's AI agent used bcrypt on Monday but proposes argon2 on Tuesday in a new session, creating incompatibility.
Question: Which practice from the material would have prevented this?
A) Maintaining a PROJECT_CONTEXT.md that captures architecture decisions and gets injected at session start
B) Increasing the context window to fit Monday's session
C) Running both sessions in the same terminal window
D) Using TDD to define password hashing as a test constraint
Correct: A)
Explanation:
- Why correct: The material prescribes: "Maintain a PROJECT_CONTEXT.md file that captures critical decisions. This becomes your 'state injection' for new sessions."
- Why others are wrong:
  - A: Tests might pass with either algorithm; they don't communicate the decision
  - B: Context windows can't be resized, and statelessness prevents cross-session access regardless
  - C: LLMs are stateless; same terminal doesn't preserve model state

---

Q13. Scenario: A team has mastered 6 of 9 AIDD pillars but skips Composable Skills, SDD, and Cloud Deployment. Applications break frequently in production.
Question: Why do the three missing pillars specifically cause production failures?
A) The missing pillars are optional enhancements
B) Skills and SDD are only relevant during incubation
C) SDD prevents requirement drift, Skills provide domain deployment patterns, and Cloud Deployment standardizes infrastructure
D) All nine pillars contribute equally, so missing three creates one-third less capability
Correct: C)
Explanation:
- Why correct: The material describes a system effect where pillars amplify each other. SDD "orchestrates all other pillars." Missing these three creates the "brittle in others" pattern from the comparison table.
- Why others are wrong:
  - A: "Partial adoption creates gaps; complete adoption creates advantage"
  - B: SDD and Skills are essential for production, not just incubation
  - C: Pillars amplify each other nonlinearly; the impact isn't proportional

---

Q14. Scenario: An enterprise sales team pitches a Digital FTE to a hospital COO. She asks why she should buy from a small consultancy rather than using generic AI tools.
Question: Which two factors most effectively address the COO's concern?
A) Domain expertise in healthcare regulations and outcome-based pricing tied to measurable results
B) Broader AI model selection and better UI design
C) Lower pricing and faster deployment than generic tools
D) More API integrations and higher SWE-bench scores
Correct: A)
Explanation:
- Why correct: Domain expertise (#4) and outcome-based pricing (#6) are among the six core enterprise selection factors. The COO cares about business outcomes and industry competence.
- Why others are wrong:
  - A: Pricing and speed aren't the primary enterprise differentiators
  - B: Model selection and UI aren't among the core factors
  - D: Benchmark scores are irrelevant to the COO

---

Q15. Scenario: A startup founder evaluates Predictive AI, Generative AI, and Agentic AI. Her system uses Generative AI to draft replies when a human clicks "suggest reply." She wants autonomous ticket handling.
Question: What is the fundamental change required to move from Generative to Agentic AI?
A) Implementing faster inference below 2 seconds
B) Shifting from AI that generates on command to AI that autonomously initiates, coordinates, and completes workflows
C) Upgrading to a larger language model
D) Adding a fine-tuned model for customer service conversations
Correct: B)
Explanation:
- Why correct: The material states: "Earlier AI waited for commands. Agentic AI initiates, coordinates, and completes workflows autonomously."
- Why others are wrong:
  - A: Speed is optimization, not paradigm shift
  - B: Fine-tuning improves quality but doesn't change the generate-on-command paradigm
  - C: The shift is architectural, not about model size

---

Q16. Scenario: A developer transitions to the Orchestrator role. She discovers a SQL injection vulnerability in AI-generated authentication code during code review.
Question: Which SDLC phase does this validation belong to?
A) Coding — because the developer's role during this phase is validating AI output against security requirements
B) Operations — vulnerabilities are found in production
C) Testing — SQL injection is detected through automated suites
D) Planning — the spec should have excluded SQL injection
Correct: A)
Explanation:
- Why correct: The material describes the Coding phase's human judgment focus: "Does this implementation match requirements? Are there security issues?"
- Why others are wrong:
  - A: Planning defines requirements but can't anticipate every vulnerability
  - B: Waiting for production exploitation is the anti-pattern the material warns against
  - C: The scenario describes discovery during code review, a coding-phase activity

---

Q17. Scenario: A consulting firm's Digital SDR needs to work across Client A (Claude), Client B (ChatGPT), and Client C (Gemini). Without standards, they'd rebuild for each.
Question: Which AAIF standard specifically solves deploying the same expertise across all three platforms?
A) Agent Skills — encode domain expertise in portable markdown files that work across any platform
B) MCP — standardizes tool connectivity
C) AGENTS.md — provides universal project instructions
D) goose — provides a reference architecture for agents
Correct: A)
Explanation:
- Why correct: Skills encode domain expertise portably. The AAIF table shows they enable "License to clients on any platform." Skills are ".md files making your agents independent of any single model provider."
- Why others are wrong:
  - A: MCP handles tool connectivity, not expertise portability
  - C: AGENTS.md teaches agents about project conventions, not cross-platform expertise
  - D: goose is a reference implementation, not a portability standard

---

Q18. Scenario: The $3 trillion developer economy is described as uniquely self-disrupting. A CTO argues her company can adapt gradually, like agriculture adapted to tractors.
Question: Why does the material argue this analogy fails for software?
A) AI advances too quickly for any industry to adapt
B) Agricultural disruption was faster than commonly believed
C) Software disrupts itself — tools, workflows, and mental models shift simultaneously — making gradual adaptation impossible
D) Software developers are more resistant to change than agricultural workers
Correct: C)
Explanation:
- Why correct: "Software is the only industry that disrupts itself. Self-disruption is faster and more complete than external disruption."
- Why others are wrong:
  - A: The argument is specific to self-disruption, not general pace
  - B: The material accepts agriculture adapted gradually over decades
  - D: The material doesn't claim developer resistance

---

Q19. Scenario: A developer working on a monorepo finds her agent reads root AGENTS.md but ignores the frontend subdirectory's AGENTS.md with React-specific rules.
Question: What is the most likely cause?
A) The frontend AGENTS.md is missing required YAML frontmatter
B) The agent has limited context and the subdirectory file was truncated
C) The agent is not applying the nearest AGENTS.md hierarchy rule and defaults to root
D) The root conventions override subdirectory rules by design
Correct: C)
Explanation:
- Why correct: The material specifies the nearest-file-wins hierarchy rule. If the agent isn't honoring subdirectory conventions, it's failing to apply this rule.
- Why others are wrong:
  - A: AGENTS.md doesn't require YAML frontmatter for loading
  - B: Truncation would cause random omissions, not systematic root-only behavior
  - D: The hierarchy is designed so nearest file wins, not root

---

Q20. Scenario: A Digital FTE processes 1,000 support queries daily at $0.002/query with 92% resolution. The remaining 8% gets escalated. A product manager wants to push to 99% by using a General Agent instead of the Custom Agent.
Question: What is the most likely outcome?
A) General and Custom Agents have identical per-query economics
B) The higher cost and inconsistent behavior of General Agents make high-volume production economically unsustainable
C) Resolution improves because General Agents have superior reasoning
D) The feedback loop will automatically optimize resolution rate
Correct: B)
Explanation:
- Why correct: "Perpetual Incubation" anti-pattern: "Using General Agents for production workloads. You'll pay too much, get inconsistent results, and struggle with governance."
- Why others are wrong:
  - A: General Agents cost more per request
  - C: Flexibility doesn't compensate for inconsistency at production scale
  - D: The feedback loop requires a specialized system to generate data for incubation

---

## Chapter 2: Markdown — Writing Instructions (13 MCQs)

---

Q21. Scenario: A developer writes an unstructured paragraph for a weather app spec. The AI generates minimal code missing humidity, wind speed, and error handling.
Question: What structural element was missing that caused the AI to miss requirements?
A) The paragraph lacked bold formatting for emphasis
B) The paragraph was too short for AI comprehension
C) Requirements were in prose instead of distinct, countable list items
D) The developer forgot to include a code block
Correct: C)
Explanation:
- Why correct: The material demonstrates that without list structure, the AI "has to guess: How many features are there?" When restructured as bullet lists, the AI identified and implemented all features.
- Why others are wrong:
  - A: Bold helps emphasis but doesn't make requirements countable and distinct
  - B: Length isn't the issue; structure is
  - D: Code blocks help but the primary failure was identifying distinct requirements

---

Q22. Scenario: A junior developer's heading hierarchy: `# Weather App`, `### Features`, `## Installation`, `#### API Reference`. The team lead spots a problem.
Question: Which specific violation is present?
A) H3 appears directly under H1 without an H2, breaking the hierarchy AI uses to infer structure
B) The headings use inconsistent capitalization
C) The H4 should be replaced with bold text
D) The document uses too many heading levels
Correct: A)
Explanation:
- Why correct: Going from H1 to H3 without H2 breaks logical hierarchy. AI uses headings as navigation landmarks; skipping levels creates ambiguity.
- Why others are wrong:
  - A: The material supports up to 4 levels; the issue is skipping, not depth
  - B: Capitalization isn't the structural problem
  - C: Four levels are explicitly supported

---

Q23. Scenario: A developer uses numbered lists for features (`1. Dark mode`, `2. Export to PDF`) and bullets for installation steps (`- Install Python`, `- Run program`). Both are incorrect.
Question: What is the correct assignment?
A) Both should use numbered lists for explicit ordering
B) Features should use bullets (independent items); Installation should use numbers (sequential steps)
C) Both should use bullets because markdown numbering is unreliable
D) Features should use numbers (priority ranking); Installation should use bullets
Correct: B)
Explanation:
- Why correct: The material addresses this: features "don't have a required order" (bullets), installation steps "must be in the right sequence" (numbers).
- Why others are wrong:
  - A: Numbering everything loses semantic distinction
  - C: Numbering is reliable; the choice should reflect meaning
  - D: Feature numbers falsely imply priority; installation steps absolutely require order

---

Q24. Scenario: Terminal commands like `pip install requests` appear in paragraph text without backtick formatting. The AI treats "pip" as natural language rather than an executable command.
Question: What markdown feature prevents this?
A) Inline code backticks which signal to AI that text is executable code rather than natural language
B) ALL CAPS for commands
C) Placing commands in a separate paragraph
D) Bold formatting to visually distinguish commands
Correct: A)
Explanation:
- Why correct: Backticks "visually separate code from prose" and create a semantic boundary telling the parser "this is an executable command, not conversational text."
- Why others are wrong:
  - A: Bold indicates emphasis, not code semantics
  - B: ALL CAPS would be interpreted as shouting, not code
  - C: Separation helps but doesn't mark tokens as code within sentences

---

Q25. Scenario: A code block uses ` ``` ` without a language tag for expected program output. The AI generates Python code instead of displaying the output.
Question: Why did the missing tag cause this?
A) Without a tag, the AI cannot distinguish code to implement from output to display, treating all blocks as implementation targets
B) The AI defaults to Python because it's the most common language
C) Language tags are cosmetic and the error was unrelated
D) The AI requires the `output` tag specifically
Correct: A)
Explanation:
- Why correct: Without a tag, the AI can't determine whether the block is "code to implement" or "output to display." A `text` tag signals "plain output, not code."
- Why others are wrong:
  - B: There's no Python default; the issue is ambiguity
  - C: Tags affect how AI interprets blocks, not just highlighting
  - D: The `text` tag works correctly for output

---

Q26. Scenario: A product manager writes Layer 1 (specification), AI reasons in Layer 2, generates code in Layer 3. The code doesn't match intent. She blames the AI.
Question: Where should she look first?
A) Layer 2 — the reasoning engine may have a bug
B) Layer 3 — code generation produced syntax errors
C) Layer 1 — the specification probably contains ambiguity the AI interpreted differently
D) The connection between layers — a transmission error corrupted the spec
Correct: C)
Explanation:
- Why correct: "If your spec is clear and structured, the AI generates accurate code. If it's vague and messy, the AI has to guess." Diagnosis starts with examining specification clarity.
- Why others are wrong:
  - A: Blaming reasoning is premature; specification clarity is the primary determinant
  - B: If code doesn't match intent, the issue is interpretation, not syntax
  - D: No "transmission error" concept exists in the AIDD model

---

Q27. Scenario: A junior developer uses 15 separate `###` headings in the Features section, each with a one-line description. The document feels fragmented.
Question: What does the material recommend?
A) Replace the 15 sub-headings with fewer headings and nested bullet lists for details
B) Keep all 15 but add horizontal rules for separation
C) Convert sub-headings to bold text in a numbered list
D) Remove all sub-headings and write a single paragraph
Correct: A)
Explanation:
- Why correct: "Rule of thumb: Use headings for major sections, nested lists for details. If you find yourself creating 10+ Level 3 headings, consider consolidating with nested lists."
- Why others are wrong:
  - A: Removing structure defeats its purpose for AI parsing
  - B: Horizontal rules don't solve fragmentation
  - C: The material recommends nested lists under fewer headings, not bold text

---

Q28. Scenario: One developer writes `[click here](https://docs.python.org/)` while another writes `[Python Official Documentation](https://docs.python.org/)`.
Question: Why is the second preferred for AI-native development?
A) Descriptive link text tells both humans and AI what the resource contains without following the link
B) "Click here" is invalid markdown syntax
C) AI agents cannot follow URLs, so descriptive text is the only way they know what exists
D) Search engines rank descriptive links higher
Correct: A)
Explanation:
- Why correct: Descriptive text communicates resource content directly within the specification without requiring link-following.
- Why others are wrong:
  - A: SEO isn't the material's rationale
  - B: "Click here" is valid syntax but semantically poor
  - C: Some AI agents can follow URLs; the point is context regardless of capability

---

Q29. Scenario: An image reference has alt text "screenshot." An AI processes this in a text-only workflow.
Question: What information does the AI lose?
A) Formatting preferences; good alt text would specify CSS styling
B) Visual context about the interface; good alt text would describe what the image shows
C) Nothing — images are always ignored
D) Color scheme; good alt text would list RGB values
Correct: B)
Explanation:
- Why correct: "In text-based workflows, AI sees only the alt text and filename." Good alt text like "Task Tracker menu showing 5 options" conveys visual information even without the image.
- Why others are wrong:
  - A: Alt text is about content, not CSS
  - C: AI agents do process alt text for understanding
  - D: RGB values are implementation details, not useful context

---

Q30. Scenario: A numbered list starts with `11.` followed by `2.` and `3.`. It renders as 11, 12, 13.
Question: What causes this and what does the material recommend?
A) This is a GitHub-specific rendering bug
B) Markdown requires all items to use the same number
C) Markdown auto-numbers from the first item's value; the material recommends always using sequential numbers from 1 because AI agents read source files directly
D) The material recommends using `11., 12., 13.` explicitly
Correct: C)
Explanation:
- Why correct: "Markdown auto-numbers based on the first number. For AI-native development: Always use correct sequential numbers (`1. 2. 3.`) because AI agents often read the source file directly."
- Why others are wrong:
  - A: This behavior is defined by CommonMark, not GitHub-specific
  - B: Mixing numbers doesn't cause unpredictable behavior; the rule is deterministic
  - D: The material recommends starting from 1, not continuing from 11

---

Q31. Scenario: Expected output is tagged ` ```python ` instead of ` ```text `. The AI attempts to execute the output as code.
Question: Why is the tag semantically important?
A) Python-tagged blocks are auto-executed; text-tagged blocks are displayed
B) Tags only affect highlighting with no AI impact
C) The `python` tag signals code to implement; `text` signals output to match — the wrong tag changes the AI's interpretation of the block's purpose
D) The `text` tag prevents AI from reading the block
Correct: C)
Explanation:
- Why correct: Language tags tell AI "which language interpreter to use." A `python` tag says "implement this"; `text` says "this is output." Wrong tags cause misinterpretation.
- Why others are wrong:
  - A: Agents don't auto-execute; the issue is interpretation
  - B: "Language tags do more than enable syntax highlighting"
  - D: `text` doesn't hide content; it tells AI how to interpret it

---

Q32. Scenario: A manager asks for a 25-paragraph architecture comparison writeup. The developer wonders whether to create a markdown file or answer in conversation.
Question: Should this be a file or conversational text?
A) Conversational — architecture comparisons should be discussed verbally
B) File — only if the manager specifically requests `.md` format
C) Conversational — only code specs should be files
D) Markdown file — this is written content intended for use outside the conversation
Correct: D)
Explanation:
- Why correct: Markdown files should be created for "Content intended for eventual use outside the conversation (such as reports)." A 25-paragraph comparison clearly qualifies.
- Why others are wrong:
  - A: Architecture documentation benefits from structured, persistent format
  - B: The trigger is content nature, not explicit format requests
  - C: The material specifies many non-code uses

---

Q33. Scenario: A developer argues modern AI parses unstructured text fine and markdown is unnecessary. Her AI did generate working code from a plain paragraph.
Question: What is the hidden cost?
A) Unstructured text costs more tokens
B) Markdown is required by AI APIs
C) The AI must guess at requirement boundaries, leading to missed features and unpredictable variation across sessions
D) Code will lack comments
Correct: C)
Explanation:
- Why correct: The weather app comparison showed unstructured text led to missing features. "An AI reading this has to guess: How many features are there?" Different sessions may interpret the same paragraph differently due to probabilistic nature.
- Why others are wrong:
  - A: Token efficiency isn't the primary concern
  - B: AI APIs accept any format
  - D: Comment quality isn't tied to input formatting

---

## Chapter 3: Claude Code and Cowork (32 MCQs)

---

Q34. Scenario: An engineer gives Claude filesystem access and observes it autonomously reads files, follows imports, and explores project structure without instruction.
Question: What does the material call this phenomenon?
A) "Agentic bootstrapping" — filesystem access created a self-improving feedback loop
B) "Fine-tuning transfer" — code-specific training activated with file access
C) "Product Overhang" — the capability already existed inside Claude and only needed filesystem access to unlock
D) "Emergent behavior" — Claude developed new capabilities from code repository training
Correct: C)
Explanation:
- Why correct: "Product Overhang: the capability to be a genuine development partner already existed inside Claude. It was waiting. The model didn't need to become smarter."
- Why others are wrong:
  - A: No feedback loop; it was unlocking existing capability
  - B: No fine-tuning was involved
  - D: No additional training occurred

---

Q35. Scenario: A developer switches from ChatGPT (copy-paste workflow) to Claude Code and notices a fundamentally different workflow.
Question: What is the core architectural distinction?
A) Claude Code uses a more advanced model
B) Claude Code stores conversation history permanently
C) Claude Code runs locally without internet
D) Claude Code reads project files, proposes specific changes, executes with approval, runs tests, and iterates — eliminating copy-paste
Correct: D)
Explanation:
- Why correct: "Passive AI is a consultant on the phone. Agentic AI is a pair programmer looking at your code."
- Why others are wrong:
  - A: The distinction is product architecture, not model capability
  - B: Both are stateless at the model level
  - C: Claude Code uses cloud inference

---

Q36. Scenario: During Anthropic's internal rollout, Claude Code adoption hit 50% by day five. Engineers averaged 5 PRs/day versus the usual 1-2.
Question: What metric quantifies the productivity impact during scaling from 2 to 10 team members?
A) 50% decrease in review time
B) 400% increase in code quality scores
C) 67% jump in pull request throughput even as the team grew 5x
D) 90% reduction in bug reports
Correct: C)
Explanation:
- Why correct: "Pull request throughput jumped 67% even as the team grew from two to ten people."
- Why others are wrong:
  - B: Code quality scores aren't cited as a metric
  - C: Review time reduction isn't cited
  - D: Bug reduction isn't the metric reported

---

Q37. Scenario: A developer has both CLAUDE.md and AGENTS.md. The project uses TypeScript strict mode, has Claude-specific deployment skills, and requires all agents to follow kebab-case naming.
Question: Which content goes in which file?
A) Everything goes in CLAUDE.md
B) AGENTS.md is only for OpenAI tools
C) Both files should contain identical content
D) TypeScript conventions and kebab-case in AGENTS.md (universal); Claude-specific skills in CLAUDE.md, which references AGENTS.md
Correct: D)
Explanation:
- Why correct: Universal context in AGENTS.md; Claude-specific features in CLAUDE.md. The recommended approach: reference AGENTS.md from CLAUDE.md.
- Why others are wrong:
  - A: Both files serve distinct purposes
  - B: AGENTS.md is cross-vendor, adopted by all major agents
  - C: Duplication is explicitly avoided

---

Q38. Scenario: A SKILL.md has a description "A skill for notes." When she asks Claude to process meeting notes, the skill isn't activated.
Question: What is wrong?
A) The description is too vague — it should include specific trigger phrases like "meeting transcript" or "action items" so Claude can match user requests
B) The description should include the full procedure
C) The description is too short for valid YAML
D) Descriptions must use imperative mood
Correct: A)
Explanation:
- Why correct: "The `description` determines when Claude activates your skill." It must be specific enough for Claude to match against user requests. "A skill for notes" provides no matching criteria.
- Why others are wrong:
  - A: It's valid YAML; the issue is semantic vagueness
  - B: Procedures go in the markdown body, not the description
  - D: Grammatical mood isn't a requirement; specificity is

---

Q39. Scenario: 5 MCP servers consume 35,000+ tokens of context before any question is asked.
Question: What mechanism addresses this?
A) MCP Connection Pooling (50% reduction through shared channels)
B) MCP Compression (binary format, 70% reduction)
C) MCP Caching (local files that don't count against context)
D) MCP Tool Search — automatic lazy loading achieving ~85% reduction by deferring tool definitions until needed
Correct: D)
Explanation:
- Why correct: MCP Tool Search: "Instead of loading all tools upfront, Claude searches for relevant tools on-demand. ~85% automatic reduction in MCP overhead."
- Why others are wrong:
  - A: Connection pooling isn't described in the material
  - B: No binary compression mechanism exists
  - C: Tool definitions must be in context for the model to use them

---

Q40. Scenario: Three settings files exist. A new team member clones the repo.
Question: What do they inherit automatically?
A) All three levels because Git tracks everything
B) Nothing — all settings are outside the repo
C) User-level settings from a shared team server
D) Project-level settings from the repository; they must configure user-level and local-level personally
Correct: D)
Explanation:
- Why correct: Project settings (`.claude/settings.json`) are in the repo and version-controlled. User settings are personal. Local settings are machine-specific.
- Why others are wrong:
  - A: User settings are in home directory, not repo; local should be gitignored
  - B: Project settings are inside the project directory
  - C: No shared team server exists

---

Q41. Scenario: A hook is configured on `PreToolUse` to block file writes containing API keys. The developer considers switching to `PostToolUse`.
Question: What changes?
A) Pre and Post hooks have identical capabilities
B) PostToolUse hooks can't access file content
C) The API key would already be written before the hook fires — it detects but can't prevent
D) The hook would trigger an infinite loop
Correct: C)
Explanation:
- Why correct: PreToolUse fires before the action; PostToolUse fires after. Switching means the write happens before the check.
- Why others are wrong:
  - A: Timing is fundamentally different
  - B: PostToolUse can access content; the issue is timing
  - C: Hooks don't retrigger tools

---

Q42. Scenario: Ralph Wiggum Loop with `--completion-promise '0 problems'` and `--max-iterations 20`. After 15 iterations, linter shows "0 problems found" in Claude's response.
Question: Will the loop stop?
A) No — it only checks linter's raw output
B) Yes — it uses semantic matching
C) No — it always runs all iterations
D) Yes — it searches Claude's response text for the exact completion promise string
Correct: D)
Explanation:
- Why correct: The Stop hook "Checks if `--completion-promise` text appears in Claude's output" using exact string matching. If Claude's response contains "0 problems," the match triggers.
- Why others are wrong:
  - A: The hook checks Claude's overall output
  - B: It uses exact string matching, not semantic matching
  - C: The loop stops when the promise is found or max iterations reached

---

Q43. Scenario: A non-technical marketing manager needs to create a quarterly report from data files. She has never used a terminal.
Question: Which tool should she use?
A) Claude Code — it handles documents better
B) Cowork — same agentic capabilities through a desktop GUI without terminal skills
C) Claude Code — Cowork can't access the filesystem
D) Neither — she should use Claude web chat
Correct: B)
Explanation:
- Why correct: Cowork provides "the same agent architecture, the same filesystem access" via desktop GUI. It targets "Knowledge Workers" for "Documents, data, organization."
- Why others are wrong:
  - A: Claude Code requires terminal skills
  - B: Cowork explicitly has filesystem access
  - D: Web chat is passive with no filesystem access

---

Q44. Scenario: A subagent can't access the main agent's conversation or modify its files.
Question: Why is this isolation a design feature?
A) Technical API limitations prevent sharing
B) Isolation is temporary and will be removed
C) It prevents memory leaks between processes
D) Subagents in separate contexts prevent uncontrolled interactions — a subagent modifying main agent files would create unpredictable side effects
Correct: D)
Explanation:
- Why correct: Isolation prevents a research subagent from accidentally modifying production code. Controlled boundaries prevent cascading failures.
- Why others are wrong:
  - A: It's intentional design, not a limitation
  - B: Presented as permanent design principle
  - C: The rationale is preventing uncontrolled interactions, not memory management

---

Q45. Scenario: Compiling MCP into Skills achieves 98% token reduction. A colleague argues they should always compile and never use MCP directly.
Question: When should MCP be used directly?
A) When the server has more than 10 tools
B) For simple, infrequent queries where overhead is acceptable and compilation effort isn't justified
C) When the server is from an untrusted source
D) Direct MCP should always be avoided
Correct: B)
Explanation:
- Why correct: "Simple, infrequent? → Let Tool Search handle it." "One-off query → Direct MCP → Overhead acceptable for single use."
- Why others are wrong:
  - A: Tool count isn't the deciding factor
  - B: The material recommends direct MCP for specific scenarios
  - C: Security applies regardless of compilation status

---

Q46. Scenario: A developer needs temporary `.env` file access for debugging but the project-level settings deny it.
Question: How should she configure this without affecting team policy?
A) Modify project settings then revert later
B) Add an allow rule in `.claude/settings.local.json` which overrides project deny only on her machine
C) Local settings cannot override project deny rules
D) Create a CLAUDE.md file granting permission
Correct: B)
Explanation:
- Why correct: Local settings are for "Temporary overrides (you need different settings just for today)" and apply to "this project only, on your machine only."
- Why others are wrong:
  - A: Would affect all team members
  - C: The precedence system allows local overrides
  - D: CLAUDE.md isn't for permission configuration

---

Q47. Scenario: A large reference dataset is needed for only 10% of a skill's activations. Three-level loading is available.
Question: At which level should it be stored?
A) Level 1 — available immediately
B) Level 2 — loads on every activation
C) Outside the skill folder via MCP
D) Level 3 — supporting file loaded only when referenced, keeping 90% of activations lean
Correct: D)
Explanation:
- Why correct: Level 3 loads on-demand, so the 90% of activations that don't need the data remain lean.
- Why others are wrong:
  - A: Level 1 loads for all skills at startup — wasteful
  - B: Level 2 loads every activation — wasteful for 90% of cases
  - C: The three-level architecture already provides the right pattern

---

Q48. Scenario: A team lead considers writing "Always run tests after modifying Python files" in CLAUDE.md versus configuring a PostToolUse hook that runs `pytest` after any `.py` write.
Question: What's the critical difference?
A) CLAUDE.md rules and hooks are equally reliable
B) The CLAUDE.md instruction is probabilistic (LLM might skip it); the hook is a programmatic guarantee that executes independently of Claude's reasoning
C) CLAUDE.md is more reliable because it's read every session
D) Hooks are less reliable because Claude must interpret them
Correct: B)
Explanation:
- Why correct: CLAUDE.md instructions are followed through probabilistic reasoning. Hooks execute deterministically as shell scripts, independent of Claude's reasoning.
- Why others are wrong:
  - A: LLMs are probabilistic; CLAUDE.md isn't a deterministic guarantee
  - B: Hooks are shell scripts that execute deterministically
  - C: Reading doesn't guarantee following

---

Q49. Scenario: A freelance developer's "contract review" SKILL.md encodes 8 years of legal expertise. A competitor tries to replicate it through prompting.
Question: Why can't the competitor replicate the value?
A) SKILL.md uses encryption preventing duplication
B) Skills use a proprietary API
C) The competitor's model lacks legal training data
D) Skills are persistent, reusable expertise assets encoding procedures and edge cases; prompts are transient one-time events that cannot encode accumulated expertise
Correct: D)
Explanation:
- Why correct: "Skills are reusable assets; good prompts are one-time events." Domain expertise encoding cannot be replicated by a single prompt.
- Why others are wrong:
  - A: SKILL.md files are plain markdown, no encryption
  - B: Skills don't use proprietary APIs; they're portable markdown
  - C: The issue is expertise encoding, not model training

---

Q50. Scenario: Ralph Wiggum Loop with `--completion-promise "ALL TESTS PASS"`. After 8 iterations, Claude's output reads "All tests pass — no failures." The loop continues.
Question: Why didn't the loop stop?
A) The loop has a 10-iteration warm-up period
B) The loop only checks at even-numbered iterations
C) Max-iterations overrides the completion promise
D) Exact string matching — "ALL TESTS PASS" doesn't match "All tests pass" due to case difference
Correct: D)
Explanation:
- Why correct: "Exact string matching — there's no dynamic adaptation or smart detection." Case matters.
- Why others are wrong:
  - A: No warm-up period exists
  - B: The hook checks every iteration
  - C: The completion promise can stop the loop before max-iterations

---

Q51. Scenario: A project has CLAUDE.md, skills folder, and two MCP servers. The developer removes the skills folder.
Question: What capability is lost?
A) Claude loses domain-specific procedures, falling back to generic behavior each session
B) Claude can no longer read CLAUDE.md
C) Claude loses database and Slack access
D) Claude loses MCP connectivity
Correct: A)
Explanation:
- Why correct: Skills = "Claude knows YOUR PROCEDURES." Without skills, "Claude repeats itself." Project context and MCP still work.
- Why others are wrong:
  - A: MCP servers operate independently of skills
  - B: CLAUDE.md is separate from skills
  - D: MCP is configured independently

---

Q52. Scenario: A product manager expects extensive prompt engineering to make Claude explore codebases. But filesystem access alone unlocks the behavior.
Question: What principle does this illustrate?
A) AI models require custom training for new capabilities
B) Filesystem access is a form of fine-tuning
C) Latent capabilities can be unlocked by changing the product interface rather than the model — access was the missing ingredient, not intelligence
D) Claude was specifically trained on code exploration tasks
Correct: C)
Explanation:
- Why correct: "Product Overhang" — product design unlocked existing capabilities without model changes.
- Why others are wrong:
  - A: No custom training was involved
  - B: Filesystem access is a product feature, not model modification
  - D: The behavior emerged without explicit instruction

---

Q53. Scenario: A developer compares official Claude Code ($20/month) with the free setup using Claude Code Router and Gemini's free tier.
Question: What is the key architectural difference?
A) The free path doesn't support skills or MCP
B) The official path provides larger context windows
C) The free path runs entirely offline
D) The official path uses Anthropic's models directly; the free path routes through any LLM backend via a production-grade router
Correct: D)
Explanation:
- Why correct: "Official path uses Anthropic's Claude models. Free path uses Claude Code's agentic architecture with any LLM backend through production-grade API routing." Both support identical features.
- Why others are wrong:
  - A: Both support full features including skills and MCP
  - C: The free path still uses cloud APIs
  - D: Context windows depend on the chosen model

---

Q54. Scenario: Agent A researches competitors, Agent B analyzes sales data, Agent C synthesizes both into a strategy document. C must wait for A and B.
Question: How do agents coordinate?
A) Agents communicate through a shared memory bus
B) Agents coordinate through the filesystem — earlier agents write output files that later agents read, with the developer managing sequence
C) The Claude API provides agent-to-agent messaging
D) A central coordinator agent accesses all contexts
Correct: B)
Explanation:
- Why correct: Agent teams are separate sessions coordinated through filesystem artifacts. The developer orchestrates the sequence.
- Why others are wrong:
  - A: No shared memory bus; separate sessions
  - C: No agent-to-agent messaging exists
  - D: No central coordinator agent; the human manages

---

Q55. Scenario: Claude's OODA Loop: Observe error → Orient to root cause → Decide where to look → Act by reading files → Correct if the fix fails.
Question: What distinguishes this from passive AI debugging?
A) The OODA Loop uses a more advanced model
B) Passive AI has no internet access
C) Passive AI works faster without file reading
D) Passive AI provides a single suggestion and stops; the OODA Loop cycles continuously until the problem is solved
Correct: D)
Explanation:
- Why correct: Passive AI: "Single response." OODA Loop: "Loops until goal is achieved. Tests its work, fixes mistakes."
- Why others are wrong:
  - A: The distinction is the loop, not model capability
  - B: Internet access isn't the differentiator
  - C: Speed isn't the comparison axis

---

Q56. Scenario: Some developers disable safety checks via local settings. The security team wants non-overridable deny rules.
Question: How to enforce?
A) User-level settings for global application
B) Deploy external monitoring
C) Project-level deny rules, which are additive across levels and cannot be overridden by more specific levels
D) There is no way to prevent overrides
Correct: C)
Explanation:
- Why correct: Deny rules at project level function as a security floor. The settings hierarchy prevents local settings from removing project deny rules.
- Why others are wrong:
  - A: User settings are personal, not organization-wide
  - B: The settings hierarchy itself provides enforcement
  - D: The hierarchy specifically prevents this

---

Q57. Scenario: A compiled skill wraps Playwright MCP. Instead of JSON-RPC requests, Python code calls Playwright directly.
Question: Where do token savings come from?
A) The skill uses a smaller language model
B) Tool definitions are eliminated from context — Claude doesn't need schemas when Python handles API calls locally
C) The skill caches previous responses
D) Markdown is compressed to binary
Correct: B)
Explanation:
- Why correct: With compiled skills, "Claude doesn't need tool schemas because code handles API calls directly." This eliminates 5,000-12,000 tokens per server.
- Why others are wrong:
  - A: Same model is used
  - C: No caching; fresh execution each time
  - D: No binary compression

---

Q58. Scenario: A workflow runs 500x/day with strict compliance. Should it be a Skill or a Custom Agent (SDK-built)?
Question: When does building a Custom Agent remain necessary despite skills?
A) Always — skills can't handle production
B) When the skill exceeds 1,000 lines
C) Only when the workflow needs internet access
D) When hard-coded guardrails, deterministic behavior, and production-scale reliability exceed what skills' probabilistic execution can guarantee
Correct: D)
Explanation:
- Why correct: 500 daily executions with compliance maps to Custom Agents: "Users depend on consistent behavior" and "enforce specific constraints." Skills operate through probabilistic LLM; Custom Agents encode guardrails deterministically.
- Why others are wrong:
  - A: Skills handle many production workloads
  - B: File size isn't the determining factor
  - C: Skills access internet via MCP

---

Q59. Scenario: Developer enters `claude` in her project with CLAUDE.md, three skills, and two MCP servers.
Question: What happens at startup?
A) Claude scans the entire codebase and memorizes every file
B) Claude downloads model weights optimized for the tech stack
C) Claude reads CLAUDE.md for context, loads Level 1 skill metadata, and connects to MCP servers — all before the first prompt
D) Claude authenticates with GitHub for commit history
Correct: C)
Explanation:
- Why correct: CLAUDE.md auto-loads; Level 1 skill metadata loads at startup; MCP servers establish connections — all before the first prompt.
- Why others are wrong:
  - A: Claude reads files on demand, not all at once
  - B: Model weights don't change per project
  - D: GitHub auth isn't part of standard startup

---

Q60. Scenario: A SKILL.md must work across Claude Code, Codex CLI, and Gemini CLI.
Question: What enables portability and what changes?
A) Each vendor requires a different format; portability isn't possible
B) The SKILL.md format is universal — only the directory path changes between vendors
C) Skills must be rewritten in vendor-specific templates
D) SKILL.md must be converted to JSON for non-Claude platforms
Correct: B)
Explanation:
- Why correct: "You can port it by moving the SKILL.md file to a different directory." The format is universal; directory paths differ.
- Why others are wrong:
  - A: Portability is a core AAIF feature
  - C: No rewriting needed
  - D: No format conversion required

---

Q61. Scenario: A healthcare startup connects MCP to their patient database. A security auditor flags the risk.
Question: What is the recommended approach?
A) MCP is inherently secure
B) Encrypt all MCP communications with custom certificates
C) Don't use MCP for sensitive data — use local file access instead; treat MCP servers like any third-party dependency
D) Only use MCP during monitored business hours
Correct: C)
Explanation:
- Why correct: "Don't use MCP for private/sensitive data." "Better approach: Use local file access." Apply same caution as third-party dependencies.
- Why others are wrong:
  - A: MCP expands the attack surface
  - C: Custom certificates aren't the recommended mitigation
  - D: Time-based restrictions aren't mentioned

---

Q62. Scenario: A developer switches from `plan` mode (review before execution) to `acceptEdits` mode. Claude writes to a critical config file, breaking the build.
Question: What does this illustrate?
A) `acceptEdits` is always unsafe
B) Permission mode should match task risk — `plan` mode provides review that `acceptEdits` bypasses, trading safety for speed
C) The build break was unrelated to permissions
D) `acceptEdits` only affects read operations
Correct: B)
Explanation:
- Why correct: Permission modes are configurable safety levels. Using a permissive mode for sensitive operations removes the review checkpoint.
- Why others are wrong:
  - A: It's valid for appropriate contexts
  - C: The scenario specifically illustrates permission mode impact
  - D: `acceptEdits` allows writes without approval

---

Q63. Scenario: A "tax preparation" skill serves 200 clients at $500/month with $2,000/month maintenance.
Question: What is the monthly profit and economic principle?
A) $200,000/month — each client generates $1,000 profit
B) $98,000/month — illustrating the subscription model where encoded expertise scales at near-zero marginal cost per additional client
C) $48,000/month — illustrating 50/50 marketplace splits
D) $100,000/month revenue — illustrating zero-cost scaling
Correct: B)
Explanation:
- Why correct: Revenue = 200 × $500 = $100,000. Cost = $2,000. Profit = $98,000. Encoded expertise scales at near-zero marginal cost.
- Why others are wrong:
  - A: $200,000 would require $1,000/client
  - B: No marketplace split applies
  - D: $100,000 is revenue, not profit

---

Q64. Scenario: SWE-bench Verified shows Claude Opus 4.5 at 80.9%, GPT-5.2 at 80.0%. A developer concludes Claude is definitively best. A colleague notes GPT-5.3-Codex scores 56.8% on a different variant.
Question: Why does the material caution against this conclusion?
A) Scores are too close for statistical significance
B) SWE-bench only tests JavaScript
C) Scores are from different time periods
D) Different variants (Verified vs Pro) have different difficulty levels, making cross-variant comparison invalid — plus scores are self-reported
Correct: D)
Explanation:
- Why correct: "Companies report scores on different benchmark variants, making direct comparisons tricky. GPT-5.3-Codex scores 56.8% on SWE-bench Pro — which is a harder test, not a worse score."
- Why others are wrong:
  - A: Variant incompatibility is the concern, not statistical significance
  - B: SWE-bench tests real software engineering across languages
  - C: Timing matters but variant difficulty is the primary issue

---

Q65. Scenario: A professional accountant with no coding experience wants to create a skill for quarterly financial reporting. She has 15 years of GAAP expertise but feels excluded because she thinks skills require programming.
Question: Why is she well-positioned to create high-value skills?
A) Skills require Python proficiency
B) She can only use pre-built marketplace skills
C) Non-technical users must use Cowork, which doesn't support skills
D) Skills are markdown files encoding procedures, not code — her accounting expertise is the scarce, high-value input that anyone who can write instructions can encode
Correct: D)
Explanation:
- Why correct: "Skills are intentionally simple (folders) to enable universal adoption" and "Non-technical users can create high-value skills." Her GAAP expertise is the "10% moat" that generic AI cannot replicate.
- Why others are wrong:
  - A: Skills don't require programming; they're markdown
  - B: Non-technical skill creation is explicitly supported
  - C: Both tools support skills; Cowork brings the same architecture to non-developers
