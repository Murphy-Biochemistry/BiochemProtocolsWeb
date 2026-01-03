// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_protocols

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("lb_lb_alternative_switch"); // enter reagent 1

  const lb = { // enter reagent 1
    m_material:   document.getElementById("alt_lb_m_m_lb"),
    m_mw:         document.getElementById("alt_lb_m_mw_lb"),
    m_specs:      document.getElementById("alt_lb_m_specs_lb"),
    m_location:   document.getElementById("alt_lb_m_l_lb"),
    r_material: document.getElementById("alt_lb_r_ms_lb"),
    r_vol:      document.getElementById("alt_lb_r_vm_lb"),
    r_mol:      document.getElementById("alt_lb_r_mol_lb"),
  };

  const individual = { // enter reagent 2
    m_material:   document.getElementById("alt_lb_m_m_individual"),
    m_mw:         document.getElementById("alt_lb_m_mw_individual"),
    m_specs:      document.getElementById("alt_lb_m_specs_individual"),
    m_location:   document.getElementById("alt_lb_m_l_individual"),
    r_material: document.getElementById("alt_lb_r_ms_individual"),
    r_vol:      document.getElementById("alt_lb_r_vm_individual"),
    r_mol:      document.getElementById("alt_lb_r_mol_individual"),
  };

  let usingindividual = false; // enter reagent 2

  function toggle() {
    for (const key in lb) { // enter reagent 1
      if (!lb[key] || !individual[key]) continue; // enter reagent 1
        lb[key].style.display = usingindividual ? "none" : "";  // enter reagent 1
        individual[key].style.display = usingindividual ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingindividual = !usingindividual;  // enter reagent 2
      toggle();

      btn.innerHTML = usingindividual  // enter reagent 2
        ? "Use LB Medium" // enter reagent 1 display 
        : "Use individual components";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});