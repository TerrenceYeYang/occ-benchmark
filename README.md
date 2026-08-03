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

> **光传模块 v1.0 binary preview:**
> [Download for macOS arm64](https://github.com/TerrenceYeYang/occ-benchmark/releases/download/v1.0.0/occ-light-module-v1.0.0-macos-arm64.zip)

This distribution contains the native static and dynamic libraries, stable C
and C++ headers, an artifact manifest, and SHA-256 checksums. It is intended for
evaluation by ISVs and independent developers; the Core implementation source
is not included.

| Platform | Binary | Release tag |
| --- | --- | --- |
| macOS arm64 | [Download v1.0](https://github.com/TerrenceYeYang/occ-benchmark/releases/download/v1.0.0/occ-light-module-v1.0.0-macos-arm64.zip) | [`v1.0.0`](https://github.com/TerrenceYeYang/occ-benchmark/releases/tag/v1.0.0) |
| Windows x86_64 | Coming soon | Tag TBD |
| Android arm64-v8a | Coming soon | Tag TBD |
| iOS Device arm64 | Coming soon | Tag TBD |
| Linux x86_64 / arm64 | Coming soon | Tag TBD |

The package boundary includes a stable C ABI, fixed test vectors, the OCC
Benchmark Runner, and provider interfaces for graphics, hashing, prediction,
and hardware acceleration. Developers run the module in their own environment;
no algorithm upload is required.

## Published content

The `site/` directory contains only compiled website assets, the generated
`benchmark-results.json`, and the social preview image. The binary is distributed
separately as a GitHub Release asset; neither the website bundle nor this Git
repository contains the OCC implementation source, private fixtures,
credentials, or a user algorithm upload endpoint.

The JSON result records the tested module version, C ABI, binary SHA-256, and
release URL so that the score stays bound to the distributed native artifact.
Licensing, production support, additional platform binaries, and binary
protection policy remain separate release decisions.
