// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_methods

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("inouetransformationbufferstock10x_pipes_alternative_switch"); // enter reagent 1

  const pipes = { // enter reagent 1
    m_material:   document.getElementById("alt_inouetransformationbufferstock10x_m_m_pipes"),
    m_mw:         document.getElementById("alt_inouetransformationbufferstock10x_m_mw_pipes"),
    m_specs:      document.getElementById("alt_inouetransformationbufferstock10x_m_specs_pipes"),
    m_location:   document.getElementById("alt_inouetransformationbufferstock10x_m_l_pipes"),
    r_material: document.getElementById("alt_inouetransformationbufferstock10x_r_ms_pipes"),
    r_vol:      document.getElementById("alt_inouetransformationbufferstock10x_r_vm_pipes"),
    r_mol:      document.getElementById("alt_inouetransformationbufferstock10x_r_mol_pipes"),
  };

  const mopes = { // enter reagent 2
    m_material:   document.getElementById("alt_inouetransformationbufferstock10x_m_m_mopes"),
    m_mw:         document.getElementById("alt_inouetransformationbufferstock10x_m_mw_mopes"),
    m_specs:      document.getElementById("alt_inouetransformationbufferstock10x_m_specs_mopes"),
    m_location:   document.getElementById("alt_inouetransformationbufferstock10x_m_l_mopes"),
    r_material: document.getElementById("alt_inouetransformationbufferstock10x_r_ms_mopes"),
    r_vol:      document.getElementById("alt_inouetransformationbufferstock10x_r_vm_mopes"),
    r_mol:      document.getElementById("alt_inouetransformationbufferstock10x_r_mol_mopes"),
  };

  let usingmopes = false; // enter reagent 2

  function toggle() {
    for (const key in pipes) { // enter reagent 1
      if (!pipes[key] || !mopes[key]) continue; // enter reagent 1
        pipes[key].style.display = usingmopes ? "none" : "";  // enter reagent 1
        mopes[key].style.display = usingmopes ? "" : "none";  // enter reagent 2
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingmopes = !usingmopes;  // enter reagent 2
      toggle();

      btn.innerHTML = usingmopes  // enter reagent 2
        ? "Use PIPES" // enter reagent 1 display 
        : "Use MOPES";  // enter reagent 2 display (same as in button html shortcode)
    });
  }
});