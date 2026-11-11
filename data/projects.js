// Verified project content; paths are relative to index.html.
const projects = [
  {
    "title": "Folded-cascode amplifier",
    "category": "analog",
    "label": "Analog IC design",
    "summary": "A CMOS folded-cascode amplifier with a Class-AB output buffer, evaluated for gain, stability, and bandwidth.",
    "tags": [
      "Analog IC design",
      "CMOS",
      "Cadence Virtuoso",
      "Biasing",
      "Stability analysis"
    ],
    "file": "downloads/briefs/02-Amplifier",
    "course": "EEE 523 · Advanced Analog IC Design",
    "term": "Spring 2026",
    "results": [
      [
        "Open-loop gain",
        "≈70 dB"
      ],
      [
        "Phase margin",
        "57.5°"
      ],
      [
        "Unity-gain frequency",
        "169 MHz"
      ]
    ],
    "id": "folded-cascode",
    "kind": "Individual design",
    "role": "Transistor sizing, biasing, and simulation in the EEE 523 project report.",
    "flow": [
      "Bias network",
      "Folded cascode",
      "Class-AB buffer",
      "Load response"
    ],
    "question": "How can a folded-cascode gain stage drive a load through a Class-AB output buffer while preserving gain and stability?",
    "approach": [
      "Combined a folded-cascode amplifier with a Class-AB output stage and sized the transistors around their bias conditions.",
      "Used operating-point and AC simulations to examine gain, phase margin, and unity-gain frequency. The study treats the load condition as part of each result rather than reporting a single unconditional bandwidth."
    ],
    "validation": "The report and approved brief show approximately 70 dB open-loop gain and 57.5° phase margin. A separate 1 pF load simulation gives 169 MHz unity-gain frequency.",
    "tradeoff": "The 57.5° phase margin is below the 60° design target. It identifies stability as a remaining design consideration. The 169 MHz unity-gain result is from a separate simulation with a 1 pF load.",
    "source": "EEE 523 Project 3 report, pp. 4, 9, 15, 21–22; approved amplifier brief.",
    "images": [
      {
        "src": "assets/images/img-amp-p9-0.webp",
        "title": "Folded-cascode stage and Class-AB buffer",
        "alt": "Folded-cascode stage and Class-AB buffer — Transistor-level schematic from the amplifier report.",
        "caption": "Transistor-level schematic from the amplifier report.",
        "width": 1440,
        "height": 778
      },
      {
        "src": "assets/images/img-amp-p15-0.webp",
        "title": "Gain and phase response",
        "alt": "Gain and phase response — Reported stability simulation; see the evaluation for load conditions and target comparison.",
        "caption": "Reported stability simulation; see the evaluation for load conditions and target comparison.",
        "width": 1358,
        "height": 656
      }
    ],
    "situation": "A high-gain CMOS amplifier must also bias correctly and remain stable when its output stage drives a load. This project combines a folded-cascode gain stage with a Class-AB buffer.",
    "task": "Size and bias the transistor-level design, then evaluate gain, stability, and load-dependent bandwidth.",
    "outcome": "Designed and simulated a folded-cascode/Class-AB amplifier with approximately 70 dB gain and 57.5° phase margin; a separate 1 pF simulation reached 169 MHz unity-gain frequency.",
    "detailedPdf": "downloads/projects/analog/Project-01-folded-cascode.pdf"
  },
  {
    "title": "2.3 V LDO regulator",
    "category": "analog",
    "label": "Analog IC design",
    "summary": "An OTA error amplifier, PMOS pass device, and resistive feedback, evaluated through DC load and transient simulations.",
    "tags": [
      "Analog IC design",
      "LDO",
      "Feedback",
      "Cadence Virtuoso",
      "Transient analysis"
    ],
    "file": "downloads/briefs/01-LDO",
    "course": "EEE 433/591 · Analog IC Design",
    "term": "Fall 2025",
    "results": [
      [
        "Supply voltage",
        "2.5 V"
      ],
      [
        "DC load range",
        "0.1–50 mA"
      ],
      [
        "DC output span",
        "8 mV"
      ]
    ],
    "id": "ldo-regulator",
    "kind": "Individual design",
    "role": "LDO circuit design and DC, AC, and transient evaluation for the analog IC class project.",
    "flow": [
      "1.25 V reference",
      "OTA error amp",
      "PMOS pass device",
      "Feedback divider"
    ],
    "question": "How does a CMOS regulator maintain an approximately 2.3 V output as the load changes from 0.1 to 50 mA?",
    "approach": [
      "Closed the feedback loop around an OTA error amplifier, a PMOS pass transistor, and a resistive divider. The OTA adjusts the pass-device gate to bring the feedback voltage toward the reference.",
      "Compared four DC load conditions, then applied a load step to examine droop, overshoot, and recovery. Operating-point checks relate the pass-device current and terminal voltages to the changing load."
    ],
    "validation": "At a 2.5 V supply, the reported DC output spans 2.315–2.323 V across the four load conditions: an 8 mV range. The project brief includes the closed-loop schematic, load sweep, and transient waveform.",
    "tradeoff": "The 8 mV figure describes static output variation across the DC sweep. The load-step waveform provides a separate view of transient droop, overshoot, and recovery.",
    "source": "EEE 433/591 final report, pp. 8–16; approved LDO brief.",
    "images": [
      {
        "src": "assets/images/img-ldo-p11-0.webp",
        "title": "Closed-loop LDO schematic",
        "alt": "Closed-loop LDO schematic — OTA, PMOS pass device, and feedback network.",
        "caption": "OTA, PMOS pass device, and feedback network.",
        "width": 832,
        "height": 642
      },
      {
        "src": "assets/images/img-ldo-p13-2.webp",
        "title": "Load-step transient response",
        "alt": "Load-step transient response — Simulation response to the reported 0.1 to 50 mA load step.",
        "caption": "Simulation response to the reported 0.1 to 50 mA load step.",
        "width": 1548,
        "height": 587
      }
    ],
    "situation": "The load on a regulator changes while its output must stay close to the required voltage. This project evaluates a 2.3 V LDO from a 2.5 V supply across a 0.1–50 mA load range.",
    "task": "Build the OTA-controlled feedback loop and distinguish steady-state regulation from the response to a sudden load change.",
    "outcome": "Held the simulated DC output within an 8 mV span across four load conditions by designing an OTA-driven PMOS regulator and evaluating its feedback response.",
    "repository": "https://github.com/Ruthvik-reddy-A/Low-Dropout-Regulator-LDO-",
    "detailedPdf": "downloads/projects/analog/Project-02-ldo-regulator.pdf"
  },
  {
    "title": "Telescopic-cascode amplifier",
    "category": "analog",
    "label": "Analog IC design",
    "summary": "A differential amplifier with transistor-level biasing, characterized for common-mode behavior, PSRR, CMRR, and slew rate.",
    "tags": [
      "Analog IC design",
      "Cascode amplifiers",
      "Biasing",
      "PSRR / CMRR",
      "Cadence Virtuoso"
    ],
    "course": "EEE 523 · Advanced Analog IC Design",
    "term": "Spring 2026",
    "results": [
      [
        "Supply voltage",
        "3 V"
      ],
      [
        "Nominal VCM",
        "1.5 V"
      ],
      [
        "Reported CMRR",
        "90.21 dB"
      ]
    ],
    "id": "telescopic-cascode",
    "kind": "Individual design",
    "role": "Differential-stage design, transistor-level biasing, and performance characterization in EEE 523.",
    "flow": [
      "Beta multiplier",
      "Cascode bias",
      "Differential stage",
      "AC / transient"
    ],
    "question": "How do common-mode voltage and transistor bias conditions affect the behavior of a telescopic-cascode differential amplifier?",
    "approach": [
      "Combined a beta-multiplier reference, wide-swing cascode biasing, and a telescopic differential stage. Documented transistor dimensions and operating-point parameters.",
      "Swept input common-mode voltage and examined gain and phase. Separate testbenches characterized positive- and negative-supply rejection and common-mode rejection.",
      "Configured the amplifier as a unity-gain follower to examine transient response and positive and negative slew behavior."
    ],
    "validation": "At the report’s nominal VDD = 3 V and VCM = 1.5 V condition, the listed rejection values are PSRR+ = 34.07 dB, PSRR− = 46.75 dB, and CMRR = 90.21 dB.",
    "tradeoff": "Supply and common-mode rejection depend on frequency and bias conditions. The values above are reported readings at the nominal setup; the broader study also explores common-mode and transient behavior.",
    "source": "EEE 523 Project2_AAIC.pdf, pp. 3–16.",
    "images": [
      {
        "src": "assets/images/img-tele-p4-0.webp",
        "title": "Telescopic amplifier schematic",
        "alt": "Telescopic amplifier schematic — Transistor-level circuit from the telescopic-cascode report.",
        "caption": "Transistor-level circuit from the telescopic-cascode report.",
        "width": 718,
        "height": 711
      },
      {
        "src": "assets/images/img-tele-p3-0.webp",
        "title": "AC response",
        "alt": "AC response — Gain and phase plot from the project report.",
        "caption": "Gain and phase plot from the project report.",
        "width": 1494,
        "height": 717
      }
    ],
    "situation": "A telescopic stack depends on available voltage headroom and the common-mode operating point. The project examines the differential amplifier together with its current reference and bias circuitry.",
    "task": "Establish the transistor operating points and characterize gain, common-mode behavior, supply rejection, and transient response.",
    "outcome": "Characterized a telescopic-cascode amplifier at 3 V supply and 1.5 V common mode, reporting 90.21 dB CMRR, 34.07 dB PSRR+, and 46.75 dB PSRR− at the documented readings.",
    "detailedPdf": "downloads/projects/analog/Project-03-telescopic-cascode.pdf"
  },
  {
    "id": "constant-gm",
    "title": "CMOS constant-gm current references",
    "category": "analog",
    "label": "Analog bias circuits",
    "summary": "Three beta-multiplier reference topologies, compared through supply and temperature sweeps.",
    "tags": [
      "CMOS",
      "Current mirrors",
      "Beta multiplier",
      "Cadence Virtuoso",
      "Temperature analysis"
    ],
    "course": "EEE 523 · Advanced Analog IC Design",
    "term": "Spring 2026",
    "kind": "Individual design",
    "role": "Designed and characterized three CMOS reference circuits, including start-up devices.",
    "flow": [
      "Start-up circuit",
      "Beta multiplier",
      "Current mirror",
      "Biased NMOS"
    ],
    "question": "How can a beta-multiplier reference provide useful bias current and relatively stable transconductance across temperature?",
    "approach": [
      "Compared three reference topologies in the TSMC 0.25 µm CMOS design library. Selected resistor values and device sizes and tabulated nominal operating points.",
      "Swept the supply from 2 to 3 V to compare the two branch currents and their mismatch. Used a diode-connected NMOS load to study transconductance from −20 to 85 °C."
    ],
    "validation": "For Design 1, the nominal branch currents are approximately 10.116 and 10.115 µA at 2.5 V. The report calculates a 4.8% endpoint gm variation normalized to the 27 °C value.",
    "tradeoff": "The 4.8% number belongs specifically to Design 1 and the stated temperature sweep. It is not a statistical matching or full PVT result.",
    "source": "Project1_AAIC.pdf, pp. 3–8; subsequent sections compare Designs 2 and 3.",
    "results": [
      [
        "Nominal supply",
        "2.5 V"
      ],
      [
        "Design 1 current",
        "≈10.1 µA"
      ],
      [
        "Temperature sweep",
        "−20 to 85 °C"
      ],
      [
        "Design 1 gm variation",
        "4.8%"
      ]
    ],
    "images": [
      {
        "src": "assets/images/img-bias-p7-0.webp",
        "title": "Bias circuit schematic",
        "alt": "Bias circuit schematic — One of the bias topologies evaluated in the constant-gm study.",
        "caption": "One of the bias topologies evaluated in the constant-gm study.",
        "width": 1148,
        "height": 603
      },
      {
        "src": "assets/images/img-bias-p6-0.webp",
        "title": "Bias sweep results",
        "alt": "Bias sweep results — Simulation plot reproduced from the bias-design report.",
        "caption": "Simulation plot reproduced from the bias-design report.",
        "width": 1024,
        "height": 706
      }
    ],
    "situation": "Analog stages need a usable bias reference as supply and temperature change. This study compares three CMOS reference circuits rather than relying only on a nominal bias point.",
    "task": "Choose device sizing and resistors, include start-up circuitry, and compare branch currents and transconductance across the specified sweeps.",
    "outcome": "Designed three reference topologies; Design 1 produced approximately 10.1 µA at 2.5 V and a reported 4.8% endpoint gm variation over −20 to 85 °C.",
    "detailedPdf": "downloads/projects/analog/Project-04-constant-gm.pdf"
  },
  {
    "id": "mos-common-source",
    "title": "MOS characterization & resistive-load amplifier",
    "category": "analog",
    "label": "Analog IC design",
    "course": "EEE 433/591 · Analog IC Design · Lab 1",
    "term": "Fall 2025",
    "summary": "Connected transistor operating-point analysis to amplifier behavior, reporting 21.38 dB transient voltage gain for a 10 kHz small-signal test.",
    "outcome": "Connected transistor operating-point analysis to amplifier behavior, reporting 21.38 dB transient voltage gain for a 10 kHz small-signal test.",
    "results": [
      [
        "Transient voltage gain",
        "21.38 dB"
      ],
      [
        "Input / output swing",
        "20 / 234.5 mVpp"
      ],
      [
        "NMOS drain current",
        "101.1 µA"
      ]
    ],
    "question": "How do MOS operating conditions and load resistance shape a common-source amplifier?",
    "situation": "A useful amplifier bias point must balance gain and output headroom. This lab starts with a transistor characterization and carries those observations into a resistive-load common-source stage.",
    "task": "Characterize the NMOS, establish the amplifier bias, and compare DC, AC, transient, and load-sweep behavior.",
    "role": "Prepared transistor and amplifier schematics, operating-point comparisons, transfer curves, and transient/AC plots in the submitted Cadence lab report.",
    "approach": [
      "Compared simulated NMOS operating-point quantities with hand analysis. The report lists 101.1 µA drain current, 507.07 µS transconductance, and 64.23 kΩ output resistance for the characterized device.",
      "Evaluated the resistive-load stage with DC transfer curves and a 10 kHz sinusoidal input. Used the reported 20 mVpp input and 234.5 mVpp output to calculate a gain magnitude of 11.725 V/V, or 21.38 dB.",
      "Examined input-amplitude and load-resistance sweeps to relate compression and clipping to bias and to describe the gain-versus-bandwidth tradeoff."
    ],
    "validation": "The report gives 21.38 dB transient gain for the stated small-signal test. The device comparison lists 101.1 µA simulated drain current against 100 µA in the hand calculation. These are separate device and amplifier observations.",
    "tradeoff": "The gain is a transient amplitude-ratio result, not an independently verified AC bandwidth specification. The report contains inconsistent phase and signal-range wording, so no phase or maximum linear-swing claim is promoted.",
    "tags": [
      "Cadence Virtuoso",
      "MOS characterization",
      "Common-source amplifiers",
      "DC operating-point analysis",
      "Transient analysis"
    ],
    "source": "EEE 433/591 Lab 1 submitted report, physical PDF pp. 3–4, 6, 9–10, 13–14.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-mos-cs-p6-1.webp",
        "title": "Resistive-load common-source schematic",
        "caption": "Source report p. 6: NMOS stage and load used in the circuit study.",
        "alt": "Resistive-load common-source schematic — Source report p. 6: NMOS stage and load used in the circuit study.",
        "width": 602,
        "height": 684
      },
      {
        "src": "assets/images/img-mos-cs-p9-1.webp",
        "title": "Output transient waveform",
        "caption": "Source report p. 9: output waveform for the documented small-signal experiment.",
        "alt": "Output transient waveform — Source report p. 9: output waveform for the documented small-signal experiment.",
        "width": 1131,
        "height": 595
      }
    ],
    "detailedPdf": "downloads/projects/analog/Project-20-mos-common-source.pdf"
  },
  {
    "id": "current-mirrors",
    "title": "Regular & cascode current mirrors",
    "category": "analog",
    "label": "Analog IC design",
    "course": "EEE 433/591 · Analog IC Design · Lab 2",
    "term": "Fall 2025",
    "summary": "Compared regular and cascode current mirrors, with reported output impedances of 17.73 kΩ and 35.9 kΩ and current ratios near the intended 5:1 scaling.",
    "outcome": "Compared regular and cascode current mirrors, with reported output impedances of 17.73 kΩ and 35.9 kΩ and current ratios near the intended 5:1 scaling.",
    "results": [
      [
        "Regular / cascode Rout",
        "17.73 / 35.9 kΩ"
      ],
      [
        "Reported current ratios",
        "5.062 / 5.056"
      ],
      [
        "Output-current target",
        "0.5 mA"
      ]
    ],
    "question": "How does cascoding change current-source output resistance and voltage headroom?",
    "situation": "A current mirror should maintain its programmed current as the output voltage changes. A regular mirror and a cascoded version expose the tradeoff between output resistance, bias complexity, and headroom.",
    "task": "Design and simulate both topologies for a nominal 0.5 mA output from a 0.1 mA reference, then compare DC and small-signal behavior.",
    "role": "Sized and biased the mirror circuits, documented DC sweeps and small-signal tests, and compared the two implementations in the submitted lab report.",
    "approach": [
      "Swept output voltage and identified the reported 0.5 mA crossing: 767.324 mV for the regular mirror and 887.297 mV for the cascode. These crossings are operating-point observations, not measured minimum compliance voltages.",
      "Perturbed the reference branch at 1 kHz and compared reported peak current ratios: 5.062 for the regular mirror and 5.056 for the cascode, against the intended ratio of five.",
      "Compared the output-impedance and AC-response results. The final table reports 17.73 kΩ versus 35.9 kΩ and bandwidths of 52.501 kHz versus 51.714 kHz."
    ],
    "validation": "The final comparison table reports approximately twice the output impedance for the cascode in these simulations, with a slightly lower bandwidth. Both reported peak-current ratios are near five. This is a nominal simulation comparison.",
    "tradeoff": "The two output-impedance tests use different perturbation amplitudes (10 mV and 20 mV). The report does not establish mismatch, process-corner, or silicon performance. The earlier resume summary is not used for the impedance or bandwidth numbers.",
    "tags": [
      "Current mirrors",
      "Cascode biasing",
      "Cadence Virtuoso",
      "Small-signal analysis",
      "AC simulation"
    ],
    "source": "EEE 433/591 Lab 2 submitted report, physical PDF pp. 3–5, 7, 9–11, 13.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-mirrors-p7-0.webp",
        "title": "Cascode current-mirror schematic",
        "caption": "Source report p. 7: cascoded output branch and biasing.",
        "alt": "Cascode current-mirror schematic — Source report p. 7: cascoded output branch and biasing.",
        "width": 794,
        "height": 460
      },
      {
        "src": "assets/images/img-mirrors-p11-0.webp",
        "title": "Cascode reference and output currents",
        "caption": "Source report p. 11: the 1 kHz current-scaling experiment.",
        "alt": "Cascode reference and output currents — Source report p. 11: the 1 kHz current-scaling experiment.",
        "width": 902,
        "height": 581
      }
    ],
    "detailedPdf": "downloads/projects/analog/Project-21-current-mirrors.pdf"
  },
  {
    "id": "active-load-amplifier",
    "title": "Active-load common-source amplifier",
    "category": "analog",
    "label": "Analog IC design",
    "course": "EEE 433/591 · Analog IC Design · Lab 3",
    "term": "Fall 2025",
    "summary": "Designed an active-PMOS-load common-source stage with reported simulated gain of 31.33 dB and 1.103 MHz bandwidth, then compared it with a cascoded implementation.",
    "outcome": "Designed an active-PMOS-load common-source stage with reported simulated gain of 31.33 dB and 1.103 MHz bandwidth, then compared it with a cascoded implementation.",
    "results": [
      [
        "Simulated gain",
        "31.33 dB"
      ],
      [
        "−3 dB bandwidth",
        "1.103 MHz"
      ],
      [
        "Simulated branch current",
        "51.29 µA"
      ]
    ],
    "question": "How does an active load increase gain, and what changes when the signal path is cascoded?",
    "situation": "An active PMOS load supplies a high small-signal resistance without a large physical resistor. The report compares a simple common-source stage with a cascoded circuit and examines the resulting frequency response and distortion.",
    "task": "Bias the active-load stage, compare hand analysis with simulation, and investigate gain, bandwidth, transfer characteristics, and clipping.",
    "role": "Prepared operating-point schematics, AC/transient simulations, spectrum plots, and analytical comparisons for the two reported amplifier configurations.",
    "approach": [
      "Established bias and device sizing for the 2.5 V, 1 pF-load study. Compared the simple-stage simulated branch current of 51.29 µA with the 50 µA hand calculation.",
      "Used operating-point, AC, and DC-transfer plots to evaluate the active-load stage. The simple-stage table reports 31.33 dB gain and 1.103 MHz bandwidth, compared with 33.98 dB and 1.59 MHz in the hand analysis.",
      "Increased input amplitude and inspected output spectra to explain clipping-related harmonics. Compared the simple stage with a cascoded implementation while retaining the report’s conflicting summary values as a documentation limitation."
    ],
    "validation": "The simple common-source stage reports 31.33 dB gain, 1.103 MHz bandwidth, and 51.29 µA branch current. The report also demonstrates a higher-gain cascoded variant, but its conflicting summary tables prevent an unqualified numerical comparison.",
    "tradeoff": "The cascode section lists inconsistent bandwidth and gain summaries, so its numbers are not used as headline results. Output peak readings are not treated as peak-to-peak linear swing, and phase at unity gain is not relabelled as phase margin.",
    "tags": [
      "Analog IC design",
      "Active loads",
      "Cadence Virtuoso",
      "Frequency response",
      "Distortion analysis"
    ],
    "source": "EEE 433/591 Lab 3 submitted report, physical PDF pp. 3–8, 11–18; simple-stage result table on p. 8.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-active-cs-p3-0.webp",
        "title": "Active-load amplifier operating point",
        "caption": "Source report p. 3: transistor operating-point annotations.",
        "alt": "Active-load amplifier operating point — Source report p. 3: transistor operating-point annotations.",
        "width": 1029,
        "height": 791
      },
      {
        "src": "assets/images/img-active-cs-p4-1.webp",
        "title": "Simple-stage gain and phase",
        "caption": "Source report p. 4: gain and bandwidth markers for the simple common-source stage.",
        "alt": "Simple-stage gain and phase — Source report p. 4: gain and bandwidth markers for the simple common-source stage.",
        "width": 917,
        "height": 549
      }
    ],
    "detailedPdf": "downloads/projects/analog/Project-22-active-load-amplifier.pdf"
  },
  {
    "id": "differential-ota",
    "title": "Differential transconductance amplifier",
    "category": "analog",
    "label": "Analog IC design",
    "course": "EEE 433/591 · Analog IC Design · Lab 4",
    "term": "Fall 2025",
    "summary": "Evaluated a differential-to-single-ended OTA with reported AC gain of 33.55 dB, 224.25 kHz bandwidth, and 10.69 MHz unity-gain frequency.",
    "outcome": "Evaluated a differential-to-single-ended OTA with reported AC gain of 33.55 dB, 224.25 kHz bandwidth, and 10.69 MHz unity-gain frequency.",
    "results": [
      [
        "AC gain",
        "33.55 dB"
      ],
      [
        "−3 dB bandwidth",
        "224.25 kHz"
      ],
      [
        "Unity-gain frequency",
        "10.69 MHz"
      ]
    ],
    "question": "How can a transistor-biased differential pair provide gain while rejecting common-mode and supply disturbances?",
    "situation": "A differential OTA must amplify the intended input difference while controlling its operating point and response to unwanted inputs. This lab examines a transistor tail source, active load, DC feedback, and separate AC/transient test configurations.",
    "task": "Design and evaluate the differential-to-single-ended OTA, including differential gain, common-mode response, supply response, and a feedback step test.",
    "role": "Documented device sizing and operating points, differential and common-mode simulations, supply-response plots, and unity-feedback transient behavior.",
    "approach": [
      "Established transistor bias and the DC feedback testbench, and tabulated device sizes and branch currents in the report.",
      "Measured the differential AC response. The report lists 33.551 dB low-frequency gain, 224.254 kHz bandwidth, and 10.6883 MHz unity-gain frequency.",
      "Examined common-mode and supply-response plots separately from the differential test, then simulated a step with unity-gain feedback. Kept these test configurations distinct when interpreting the results."
    ],
    "validation": "The differential AC plot supports approximately 33.55 dB gain, 224.25 kHz bandwidth, and 10.69 MHz unity-gain frequency. Common-mode, supply-rejection, and step-response figures broaden the study beyond gain alone.",
    "tradeoff": "Phase at unity gain is not sufficient by itself to establish loop phase margin. The report has inconsistent transient amplitude, CMRR arithmetic, and supply-noise wording; those quantities are not promoted as verified headline metrics. The copied F2021 template heading is not used as the project date.",
    "tags": [
      "Operational transconductance amplifiers",
      "Differential pairs",
      "Cadence Virtuoso",
      "AC analysis",
      "Common-mode analysis"
    ],
    "source": "EEE 433/591 Lab 4 submitted report, physical PDF pp. 5–7, 9–16; differential AC markers on p. 7. Semester follows the supplied Semester 1 course context.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-ota-p5-0.webp",
        "title": "OTA transistor operating point",
        "caption": "Source report p. 5: differential pair, active load, and transistor bias network.",
        "alt": "OTA transistor operating point — Source report p. 5: differential pair, active load, and transistor bias network.",
        "width": 624,
        "height": 599
      },
      {
        "src": "assets/images/img-ota-p7-1.webp",
        "title": "Differential AC response",
        "caption": "Source report p. 7: low-frequency gain, bandwidth, and unity-gain markers.",
        "alt": "Differential AC response — Source report p. 7: low-frequency gain, bandwidth, and unity-gain markers.",
        "width": 1194,
        "height": 593
      }
    ],
    "detailedPdf": "downloads/projects/analog/Project-23-differential-ota.pdf"
  },
  {
    "id": "fp8-apb",
    "title": "APB interface for an FP8 accelerator",
    "category": "digital",
    "label": "Accelerator integration",
    "summary": "Control and status integration for a team-designed 8 × 8 FP8 systolic matrix multiplier.",
    "tags": [
      "SystemVerilog",
      "APB",
      "Register-map design",
      "VCS",
      "Verdi"
    ],
    "course": "Advanced Digital Design & Verification · Lab 3",
    "term": "Fall 2026",
    "kind": "Four-person team",
    "role": "Implemented Part 4: the APB interface and register map, configuration/status verification, integration documentation, and waveforms.",
    "flow": [
      "APB host",
      "Control registers",
      "8 × 8 FP8 array",
      "Status / flags"
    ],
    "question": "How can a processor configure, launch, and monitor a matrix accelerator through a register interface?",
    "approach": [
      "Added a 16-bit APB slave around the team’s existing FP8 e3m4 matrix engine. The interface exposes matrix base addresses, strides, START, STATUS, and exception FLAGS.",
      "Used IDLE, PREPARE, and RUN control states to coordinate configuration and execution. DONE is asserted after output-memory writes complete. PREADY remains asserted in this no-wait-state interface.",
      "Verified normal and exception cases, non-zero base addresses, and non-unit strides with APB read/write tasks."
    ],
    "validation": "The Part 4 simulation reported 320 output entries checked and 70 APB protocol checks. The overflow example returned STATUS = 0x8000 and FLAGS = 0x0011 after completion.",
    "tradeoff": "The arithmetic units and array tiles were developed by teammates. Array synthesis estimates in the report are pre-layout and still contain hold/capacitance violations; this case study does not claim physical timing closure.",
    "source": "Team Lab 3 report, pp. 15–20; contribution allocation on p. 20.",
    "results": [
      [
        "APB data width",
        "16 bits"
      ],
      [
        "Outputs checked",
        "320"
      ],
      [
        "Protocol checks",
        "70"
      ]
    ],
    "images": [
      {
        "src": "assets/images/img-fp8-p17-0.webp",
        "title": "APB register-write sequence",
        "alt": "APB register-write sequence — Annotated protocol waveform from Part 4, the APB interface work.",
        "caption": "Annotated protocol waveform from Part 4, the APB interface work.",
        "width": 1707,
        "height": 937
      },
      {
        "src": "assets/images/img-fp8-p19-0.webp",
        "title": "Result and status readback",
        "alt": "Result and status readback — Annotated APB readback waveform from the report.",
        "caption": "Annotated APB readback waveform from the report.",
        "width": 1705,
        "height": 925
      }
    ],
    "situation": "The team’s FP8 matrix engine needed a processor-facing interface for configuration, launch, completion, and exception reporting. Ruthvik’s assigned contribution was the APB interface and register map.",
    "task": "Wrap the existing engine with a 16-bit APB slave and verify register access, control sequencing, and result/status readback.",
    "outcome": "Implemented the accelerator’s 16-bit APB interface and register map, with 320 output entries checked and 70 protocol checks in the reported Part 4 simulation.",
    "detailedPdf": "downloads/projects/digital/Project-05-fp8-apb.pdf"
  },
  {
    "id": "pipelined-mips",
    "title": "Five-stage pipelined MIPS processor",
    "category": "digital",
    "label": "Processor design",
    "summary": "Pipeline registers, forwarding, hazard handling, and instruction regression in a collaborative MIPS implementation.",
    "tags": [
      "SystemVerilog",
      "Pipelining",
      "Hazard detection",
      "Design Compiler",
      "VCS / Verdi"
    ],
    "course": "Advanced Digital Design & Verification · Lab 2",
    "term": "Fall 2026",
    "kind": "Two-person team",
    "role": "Worked on the five-stage pipeline, forwarding, hazard detection, BEQ flushing, ADD/LW/BEQ tests, and synthesis/debug review with Akshith Alwala.",
    "flow": [
      "IF / ID",
      "EX + forwarding",
      "MEM",
      "WB"
    ],
    "question": "How can a baseline processor be pipelined while preserving correct execution through data and branch hazards?",
    "approach": [
      "Partitioned the provided non-pipelined processor into IF, ID, EX, MEM, and WB, carrying control and operand data through four register boundaries.",
      "Added operand forwarding, load-use stalls, and taken-BEQ flushing. Directed waveforms trace arithmetic dependencies, load writeback, and wrong-path invalidation.",
      "The team extended the core with MULADD and PERFMON and reran the original instruction regression. A synthesis reset issue was resolved by handling flush separately from asynchronous reset."
    ],
    "validation": "In the six-instruction directed forwarding example, execution used 10 cycles with forwarding versus 16 without it. The original ADD, SUB, AND, OR, SLT, LW, SW, and BEQ regression passed after the extensions.",
    "tradeoff": "The 10-versus-16 comparison is specific to that directed sequence. The report’s pipelined core had a longer synthesized critical path than its single-cycle comparison, so pipelining is not presented as a demonstrated clock-frequency gain.",
    "source": "Team Lab 2 report, pp. 3–8, 14–16.",
    "results": [
      [
        "Pipeline stages",
        "5"
      ],
      [
        "Directed sequence",
        "10 vs 16 cycles"
      ],
      [
        "Base instructions",
        "8 checked"
      ],
      [
        "Directed cycle reduction",
        "37.5%"
      ]
    ],
    "images": [
      {
        "src": "assets/images/img-mips-p5-0.webp",
        "title": "Forwarding during an ADD dependency",
        "alt": "Forwarding during an ADD dependency — Annotated simulation waveform showing the operand forwarding path.",
        "caption": "Annotated simulation waveform showing the operand forwarding path.",
        "width": 1800,
        "height": 774
      },
      {
        "src": "assets/images/img-mips-p6-0.webp",
        "title": "Load-use hazard handling",
        "alt": "Load-use hazard handling — Annotated waveform from the pipeline hazard tests.",
        "caption": "Annotated waveform from the pipeline hazard tests.",
        "width": 1800,
        "height": 811
      }
    ],
    "situation": "Overlapping instruction execution introduces dependencies and wrong-path instructions. The project extends a provided processor into a five-stage pipeline while retaining correct instruction behavior.",
    "task": "Develop forwarding, load-use stalls, and BEQ flushing, and verify these mechanisms with directed tests and the base instruction regression.",
    "outcome": "Reduced a six-instruction directed sequence from 16 to 10 cycles with forwarding—a 37.5% cycle-count reduction for that sequence—and retained the eight-instruction base regression.",
    "detailedPdf": "downloads/projects/digital/Project-06-pipelined-mips.pdf"
  },
  {
    "title": "GCN accelerator",
    "category": "digital",
    "label": "RTL to physical design",
    "summary": "A graph convolutional network datapath and controller, taken through synthesis, placement, routing, and verification.",
    "tags": [
      "Verilog / RTL",
      "FSM design",
      "Design Compiler",
      "Cadence Innovus",
      "Static timing analysis"
    ],
    "file": "downloads/briefs/03-Graph-Accelerator",
    "course": "EEE 525 · VLSI Design",
    "term": "Spring 2026",
    "results": [
      [
        "Validation stages",
        "3"
      ],
      [
        "Class outputs",
        "3"
      ]
    ],
    "id": "gcn-accelerator",
    "kind": "Academic design",
    "role": "GCN datapath and controller design, simulation, synthesis, and physical implementation documented in the lab report.",
    "flow": [
      "Feature × weight",
      "Sparse aggregation",
      "Argmax",
      "Classification"
    ],
    "question": "How can graph-node classification be mapped into a controlled RTL datapath and carried through an ASIC design flow?",
    "approach": [
      "Separated control and computation with a central FSM for feature loading, weight loading, transformation, aggregation, and classification.",
      "Used local weight storage and intermediate matrix buffers. The transformation stage computes feature–weight dot products; the aggregation stage traverses COO-format graph edges.",
      "Selected the largest of three output features for each node, then carried the RTL through Design Compiler synthesis and Innovus placement and routing."
    ],
    "validation": "The same testbench reproduced the reference classifications at RTL, post-synthesis, and post-route stages. Setup and hold timing were examined after routing.",
    "tradeoff": "Matching the reference classifications across implementation stages is the main result. The design also illustrates the separation of dense feature transformation from sparse graph aggregation.",
    "source": "EEE 525 Lab 4 milestone report, pp. 1–6, 8, 11–12; approved GCN brief.",
    "images": [
      {
        "src": "assets/images/img-gcn-p8-0.webp",
        "title": "Routed accelerator layout",
        "alt": "Routed accelerator layout — Cadence Innovus implementation view from the GCN report.",
        "caption": "Cadence Innovus implementation view from the GCN report.",
        "width": 767,
        "height": 741
      },
      {
        "src": "assets/images/img-gcn-p1-0.webp",
        "title": "Datapath and controller",
        "alt": "Datapath and controller — Reported GCN accelerator architecture.",
        "caption": "Reported GCN accelerator architecture.",
        "width": 1600,
        "height": 963
      }
    ],
    "situation": "Graph-node classification combines dense feature transformation, sparse neighbor aggregation, and class selection. The project maps those phases into RTL and follows the design through physical implementation.",
    "task": "Coordinate the datapath with an FSM, reproduce the reference classifications, and carry the design through synthesis and place-and-route.",
    "outcome": "Reproduced reference classifications at three implementation stages—RTL, post-synthesis, and post-route—using the same testbench through the ASIC flow.",
    "detailedPdf": "downloads/projects/digital/Project-07-gcn-accelerator.pdf"
  },
  {
    "title": "32 nm four-bit CMOS adder",
    "category": "digital",
    "label": "Custom digital design",
    "summary": "Transistor sizing and layout of a four-bit adder, with DRC, LVS, and post-layout simulation.",
    "tags": [
      "CMOS",
      "IC layout",
      "DRC / LVS",
      "Transistor sizing",
      "Post-layout simulation"
    ],
    "file": "downloads/briefs/04-Four-Bit-Adder",
    "course": "EEE 591 · Digital System Circuits",
    "term": "Fall 2025",
    "results": [
      [
        "Post-layout delay",
        "277 ps"
      ],
      [
        "Average power",
        "47.3 µW"
      ],
      [
        "Layout area",
        "40.083 µm²"
      ]
    ],
    "id": "cmos-adder",
    "kind": "Individual design",
    "role": "Transistor sizing, layout, physical verification, and extracted simulation.",
    "flow": [
      "CMOS full adder",
      "Carry chain",
      "DRC / LVS",
      "Extracted timing"
    ],
    "question": "How does a four-bit CMOS adder’s timing change when layout parasitics are included?",
    "approach": [
      "Sized carry-path and output-stage transistors for drive strength while retaining minimum-size devices where the design allowed.",
      "Implemented the four-bit layout, ran DRC and LVS, and compared schematic-level and extracted simulations."
    ],
    "validation": "The report records a worst-case delay of 152 ps before layout and 277 ps after extraction, with 47.3 µW average power and a layout area of 40.083 µm².",
    "tradeoff": "The post-layout result is the relevant timing figure for this case study. The comparison makes the impact of physical implementation visible instead of presenting only the faster schematic simulation.",
    "source": "EEE 591 Digital System Circuits Lab 4 report, pp. 1–4; approved adder brief.",
    "images": [
      {
        "src": "assets/images/img-adder-p2-1.webp",
        "title": "Four-bit adder layout",
        "alt": "Four-bit adder layout — Custom layout from the 32 nm CMOS adder report.",
        "caption": "Custom layout from the 32 nm CMOS adder report.",
        "width": 1591,
        "height": 127
      },
      {
        "src": "assets/images/img-adder-p2-0.webp",
        "title": "Four-bit adder schematic",
        "alt": "Four-bit adder schematic — Schematic hierarchy used for the custom adder.",
        "caption": "Schematic hierarchy used for the custom adder.",
        "width": 1569,
        "height": 376
      },
      {
        "src": "assets/images/img-adder-p3-0.webp",
        "title": "Extracted timing waveform",
        "alt": "Extracted timing waveform — Post-layout timing simulation from the report.",
        "caption": "Post-layout timing simulation from the report.",
        "width": 1272,
        "height": 462
      }
    ],
    "situation": "A fast schematic is only part of a custom digital circuit: routing and device parasitics affect the extracted result. This project compares both views of a 32 nm, four-bit adder.",
    "task": "Size the critical carry path, implement the layout, run DRC/LVS, and characterize delay and power after extraction.",
    "outcome": "Implemented a four-bit adder occupying 40.083 µm², with 277 ps extracted worst-case delay and 47.3 µW average power; compared it with the 152 ps schematic result.",
    "detailedPdf": "downloads/projects/digital/Project-08-cmos-adder.pdf"
  },
  {
    "id": "standard-cell-design",
    "title": "Inverter & NAND standard-cell design",
    "category": "digital",
    "label": "Device & custom digital design",
    "course": "EEE 425/591 · Digital System Circuits · Lab 2",
    "term": "Fall 2025",
    "summary": "Designed INVx03 and NAND2x04 cells, measured directional propagation delays, and documented clean DRC and passing LVS results for both layouts.",
    "outcome": "Designed INVx03 and NAND2x04 cells, measured directional propagation delays, and documented clean DRC and passing LVS results for both layouts.",
    "results": [
      [
        "INV high-to-low / low-to-high",
        "11.9 / 14.1 ps"
      ],
      [
        "NAND high-to-low / low-to-high",
        "9.31 / 16.7 ps"
      ],
      [
        "Layout checks",
        "DRC clean · LVS pass"
      ]
    ],
    "question": "How do transistor sizing and layout verification turn logic gates into checked custom cells?",
    "situation": "A standard cell needs correct logic behavior, characterized transitions, and a layout that matches its schematic. This lab follows two gates through schematic testing and physical verification.",
    "task": "Size and implement INVx03 and NAND2x04 cells, measure their 50% propagation delays, and check their layouts with DRC and LVS.",
    "role": "Prepared cell sizing, schematics, symbols, timing plots, layouts, and physical-verification evidence in the submitted report.",
    "approach": [
      "Sized the INVx03 with 900 nm NMOS and 1370 nm PMOS widths, and the NAND2x04 with reported widths of 2863 nm and 2260 nm.",
      "Measured high-to-low and low-to-high propagation delays separately. The inverter values are 11.9 ps and 14.1 ps; the NAND values are 9.31 ps and 16.7 ps.",
      "Built both cell layouts and documented the DRC-clean and LVS-pass outputs alongside each implementation."
    ],
    "validation": "Both cell layouts have reported clean DRC and passing LVS results. The directional timing values show unequal rise/fall-path delays, especially for the NAND cell; the case study retains these differences.",
    "tradeoff": "The listed delays come from the schematic-test section of the report and are not labelled post-layout timing. A complete library characterization across input slew, output load, and process corners is not demonstrated, and ±5% delay symmetry is not claimed.",
    "tags": [
      "CMOS standard cells",
      "Transistor sizing",
      "IC layout",
      "DRC/LVS",
      "Timing characterization"
    ],
    "source": "EEE 425/591 Digital System Circuits Lab 2 submitted report, physical PDF pp. 1–6; delay table p. 3 and verification evidence pp. 5–6.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-standard-cells-p4-0.webp",
        "title": "INVx03 layout",
        "caption": "Source report p. 4: inverter cell layout.",
        "alt": "INVx03 layout — Source report p. 4: inverter cell layout.",
        "width": 705,
        "height": 776
      },
      {
        "src": "assets/images/img-standard-cells-p4-1.webp",
        "title": "NAND2x04 layout",
        "caption": "Source report p. 4: two-input NAND cell layout.",
        "alt": "NAND2x04 layout — Source report p. 4: two-input NAND cell layout.",
        "width": 1487,
        "height": 816
      }
    ],
    "detailedPdf": "downloads/projects/digital/Project-24-standard-cell-design.pdf"
  },
  {
    "id": "finfet-characterization",
    "title": "ASAP7 FinFET characterization",
    "category": "digital",
    "label": "Device & custom digital design",
    "course": "EEE 525 · VLSI Design · Lab 1",
    "term": "Spring 2026",
    "summary": "Compared four ASAP7 threshold-voltage device options across −40, 25, and 120 °C, documenting transfer curves, subthreshold swing, and threshold-voltage extraction.",
    "outcome": "Compared four ASAP7 threshold-voltage device options across −40, 25, and 120 °C, documenting transfer curves, subthreshold swing, and threshold-voltage extraction.",
    "results": [
      [
        "Threshold-voltage options",
        "SLVT · LVT · RVT · SRAM"
      ],
      [
        "Temperature points",
        "−40 / 25 / 120 °C"
      ],
      [
        "NMOS LVT swing at 25 °C",
        "64.435 mV/dec"
      ]
    ],
    "question": "How do temperature and device threshold options affect FinFET transfer characteristics?",
    "situation": "Selecting a transistor option requires understanding leakage, gate control, and drive behavior. The ASAP7 lab compares NMOS and PMOS devices across threshold options and temperature points.",
    "task": "Run and interpret device-current sweeps, extract subthreshold swing and threshold voltage, and relate the reported curves to device-selection tradeoffs.",
    "role": "Prepared the ASAP7 device characterization report with NMOS/PMOS curves, measurement-command screenshots, and temperature-dependent result tables.",
    "approach": [
      "Compared SLVT, LVT, RVT, and SRAM model options, including LVT transfer curves at −40, 25, and 120 °C and multi-option comparisons at 25 °C.",
      "Tabulated subthreshold swing using the documented measurement expressions. NMOS LVT values are 49.166, 64.435, and 90.953 mV/dec at the three temperature points.",
      "Documented threshold-voltage extraction and RVT output-current sweeps. Kept extraction results separate from a claim of measured cell speed or physical silicon behavior."
    ],
    "validation": "The NMOS LVT subthreshold-swing table reports an increase from 49.166 mV/dec at −40 °C to 90.953 mV/dec at 120 °C, with 64.435 mV/dec at 25 °C. The report covers both polarities and four device options.",
    "tradeoff": "These are simulated device-model results. The report contains inconsistent fin arithmetic, PMOS ranking, and effective-current descriptions; those interpretations are excluded. PMOS signed slopes require a consistent magnitude convention before cross-polarity comparison.",
    "tags": [
      "FinFET characterization",
      "ASAP7 PDK",
      "SPICE simulation",
      "Subthreshold swing",
      "Temperature sweeps"
    ],
    "source": "EEE 525 VLSI Design Lab 1 submitted report, physical PDF pp. 1–9; subthreshold-swing results and measurement commands p. 5.",
    "kind": "Individual lab study",
    "flow": [
      "Device sizing",
      "Simulation",
      "Result comparison",
      "Engineering interpretation"
    ],
    "images": [
      {
        "src": "assets/images/img-finfet-p1-0.webp",
        "title": "NMOS LVT temperature sweep",
        "caption": "Source report p. 1: log current versus gate voltage at three temperatures.",
        "alt": "NMOS LVT temperature sweep — Source report p. 1: log current versus gate voltage at three temperatures.",
        "width": 1232,
        "height": 926
      },
      {
        "src": "assets/images/img-finfet-p2-1.webp",
        "title": "NMOS threshold-option comparison",
        "caption": "Source report p. 2: SLVT, LVT, RVT, and SRAM transfer curves at 25 °C.",
        "alt": "NMOS threshold-option comparison — Source report p. 2: SLVT, LVT, RVT, and SRAM transfer curves at 25 °C.",
        "width": 1347,
        "height": 1003
      }
    ],
    "detailedPdf": "downloads/projects/digital/Project-25-finfet-characterization.pdf"
  },
  {
    "id": "async-fifo",
    "title": "Asynchronous FIFO & alternating streams",
    "category": "verification",
    "label": "Clock-domain verification",
    "summary": "Independent-clock FIFO tests, status-flag debugging, and buffering for an even/odd output stream.",
    "tags": [
      "SystemVerilog",
      "Clock-domain crossing",
      "FIFO design",
      "VCS",
      "Verdi"
    ],
    "course": "Advanced Digital Design & Verification · Lab 1",
    "term": "Fall 2026",
    "kind": "Two-person team",
    "role": "Developed tests and flag checks for the asynchronous FIFO; worked on FIFO modules, input routing, sizing, and output-order verification for the alternating circuit.",
    "flow": [
      "Write clock",
      "Gray pointers",
      "FIFO storage",
      "Read clock"
    ],
    "question": "How can data order and boundary behavior be checked when reads and writes occur in different clock domains?",
    "approach": [
      "Verified fill/full/drain behavior, almost-full and almost-empty thresholds, and simultaneous reads/writes with different clock rates.",
      "Added internal occupancy signals to the waveform to locate status transitions: almost-full at 12 entries and almost-empty at 4 entries in the 16-entry FIFO.",
      "For the even/odd stream, used two 40-entry FIFOs. Corrected the read controller so parity advances only after a valid read; it waits when the required queue is empty."
    ],
    "validation": "The two alternating-stream tests reached peak occupancies of 40/24 and 32/31 entries in the even/odd FIFOs. Waveforms confirmed output ordering after the read-state correction.",
    "tradeoff": "The depth of 40 is justified by the tested arrival pattern. CDC simulation and synthesis are not a substitute for a dedicated CDC sign-off flow.",
    "source": "Team Lab 1 report, pp. 1–10.",
    "results": [
      [
        "Asynchronous FIFO",
        "16 entries"
      ],
      [
        "Alternating queues",
        "40 entries each"
      ],
      [
        "Status thresholds",
        "12 / 4 entries"
      ]
    ],
    "images": [
      {
        "src": "assets/images/img-fifo-p2-0.webp",
        "title": "FIFO fill and read sequence",
        "alt": "FIFO fill and read sequence — Annotated simulation: full after 16 writes, followed by reads.",
        "caption": "Annotated simulation: full after 16 writes, followed by reads.",
        "width": 1504,
        "height": 780
      },
      {
        "src": "assets/images/img-fifo-p3-0.webp",
        "title": "Overlapping reads and writes",
        "alt": "Overlapping reads and writes — Reported asynchronous FIFO waveform with occupancy annotations.",
        "caption": "Reported asynchronous FIFO waveform with occupancy annotations.",
        "width": 1618,
        "height": 806
      }
    ],
    "situation": "Different read and write clocks stress FIFO boundary behavior. A second circuit combines even and odd streams, where a missing required entry must not advance the output sequence.",
    "task": "Verify flags and ordering, choose queue depth from the tested traffic pattern, and correct the alternating read-state behavior.",
    "outcome": "Verified a 16-entry asynchronous FIFO and two 40-entry alternating-stream queues, correcting parity advancement so the reader waits for the required queue.",
    "detailedPdf": "downloads/projects/verification/Project-09-async-fifo.pdf"
  },
  {
    "id": "fifo-dpi-sva",
    "title": "FIFO checking with DPI-C & assertions",
    "category": "verification",
    "label": "Verification methodology",
    "summary": "A C reference queue, SystemVerilog assertions, and intentional fault injection to test the checker itself.",
    "tags": [
      "SystemVerilog Assertions",
      "DPI-C",
      "C",
      "Reference models",
      "Fault injection"
    ],
    "course": "Advanced Digital Design & Verification · Lab 4",
    "term": "Fall 2026",
    "kind": "Collaborative lab",
    "role": "Collaborative verification work with Akshith Alwala, covering the C reference model, DPI checking, assertions, and simulation-based fault testing.",
    "flow": [
      "Accepted operations",
      "C golden queue",
      "DPI checker",
      "SVA / injected faults"
    ],
    "question": "How can a verification environment show that it both accepts correct behavior and detects a deliberate error?",
    "approach": [
      "Used a 16-entry C queue with head, tail, and count as a behavioral reference model, accessed from SystemVerilog through DPI-C. Compare accepted operations instead of assuming the two clock domains observe occupancy simultaneously.",
      "Checked full/empty protection, wraparound, and overlapping traffic. For the alternating stream, added 11 assertions for routing, read selection, state transitions, parity, and queue depth.",
      "Injected an incorrect even-write control to confirm the routing assertion detects the fault; kept this intentional failure separate from normal regressions."
    ],
    "validation": "The reported normal DPI run completed 80 writes and 80 correct reads with zero checker errors. In the intentional faulty run, an injected routing fault at 140 ns triggered assertion A1 at 145 ns.",
    "tradeoff": "This is simulation-based verification. The report discusses formal checks as a possibility but does not report a formal-tool proof.",
    "source": "ADDV Lab 4 Parts 1–4 updated report, sections 2 and 4.",
    "results": [
      [
        "Writes / reads",
        "80 / 80"
      ],
      [
        "Checker errors",
        "0"
      ],
      [
        "Stream assertions",
        "11"
      ],
      [
        "Fault-detection interval",
        "5 ns"
      ]
    ],
    "images": [],
    "situation": "A checker must recognize correct transactions and also demonstrate that it catches errors. This project pairs a C queue model with SystemVerilog assertions and an intentional fault experiment.",
    "task": "Compare accepted FIFO operations through DPI-C, check stream-control properties, and test the routing assertion with a deliberate bad control signal.",
    "outcome": "Checked 80 writes and 80 reads with zero errors in the normal DPI run; an intentional fault injected at 140 ns was detected at 145 ns, a 5 ns interval in that simulation.",
    "detailedPdf": "downloads/projects/verification/Project-10-fifo-dpi-sva.pdf"
  },
  {
    "title": "VeriChip verification",
    "category": "verification",
    "label": "Digital verification",
    "summary": "ALU and state-machine verification using self-checking SystemVerilog tests, constrained-random stimulus, and assertions.",
    "tags": [
      "SystemVerilog",
      "Assertions",
      "Constrained-random tests",
      "VCS",
      "Verdi"
    ],
    "file": "downloads/briefs/05-VeriChip",
    "course": "Digital Verification and Testing",
    "term": "Spring 2026",
    "results": [
      [
        "Controller states",
        "4"
      ]
    ],
    "id": "verichip",
    "kind": "Collaborative verification",
    "role": "SystemVerilog verification work; the ALU test plan was prepared with Akshith Alwala.",
    "flow": [
      "Test stimulus",
      "ALU / state machine",
      "Assertions",
      "Expected-value checks"
    ],
    "question": "How can directed and constrained-random stimulus expose arithmetic and control corner cases?",
    "approach": [
      "Organized ALU and state-machine scenarios around expected results, command handling, and state transitions.",
      "Used self-checking SystemVerilog tests, assertions, and cross-coverage, with VCS simulation and Verdi waveform debugging."
    ],
    "validation": "The illustrated brief shows selected ALU and state-machine checks and their expected values. It serves as a readable verification-plan example alongside the reviewed testbench.",
    "tradeoff": "Expected values in a test plan are not measured pass counts or achieved coverage. No coverage percentage or bug count is inferred from the planning tables.",
    "source": "ALU Test plan p. 6; SM_tstplan p. 3; reviewed SystemVerilog testbench; approved VeriChip brief.",
    "images": [],
    "situation": "The VeriChip ALU and controller have arithmetic, invalid-command, and error-state corner cases. A verification plan establishes the expected behavior before stimulus and checkers are applied.",
    "task": "Translate the ALU and state-machine scenarios into self-checking directed and constrained-random tests, assertions, and coverage observations.",
    "outcome": "Built a self-checking SystemVerilog verification workflow for ALU operations and four controller states, supported by directed plans, assertions, cross-coverage, and VCS/Verdi debugging.",
    "detailedPdf": "downloads/projects/verification/Project-11-verichip.pdf"
  },
  {
    "id": "fpga-clock",
    "title": "Verilog digital clock & alarm",
    "category": "digital",
    "label": "FPGA-oriented RTL",
    "summary": "Clock counters, time-setting controls, and an alarm comparison demonstrated in ModelSim.",
    "tags": [
      "Verilog",
      "Sequential logic",
      "Counters",
      "ModelSim",
      "RTL simulation"
    ],
    "course": "Digital / embedded systems project",
    "term": "Undergraduate",
    "kind": "Four-person team",
    "role": "Project research, Verilog code, and report preparation; teammates also contributed circuit diagrams and testbench code.",
    "flow": [
      "Clock divider",
      "Time counters",
      "Alarm compare",
      "Display / alarm"
    ],
    "question": "How can sequential RTL keep time and assert an alarm when the current time matches a programmed value?",
    "approach": [
      "Organized the clock around counters and time-setting inputs, with reset and alarm comparison logic. The project report also includes the proposed display and control organization.",
      "Used ModelSim waveforms to follow the time count and the alarm output. The documented example programs an alarm for 10:20."
    ],
    "validation": "The report describes time advancing through the day and the alarm output asserting at the programmed match. Verilog and testbench excerpts accompany the waveform.",
    "tradeoff": "The available evidence is a simulation report. A completed FPGA board deployment and timing closure are not claimed here.",
    "source": "FPGA-Based Digital Clock Design Using Verilog.docx, results, contribution list, and appendix.",
    "results": [],
    "images": [
      {
        "src": "assets/images/img-clock-image3.webp",
        "title": "Digital clock simulation",
        "alt": "Digital clock simulation — ModelSim waveform from the Verilog clock report; this is simulation evidence.",
        "caption": "ModelSim waveform from the Verilog clock report; this is simulation evidence.",
        "width": 1280,
        "height": 527
      }
    ],
    "situation": "A digital clock must update time and recognize an alarm match while supporting reset and time-setting inputs. The team used a Verilog model and a simulation testbench to explore this sequential behavior.",
    "task": "Contribute the Verilog implementation and documentation, then inspect the time counters and alarm signal in ModelSim.",
    "outcome": "Implemented clock and alarm logic in Verilog and documented a ModelSim example in which the alarm asserts at the programmed 10:20 match.",
    "detailedPdf": "downloads/projects/digital/Project-12-fpga-clock.pdf"
  },
  {
    "id": "buck-converter",
    "title": "Rectifier-fed buck converter prototype",
    "category": "power",
    "label": "Power electronics",
    "summary": "Component calculations, LTspice/Simulink waveforms, and a hardware converter for charging applications.",
    "tags": [
      "Power electronics",
      "LTspice",
      "Simulink",
      "MOSFET switching",
      "Hardware prototyping"
    ],
    "course": "ELE 3261 · Power Electronics Lab",
    "term": "May 2023",
    "kind": "Four-person team",
    "role": "Hardware, calculations, simulations, and report work, shared with the project team.",
    "flow": [
      "Transformer / rectifier",
      "DC filter",
      "Buck switching stage",
      "Output filter + load"
    ],
    "question": "How can rectification and switching conversion be combined to produce a lower DC output for a charging application?",
    "approach": [
      "Combined a full-bridge rectifier and smoothing stage with a MOSFET-switched buck converter. Used inductor/capacitor calculations to establish the output filter.",
      "Compared simulated waveforms in LTspice and Simulink with hardware output observations. The report includes the prototype photographs and load-dependent output measurements."
    ],
    "validation": "The project report documents both simulation and hardware evaluation, including a voltage-regulation calculation from the no-load and full-load values.",
    "tradeoff": "No measured charging-efficiency improvement is claimed. This case study focuses on the documented circuit, component calculations, and evaluation.",
    "source": "pe_miniproject_report.docx, chapters 2–4; buckconverter.asc, buck_converter.m, and Simulink model in gptz.zip.",
    "results": [],
    "images": [
      {
        "src": "assets/images/img-buck-image13.webp",
        "title": "Rectifier hardware prototype",
        "alt": "Rectifier hardware prototype — Full-bridge diode rectifier hardware photographed in the team report.",
        "caption": "Full-bridge diode rectifier hardware photographed in the team report.",
        "width": 719,
        "height": 1600
      },
      {
        "src": "assets/images/img-buck-image1.webp",
        "title": "Rectifier and buck simulation circuit",
        "alt": "Rectifier and buck simulation circuit — LTspice schematic from the project report.",
        "caption": "LTspice schematic from the project report.",
        "width": 1800,
        "height": 856
      },
      {
        "src": "assets/images/img-buck-image6.webp",
        "title": "Simulated voltage and current waveforms",
        "alt": "Simulated voltage and current waveforms — Simulation results from the rectifier and buck-converter study.",
        "caption": "Simulation results from the rectifier and buck-converter study.",
        "width": 1800,
        "height": 832
      }
    ],
    "situation": "A charging-oriented power-conversion prototype needs rectification, smoothing, and a controlled lower DC output. The project combines circuit calculations, simulation, and hardware observations.",
    "task": "Contribute component calculations, LTspice/Simulink evaluation, hardware work, and documentation as part of the team.",
    "outcome": "Connected rectifier and buck-converter analysis with LTspice/Simulink waveforms and hardware observations, including documented no-load and full-load regulation calculations.",
    "repository": "https://github.com/Ruthvik-reddy-A/Rectifier-based-buck-converter-prototype-for-charging-applications",
    "detailedPdf": "downloads/projects/power/Project-13-buck-converter.pdf"
  },
  {
    "id": "pcb-datalogger",
    "title": "ATmega328P data-logger PCB",
    "summary": "Integrated an ATmega328P, two external EEPROM devices, and a real-time clock into a four-copper-layer KiCad board, with Gerber exports available in the repository.",
    "question": "How can a data-logger board bring processing, persistent storage, timekeeping, and accessible interfaces together?",
    "situation": "The board design provides the hardware foundation for a standalone data logger. The checked-in schematic identifies an ATmega328P-AU, two 24LC1025 devices, a DS1337S clock, and dedicated clock sources.",
    "task": "Develop the schematic and PCB layout for the processor, external memory, clock, and connector interfaces.",
    "approach": [
      "Organized the controller around a 16 MHz clock and the RTC around a 32.768 kHz crystal. Included memory devices, pull-up resistors, decoupling, and connector sheets in the KiCad project.",
      "Placed and routed the design in the checked-in four-copper-layer board. The source contains 29 footprints, including mounting features, with 274 track segments and 48 vias.",
      "Included two-layer and four-layer Gerber export directories alongside a component list. The current editable board uses four copper layers; the older exports are retained as separate artifacts."
    ],
    "results": [
      [
        "Current board",
        "4 copper layers"
      ],
      [
        "Controller",
        "ATmega328P-AU"
      ],
      [
        "External memory devices",
        "2 × 24LC1025"
      ]
    ],
    "validation": "The repository provides editable schematic and board files, front/back renders, a component list, and Gerber exports. The design files establish a concrete hardware implementation, while operational data logging still requires firmware and bench evidence.",
    "tradeoff": "The README’s 512 KB capacity and two-layer description do not match the current schematic and board. The portfolio uses the device part numbers and current layer count instead. Sampling rate, endurance, logging firmware, and successful hardware operation are not demonstrated by the reviewed files.",
    "tags": [
      "KiCad",
      "PCB layout",
      "ATmega328P",
      "I²C interfaces",
      "Gerber outputs"
    ],
    "category": "pcb",
    "label": "PCB & board design",
    "term": "Personal project",
    "course": "Independent hardware design · KiCad",
    "kind": "PCB design study",
    "role": "Schematic capture, PCB implementation, and design documentation in the linked personal GitHub project.",
    "outcome": "Integrated an ATmega328P, two external EEPROM devices, and a real-time clock into a four-copper-layer KiCad board, with Gerber exports available in the repository.",
    "flow": [
      "Circuit capture",
      "Footprint placement",
      "PCB routing",
      "Design documentation"
    ],
    "repository": "https://github.com/Ruthvik-reddy-A/PCB-design-projects/tree/main/MCU-Datalogger-With-Built-In-512K-EEPROM",
    "source": "PCB-design-projects GitHub repository: MCU-Datalogger-With-Built-In-512K-EEPROM; README, KiCad schematic/board, and repository previews. Reviewed 11 November 2026.",
    "images": [
      {
        "src": "assets/images/img-pcb-datalogger-0.webp",
        "title": "Data-logger board render",
        "caption": "Repository front-side 3D render showing the controller, memory, clock, and connectors.",
        "alt": "Data-logger board render — Repository front-side 3D render showing the controller, memory, clock, and connectors.",
        "width": 816,
        "height": 519
      },
      {
        "src": "assets/images/img-pcb-datalogger-1.webp",
        "title": "Data-logger reverse-side render",
        "caption": "Repository reverse-side 3D render; this is a design visualization, not a fabricated-board photograph.",
        "alt": "Data-logger reverse-side render — Repository reverse-side 3D render; this is a design visualization, not a fabricated-board photograph.",
        "width": 1090,
        "height": 674
      }
    ],
    "detailedPdf": "downloads/projects/pcb/Project-26-pcb-datalogger.pdf"
  },
  {
    "id": "pcb-gps-gsm",
    "title": "ESP32 GPS/GSM tracker PCB",
    "summary": "Integrated GPS, GSM, EEPROM, charging, and boost-converter sheets around an ESP32-S3 in a four-copper-layer KiCad tracker design.",
    "question": "How can a tracking board combine location, communication, local storage, and battery power?",
    "situation": "The tracker architecture brings several interfaces and power blocks onto one board. The schematic identifies an ESP32-S3-WROOM-1, NEO-8Q GPS module, SIM800C modem, and CAT24C256 EEPROM.",
    "task": "Organize the multi-sheet hardware design and board layout for the tracker and its power-management blocks.",
    "approach": [
      "Separated GPS, GSM, connectors, charging, and boost circuitry into schematic sheets. The design includes TXS0108E level translation, TP4056 charging, and an MT3608 boost stage.",
      "Integrated the controller, local memory, external-module interfaces, and connectors in the PCB. The checked-in board contains four copper layers, 61 footprints, 770 track segments, and 84 vias.",
      "Documented the architecture and supplied a 3D board preview. Used the source files to distinguish intended tracking functionality from measured operation."
    ],
    "results": [
      [
        "Current board",
        "4 copper layers"
      ],
      [
        "Controller",
        "ESP32-S3-WROOM-1"
      ],
      [
        "Position / cellular modules",
        "NEO-8Q / SIM800C"
      ]
    ],
    "validation": "The repository contains a multi-sheet schematic, routed board data, and a board render for the integrated tracker. These demonstrate the hardware-design work; no firmware logs, GPS-fix results, or cellular transmission measurements were found in the reviewed material.",
    "tradeoff": "The schematic labels a regulator AMS1117-5.0 while the associated output net is labelled 3.3 V. This discrepancy needs resolution before assembly or power-up. No RF performance, impedance-control, battery-life, DRC-pass, or SI/PI sign-off claim is made.",
    "tags": [
      "KiCad",
      "Multilayer PCB layout",
      "ESP32 hardware",
      "UART interfaces",
      "Power integration"
    ],
    "category": "pcb",
    "label": "PCB & board design",
    "term": "Personal project",
    "course": "Independent hardware design · KiCad",
    "kind": "PCB design study",
    "role": "Schematic capture, PCB implementation, and design documentation in the linked personal GitHub project.",
    "outcome": "Integrated GPS, GSM, EEPROM, charging, and boost-converter sheets around an ESP32-S3 in a four-copper-layer KiCad tracker design.",
    "flow": [
      "Circuit capture",
      "Footprint placement",
      "PCB routing",
      "Design documentation"
    ],
    "repository": "https://github.com/Ruthvik-reddy-A/PCB-design-projects/tree/main/GPS%20%2B%20GSM%20Tracker%20with%20EEPROM%20Logging",
    "source": "PCB-design-projects GitHub repository: GPS + GSM Tracker with EEPROM Logging; README, KiCad schematic/board, and repository previews. Reviewed 11 November 2026.",
    "images": [
      {
        "src": "assets/images/img-pcb-gps-gsm-0.webp",
        "title": "Tracker board render",
        "caption": "Repository 3D render of the tracker board and battery holder.",
        "alt": "Tracker board render — Repository 3D render of the tracker board and battery holder.",
        "width": 957,
        "height": 747
      },
      {
        "src": "assets/images/img-pcb-gps-gsm-1.webp",
        "title": "Tracker top-level schematic",
        "caption": "Repository architecture view linking controller, storage, power, GPS, and GSM sheets.",
        "alt": "Tracker top-level schematic — Repository architecture view linking controller, storage, power, GPS, and GSM sheets.",
        "width": 1077,
        "height": 791
      }
    ],
    "detailedPdf": "downloads/projects/pcb/Project-27-pcb-gps-gsm.pdf"
  },
  {
    "id": "pcb-breadboard-supply",
    "title": "Breadboard power-supply PCB",
    "summary": "Created a KiCad breadboard-supply design with LM7805 and LM317 regulator stages, selectable output headers, and a two-copper-layer board.",
    "question": "How can a compact supply board make regulated power and selectable rails accessible for prototyping?",
    "situation": "The project organizes input power, regulation, switching, indication, and output connectors into a breadboard-oriented module. The schematic labels 5 V and 3.3 V output rails.",
    "task": "Translate the supply circuit into a board with accessible switches, connectors, and regulator placement.",
    "approach": [
      "Built separate schematic sections for the input/5 V path, adjustable-regulator path, and output selection. The actual parts are LM7805_TO220 and LM317_TO-220.",
      "Included input/output capacitors, an LED, switching, and pin/terminal connectors. Retained the schematic’s labelled output voltages as design intent, not measured regulation results.",
      "Implemented the source board with two copper layers, 18 footprints, 63 track segments, and one via, and documented the assembly appearance using a 3D render."
    ],
    "results": [
      [
        "Current board",
        "2 copper layers"
      ],
      [
        "Regulators in source",
        "LM7805 + LM317"
      ],
      [
        "Labelled output rails",
        "5 V / 3.3 V"
      ]
    ],
    "validation": "The editable schematic, board file, and matching render show the regulator and connector implementation. The reviewed repository does not provide a load sweep, ripple measurements, or thermal characterization.",
    "tradeoff": "The README mentions AMS1117 and USB options, whereas the checked-in schematic uses LM7805/LM317 and a barrel-jack input. Output-voltage labels describe intended rails; regulator configuration and loaded behavior require bench verification.",
    "tags": [
      "KiCad",
      "PCB layout",
      "Linear regulators",
      "Power distribution",
      "Connector integration"
    ],
    "category": "pcb",
    "label": "PCB & board design",
    "term": "Personal project",
    "course": "Independent hardware design · KiCad",
    "kind": "PCB design study",
    "role": "Schematic capture, PCB implementation, and design documentation in the linked personal GitHub project.",
    "outcome": "Created a KiCad breadboard-supply design with LM7805 and LM317 regulator stages, selectable output headers, and a two-copper-layer board.",
    "flow": [
      "Circuit capture",
      "Footprint placement",
      "PCB routing",
      "Design documentation"
    ],
    "repository": "https://github.com/Ruthvik-reddy-A/PCB-design-projects/tree/main/Breadboard-Power-Supply",
    "source": "PCB-design-projects GitHub repository: Breadboard-Power-Supply; README, KiCad schematic/board, and repository previews. Reviewed 11 November 2026.",
    "images": [
      {
        "src": "assets/images/img-pcb-breadboard-supply-0.webp",
        "title": "Breadboard-supply board render",
        "caption": "Repository 3D render showing regulators, switches, and connectors.",
        "alt": "Breadboard-supply board render — Repository 3D render showing regulators, switches, and connectors.",
        "width": 876,
        "height": 493
      },
      {
        "src": "assets/images/img-pcb-breadboard-supply-1.webp",
        "title": "Regulation and output-selection schematic",
        "caption": "Repository schematic with input, regulator, and selectable-output sections.",
        "alt": "Regulation and output-selection schematic — Repository schematic with input, regulator, and selectable-output sections.",
        "width": 1154,
        "height": 783
      }
    ],
    "detailedPdf": "downloads/projects/pcb/Project-28-pcb-breadboard-supply.pdf"
  },
  {
    "id": "pcb-solar-supply",
    "title": "Tiny solar-supply PCB adaptation",
    "summary": "Adapted a documented Elektor solar-supply circuit into a KiCad PCB using an AP3015 boost stage, Schottky diodes, and MOSFET-controlled shutdown.",
    "question": "How can a small solar-supply circuit be organized into a compact board with charging and shutdown paths?",
    "situation": "The project README credits the Elektor Tiny Solar Supply article by Clemens Valens. The design targets a NiMH-cell solar supply with a nominal 3.3 V output, and the KiCad schematic uses an AP3015KTR-G1 controller.",
    "task": "Adapt the referenced circuit into a schematic and PCB with battery, solar, control, and output connections.",
    "approach": [
      "Implemented the boost-converter network, SS14 Schottky diodes, feedback components, and a 2N7000 shutdown-control device in the source schematic.",
      "Organized the external connections and component placement into a two-copper-layer board. The current PCB contains 16 footprints, 85 track segments, and four vias.",
      "Documented the schematic and board render while preserving the original circuit attribution. Described the nominal output and daylight shutdown as intended behavior, pending measurement."
    ],
    "results": [
      [
        "Current board",
        "2 copper layers"
      ],
      [
        "Boost controller",
        "AP3015KTR-G1"
      ],
      [
        "Nominal output intent",
        "3.3 V"
      ]
    ],
    "validation": "The repository contains an editable KiCad schematic and board, plus schematic and 3D previews. This supports a PCB adaptation case study; it does not establish output-current capability, charging performance, or conversion efficiency.",
    "tradeoff": "The circuit is an attributed adaptation. The collection overview’s Li-ion/TP4056 description conflicts with this project’s NiMH/AP3015 files and is not used. MPPT, measured efficiency, and a validated battery-charging profile are not claimed.",
    "tags": [
      "KiCad",
      "PCB layout",
      "Boost-converter circuits",
      "Solar power circuits",
      "Schematic capture"
    ],
    "category": "pcb",
    "label": "PCB & board design",
    "term": "Personal project",
    "course": "Independent hardware design · KiCad",
    "kind": "PCB design study",
    "role": "KiCad schematic and PCB adaptation of the Elektor Tiny Solar Supply circuit, credited in the project README to Clemens Valens.",
    "outcome": "Adapted a documented Elektor solar-supply circuit into a KiCad PCB using an AP3015 boost stage, Schottky diodes, and MOSFET-controlled shutdown.",
    "flow": [
      "Circuit capture",
      "Footprint placement",
      "PCB routing",
      "Design documentation"
    ],
    "repository": "https://github.com/Ruthvik-reddy-A/PCB-design-projects/tree/main/Tiny-Solar-Power-Supply",
    "source": "PCB-design-projects GitHub repository: Tiny-Solar-Power-Supply; README, KiCad schematic/board, and repository previews. Reviewed 11 November 2026.",
    "images": [
      {
        "src": "assets/images/img-pcb-solar-supply-0.webp",
        "title": "Solar-supply board render",
        "caption": "Repository 3D render of the adapted supply board.",
        "alt": "Solar-supply board render — Repository 3D render of the adapted supply board.",
        "width": 1024,
        "height": 521
      },
      {
        "src": "assets/images/img-pcb-solar-supply-1.webp",
        "title": "Solar-supply schematic",
        "caption": "Repository schematic of the AP3015-based circuit; original concept credited to Elektor / Clemens Valens.",
        "alt": "Solar-supply schematic — Repository schematic of the AP3015-based circuit; original concept credited to Elektor / Clemens Valens.",
        "width": 1793,
        "height": 794
      }
    ],
    "detailedPdf": "downloads/projects/pcb/Project-29-pcb-solar-supply.pdf"
  },
  {
    "id": "pcb-led-torch",
    "title": "Battery-powered LED torch PCB",
    "summary": "Created a compact LED torch board with a battery holder, switch, resistor, and LED, and included Gerber and drill outputs for the design.",
    "question": "How can a simple LED circuit become a compact, mechanically coherent PCB?",
    "situation": "This introductory hardware project uses a direct battery-switch-resistor-LED circuit. Its board outline and component arrangement follow the battery holder and accessible switch.",
    "task": "Capture the circuit, assign footprints, route the compact board, and prepare manufacturing-output files.",
    "approach": [
      "Captured the battery, switch, resistor, and LED path in KiCad. The source schematic uses a resistor-labelled R1 rather than a specified current-setting value.",
      "Arranged the battery holder, LED, resistor, and switch within the shaped board. The file contains two copper layers, five footprints including a mounting feature, 14 track segments, and no vias.",
      "Provided front/back copper, silkscreen, mask, edge-cut, and drill exports in the Gerber directory, alongside a board render and schematic preview."
    ],
    "results": [
      [
        "Board file",
        "2 copper layers"
      ],
      [
        "Routing vias",
        "0"
      ],
      [
        "Available outputs",
        "Gerber + drill"
      ]
    ],
    "validation": "The repository includes the editable circuit and board, a 3D preview, and manufacturing-output files. The schematic supports a direct resistive LED circuit, not the generic transistor/boost alternatives described in the README.",
    "tradeoff": "R1 has no numeric value in the checked-in schematic. LED current, brightness, battery runtime, fabrication, and bench operation are therefore not claimed. Gerber availability does not by itself establish manufacturing readiness.",
    "tags": [
      "KiCad",
      "Schematic capture",
      "PCB layout",
      "LED circuits",
      "Gerber outputs"
    ],
    "category": "pcb",
    "label": "PCB & board design",
    "term": "Personal project",
    "course": "Independent hardware design · KiCad",
    "kind": "PCB design study",
    "role": "Schematic capture, PCB implementation, and design documentation in the linked personal GitHub project.",
    "outcome": "Created a compact LED torch board with a battery holder, switch, resistor, and LED, and included Gerber and drill outputs for the design.",
    "flow": [
      "Circuit capture",
      "Footprint placement",
      "PCB routing",
      "Design documentation"
    ],
    "repository": "https://github.com/Ruthvik-reddy-A/PCB-design-projects/tree/main/LED%20Torch",
    "source": "PCB-design-projects GitHub repository: LED Torch; README, KiCad schematic/board, and repository previews. Reviewed 11 November 2026.",
    "images": [
      {
        "src": "assets/images/img-pcb-led-torch-0.webp",
        "title": "LED torch board render",
        "caption": "Repository 3D render showing the battery holder, LED, switch, and resistor.",
        "alt": "LED torch board render — Repository 3D render showing the battery holder, LED, switch, and resistor.",
        "width": 886,
        "height": 373
      },
      {
        "src": "assets/images/img-pcb-led-torch-1.webp",
        "title": "LED torch schematic",
        "caption": "Repository schematic of the direct battery-powered LED circuit.",
        "alt": "LED torch schematic — Repository schematic of the direct battery-powered LED circuit.",
        "width": 984,
        "height": 707
      }
    ],
    "detailedPdf": "downloads/projects/pcb/Project-30-pcb-led-torch.pdf"
  },
  {
    "id": "traffic-priority",
    "title": "Emergency-vehicle traffic signal prototype",
    "category": "embedded",
    "label": "Sensor interfacing",
    "summary": "IR detection and Arduino/LabVIEW control to give a detected emergency vehicle a green signal.",
    "tags": [
      "Arduino Uno",
      "NI LabVIEW",
      "IR sensing",
      "Embedded control",
      "Prototyping"
    ],
    "course": "Measurements & Instrumentation mini-project",
    "term": "Undergraduate",
    "kind": "Three-person team",
    "role": "Arduino implementation, report, and presentation; the team shared LabVIEW and hardware integration.",
    "flow": [
      "IR emitter",
      "IR receiver",
      "Arduino + LabVIEW",
      "Traffic lights"
    ],
    "question": "How can a detected vehicle request change a small traffic-light prototype’s signal state?",
    "approach": [
      "Used an IR emitter representing the approaching emergency vehicle and receivers at the signal. Arduino and LabVIEW logic translate detection into the light outputs.",
      "The selected direction turns green while the other directions turn red. The report includes the circuit, flowchart, result images, and component list."
    ],
    "validation": "The project demonstrates the signal-selection behavior in a prototype. The contribution table identifies Ruthvik’s Arduino and documentation work.",
    "tradeoff": "The reported design does not assign priority when emergency vehicles arrive from multiple directions. No real-road deployment or measured response-time reduction is claimed.",
    "source": "Emergency vehicle traffic clearing system report in gptz.zip, working principle, results, limitations, and contributions.",
    "results": [],
    "images": [
      {
        "src": "assets/images/img-traffic-image4.webp",
        "title": "Traffic-priority prototype",
        "alt": "Traffic-priority prototype — Arduino and breadboard demonstration photographed in the team report.",
        "caption": "Arduino and breadboard demonstration photographed in the team report.",
        "width": 901,
        "height": 632
      },
      {
        "src": "assets/images/img-traffic-image1.webp",
        "title": "LabVIEW implementation",
        "alt": "LabVIEW implementation — LabVIEW program view from the project documentation.",
        "caption": "LabVIEW program view from the project documentation.",
        "width": 1280,
        "height": 678
      }
    ],
    "situation": "The prototype explores how a vehicle request can change a traffic signal. An IR emitter represents the approaching emergency vehicle, with receivers connected to the signal-control system.",
    "task": "Implement the Arduino control and contribute the report and presentation, working with the team’s LabVIEW and hardware integration.",
    "outcome": "Demonstrated IR-triggered signal selection on an Arduino/LabVIEW prototype: the selected direction turns green while the other directions turn red.",
    "repository": "https://github.com/Ruthvik-reddy-A/Emergency-vehicle-traffic-clearing-system-using-LABVIEW-and-Arduino",
    "detailedPdf": "downloads/projects/embedded/Project-14-traffic-priority.pdf"
  },
  {
    "id": "gas-detection",
    "title": "8051 gas-leak detection & alerting",
    "category": "embedded",
    "label": "Microcontroller design",
    "summary": "Sensor-driven alert logic with an 8051, display, buzzer, and exhaust-fan control.",
    "tags": [
      "8051",
      "Assembly",
      "Keil µVision",
      "Proteus",
      "Sensor interfacing"
    ],
    "course": "Microcontrollers mini-project",
    "term": "Undergraduate",
    "kind": "Team project",
    "role": "Completed as a team microcontroller project, with controller code, circuit simulation, and a shared technical report.",
    "flow": [
      "Gas sensor",
      "8051 controller",
      "LCD + buzzer",
      "Fan control"
    ],
    "question": "How can a microcontroller translate a gas-detection input into visible and audible alerts?",
    "approach": [
      "Developed the controller flow around the sensor input, LED/buzzer outputs, and fan activation. The report identifies the AT89S52 variant and includes 8051 assembly.",
      "Used Keil tooling for the controller program; the supplied project folder also contains the Proteus circuit project and simulation material."
    ],
    "validation": "The report and source files document normal and alarm-state behavior, display messages, and output control.",
    "tradeoff": "The project explores the sensor-to-alert control path in an academic prototype. Sensor calibration and environmental sensitivity would need further characterization for a practical device.",
    "source": "LPG GAS LEAKAGE DETECTION USING 8051 MICROCONTROLLERS.docx and associated Keil/Proteus project files.",
    "results": [],
    "images": [
      {
        "src": "assets/images/img-gas-image1.webp",
        "title": "8051 gas-alarm simulation",
        "alt": "8051 gas-alarm simulation — Proteus schematic from the AT89S52 gas-detection report.",
        "caption": "Proteus schematic from the AT89S52 gas-detection report.",
        "width": 1280,
        "height": 720
      }
    ],
    "situation": "A gas-detection input must be translated into a clear alarm state and output controls. The academic project explores that path with an AT89S52, controller code, and circuit simulation.",
    "task": "Contribute to the team’s microcontroller implementation and documented normal/alarm-state behavior using the supplied 8051 and Proteus materials.",
    "outcome": "Documented normal and alarm-state behavior for an 8051-based controller, connecting sensor input to display, LED/buzzer alerts, and fan activation.",
    "repository": "https://github.com/Ruthvik-reddy-A/LPG-Gas-leakage-detector-using-8051-Microcontroller",
    "detailedPdf": "downloads/projects/embedded/Project-15-gas-detection.pdf"
  },
  {
    "id": "smart-grid",
    "title": "IoT energy-billing demonstrator",
    "category": "embedded",
    "label": "Connected systems",
    "summary": "ESP8266 and Arduino IoT Cloud demonstration of consumption/generation inputs and a calculated bill.",
    "tags": [
      "ESP8266",
      "Arduino IoT Cloud",
      "Embedded C",
      "IoT",
      "Data visualization"
    ],
    "course": "IoT mini-project · Manipal Institute of Technology",
    "term": "November 2023",
    "kind": "Two-person team",
    "role": "Completed collaboratively with B. K. V. Surya, combining the firmware calculation with an Arduino IoT Cloud demonstration.",
    "flow": [
      "Sample energy inputs",
      "ESP8266",
      "Billing calculation",
      "Arduino IoT Cloud"
    ],
    "question": "How can energy-use and generation values be processed on a microcontroller and displayed remotely?",
    "approach": [
      "Used example consumption and generation values in the firmware, calculated their difference, and applied a fixed price-per-unit variable.",
      "Configured the ESP8266 connection to Arduino IoT Cloud and updated the displayed result from the main loop. The report shows different sample consumption/generation cases on web and mobile views."
    ],
    "validation": "The implemented code demonstrates a cloud-connected calculation using substituted input values. Physical measurement modules are listed as a proposed improvement.",
    "tradeoff": "The demonstrated firmware uses sample inputs and a fixed tariff. Connecting physical energy sensors and distinguishing consumption from export are the next steps toward a metering application.",
    "source": "IOT_project[1].docx, implementation code, explanation, and scope of improvement.",
    "results": [],
    "images": [
      {
        "src": "assets/images/img-grid-image2.webp",
        "title": "ESP8266 hardware",
        "alt": "ESP8266 hardware — ESP8266 board photographed in the IoT project report; the project uses sample input values.",
        "caption": "ESP8266 board photographed in the IoT project report; the project uses sample input values.",
        "width": 635,
        "height": 477
      }
    ],
    "situation": "Energy consumption and generation values can be combined into a net-value calculation and displayed remotely. This demonstrator uses substituted firmware inputs to exercise that calculation and cloud connection.",
    "task": "Work with the team to implement the calculation on an ESP8266 and display the result through Arduino IoT Cloud.",
    "outcome": "Demonstrated cloud-connected net-energy billing calculations from example consumption and generation inputs using an ESP8266 and a fixed tariff.",
    "repository": "https://github.com/Ruthvik-reddy-A/IoT-Based-Smart-grid-along-with-auto-billing-",
    "detailedPdf": "downloads/projects/embedded/Project-16-smart-grid.pdf"
  },
  {
    "id": "speech-analysis",
    "title": "Speech analysis with FFT & STFT",
    "category": "signal",
    "label": "Signal processing",
    "summary": "MATLAB exploration of an audio waveform, frequency content, and a time-frequency spectrogram.",
    "tags": [
      "MATLAB",
      "FFT",
      "STFT",
      "Windowing",
      "Signal visualization"
    ],
    "course": "Digital Signal Processing Lab mini-project",
    "term": "Undergraduate",
    "kind": "Two-person team",
    "role": "Collaborative MATLAB speech-analysis project with B. K. V. Surya.",
    "flow": [
      "Audio sample",
      "FFT magnitude",
      "Windowed STFT",
      "Spectrogram"
    ],
    "question": "How does the frequency content of a speech sample change over time?",
    "approach": [
      "Read the audio samples and sampling rate with audioread, inspected the waveform, and calculated an FFT magnitude.",
      "Used a 64-sample Hamming window, 32-sample overlap, and a 64-point transform in the spectrogram calculation to inspect local frequency content."
    ],
    "validation": "The report contains waveform and spectrogram output; the ZIP includes the MATLAB script used for the analysis.",
    "tradeoff": "The time-frequency view is the strongest demonstration in this study. Before extending the analysis, the saved FFT plot’s frequency-axis scaling needs correction so that frequency readings are calibrated.",
    "source": "Ruthvik_Surya_DSP_MiniProject.pdf and DSP/DSP_Miniproject.m.",
    "results": [
      [
        "STFT window",
        "64 samples"
      ],
      [
        "Overlap",
        "32 samples"
      ],
      [
        "FFT length",
        "64 points"
      ]
    ],
    "images": [],
    "situation": "A single spectrum cannot show when different frequency components occur in a speech sample. This study compares the audio waveform and FFT view with a time-frequency representation.",
    "task": "Use MATLAB to read the sample, calculate the FFT, and inspect local frequency content using the supplied STFT configuration.",
    "outcome": "Produced waveform and spectrogram views using a 64-sample Hamming window, 32-sample overlap, and 64-point transform, making the analysis configuration explicit.",
    "repository": "https://github.com/Ruthvik-reddy-A/Speech-Signal-Processing-DSP",
    "detailedPdf": "downloads/projects/signal/Project-17-speech-analysis.pdf"
  },
  {
    "id": "load-flow",
    "title": "Gauss–Seidel load-flow study",
    "category": "power",
    "label": "Numerical methods",
    "summary": "A power-system case study of bus variables, admittance matrices, and iterative voltage updates.",
    "tags": [
      "Power systems",
      "Load-flow analysis",
      "Gauss–Seidel",
      "Numerical methods",
      "Technical analysis"
    ],
    "course": "Power System Analysis · FISAC case study",
    "term": "Undergraduate",
    "kind": "Two-person study",
    "role": "Co-authored case study with B. K. V. Surya.",
    "flow": [
      "Bus specifications",
      "Y-bus matrix",
      "Voltage iteration",
      "Power-flow evaluation"
    ],
    "question": "How can an iterative method estimate steady-state bus voltages and power flow?",
    "approach": [
      "Distinguished slack, PV, and PQ buses by their specified and unknown quantities. Developed the Gauss–Seidel procedure for the case where non-slack buses are PQ buses.",
      "Outlined flat-start voltage initialization, successive voltage updates, a tolerance-based stopping condition, and subsequent line-power calculations."
    ],
    "validation": "The supplied report explains the algorithm and compares its simplicity and memory requirements with its convergence limitations.",
    "tradeoff": "The study emphasizes algorithm structure and convergence tradeoffs. Its Gauss–Seidel approach is most useful as a small-system learning example; a network benchmark would be a separate extension.",
    "source": "POWER SYSTEM ANALYSIS FISAC.pdf in gptz/PSA.",
    "results": [],
    "images": [],
    "situation": "Load-flow analysis estimates steady-state bus voltages and line power from specified network quantities. This case study develops the Gauss–Seidel process and its convergence considerations.",
    "task": "Co-author the bus-type explanation, voltage-update procedure, stopping condition, and discussion of the method’s limitations.",
    "outcome": "Documented an iterative load-flow procedure from flat-start initialization to convergence checks and line-power calculations, distinguishing slack, PV, and PQ bus specifications.",
    "detailedPdf": "downloads/projects/power/Project-18-load-flow.pdf"
  },
  {
    "id": "audio-encryption",
    "title": "Audio encryption/decryption study",
    "category": "signal",
    "label": "Algorithm study",
    "summary": "An educational MATLAB case study of an audio encryption and recovery workflow.",
    "tags": [
      "MATLAB",
      "Audio processing",
      "RSA concepts",
      "Algorithms",
      "Technical documentation"
    ],
    "course": "Encryption / decryption case study",
    "term": "Undergraduate",
    "kind": "Three-person study",
    "role": "Listed team member in the conceptual study and MATLAB demonstration.",
    "flow": [
      "Audio input",
      "Encryption step",
      "Encoded audio",
      "Decryption step"
    ],
    "question": "How can an audio signal illustrate the distinction between encryption and decryption?",
    "approach": [
      "Explored symmetric and asymmetric key concepts and used RSA as the report’s reference algorithm.",
      "Documented a MATLAB workflow that starts with an audio file, illustrates an encrypted signal, and shows a recovered signal at the receiving end."
    ],
    "validation": "The document contains example signal views and a conceptual discussion of the encryption/decryption sequence.",
    "tradeoff": "This is an educational algorithm study. The signal illustrations explain the workflow; cryptographic validation and quantitative recovery analysis sit beyond its demonstrated scope.",
    "source": "REAL TIME APPLICATION.docx in gptz.zip, case-study and team sections.",
    "results": [],
    "images": [],
    "situation": "An audio signal provides a visual example of an encryption/decryption sequence. This team study discusses symmetric and asymmetric concepts with RSA as its reference algorithm.",
    "task": "Contribute as a team member to the conceptual study and documented MATLAB signal workflow.",
    "outcome": "Presented original, encrypted, and recovered signal views in an educational MATLAB study, with the scope limited to the documented workflow rather than a security benchmark.",
    "detailedPdf": "downloads/projects/signal/Project-19-audio-encryption.pdf"
  }
];
