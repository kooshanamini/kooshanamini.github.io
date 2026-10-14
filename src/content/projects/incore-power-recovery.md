---
title: Open-source power-network recovery for IN-CORE
name: IN-CORE · Open source
summary: Contributed an electric power network recovery analysis — Monte Carlo damage, crew-constrained repair scheduling, and importance-ordered restoration — to NCSA's open-source IN-CORE platform, merged after code review and CI.
order: 8
period: 2024 – 2025
role: Contributor, selected for the 1st IN-CORE Contributor Cohort (NCSA & NIST Center of Excellence)
context: Open source · merged July 2025
tags: [Open source, Graph algorithms, Simulation]
stack: [Python, NetworkX, NumPy, concurrent.futures, black, CI]
metrics:
  - value: +1,417
    label: lines merged after code review and CI
  - value: ~795
    label: lines in the core analysis module
  - value: 1st
    label: IN-CORE Contributor Cohort, selected by interview
links:
  - label: Pull request #21
    href: https://github.com/IN-CORE/pyincore-incubator/pull/21
    kind: pr
cover: ../../assets/projects/incore-network.webp
coverAlt: Galveston Island electric power network with poles, lines, and substations colored by service area, plus a zoomed inset.
coverFit: contain
---

## The problem

IN-CORE (Interdependent Networked Community Resilience Modeling Environment) is NCSA's open-source platform, developed with the NIST Center of Excellence, for modeling how communities withstand and recover from disasters. It lacked a reusable analysis of how an electric power network, and the buildings it serves, recovers after a hazard.

## What I built

- **Network model.** Builds a NetworkX graph of the power network and links each building to it with a KD-tree.
- **Damage and repair.** Samples component damage with Monte Carlo simulation, schedules repairs under crew constraints, and restores components in order of importance, producing restoration curves for buildings.
- **Production quality.** Replaced joblib with `concurrent.futures`, added input validation and sensible defaults, kept the code black-compliant, and wrote a test script.

![Map of Galveston Island buildings colored by the number of days until power is restored, with a zoomed inset](../../assets/projects/incore-recovery.webp)

*Simulated days for each building on Galveston Island to regain power, from the recovery analysis applied to the testbed. Figure adapted from Amini et al., IJDRR 2026 (CC BY).*

## Outcome

Merged into IN-CORE/pyincore-incubator on July 23, 2025 as pull request #21 (+1,417 lines), after code review. The repository's CI runs black, conda builds, documentation builds, and PyPI packaging.

## Context

I was selected by interview for the first IN-CORE Contributor Cohort in 2024, which paired each contributor with an NCSA research software engineer. I also presented *Community Resilience Modeling with IN-CORE* at the NHERI SimCenter Community Roundtable in 2024, as the only graduate-student speaker.
