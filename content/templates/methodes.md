+++
date = '2025-12-07T20:19:30+01:00'
draft = false
construction = false
title = 'methods Template'
subtitle = ''
author = 'Spike Murphy Müller ¹'
affiliation = ''
version = 'Version 1.0.2'
version_explanation = ''
updated = '18.12.2025'
finished = true
tested = true
+++
<!-- CONTENT_NEW: finished = true, change to CONTENT_DONE; tested = true, delete -->

<!--–____________________________info_____________________________-->

<!--–
when there are multiple protocol variants:

1. create a folder and an _index.md with the following content:

<script>
  window.location.replace("default/"); // replace default with the pagename of the default variant
</script>

2. add the protocols into the folder
3. each protocol has to have the following shortcode on top of all the other content:

{ {< variants >}}
-->

<!--_____________________________info_____________________________-->

<!--_____________________________delete_____________________________-->

Bookmark: command + option + K
Comment: command + shift + 7 <!-- -->

anchor (jump to position on site):
referral:
[](#name-anchor)
landing:
<!-- markdownlint-disable MD033 -->
<div id="name-anchor" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

{{< timer time="0:00:30" >}}

<!-- 

for switching alternatives

1: chose group that should change together
2: chose primary
3: chose secondary

multiple groups can be chosen

4: add a <span></span> to the primaries and secondaries:
<!-- markdownlint-disable MD033 -- >
<span data-alt-group="group" data-alt="primary">default</span>
<span data-alt-group="group" data-alt="secondary" style="display:none">alternative</span>
<!-- markdownlint-enable MD033 -- >

5: add alternative-switch behind first mention:
{ {< alt_methods group="group" primary="Use default" secondary="Use alternative" >}}

remove " " form "-- >" and "{ {"

-->

<!--_____________________________delete_____________________________-->

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

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Device [<sup>manual</sup>](link) | | | |
| | | | |
| | | | |
| | | | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Kit [<sup>manual</sup>](link) | | | |
| | | | |
| | | | |
| | | | |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipettes | | | |
| | | | |
| | | | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| | | | |
| | | | |
| | | | |
| | | | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| | | | |
| | | | |
| | | | |
| | | | |

{{< /tab >}}

{{< tab >}}

## Procedure

### Heading 1

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:00:00" >}}
{{< timer time="0:00:00" >}}
{{< timer time="0:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

### Heading 2

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

### Heading 3

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

### Proceed with Suitable Protocol

- [Protocol Name]({{< relref "methods.md" >}}) <!---->

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
