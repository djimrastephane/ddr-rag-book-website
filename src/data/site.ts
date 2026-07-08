// ============================================================
// EDIT THIS FILE: all site-wide text, links, and lists live here.
// Change values below and every page updates automatically.
// ============================================================

export const site = {
  name: "DDR RAG Book",
  tagline: "Learn. Build. Experiment.",
  title: "Building Industrial RAG Systems from Daily Drilling Reports",
  description:
    "A practical guide to OCR, retrieval-augmented generation, hybrid search, and traceable engineering answers using real drilling report workflows.",
  // EDIT: your links
  repoUrl: "https://github.com/djimrastephane/ddr-rag-book",
  repoOwner: "djimrastephane",
  repoName: "ddr-rag-book",
  liveBookUrl: "https://djimrastephane.github.io/ddr-rag-book/",
  pipelineRepoUrl: "https://github.com/djimrastephane/DDR_UTAH_FORGE",
  // EDIT: contact details
  email: "stephane.djimra@gmail.com",
  linkedin: "https://www.linkedin.com/in/djimra-stephane-soulanoudjingar-3078a055",
  authorName: "Stephane Djimra",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "The Book", href: "/book/" },
  { label: "Chapters", href: "/chapters/" },
  { label: "Companion Project", href: "/project/" },
  { label: "Demo", href: "/demo/" },
  { label: "Blog", href: "/blog/" },
  { label: "Author", href: "/author/" },
  { label: "Contact", href: "/contact/" },
];

// The full pipeline the book teaches (Solution section).
export const pipeline = [
  "PDF ingestion",
  "OCR & text extraction",
  "Cleaning & preprocessing",
  "Abbreviation expansion",
  "Token-aware chunking",
  "Keyword search (BM25)",
  "Dense embeddings",
  "Hybrid retrieval",
  "Reranking",
  "Local LLM answer generation",
  "Source citations",
  "Engineering review",
];

// Condensed version of the same pipeline for the homepage's visual flow
// diagram. The engineer is the last stage deliberately: AI assists the
// decision, it doesn't replace it. Verified counts only — see README.
export const pipelineFlow = [
  "Daily Drilling Reports",
  "OCR",
  "Cleaning",
  "Chunking",
  "Hybrid Retrieval",
  "Local LLM (optional)",
  "Evidence-Backed Answer",
  "Engineer Decision",
];

// Credibility metrics shown as small badges under the hero CTAs.
// EDIT: keep every value verifiable — no rounded-up or invented numbers.
export const metrics = [
  "17+ years operational engineering",
  "12 chapters",
  "Streamlit companion app",
  "MIT licensed",
  "Runs 100% locally",
  "Real Utah FORGE data",
];

// "What readers will build" cards.
export const builds = [
  {
    title: "DDR Search Engine",
    text: "Search an archive of real Daily Drilling Reports by keyword and by meaning — starting from a single PDF.",
  },
  {
    title: "Hybrid Retriever",
    text: "Combine BM25 keyword search with dense embeddings so 'stuck pipe', 'tight hole', and 'high torque' all surface the same event.",
  },
  {
    title: "RAG Assistant",
    text: "An end-to-end retrieval-augmented generation system that answers drilling questions from your own report archive.",
  },
  {
    title: "Evidence-Backed Answers",
    text: "Every answer cites the report, date, and passage it came from — no black-box conclusions.",
  },
  {
    title: "Streamlit Companion App",
    text: "A working web app over the full archive, with retrieval, citations, and optional local LLM generation.",
  },
  {
    title: "Local-First Workflow",
    text: "Everything runs on your laptop with open-source tools. No GPU, no cloud account, no paid APIs, no data leaving your machine.",
  },
];

// Concise explanatory paragraph shown above the "Why this matters" cards.
export const whyItMattersIntro =
  "Most operators hold decades of operational knowledge inside their Daily Drilling Report archives. " +
  "That knowledge is hard to search because terminology shifts between engineers, contractors, and operators over the life of a field. " +
  "Modern retrieval systems recover those lessons — while keeping every answer linked to the original engineering evidence.";

// "Why this matters" points.
export const whyItMatters = [
  {
    title: "Traceability",
    text: "Engineering decisions need evidence. Every retrieved answer links back to the source report and passage.",
  },
  {
    title: "Privacy & local execution",
    text: "Drilling data is confidential. The full stack — embeddings, indexes, LLM — runs locally with no external calls.",
  },
  {
    title: "Engineering trust",
    text: "Built for review by engineers, not just demos: quality gates, retrieval metrics, and honest failure modes.",
  },
  {
    title: "Practical oilfield workflows",
    text: "Real DDRs from the Utah FORGE geothermal research well, real oilfield shorthand, real formatting problems.",
  },
];

// Technologies used in the repository ("Built with").
// `what` is a plain-English gloss shown as a tooltip — written for readers
// with no programming background, per the book's stated audience.
export const technologies: { name: string; what: string }[] = [
  { name: "Python", what: "The programming language used throughout the book" },
  { name: "Streamlit", what: "Turns Python scripts into the companion app's web screens" },
  { name: "FAISS", what: "Searches millions of passages by meaning, fast" },
  { name: "BM25", what: "Classic keyword search — finds exact words and codes" },
  { name: "Sentence Transformers", what: "Converts report text into 'meaning vectors' for semantic search" },
  { name: "PyMuPDF", what: "Reads text out of PDF reports" },
  { name: "OCR", what: "Reads text from scanned (image) report pages" },
  { name: "Hybrid Retrieval", what: "Combines keyword and meaning-based search for better results" },
  { name: "Ollama (local LLMs)", what: "Runs the answer-generating AI model on your own computer" },
  { name: "GitHub Actions", what: "Automatically tests the code on every update" },
  { name: "Docker", what: "Packages the app so it runs the same on any computer" },
  { name: "pytest", what: "Automatically checks that the code still works correctly" },
];

// ============================================================
// Chapters — mirrors the real repository structure
// (book/code/chapter_01 … chapter_12). EDIT to adjust copy,
// times, objectives, and exercises.
// ============================================================
export interface Chapter {
  num: number;
  title: string;
  summary: string;
  folder: string; // path inside the repo
  keyScript: string;
  objectives: string[];
  skills: string[];
  tech: string[];
  readingTime: string;
  codingTime: string;
  exercises: string[];
}

const gh = (folder: string) => `${site.repoUrl}/tree/main/${folder}`;
export const chapterUrl = (c: Chapter) => gh(c.folder);

// Deep link straight into this chapter's text on the live book site
// (djimrastephane.github.io/ddr-rag-book/chapters/chapter_NN.html), instead
// of just the book's homepage.
export const bookChapterUrl = (c: Chapter) =>
  `${site.liveBookUrl}chapters/chapter_${String(c.num).padStart(2, "0")}.html`;

export const chapters: Chapter[] = [
  {
    num: 1,
    title: "From Daily Drilling Reports to Text",
    summary:
      "Extract text from a real DDR PDF and see what machines actually get out of an operational report.",
    folder: "book/code/chapter_01",
    keyScript: "read_ddr.py",
    objectives: [
      "Open and read a DDR PDF programmatically",
      "Understand digital vs. scanned PDFs",
      "Inspect raw extracted text critically",
    ],
    skills: ["PDF text extraction", "Python file handling"],
    tech: ["Python", "PyMuPDF"],
    readingTime: "25 min",
    codingTime: "30 min",
    exercises: [
      "Extract text from one of your own (non-confidential) PDFs",
      "Compare extraction output across two different DDR pages",
    ],
  },
  {
    num: 2,
    title: "Cleaning and Standardizing Operational Language",
    summary:
      "Expand oilfield shorthand (POOH, BHA, WOB…) so search tools can understand what the report actually says.",
    folder: "book/code/chapter_02",
    keyScript: "expand_abbreviations.py",
    objectives: [
      "Build an abbreviation dictionary for oilfield terms",
      "Normalize inconsistent operational language",
      "Handle ambiguous shorthand safely",
    ],
    skills: ["Text preprocessing", "Dictionaries & regex"],
    tech: ["Python"],
    readingTime: "25 min",
    codingTime: "30 min",
    exercises: [
      "Add ten abbreviations from your own operations to the dictionary",
      "Find a case where blind expansion changes the meaning",
    ],
  },
  {
    num: 3,
    title: "Keyword Search Across an Archive",
    summary:
      "Search many reports at once by keyword — and discover exactly where keyword search breaks down.",
    folder: "book/code/chapter_03",
    keyScript: "keyword_search.py",
    objectives: [
      "Index a folder of reports for keyword search",
      "Rank results by relevance",
      "Identify vocabulary-mismatch failures",
    ],
    skills: ["Keyword retrieval", "BM25 fundamentals"],
    tech: ["Python", "BM25"],
    readingTime: "30 min",
    codingTime: "40 min",
    exercises: [
      "Search for an event using three different terms crews use for it",
      "Log which queries fail and why",
    ],
  },
  {
    num: 4,
    title: "Semantic Search with Embeddings",
    summary:
      "Search by meaning instead of exact words, so 'stuck pipe' also finds 'tight hole' and 'high torque'.",
    folder: "book/code/chapter_04",
    keyScript: "semantic_search.py",
    objectives: [
      "Turn text into dense embeddings",
      "Measure similarity between queries and passages",
      "Compare semantic vs. keyword results",
    ],
    skills: ["Embeddings", "Vector similarity"],
    tech: ["sentence-transformers", "all-MiniLM-L6-v2"],
    readingTime: "35 min",
    codingTime: "45 min",
    exercises: [
      "Find a query where semantic search beats keywords — and one where it loses",
    ],
  },
  {
    num: 5,
    title: "Your First RAG System",
    summary:
      "Wire retrieval to a local LLM and get synthesized, cited answers from real drilling reports.",
    folder: "book/code/chapter_05",
    keyScript: "first_rag.py",
    objectives: [
      "Assemble retrieve → prompt → generate end to end",
      "Attach citations to generated answers",
      "Run a local LLM with Ollama",
    ],
    skills: ["RAG architecture", "Prompt construction"],
    tech: ["Ollama", "sentence-transformers"],
    readingTime: "40 min",
    codingTime: "60 min",
    exercises: [
      "Ask an operational question and verify every citation by hand",
    ],
  },
  {
    num: 6,
    title: "OCR and Scanned Reports",
    summary:
      "Handle scanned DDRs with OCR and quality gates that catch garbage text before it poisons your index.",
    folder: "book/code/chapter_06",
    keyScript: "OCR quality gates",
    objectives: [
      "Detect scanned vs. digital pages",
      "Run OCR and score its output quality",
      "Gate low-quality text out of the pipeline",
    ],
    skills: ["OCR", "Data quality gates"],
    tech: ["OCR tooling", "Python"],
    readingTime: "35 min",
    codingTime: "45 min",
    exercises: ["Feed a deliberately bad scan through the gate and inspect the score"],
  },
  {
    num: 7,
    title: "Chunking Operational Text",
    summary:
      "Split reports into token-aware chunks that keep operations intact and retrievable.",
    folder: "book/code/chapter_07",
    keyScript: "token-aware chunking",
    objectives: [
      "Choose chunk sizes for operational text",
      "Preserve report/date metadata per chunk",
      "Avoid splitting mid-operation",
    ],
    skills: ["Chunking strategies", "Tokenization"],
    tech: ["Python"],
    readingTime: "30 min",
    codingTime: "40 min",
    exercises: ["Compare retrieval quality at two different chunk sizes"],
  },
  {
    num: 8,
    title: "Vector Databases at Archive Scale",
    summary:
      "Index the whole archive with FAISS so semantic search stays fast as the report count grows.",
    folder: "book/code/chapter_08",
    keyScript: "FAISS indexing",
    objectives: [
      "Build and persist a FAISS index",
      "Query it efficiently",
      "Keep index and metadata in sync",
    ],
    skills: ["Vector indexing", "FAISS"],
    tech: ["FAISS"],
    readingTime: "30 min",
    codingTime: "45 min",
    exercises: ["Rebuild the index after adding new reports and verify results"],
  },
  {
    num: 9,
    title: "Hybrid Retrieval",
    summary:
      "Fuse BM25 and dense retrieval so exact codes and fuzzy descriptions both find what they should.",
    folder: "book/code/chapter_09",
    keyScript: "hybrid search",
    objectives: [
      "Combine keyword and semantic scores",
      "Tune the fusion weighting",
      "Know when hybrid helps and when it doesn't",
    ],
    skills: ["Hybrid retrieval", "Score fusion"],
    tech: ["BM25", "FAISS"],
    readingTime: "35 min",
    codingTime: "50 min",
    exercises: ["Find one query each where BM25-only, dense-only, and hybrid win"],
  },
  {
    num: 10,
    title: "Answer Traceability",
    summary:
      "Make every generated answer auditable: report, date, passage, and confidence — engineering-grade citations.",
    folder: "book/code/chapter_10",
    keyScript: "answer traceability",
    objectives: [
      "Attach structured provenance to every answer",
      "Detect unsupported claims",
      "Design for engineering review",
    ],
    skills: ["Citation systems", "Provenance tracking"],
    tech: ["Python", "Ollama"],
    readingTime: "35 min",
    codingTime: "50 min",
    exercises: ["Break the system on purpose and check the citation trail exposes it"],
  },
  {
    num: 11,
    title: "Evaluating Retrieval Quality",
    summary:
      "Measure your system with retrieval metrics instead of vibes, so improvements are provable.",
    folder: "book/code/chapter_11",
    keyScript: "retrieval metrics",
    objectives: [
      "Build a small evaluation set from real questions",
      "Compute recall/precision-style retrieval metrics",
      "Compare pipeline variants objectively",
    ],
    skills: ["Evaluation", "Retrieval metrics"],
    tech: ["Python", "pytest"],
    readingTime: "30 min",
    codingTime: "45 min",
    exercises: ["Add five of your own Q&A pairs to the eval set and re-score"],
  },
  {
    num: 12,
    title: "Cross-Report Sequences and Next Steps",
    summary:
      "Detect event sequences across reports and see where to take the system next.",
    folder: "book/code/chapter_12",
    keyScript: "cross-report sequence detection",
    objectives: [
      "Track an operational event across multiple DDRs",
      "Assemble timelines from retrieved evidence",
      "Plan production-hardening next steps",
    ],
    skills: ["Sequence detection", "System design"],
    tech: ["Python"],
    readingTime: "30 min",
    codingTime: "45 min",
    exercises: ["Trace one NPT event from first symptom to resolution across reports"],
  },
];

// ============================================================
// Author page content
// ============================================================

// Short line under the author's name, both on the homepage teaser and
// the author page.
export const authorIdentity = "Industrial AI Engineer · Completions & Well Intervention Engineer · Author";

// Compact badges for the homepage author teaser (kept short — full detail
// lives on /author/).
export const homeCareerGlance = [
  "17+ years",
  "8 countries",
  "Operations & Project Management",
  "MSc Data Science",
  "Open-source author",
  "Industrial AI",
];

// Full "career at a glance" detail for the author page.
export const authorCareer = {
  years: "17+ years in operations",
  countries: ["Australia", "India", "Malaysia", "UAE", "Bahrain", "Angola", "Chad", "UK"],
  disciplines: ["Integrated drilling", "Completions", "Well intervention", "Engineering management"],
  education: "MSc Data Science",
  extra: "Open-source software",
};

// Engineering philosophy — the principles behind the book and the code.
export const philosophy = [
  "AI should support engineering judgment, not replace it.",
  "Every answer should be traceable to engineering evidence.",
  "If something can be calculated deterministically, don't generate it.",
  "Operational data should stay under the operator's control.",
  "Practical engineering problems should drive AI development, not the reverse.",
];

// Why the book exists — shown on the author page.
export const whyIWroteThisBook =
  "After nearly two decades of reading and writing Daily Drilling Reports across multiple countries and operators, " +
  "the recurring frustration was the same: valuable engineering knowledge stayed locked inside the archive, one PDF at a time. " +
  "This book shows engineers how to recover that knowledge with transparent, evidence-backed AI — built to be inspected, not trusted blindly.";

// Publications & projects. EDIT: keep every link real and verifiable.
export const publications = [
  {
    title: "Building Industrial RAG Systems from Daily Drilling Reports",
    type: "Book",
    description: "A practical guide to OCR, hybrid retrieval, and traceable engineering answers from real DDR archives.",
    url: site.liveBookUrl,
  },
  {
    title: "DDR RAG Companion App",
    type: "Open-source software",
    description: "The Streamlit app built alongside the book — retrieval, citations, and local LLM generation.",
    url: `${site.repoUrl}/tree/main/book/app`,
  },
  {
    title: "ddr-rag-book",
    type: "GitHub repository",
    description: "Full source for the book's code, tests, and sample DDR archive. MIT licensed.",
    url: site.repoUrl,
  },
  {
    title: "Removal of Sand Control Screens and Bottom Hole Assembly in Cased Hole Gravel Packed Wells in Chad, Africa",
    type: "SPE-159600-MS",
    description: "Technical paper on well intervention operations, Society of Petroleum Engineers.",
    url: "https://doi.org/10.2118/159600-MS",
  },
];

// Roadmap for the Companion Project page. EDIT freely.
export const roadmap = [
  "Expanded evaluation datasets and benchmark queries",
  "More OCR backends and quality heuristics",
  "Reranking model comparisons",
  "Additional local LLM configurations",
];
