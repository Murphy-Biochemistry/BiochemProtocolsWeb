document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".calc-recipe-mol-controls").forEach(container => {

    const molaritySelect = container.querySelector(".calc-molarity");
    const volumeSelect = container.querySelector(".calc-volume");

    if (!molaritySelect || !volumeSelect) return;

    function recalc() {
      const molarity = parseFloat(molaritySelect.value);
      const volumeFactor = parseFloat(volumeSelect.value);

      document.querySelectorAll(".calc_recipe_mol").forEach(el => {

        // Skip hidden elements (important for tabs + alternatives)
        if (el.offsetParent === null) return;

        /* ---------- MASS (input: g) ---------- */
        if (el.dataset.defaultMass) {
          const base = parseFloat(el.dataset.defaultMass);
          const value = base * molarity * volumeFactor;
          el.textContent = formatMass(value);
        }

        /* ---------- MOLARITY (input: mM) ---------- */
        if (el.dataset.defaultMol) {
          const base = parseFloat(el.dataset.defaultMol);
          const value = base * molarity;
          el.textContent = formatMolarity(value);
        }

        /* ---------- VOLUME (input: mL) ---------- */
        if (el.dataset.defaultVol) {
          const base = parseFloat(el.dataset.defaultVol);
          const value = base * volumeFactor;
          el.textContent = formatVolume(value);
        }

      });
    }

    molaritySelect.addEventListener("change", recalc);
    volumeSelect.addEventListener("change", recalc);

    recalc();
  });

});

/* ========================================================= */
/* =================== FORMAT HELPERS ====================== */
/* ========================================================= */

function formatNumber(v, decimals = 2) {
  const molarity = 10 ** decimals;
  const r = Math.round((v + Number.EPSILON) * molarity) / molarity;
  return r.toString(); // keine trailing zeros
}

/* ---------- MASS (g → mg → µg) ---------- */
function formatMass(g) {
  if (g >= 1) {
    return `${formatNumber(g, 3)} g`;
  }
  if (g >= 0.001) {
    return `${formatNumber(g * 1000, 3)} mg`;
  }
  return `${formatNumber(g * 1e6, 2)} µg`;
}

/* ---------- MOLARITY (mM → M → µM) ---------- */
function formatMolarity(mM) {
  if (mM >= 1000) {
    return `${formatNumber(mM / 1000, 2)} M`;
  }
  if (mM >= 1) {
    return `${formatNumber(mM, 1)} mM`;
  }
  return `${formatNumber(mM * 1000, 1)} µM`;
}

/* ---------- VOLUME (mL → L → µL) ---------- */
function formatVolume_mol(mL) {
  if (mL >= 1000) {
    return `${formatNumber(mL / 1000, 3)} L`;
  }
  if (mL >= 1) {
    return `${formatNumber(mL, 3)} mL`;
  }
  return `${formatNumber(mL * 1000, 0)} µL`;
}
