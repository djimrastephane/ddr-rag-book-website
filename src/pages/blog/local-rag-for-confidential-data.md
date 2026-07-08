---
layout: ../../layouts/BlogPost.astro
title: "Building Local RAG Systems for Confidential Data"
description: "Drilling data can't go to a cloud API. A fully local stack: FAISS, sentence-transformers, and Ollama."
date: "2026-05-18"
readingTime: "7 min read"
---

Daily Drilling Reports are confidential by default. They name wells, formations, vendors,
personnel, costs, and problems — and they usually belong to an operator under agreements
that were written long before anyone imagined pasting report text into a web form. For
most engineers, "send the archive to a cloud API" is not a policy discussion; it's a
non-starter. The practical consequence is simple: if you want RAG over operational data,
**the entire pipeline has to run on hardware you control.**

The good news: in 2026, that's not a compromise. It's a laptop.

## The full local stack

Every stage of the book's pipeline runs offline after the initial installs:

- **Extraction & OCR** — pdfplumber and Tesseract-based OCR process PDFs on disk.
  Documents never leave the machine.
- **Embeddings** — `all-MiniLM-L6-v2` via sentence-transformers, pinned to CPU.
  It's a small model, downloaded once, then fully offline. No embedding API, no
  per-token bill, no rate limits.
- **Indexing** — FAISS holds the vectors in a local index file. Your searchable archive
  is literally a file in a folder you own.
- **Keyword search** — BM25 is just math over your own token counts. Nothing to send
  anywhere.
- **Generation** — Ollama runs the LLM locally (`qwen2.5:7b-instruct` in the book's
  setup). Questions, evidence, and answers all stay on the box.

No GPU, no cloud account, no API keys. Eight gigabytes of RAM is enough; sixteen is
comfortable.

## What you give up — honestly

A 7B local model is not a frontier model. Its prose is plainer and its reasoning
shallower than the best hosted models. But RAG changes what you need from the model: the
knowledge lives in the *retrieved evidence*, and the model's job is to synthesize a few
passages into a short, cited answer. That's a task small models do respectably — and the
evidence-first design means the retrieved passages are always displayed anyway, so a
mediocre summary of good evidence still leaves the engineer with good evidence.

The trade in return: complete data custody, zero marginal cost per query, no vendor in
the loop, and a system that works on a rig network, in a country office with poor
connectivity, or on an aircraft. For confidential archives, that trade wins.

## Design habits that keep it local

Two habits matter more than any tool choice. First, *degrade gracefully*: the book's
companion app runs retrieval even when Ollama is down — it tells you plainly that
generation is unavailable and shows the evidence anyway. Retrieval never depends on the
LLM. Second, *pin and cache*: models are versioned and downloaded once, so the system's
behavior doesn't shift under you because a hosted endpoint changed.

## Learn on public data, deploy on yours

One more deliberate choice: the book teaches on the Utah FORGE archive — real DDRs from a
U.S. Department of Energy geothermal research well, publicly released. You learn every
technique on genuinely messy operational reports without touching anything confidential;
then you point the same code at your own archive, on your own machine, and nothing about
the architecture has to change. That's the quiet advantage of building local-first from
day one: confidentiality isn't a migration project later — it's already true.
