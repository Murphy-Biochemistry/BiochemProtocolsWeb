+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Protein Expression Culture'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.1.1'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '17.12.2025'
finished = true
tested = false
to-do = ''
math = true
+++

{{< tab >}}
## Materials
| Equipment & Devices⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| laminar airflow workbench |  |  |  |
| shaker incubator |  |  |  |
| photometer |  | for measuring OD<sub>600</sub> |  |
| centrifuge |  | for 50 mL falcon tubes @ 3,000-6,000 g |  |
| centrifuge |  | microfuge for 1.5 mL tubes @ 20,000 g |  |
| end-over-end rotator |  | for fitting 10 50m mL falcon tubes/culture |  |
| ultrasonicator |  |  |  |
| bucket of ice |  |  |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| pipetmans and sterile pipette tips |  |  |  |
| pipetting aid and serological pipette |  |  |  |
| photometer cuvette | 2/culture |  |  |
| liquid culture tubes or sterile falcon tubes 15 mL | 1/culture | for pre culture |  |
| sterile reaction tube 1.5 mL | 1/workflow <br> 2/culture <br> 20/culture | for antibiotic aliquot <br> for culture aliquots (pre- and post-induction) <br> for centrifugation following lysis |  |
| Erlenmeyer Flask 1 L | 1/culture |  |  |
| sterile falcon tubes 50 mL | 10/culture <br> 1/culture | for harvesting <br> for recombining supernatants |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani liquid medium | 6 mL/culture <br> 250m mL/culture | for the pre culture <br> for the main culture |  |
| Luria-Bertani agarose plate | 1/culture | for clone backup |  |
| suitable antibiotic |  | stock solution, tpically 1000x |  |
| [phosphate-buffered saline (PBS)]({{< relref "/recipes/general_buffers/pbs.md" >}}) | 50 µL/culture <br> 50 µL/culture <br> 50 µL/culture | for pre-induction aliquot <br> for post-induction aliquot <br> 50mL for precipitate |  |
| [SDS-PAGE sample buffer 2x]() | 50 µL/culture <br> 50 µL/culture <br> 50 µL/culture | for pre-induction aliquot <br> for post-induction aliquot <br> 50mL for precipitate |  |
| suitable induction chemical <br> e.g. Anhydrotetracycline AHT 2 mg/mL <br> e.g. Isopropyl-β-D-thiogalactopyranosid IPTG 1 M | <br> e.g. 50 µL <br> e.g. 250 µL | <br> for a final concentration of 0.2 µg/mL  <br> for a final concentration of 0.5 mM |  |
| tris-HCl-NaCl-MgCl<sub>2</sub> bacterial lysis buffer |  | for 20 mL supplemented lysis buffer |
| phenylmethylsulfonylfluorid *PMSF* 1 M |  | for 20 mL supplemented lysis buffer |  |
| [aprotenin]({{< relref "/recipes/bacteria/aprotenin.md" >}}) |  | for 20 mL supplemented lysis buffer |  |
| [leupeptin]({{< relref "/recipes/bacteria/leupeptin.md" >}}) |  | for 20 mL supplemented lysis buffer |  |
| pepstatin A |  | for 20 mL supplemented lysis buffer |
| sucrose | 4 g/clone | for 20 mL supplemented lysis buffer |
| Triton-X-100 | 100 µL/clone | for 20 mL supplemented lysis buffer |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| LB agar plate with transformed bacteria | 1/plasmid |  |  |

{{< /tab >}}

{{< tab >}}
## Procedure:
### Preparation:
1. <input type="checkbox"> [Transform a suitable strain of bacteria and plate transformed bacteria on a LB-agar Plate containing appropriate selection markers (Antibiotic, X-Gal).]({{< relref "methodes/bacteria/transformation.md" >}})
2. <input type="checkbox"> Prepare 6 mL of sterile LB medium per clone.
2. <input type="checkbox"> Prepare additional 500 mL of sterile LB medium in a 1 L Erlenmeyer flask per clone.
{{< infobox type="info" title="" >}}
⚠️ Adjust volume as needed. The Erlenmeyer flask should be able to hold at least double the volume of LB medium used to allow for sufficient airation.
{{< /infobox >}}

### Pre-Culture:
{{< infobox type="info" title="" >}}
⚠️ To reduce risk of contamination, all subsequent steps can be carried out under laminar airflow.
{{< /infobox >}}

1. <input type="checkbox"> Transfer 1 mL of the 6 mL LB medium into a photometer cuvette for the zero value.
2. <input type="checkbox"> Transfer 5 mL of LB medium into the sterile 15 mL falcon tube or liquid culturing tube.
2. <input type="checkbox"> Supplement the 5 mL of LB medium with a suitable antibiotic.
{{< infobox type="warning" title="" >}}
❗️ To minimize exposure to microorganisms, all subsequent steps should be carried out under laminar airflow.
{{< /infobox >}}

3. <input type="checkbox"> Pick a suitable clone with a pipette tip.
4. <input type="checkbox"> Optionally streak pipette tip over fresh plate as a backup.
5. <input type="checkbox"> Drop the pipette tip into the prepared medium.
6. <input type="checkbox"> Incubate the culture @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD<sub>600</sub> ~ 0.4–0.8 (best 0.6) is reached.
{{< infobox type="info" title="" >}}
Incubation @ 30 °C and shaking @ 250 rpm overnight is also possible.
{{< /infobox >}}

<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>

7. <input type="checkbox"> Document the start time and refer to [BiochemProtocols bacterial growth calculator]().

{{< current_time_display >}}

8. <input type="checkbox"> Measure the OD600 after 120 minutes and then every 60 minutes and until an OD600 of approximately 2.000 is reached.

{{< calculators/bacterial_growth_calc >}}

### Expression Culture:
1. <input type="checkbox"> Transfer 1 mL of the 500 mL LB medium into a photometer cuvette for the zero value.
2. <input type="checkbox"> Supplement the 500 mL LB-medium with suitable antibiotic.
3. <input type="checkbox"> Inoculate the 500 mL LB-medium with the pre-culture.
4. <input type="checkbox"> Incubate batch @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD600 of 0.4 to 0.8 (best 0.6) is reached.
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>

5. <input type="checkbox"> Take a 1 mL aliquot prior to induction, pellet and resuspend in 50 µL PBS and 50 µL 2x SDS-Page sample buffer for later SDS-PAGE analysis.
6. <input type="checkbox"> Induce expression according to plasmid instructions.
{{< infobox type="info" title="Typical Induction Chemicals" >}}
Anhydrotetracycline *AHT* to a final concentration of 0.2 µg/mL (50 µL of a 2 mg/mL stock).
Isopropyl-β-D-thiogalactopyranosid *IPTG* to a final concentration of 0.5 mM (250 µL of a 1 M stock).
{{< /infobox >}}

7. <input type="checkbox"> Incubate @ 30 °C and shaking @ 250 rpm for 2–4 h for expression of the protein.
{{< infobox type="info" title="" >}}
⚠️ Incubation @ 25 °C and shaking @ 250 rpm overnight is also possible and may yield higher protein quantity and less protein aggregates. The final expression time and OD<sub>600</sub> can be documented once when starting the harvest.
{{< /infobox >}}

<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>

8. <input type="checkbox"> Document the start time and refer to BiochemProtocols bacterial growth calculator.

{{< current_time_display >}} <!-- update so multiple can be on one page or split protocol in two pages -->

9. <input type="checkbox"> Measure the OD<sub>600</sub> after 120 minutes and then every 60 minutes and until an OD<sub>600</sub> of approximately 2.000 is reached.
{{< infobox type="info" title="Bacterial Growth Phases" >}}
⚠️ Cells should be harvested at the end of the logarythmic growth phase, typically at an OD<sub>600</sub> of approximately 2.000, and before stationary phase is reached at an OD<sub>600</sub> of 2.500–4.000.
{{< /infobox >}}

{{< calculators/bacterial_growth_calc >}} <!-- update so multiple can be on one page or split protocol in two pages -->

### Preparations 1 h before Harvesting:
1. <input type="checkbox"> Pre-cool a centrifuge to 4 °C for harvesting @ 3000–6000 g.
3. <input type="checkbox"> Pre-cool the ultrasonicator to 4 °C.
4. <input type="checkbox"> <del>Prepare 20 mL supplemented bacterial lysis buffer per 500 mL bacterial culture volume by supplementing 20 mL of ice-cold Tris-HCl-NaCl-MgCl2 bacterial lysis buffer with 20 µL PMSF 1 M for a final concentration of 1 mM and 2 complete mini protease inhibitor cocktail tablets, 4 g of Saccharose for a final concentration of 20 % and 100 µL Triton X-100 for a final concentration of 0.5 %.</del> <!-- update -->
5. <input type="checkbox"> <del>Rotate supplemented bacterial lysis buffer end-over-end @ 4 °C for 5–10 minutes to suspend the protease inhibitor cocktail tablets.</del> <!-- update -->

### Cell harvesting:
1. <input type="checkbox"> Take a 1 mL aliquot prior to harvest, pellet and resuspend in 50 µL PBS and 50 µL 2x SDS-Page sample buffer for later SDS-PAGE analysis.
2. <input type="checkbox"> Transfer the 500 mL culture into 10 x 50 mL falcon tubes.
3. <input type="checkbox"> Harvest cells by centrifugation @ 3000–6000 g and @ 4 °C for 10 minutes.
{{< infobox type="info" title="Equation for  G-Force ($F_g$) from Rotor Radius ($r_r$) and Revolutions per Minute ($rpm$)" >}}
Rotor radius in meters (SI): $F_g = 1.118 \cdot 10^{-3} \cdot r_r \cdot rpm^2$  
Rotor radius in centimeters: $F_g = 1.118 \cdot 10^{-5} \cdot r_r \cdot rpm^2$

Sorvall SS-34 fixed angle rotor: $1.118 \cdot 10^{-5} \ cm^{-1} \ min ^{2} \cdot 10.7 \ cm \cdot (6000 \ min^{-1})^2 = 4300 \ g$
{{< /infobox >}}

{{< timer time="0:10:00" >}}

4. <input type="checkbox"> Discard supernatant.
5. <input type="checkbox"> Use pellet immediately of freeze @ –20 °C.

### Pellet Resuspension:
1. <input type="checkbox"> Overlay bacteria pellet from 500 mL culture volume with 20 mL freshly prepared lysis buffer (2 mL/pellet).
{{< infobox type="info" title="" >}}
⚠️ For subsequent purification using affinity chromatographie collumns, try and keep lysate as concentrated as possible and therefore the volume as littly as possible. Try using only 5 mL and increase the volume only when resuspention is not possible.
{{< /infobox >}}

2. <input type="checkbox"> Break up the pellet with a pipette.
3. <input type="checkbox"> Resuspend @4 °C rotating end-over-end for 10-20 minutes to reach homogeneity.
4. <input type="checkbox"> Pre-cool a centrifuge to 4 °C for sedimenting cell components @ 20,000 g in 1.5 mL reaction tubes.
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:10:00" >}}
{{< timer time="0:20:00" >}}
</div>

### Cell Lysis and DNA Shearing:
1. <input type="checkbox"> Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

2. <input type="checkbox"> Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

3. <input type="checkbox"> Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

4. <input type="checkbox"> Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

5.	Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

6. <input type="checkbox"> Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

7. <input type="checkbox"> Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

8. <input type="checkbox"> Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

9. <input type="checkbox"> Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

10. <input type="checkbox"> Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

{{< infobox type="info" title="" >}}
When doing multiple samples, just cycle through the samples, which gives them enaugh time to cool down between sonifications.
{{< /infobox >}}

11. <input type="checkbox"> Transfer the lysate in 20 sterile 1.5 mL reaction tubes.
12. <input type="checkbox"> Centrifuge @ 20,000 g and @ 4 °C for 20 minutes.
{{< timer time="0:20:00" >}}

13. <input type="checkbox"> Decant supernatant into a fresh 50 mL tube.
14. <input type="checkbox">	Resuspend the precipitate in 50 mL PBS and 50 mL 2x Laemmli sample buffer and save for later SDS-PAGE analysis.

### Procede with Suitable Protocol:
- [StrepTag Gravity Flow Protein Purification]({{< relref "/methodes/bacteria/streptag_protein_purification" >}})
- [MagStrep® Strep-Tactin®XT Beads Protein Purification]()
- [Gluthatione-Sepharose Protein Purification]()
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}