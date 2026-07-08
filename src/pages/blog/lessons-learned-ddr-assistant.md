---
layout: ../../layouts/BlogPost.astro
title: "Lessons Learned from Building a DDR Assistant"
description: "What worked, what broke, and what surprised me building a RAG assistant over real drilling reports."
date: "2026-05-02"
readingTime: "8 min read"
---

Building a RAG assistant over the Utah FORGE drilling reports — first as the book's
chapter-by-chapter system, then as a companion app over the full archive — taught me more
than any tutorial ever did. Most of the lessons weren't about models. They were about
data, discipline, and what engineers actually need from a system like this.

## 1. Text quality dominates everything downstream

The single biggest determinant of answer quality wasn't the LLM or the embedding model —
it was what came out of the PDFs. A scanned page that OCRs into garbage doesn't fail
loudly; it gets indexed, matched, and quoted like everything else, quietly degrading
every search that touches it. The fix that mattered most was unglamorous: quality gates
that score extracted text and refuse to index pages below threshold. Reject bad input
early and every later stage gets easier to trust.

## 2. Domain normalization beats model sophistication

Expanding oilfield shorthand — `POOH`, `BHA`, `WOB` — before indexing improved retrieval
more than any model swap I tried. A small embedding model reading clean, expanded
operational language beats a bigger model reading raw rig shorthand. The abbreviation
dictionary is also where your domain expertise enters the system; it's the one component
no off-the-shelf tool can supply, and building it yourself is exactly the kind of work
engineers are qualified to do on day one.

## 3. Chunking decisions are retrieval decisions

Where you split the text decides what can be found. Split a report mid-operation and the
cause lands in one chunk, the consequence in another, and neither retrieves well alone.
Keeping time-breakdown entries intact, carrying report and date metadata on every chunk,
and sizing chunks by tokens rather than characters did more for answer quality than
tuning anything on the model side.

## 4. Hybrid retrieval earns its complexity — but measure it

Keyword search alone misses paraphrases; semantic search alone fumbles exact identifiers.
Fusing them helped on precisely the queries engineers ask — half identifier, half concept.
But the honest lesson is that the *right* balance is archive-specific, and intuition is a
poor judge. A small evaluation set of real questions with known source reports settles
arguments in minutes that gut feeling would debate for weeks. Build the eval set earlier
than feels necessary.

## 5. Citations changed how people received it

The moment answers came with report names, dates, and excerpts, conversations about the
system changed. It stopped being "do you trust the AI?" and became "here's the evidence —
check it." Skeptical colleagues are exactly the users you want, and citation-first design
is what gives them something legitimate to do with their skepticism. An assistant that
shows its sources gets adopted by people who would rightly ignore one that doesn't.

## 6. Local-first was a feature, not a constraint

I expected running everything locally — CPU embeddings, FAISS on disk, Ollama for
generation — to feel like the budget option. In practice it removed entire categories of
friction: no confidentiality reviews for cloud APIs, no per-query costs shaping usage,
no dependency on connectivity. The system works the same on a laptop offshore as it does
in the office.

## The meta-lesson

Almost everything that improved the system was understandable engineering: clean the
input, normalize the language, split the text sensibly, measure retrieval, show the
evidence. No exotic models, no fine-tuning, no magic. That's the encouraging conclusion
for any engineer starting from zero — the skills that make these systems good are much
closer to engineering discipline than to research. The book is that path, one chapter at
a time, and the [companion repository](https://github.com/djimrastephane/ddr-rag-book)
is the working proof.
