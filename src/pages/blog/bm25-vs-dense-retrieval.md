---
layout: ../../layouts/BlogPost.astro
title: "BM25 vs Dense Retrieval for Engineering Reports"
description: "When exact keywords win, when embeddings win, and why hybrid retrieval is the practical answer for DDR archives."
date: "2026-06-20"
readingTime: "8 min read"
---

Every retrieval system for engineering reports eventually faces the same choice: match
the words, or match the meaning? Both approaches are decades apart in origin and neither
is sufficient alone. Understanding *why* each one fails is the fastest way to design a
retriever you can trust.

## What BM25 actually does

BM25 is a ranking function over exact term matches, refined by two intuitions: a term
matters more if it's rare across the archive, and matters less the more often it repeats
inside one document. It's fast, cheap, fully transparent — you can always explain a
result by pointing at the matching words — and it needs no model, no GPU, and no training.

For engineering text, BM25 is unbeatable when the query contains exact identifiers:
a casing size, a report number, a depth, a tool name, a vendor. Nobody paraphrases
`9-5/8"` or `FORGE 16A [78]-32`. If the token is in the report, BM25 finds it.

## Where BM25 breaks

Vocabulary mismatch. Crews describe the same event differently across shifts, contractors,
and years — *stuck pipe*, *tight hole*, *high torque, worked pipe*. BM25 sees three
unrelated strings. The searcher gets a partial answer with no warning that two-thirds of
the evidence was missed. In an archive spanning multiple wells and a decade of
terminology drift, this isn't an edge case; it's the norm.

## What dense retrieval does

Dense retrieval embeds each passage into a vector that encodes meaning, then finds
passages whose vectors sit close to the query's. The book uses `all-MiniLM-L6-v2` from
sentence-transformers — small enough to run on a laptop CPU, good enough to place
*tight hole* near *stuck pipe*. Suddenly a search by meaning surfaces all the phrasings
of an event, including ones the searcher didn't think to try.

## Where dense retrieval breaks

Three places. Exact identifiers: an embedding model has no special respect for `#38` or a
part number — the very tokens BM25 handles perfectly. Out-of-vocabulary jargon: a small
general-purpose model may embed dense oilfield shorthand poorly (one more reason Chapter 2's
abbreviation expansion comes *before* embeddings). And opacity: when a semantic result
looks wrong, there's no matching word to point at — a real cost in a discipline where
you have to justify your evidence.

## Hybrid: the practical answer

The resolution isn't choosing — it's fusing. Run both retrievers, then combine their
rankings so a passage scoring well on either (or both) rises to the top. The queries
engineers actually ask are usually mixed: "losses while running the 9-5/8" casing" has an
exact token (`9-5/8"`) and a semantic concept (*losses* — which reports may call *lost
returns* or *no returns*). Hybrid retrieval serves both halves of that query at once.

Chapter 9 of the book builds the fusion step and — more importantly — Chapter 11 builds
the evaluation harness, because the honest answer to "which retriever is best?" is
*measure it on your own archive with your own questions*. The right fusion weighting
depends on how your reports are written, and the only way to know is a small evaluation
set of real engineering questions with known answers.

The takeaway: BM25 for precision on identifiers, embeddings for recall across
terminology drift, hybrid to get both — and an eval set so the decision is measured, not
guessed. All of it runs locally; the code is in the
[companion repository](https://github.com/djimrastephane/ddr-rag-book).
