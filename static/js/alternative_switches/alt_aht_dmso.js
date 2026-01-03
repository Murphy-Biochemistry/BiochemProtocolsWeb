// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_protocols

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("aht_dmso_alternative_switch");

  const dmso = {
    m_material:   document.getElementById("alt_aht_m_m_dmso"),
    m_mw:         document.getElementById("alt_aht_m_mw_dmso"),
    m_specs:      document.getElementById("alt_aht_m_specs_dmso"),
    m_location:   document.getElementById("alt_aht_m_l_dmso"),
    r_material: document.getElementById("alt_aht_r_ms_dmso"),
    r_vol:      document.getElementById("alt_aht_r_vm_dmso"),
    r_mol:      document.getElementById("alt_aht_r_mol_dmso"),
  };

  const etoh = {
    m_material:   document.getElementById("alt_aht_m_m_etoh"),
    m_mw:         document.getElementById("alt_aht_m_mw_etoh"),
    m_specs:      document.getElementById("alt_aht_m_specs_etoh"),
    m_location:   document.getElementById("alt_aht_m_l_etoh"),
    r_material: document.getElementById("alt_aht_r_ms_etoh"),
    r_vol:      document.getElementById("alt_aht_r_vm_etoh"),
    r_mol:      document.getElementById("alt_aht_r_mol_etoh"),
  };

  let usingetoh = false;

  function toggle() {
    for (const key in dmso) {
      if (!dmso[key] || !etoh[key]) continue;
        dmso[key].style.display = usingetoh ? "none" : "";
        etoh[key].style.display = usingetoh ? "" : "none";
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingetoh = !usingetoh;
      toggle();

      btn.innerHTML = usingetoh
        ? "Use DMSO"
        : "Use EtOH";
    });
  }
});