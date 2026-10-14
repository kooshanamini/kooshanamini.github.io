---
title: Schema-first architecture for multimodal flood awareness
name: OpenSafe.AI · NSF ReDDDoT
summary: Coordinating a multi-team NSF project and designing its architecture — versioned JSON-Schema interfaces and MCP modules — plus Bayesian fusion of crowd reports, cameras, and gauges that flags flooding a median 27 hours early.
order: 4
featured: true
period: '2026'
role: Project coordinator and system architect
context: NSF ReDDDoT Phase 2 sponsored research
tags: [System design, Bayesian data fusion, Responsible AI]
stack: [Python, JSON Schema, Model Context Protocol (MCP), Bayesian inference, Semantic versioning]
metrics:
  - value: 0.654 → 0.707
    label: held-out AUC, better in 11 of 11 forecast cycles
  - value: 738 of 1,286
    label: flood reports flagged a median 27 hours early
  - value: '18,004'
    label: messages schema-validated in about 100 seconds per pass
cover: ../../assets/projects/opensafe-fusion-maps.webp
coverAlt: Maps of road impassability at the peak of Hurricane Harvey, before and after fusing 311 reports, and the change between them.
coverFit: contain
---

## The problem

During a flood, signals arrive from everywhere: model forecasts, 311 calls, traffic cameras, stream gauges, and navigation apps. Different teams build them, in different formats, with different reliability. OpenSafe.AI, funded by the NSF Responsible Design, Development, and Deployment of Technologies (ReDDDoT) program, aims to combine them into situational awareness that responders can trust.

## Approach

- **Architecture as contracts.** I wrote the system architecture plan (versions 0.1 to 0.4): versioned JSON-Schema message standards, an input/output standard for vision models, modules exposed as Model Context Protocol (MCP) servers, decision records, and a semantic-versioning registry, so that teams can build and ship independently.
- **Schema-validated orchestration.** An orchestrator pilot validates every message against the schemas: 18,004 messages in about 100 seconds per pass.
- **Bayesian fusion.** Flood probabilities from 11 forecast cycles × 160 scenarios are updated with evidence from 311 reports, traffic cameras, gauges, and Waze reports.
- **Vision benchmark.** A 1,070-image benchmark for evaluating camera-based flood detection.

## Results

In a replay of Hurricane Harvey:

- Held-out AUC improved from 0.654 to 0.707, better in all 11 forecast cycles.
- The fused model flagged 738 of 1,286 flood reports a median of 27 hours early.

![Charts of held-out pairwise AUC with all evidence versus with each source removed, and skill by forecast lead time](../../assets/projects/opensafe-evidence.webp)

*Does the evidence help? (a) Held-out pairwise AUC with all evidence (0.707) versus scenarios alone (0.654), and with each data source removed in turn; (b) skill by forecast lead time.*

## My role

Project coordinator and system architect: I coordinate the multi-team effort, authored the architecture and interface standards, and built the orchestration and fusion pilots.
