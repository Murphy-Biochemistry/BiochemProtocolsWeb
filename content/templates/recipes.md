+++
date = '2025-12-07T20:19:41+01:00'
draft = false
construction = true
title = 'Recipes Template'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['']
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = ''
finished = false
tested = false
+++

<!-- CONTENT_NEW: finished = true, change to CONTENT_DONE; tested = true, delete -->

<!-- markdownlint-disable MD025 MD024 -->
# <!-------------------- anchor -------------------->

[](#anchor_name)

<!-- markdownlint-disable MD033 -->
<div id="anchor_name" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

<!-------------------- /anchor -------------------->
#

# <!-------------------- alternative switch -------------------->

<!-- CONTENT_TODO: combine switches to one universal switch (see alt protocols) -->

Table 1:
Column 1:
<span id="alt_pagename_m_m_reagent1"></span>
<span id="alt_pagename_m_m_reagent2" style="display:none">CONTENT</span>
{ {< alternative_switches/alt_pagename_reagent1 >}}

Column 2:
<span id="alt_pagename_m_mw_reagent1">CONTENT</span>
<span id="alt_pagename_m_mw_reagent2" style="display:none">CONTENT</span>

Column 3:
<span id="alt_pagename_m_specs_reagent1"></span>
<span id="alt_pagename_m_specs_reagent2" style="display:none">CONTENT</span>

Column 4:
<span id="alt_pagename_m_l_reagent1">{{< chemical_location chemical="chemicalname_spec" >}}</span>
<span id="alt_pagename_m_l_reagent2" style="display:none">{{< chemical_location chemical="chemicalname_spec" >}}</span>

Table 2:
Column 1:
<span id="alt_pagename_r_ms_reagent1">CONTENT</span>
<span id="alt_pagename_r_ms_reagent2" style="display:none">CONTENT</span>

<span id="alt_pagename_r_vm_reagent1"></span>
<span id="alt_pagename_r_vm_reagent2" style="display:none">CONTENT</span>

<span id="alt_pagename_r_mol_reagent1">CONTENT</span>
<span id="alt_pagename_r_mol_reagent2" style="display:none">CONTENT</span>

<!-------------------- /alternative switch -------------------->
#

# <!-------------------- calculator recipe x -------------------->

1. Default volume 1000 mL.
2. Default concentration1x.

<spanclass="calc_recipe_x" data-default-mass="MASS"></span>
<spanclass="calc_recipe_x" data-default-vol="VOLUME"></span>
<spanclass="calc_recipe_x" data-default-mol="MOLARITY"></span>

[i]: span can be from alternative switch
[i]: only use one calculator x/vol/mol/amount

<!-------------------- calculator recipe x -------------------->
#

# <!-------------------- calculator recipe volume -------------------->

1. Default volume 1000 mL.

<spanclass="calc_recipe_vol" data-default-mass="MASS"></span>
<spanclass="calc_recipe_vol" data-default-vol="VOLUME"></span>
<spanclass="calc_recipe_vol" data-default-mol="MOLARITY"></span> 

[i]: span can be from alternative switch
[i]: only use one calculator x/vol/mol/amount

<!-------------------- calculator recipe volume -------------------->
#

# <!-------------------- calculator recipe mol -------------------->

1. Default volume 1000 mL.
2. Default molarity 1 M.

<spanclass="calc_recipe_mol" data-default-mass="MASS"></span>
<spanclass="calc_recipe_mol" data-default-vol="VOLUME"></span>
<spanclass="calc_recipe_mol" data-default-mol="MOLARITY"></span> 

[i]: span can be from alternative switch
[i]: only use one calculator x/vol/mol/amount

<!-------------------- /calculator recipe mol -------------------->
#

# <!-------------------- calculator recipe amount -------------------->

1. Default volume 1000 mL.
2. Default molarity 1 M.

<spanclass="calc_recipe_amount" data-default-one="MASS/VOLUME"></span>

[i]: span can be from alternative switch
[i]: only use one calculator x/vol/mol/amount

<!-------------------- /calculator recipe amount -------------------->
#
<!-- markdownlint-enable MD025 MD024 -->

{{< infobox type="info" title="" >}}
⚠️ Info
{{< /infobox >}}

{{< infobox type="warning" title="" >}}
❗️ Attention
{{< /infobox >}}

{{< infobox type="danger" title="" >}}
‼️ Danger
{{< /infobox >}}

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| ChemicalName *ChemicalFormula* [<sup>SDS</sup>](https://www.carlroth.com/.../) | g/mol | | {{< chemical_location chemical="chemicalname_spec" >}} |
| | g/mol | | {{< chemical_location chemical="chemicalname_spec" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid | |
| <span id="alt_pagename_m_m_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_m_reagent2" style="display:none">XXXXXXXXXX</span> { {< alternative_switches/alt_pagename_reagent1 >}} | <span id="alt_pagename_m_mw_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_mw_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_specs_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_specs_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_l_reagent1">{{< chemical_location chemical="chemicalname_spec" >}}</span>     <span id="alt_pagename_m_l_reagent2" style="display:none">{{< chemical_location chemical="chemicalname_spec" >}}</span> |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Recipe

<!-- { {< calculators/calc_recipe_x >}} -->
<!-- { {< calculators/calc_recipe_vol >}} -->
<!-- { {< calculators/calc_recipe_mol >}} -->
<!-- { {< calculators/calc_recipe_amount >}} -->

<!-- markdownlint-disable MD033 -->
| | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | <span id="alt_pagename_r_ms_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_ms_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_vm_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_vm_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_mol_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_mol_reagent2" style="display:none">XXXXXXXXXX</span> |
| {{< checkbox >}} | | | |
| {{< checkbox >}} | store in xx µL aliquots @ xx °C | | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases <!-- insert links -->

| Use Case | Specifications |
| :-- | :-- |
| [Protocol Name]({{< relref "recipes.md" >}}) | |
| [Protocol Name]({{< relref "recipes.md" >}}) | |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | |
| @ 4 °C | |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
