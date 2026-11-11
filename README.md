# Ruthvik Reddy Anthireddigari

### Analog & mixed-signal IC design | Digital design | Verification

I am pursuing an MS in Electrical Engineering at Arizona State University. My primary interests are analog and mixed-signal IC design, supported by project work in custom CMOS circuits, RTL, physical implementation, and verification.

**[Explore all 30 project PDFs](docs/PROJECT-INDEX.md)** · **[Download the complete PDF collection](downloads/Ruthvik-Reddy-Project-Case-Studies.zip)** · **[Analog resume](downloads/resumes/Ruthvik-Reddy-Analog-Resume.pdf)** · **[LinkedIn](https://www.linkedin.com/in/ruthvik-reddy-anthireddi/)**

**[Open the portfolio website](https://ruthvik-reddy-a.github.io/)**

The website and this repository provide two ways to explore the work. Each detailed project PDF is three pages and covers the problem, my contribution, implementation, evidence, and limitations. No separate website or account is needed to browse the public repository and its files.

## Start with my analog work

| Project | Engineering focus | Detailed PDF |
|---|---|---|
| Folded-cascode amplifier | Class-AB output stage, gain, stability, load-dependent bandwidth | [Read case study](downloads/projects/analog/Project-01-folded-cascode.pdf) |
| 2.3 V LDO regulator | OTA/PMOS feedback loop, DC load regulation, transient response | [Read case study](downloads/projects/analog/Project-02-ldo-regulator.pdf) |
| Telescopic-cascode amplifier | Biasing, headroom, common-mode behavior, PSRR/CMRR | [Read case study](downloads/projects/analog/Project-03-telescopic-cascode.pdf) |
| Constant-gm current references | Three CMOS reference topologies, supply and temperature sweeps | [Read case study](downloads/projects/analog/Project-04-constant-gm.pdf) |

## Digital implementation and verification

- [32 nm four-bit CMOS adder](downloads/projects/digital/Project-08-cmos-adder.pdf): transistor sizing, DRC/LVS, and extracted timing/power.
- [GCN accelerator](downloads/projects/digital/Project-07-gcn-accelerator.pdf): RTL, synthesis, and physical implementation with reference-classification checks.
- [APB interface for an FP8 accelerator](downloads/projects/digital/Project-05-fp8-apb.pdf): my interface/register-map contribution to the team design.
- [Five-stage MIPS processor](downloads/projects/digital/Project-06-pipelined-mips.pdf): forwarding, stalls, branch flushing, and directed regressions.
- [FIFO with DPI-C and assertions](downloads/projects/verification/Project-10-fifo-dpi-sva.pdf), [asynchronous FIFO](downloads/projects/verification/Project-09-async-fifo.pdf), and [VeriChip](downloads/projects/verification/Project-11-verichip.pdf): behavioral checks, assertions, and verification planning.

The [complete project library](docs/PROJECT-INDEX.md) also includes the digital clock, buck converter, traffic-signal prototype, 8051 gas detector, energy-billing demonstrator, speech analysis, load-flow study, and audio encryption/decryption study.

## PCB and board design

Five KiCad studies include board renders, source-repository links, and three-page PDFs: the ATmega328P data logger, ESP32 GPS/GSM tracker, breadboard supply, attributed solar-supply adaptation, and LED torch. Find them using the **PCB design** filter on the website or the [project index](docs/PROJECT-INDEX.md). Descriptions distinguish design artifacts from measured hardware results.

## Experience and academic background

- **Renesas Electronics America** - Validation Intern, May-Aug 2026: DDR5 post-silicon validation, Python/SCPI automation, timing characterization, and debug.
- **Delta IoT Solutions** - Embedded Intern, Mar-Jun 2025: Arduino/ESP32 firmware, KiCad PCB design, and prototype testing.
- **Research Centre Imarat / DRDO** - Student / Project Intern, Feb-Jun 2024: FPGA video-data paths, AXI4-Stream, RTL verification, and implementation.
- **BHEL** - Student Intern, Dec 2023: industrial power systems, manufacturing, and testing exposure.
- **Boeing India** - Electrical Design and Analysis Engineer Intern, Jun-Aug 2023: Verilog UART/FIFO control, simulation, and FPGA design optimization.

**Arizona State University:** MS Electrical Engineering, Aug 2025-Aug 2027 (expected), GPA 3.94/4.00. Coursework includes analog and advanced analog IC design, VLSI, digital design for SoCs, and digital verification.

**Manipal Institute of Technology:** B.Tech. Electrical & Electronics Engineering, Oct 2020-Jul 2024.

## Files and maintenance

`downloads/projects/` contains the detailed case studies, grouped by engineering area. `downloads/briefs/` contains the earlier short briefs. The original Analog resume remains the only published resume version.

The repository contains the HTML/CSS/JavaScript source for the live portfolio website. No build dependencies are required. See the [structure/editing guide](docs/PORTFOLIO-STRUCTURE.md) and [resume guide](docs/RESUME-GUIDE.md) for maintenance. The [repository comparison](docs/REPOSITORY-REVIEW.md) records documentation opportunities and matching source repositories.

## Repository layout

```text
index.html                  Website entry point
assets/css/                 Styles and responsive layouts
assets/js/                  Page rendering and interaction
assets/images/              Project schematics, waveforms, and photographs
data/                       Project and resume content
downloads/projects/         Three-page PDFs, grouped by discipline
downloads/briefs/            Earlier illustrated briefs and previews
downloads/resumes/           Published resume PDFs
downloads/                  Complete project PDF collection ZIP
docs/                       Project index and maintenance guides
```
