// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_methods

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("westernblottransferbuffer_dsh2omeoh_alternative_switch"); // enter reagent 1

  const dsh2omeoh = { // enter reagent 1
    m_material:   document.getElementById("alt_westernblottransferbuffer_m_m_dsh2omeoh"),
    m_mw:         document.getElementById("alt_westernblottransferbuffer_m_mw_dsh2omeoh"),
    m_specs:      document.getElementById("alt_westernblottransferbuffer_m_specs_dsh2omeoh"),
    m_location:   document.getElementById("alt_westernblottransferbuffer_m_l_dsh2omeoh"),
    r_material: document.getElementById("alt_westernblottransferbuffer_r_ms_dsh2omeoh"),
    r_vol:      document.getElementById("alt_westernblottransferbuffer_r_vm_dsh2omeoh"),
    r_mol:      document.getElementById("alt_westernblottransferbuffer_r_mol_dsh2omeoh"),
  };

  const dsh2o = { // enter reagent 2
    m_material:   document.getElementById("alt_westernblottransferbuffer_m_m_dsh2o"),
    m_mw:         document.getElementById("alt_westernblottransferbuffer_m_mw_dsh2o"),
    m_specs:      document.getElementById("alt_westernblottransferbuffer_m_specs_dsh2o"),
    m_location:   document.getElementById("alt_westernblottransferbuffer_m_l_dsh2o"),
    r_material: document.getElementById("alt_westernblottransferbuffer_r_ms_dsh2o"),
    r_vol:      document.getElementById("alt_westernblottransferbuffer_r_vm_dsh2o"),
    r_mol:      document.getElementById("alt_westernblottransferbuffer_r_mol_dsh2o"),
  };

  let usingdsh2o = false; // enter reagent 2

  function toggle() {
    for (const key in dsh2omeoh) { // enter reagent 1
      if (!dsh2omeoh[key] || !dsh2o[key]) continue; // enter reagent 1
        dsh2omeoh[key].style.display = usingdsh2o ? "none" : "";  // enter reagent 1
        dsh2o[key].style.display = usingdsh2o ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingdsh2o = !usingdsh2o;  // enter reagent 2
      toggle();

      btn.innerHTML = usingdsh2o  // enter reagent 2
        ? "Use dsH<sub>2</sub>O and MeOH for 1x buffer" // enter reagent 1 display 
        : "Use dsH<sub>2</sub>O for 10x buffer";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});