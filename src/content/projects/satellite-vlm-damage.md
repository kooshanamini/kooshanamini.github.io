---
title: Zero-shot road and bridge damage mapping with open VLMs
name: NASA ROSES · Satellite VLM pipeline
summary: A 37-stage, config-driven pipeline that turns 2.1 TB of commercial satellite imagery into road- and bridge-level damage labels with open vision-language models — 30,362 segments in 3.1 days at $0 in API fees.
order: 3
featured: true
period: 2025 – present
role: Lead on the satellite-imagery work — pipeline, benchmark, and runtime study
context: NASA ROSES sponsored research
tags: [Vision-language models, ML systems, Satellite imagery]
stack: [Python, vLLM, Qwen-VL, InternVL, FP8 quantization, GeoPandas, rasterio / GDAL, OpenStreetMap, AWS S3]
metrics:
  - value: '30,362'
    label: road and bridge segments classified in 3.1 days on 2 GPUs
  - value: 0.33 → 0.78
    label: damage recall with reasoning and set-of-mark prompting
  - value: −27–32%
    label: model calls, with lossless early-stop voting
cover: ../../assets/projects/satellite-framework.webp
coverAlt: "Project framework: hazard, natural, built, and human-environment inputs, enhanced with satellite products, feed debris and road and bridge damage models, then road closures and network connectivity loss."
coverFit: contain
---

## The problem

After a hurricane, transportation agencies need to know which roads and bridges are damaged or blocked across thousands of square kilometers, quickly, and without a labeling budget. Commercial satellite imagery covers the region within days. The bottleneck is turning terabytes of pixels into per-segment answers.

## Approach

- **Imagery engineering.** Designed the imagery request (26 areas covering 3,353 km²) and built a resumable, checksum-verified transfer tool (multipart ETag/MD5 audits, atomic promotion, HTTP Range resume, bandwidth throttling) to archive 2.1 TB, then traced its throughput limit to disk rather than network.
- **A 37-stage, config-driven pipeline.** Pan-sharpening, OpenStreetMap road segmentation into segments of up to 100 m with stable IDs, pre- and post-event image chips, FFT-based co-registration, VLM classification, and GeoPackage outputs, packaged as a Python library driven by configuration files.
- **Zero-shot classification with open VLMs.** Set-of-mark prompting marks the target segment on each chip. A three-vote majority with early stopping skips the third call whenever the first two agree, cutting model calls by 27–32% with identical outputs.
- **Benchmark before scale.** Compared four open VLMs (Qwen3-VL-32B, Qwen3.6-27B, Qwen3.6-35B-A3B, and InternVL3.5-38B) and designed a 1,000-item human-labeled benchmark with exact inclusion probabilities, spatially blocked splits, and blind dual screening.

## Results

- Best model: addressable accuracy 0.77 and macro-F1 0.70. Reasoning mode, set-of-mark prompting, and co-registration raised damage recall from 0.33 to 0.78.
- Found that a 5,120-token output cap was silently truncating the model's reasoning; lifting it raised accuracy from 0.68 to 0.77.
- Production run: 30,362 road and bridge segments in 3.1 days on two GPUs with vLLM (FP8, data-parallel), against a 5.6-day estimate.
- $0 in API fees, versus an estimated $3.7k–$9.2k for the same run on closed models.
- Satellite-derived debris maps agree with aerial-imagery maps at Cohen's κ = 0.65.

![Bar chart of accuracy and macro-F1 for four open vision-language models on a 27-case evaluation](../../assets/projects/satellite-accuracy.webp)

*Damage-classification accuracy and macro-F1 for four open VLMs on the 27-case evaluation. The best configuration reaches 0.77 accuracy on cases where the road is present and 0.70 macro-F1.*

![Bar chart comparing the same model with and without reasoning across accuracy, macro-F1, and per-class recall](../../assets/projects/satellite-reasoning.webp)

*Same model, same prompt, same 27 cases: turning on reasoning raises damaged-segment recall from 0.33 to 0.78.*

![Three maps of the same road network colored by each model's labels: damaged, undamaged, undecidable, or road not present](../../assets/projects/satellite-maps.webp)

*Labels from three models over the same 194 road segments on Galveston Island: damaged, undamaged, undecidable, or road not present.*

## My role

I lead the satellite-imagery work: I designed and built the pipeline, the benchmark, and the runtime study, and presented the results to the Houston–Galveston Area Council (H-GAC) and NASA.
