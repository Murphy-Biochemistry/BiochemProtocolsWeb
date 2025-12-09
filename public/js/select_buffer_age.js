// select_buffer_age.js — robust version
(function () {
  "use strict";

  const presetVolumes = {
    5: 1.00,
    6: 0.83,
    10: 0.50
  };

  function updateForSelect(select) {
    if (!select || !select.dataset) return;
    const factor = select.value;
    const newVolume = presetVolumes[factor];
    const targetId = select.dataset.targetVolumeId;

    if (newVolume === undefined) return;
    if (!targetId) return;

    const volSpan = document.getElementById(targetId);
    if (!volSpan) return;

    // update span value
    volSpan.dataset.base = newVolume;
    volSpan.textContent = Number(newVolume.toFixed(2)).toString();
    volSpan.dataset.current = newVolume;
    volSpan.title = `${newVolume} µL (preset for ${factor}×)`;

    volSpan.dispatchEvent(new Event("input", { bubbles: true }));

    // also update chosen buffer label if present
    const chosenDisplay = document.getElementById("chosen-buffer-display");
    if (chosenDisplay) {
      chosenDisplay.textContent = select.options[select.selectedIndex].textContent;
    }
  }

  // handle changes anywhere
  document.addEventListener("change", function (ev) {
    const el = ev.target;
    if (el && el.classList && el.classList.contains("buffer-select")) {
      updateForSelect(el);
    }
  }, true);

  // initialize existing selects
  function initExisting() {
    const selects = document.querySelectorAll(".buffer-select");
    selects.forEach(s => updateForSelect(s));
  }

  // observe future DOM
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const n of m.addedNodes) {
        if (!(n instanceof Element)) continue;

        if (n.classList && n.classList.contains("buffer-select")) {
          updateForSelect(n);
        }

        const nested = n.querySelectorAll?.(".buffer-select");
        nested?.forEach(s => updateForSelect(s));
      }
    }
  });

  // start after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initExisting();
      mo.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    initExisting();
    mo.observe(document.body, { childList: true, subtree: true });
  }

})();
