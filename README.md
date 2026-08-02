# OCC Benchmark

OCC Benchmark publishes evidence for the official OCC native module without
uploading the algorithm module or source code. The website is an evidence
viewer, not an online judge.

## Evidence tiers

| Tier | Meaning | Current official evidence |
| --- | --- | --- |
| Physical device | Real phone, display, camera, and optical path | Not run; no passing score is claimed |
| Simulator | Native host integration in iOS Simulator or Android Emulator | iOS Simulator passed with 25% source-symbol erasure; Android Emulator not run |
| Protocol simulation | In-memory core and software fault channel | Core throughput and independent-process recovery passed |

The official module's first public score appears under **Simulator**. Its
in-memory and fault-channel measurements also appear separately under
**Protocol simulation**. A physical-device result will be added only after a
real optical run is captured.

## Demo video

> **Coming soon.** A short video will show the complete transfer experience and
> identify the device and evidence tier represented by the recording.

## Core library distribution

> **Preview distribution planned.** A Core lib evaluation package may be made
> available to ISVs and independent developers.

The planned package boundary includes a stable C ABI, native platform targets,
fixed test vectors, the OCC Benchmark Runner, and provider interfaces for
graphics, hashing, prediction, and hardware acceleration. Developers will run
the module in their own environment; no algorithm upload is required.

## Published content

The `site/` directory contains only compiled website assets, the generated
`benchmark-results.json`, and the social preview image. It does not contain the
OCC module binary, Rust/C/C++ source code, private fixtures, credentials, or a
user algorithm upload endpoint.

The JSON result records the tested module version, C ABI, and binary SHA-256 so
that a result stays bound to one local artifact. `artifact_published: false`
means that artifact is deliberately absent from this public bundle.

Distribution availability, licensing, support terms, and binary protection
policy will be announced with the Core lib preview.
