---
layout: ../../layouts/BlogPost.astro
title: "Building Local RAG Systems for Confidential Data"
description: "Drilling data can't go to a cloud API. A fully local stack: FAISS, sentence-transformers, and Ollama."
date: "2026-05-18"
readingTime: "6 min read"
---

<!-- EDIT: placeholder post — replace with your full article. -->

Operator data is confidential by default. The practical consequence: your embeddings, your
index, and your LLM all have to run on hardware you control.

## The local stack

- **sentence-transformers** (`all-MiniLM-L6-v2`) for embeddings — small, fast, CPU-friendly.
- **FAISS** for vector indexing at archive scale.
- **Ollama** for local LLM generation — no API keys, no data egress.

The whole book runs on this stack with 8 GB of RAM. This post is a placeholder — the full
article is coming.
