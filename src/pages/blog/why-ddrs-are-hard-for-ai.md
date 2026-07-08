---
layout: ../../layouts/BlogPost.astro
title: "Why Daily Drilling Reports Are Hard for AI"
description: "Shorthand, scans, and terminology drift: why the most valuable operational documents are the hardest to search."
date: "2026-07-01"
readingTime: "7 min read"
---

Daily Drilling Reports look structured. They have headers, dates, depths, time breakdowns,
mud properties, and a familiar rhythm that any well engineer can read in seconds. That
familiarity is misleading: to a machine, a DDR archive is one of the hardest document
collections you can point an AI system at. Here's why — and why it's worth doing anyway.

## Problem 1: Format chaos

A single well's archive typically mixes native digital PDFs exported from reporting
software, scanned pages that were printed, signed, and re-digitized, and layouts that
changed whenever the operator, contractor, or reporting system changed. Text extraction
that works perfectly on one report returns garbage on the next. Tables become word soup.
Multi-column layouts interleave. A scanned page returns nothing at all without OCR — and
OCR introduces its own errors, which is why the book dedicates a chapter to OCR *quality
gates*: scoring extracted text and refusing to index pages that fall below threshold,
because one garbled report silently poisons every search that follows.

## Problem 2: Oilfield shorthand

DDRs are written under time pressure in a compressed dialect: `POOH`, `RIH`, `BHA`,
`WOB`, `NPT`, `PJSM`, `LCM`. General-purpose language models weren't trained on much of
this, and even when they recognize an abbreviation, they can't always disambiguate it
from context. Before any retrieval can work well, the text needs normalization — expanding
shorthand into full operational language. And expansion isn't mechanical: done blindly, it
can change meaning, which is why the book has you build and *own* the abbreviation
dictionary rather than trusting a generic one.

## Problem 3: Terminology drift

This is the killer. The same physical event gets described as *stuck pipe* by one crew,
*tight hole* by the next, and *high torque, worked pipe* by a third. Same well, same
problem, three vocabularies. A keyword search for "stuck pipe" finds one report and
silently misses the others — and "silently" is the dangerous part. You don't get an error;
you get incomplete evidence and a false sense of completeness during planning.

This is precisely the failure mode semantic retrieval addresses: embeddings map those
three phrasings near each other in vector space, so a search by *meaning* finds all three.
But semantic search has its own blind spots with exact identifiers and codes, which is why
the practical answer is hybrid retrieval — a topic that gets its own post.

## Why bother?

Because the payoff is asymmetric. Those archives contain years of paid-for lessons:
what the formation did at 7,800 ft, what fixed the losses last time, how long the fishing
job actually took. Most of it is functionally invisible — trapped in PDFs nobody has time
to reread. A system that makes reports searchable by meaning, and answers questions with
citations back to the original pages, turns a compliance archive into an engineering
asset.

The book works through every one of these problems in order, on real reports from the
Utah FORGE geothermal research well — format chaos in Chapters 1 and 6, shorthand in
Chapter 2, and terminology drift from Chapter 4 onward. The [companion
repository](https://github.com/djimrastephane/ddr-rag-book) has the code for each step.
