// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_protocols

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("leupeptin_h2o_alternative_switch"); // enter reagent 1

  const h2o = { // enter reagent 1
    m_material:   document.getElementById("alt_leupeptin_m_m_h2o"),
    m_mw:         document.getElementById("alt_leupeptin_m_mw_h2o"),
    m_specs:      document.getElementById("alt_leupeptin_m_specs_h2o"),
    m_location:   document.getElementById("alt_leupeptin_m_l_h2o"),
    r_material: document.getElementById("alt_leupeptin_r_ms_h2o"),
    r_vol:      document.getElementById("alt_leupeptin_r_vm_h2o"),
    r_mol:      document.getElementById("alt_leupeptin_r_mol_h2o"),
  };

  const etoh = { // enter reagent 2
    m_material:   document.getElementById("alt_leupeptin_m_m_etoh"),
    m_mw:         document.getElementById("alt_leupeptin_m_mw_etoh"),
    m_specs:      document.getElementById("alt_leupeptin_m_specs_etoh"),
    m_location:   document.getElementById("alt_leupeptin_m_l_etoh"),
    r_material: document.getElementById("alt_leupeptin_r_ms_etoh"),
    r_vol:      document.getElementById("alt_leupeptin_r_vm_etoh"),
    r_mol:      document.getElementById("alt_leupeptin_r_mol_etoh"),
  };

  let usingetoh = false; // enter reagent 2

  function toggle() {
    for (const key in h2o) { // enter reagent 1
      if (!h2o[key] || !etoh[key]) continue; // enter reagent 1
        h2o[key].style.display = usingetoh ? "none" : "";  // enter reagent 1
        etoh[key].style.display = usingetoh ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingetoh = !usingetoh;  // enter reagent 2
      toggle();

      btn.innerHTML = usingetoh  // enter reagent 2
        ? "Use h2o" // enter reagent 1 display
        : "Use dsH<sub>2</sub>O";  // enter reagent 2 display
    });
  }
});