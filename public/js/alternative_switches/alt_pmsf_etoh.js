// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_protocols

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("pmsf_etoh_alternative_switch"); // enter reagent 1

  const etoh = { // enter reagent 1
    m_material:   document.getElementById("alt_pmsf_m_m_etoh"),
    m_mw:         document.getElementById("alt_pmsf_m_mw_etoh"),
    m_specs:      document.getElementById("alt_pmsf_m_specs_etoh"),
    m_location:   document.getElementById("alt_pmsf_m_l_etoh"),
    r_material: document.getElementById("alt_pmsf_r_ms_etoh"),
    r_vol:      document.getElementById("alt_pmsf_r_vm_etoh"),
    r_mol:      document.getElementById("alt_pmsf_r_mol_etoh"),
  };

  const meoh = { // enter reagent 2
    m_material:   document.getElementById("alt_pmsf_m_m_meoh"),
    m_mw:         document.getElementById("alt_pmsf_m_mw_meoh"),
    m_specs:      document.getElementById("alt_pmsf_m_specs_meoh"),
    m_location:   document.getElementById("alt_pmsf_m_l_meoh"),
    r_material: document.getElementById("alt_pmsf_r_ms_meoh"),
    r_vol:      document.getElementById("alt_pmsf_r_vm_meoh"),
    r_mol:      document.getElementById("alt_pmsf_r_mol_meoh"),
  };

  let usingmeoh = false; // enter reagent 2

  function toggle() {
    for (const key in etoh) { // enter reagent 1
      if (!etoh[key] || !meoh[key]) continue; // enter reagent 1
        etoh[key].style.display = usingmeoh ? "none" : "";  // enter reagent 1
        meoh[key].style.display = usingmeoh ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingmeoh = !usingmeoh;  // enter reagent 2
      toggle();

      btn.innerHTML = usingmeoh  // enter reagent 2
        ? "Use EtOH" // enter reagent 1 display 
        : "Use MeOH";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});