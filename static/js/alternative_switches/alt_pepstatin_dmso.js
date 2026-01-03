// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with alt_protocols

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("pepstatin_dmso_alternative_switch"); // enter reagent 1

  const dmso = { // enter reagent 1
    m_material:   document.getElementById("alt_pepstatin_m_m_dmso"),
    m_mw:         document.getElementById("alt_pepstatin_m_mw_dmso"),
    m_specs:      document.getElementById("alt_pepstatin_m_specs_dmso"),
    m_location:   document.getElementById("alt_pepstatin_m_l_dmso"),
    r_material: document.getElementById("alt_pepstatin_r_ms_dmso"),
    r_vol:      document.getElementById("alt_pepstatin_r_vm_dmso"),
    r_mol:      document.getElementById("alt_pepstatin_r_mol_dmso"),
  };

  const meoh = { // enter reagent 2
    m_material:   document.getElementById("alt_pepstatin_m_m_meoh"),
    m_mw:         document.getElementById("alt_pepstatin_m_mw_meoh"),
    m_specs:      document.getElementById("alt_pepstatin_m_specs_meoh"),
    m_location:   document.getElementById("alt_pepstatin_m_l_meoh"),
    r_material: document.getElementById("alt_pepstatin_r_ms_meoh"),
    r_vol:      document.getElementById("alt_pepstatin_r_vm_meoh"),
    r_mol:      document.getElementById("alt_pepstatin_r_mol_meoh"),
  };

  let usingmeoh = false; // enter reagent 2

  function toggle() {
    for (const key in dmso) { // enter reagent 1
      if (!dmso[key] || !meoh[key]) continue; // enter reagent 1
        dmso[key].style.display = usingmeoh ? "none" : "";  // enter reagent 1
        meoh[key].style.display = usingmeoh ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingmeoh = !usingmeoh;  // enter reagent 2
      toggle();

      btn.innerHTML = usingmeoh  // enter reagent 2
        ? "Use DMSO" // enter reagent 1 display 
        : "Use MeOH";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});