// JS_STREAMLINE // JS_TODO: converge all alt buttons into one as with ald_methods

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("primer_alternative_switch");

  const te = {
    material:   document.getElementById("primer_te-material"),
    mw:         document.getElementById("primer_te-mw"),
    specs:      document.getElementById("primer_te-specs"),
    location:   document.getElementById("primer_te-location"),
    r_material: document.getElementById("primer_te-r-material"),
    r_vol:      document.getElementById("primer_te-r-vol"),
    r_mol:      document.getElementById("primer_te-r-mol"),
    r_material2: document.getElementById("primer_te-r-material2"),
    r_vol2:      document.getElementById("primer_te-r-vol2"),
    r_mol2:      document.getElementById("primer_te-r-mol2"),
  };

  const h2o = {
    material:   document.getElementById("primer_h2o-material"),
    mw:         document.getElementById("primer_h2o-mw"),
    specs:      document.getElementById("primer_h2o-specs"),
    location:   document.getElementById("primer_h2o-location"),
    r_material: document.getElementById("primer_h2o-r-material"),
    r_vol:      document.getElementById("primer_h2o-r-vol"),
    r_mol:      document.getElementById("primer_h2o-r-mol"),
    r_material2: document.getElementById("primer_h2o-r-material2"),
    r_vol2:      document.getElementById("primer_h2o-r-vol2"),
    r_mol2:      document.getElementById("primer_h2o-r-mol2"),
  };

  let usingh2o = false;

  function toggle() {
    for (const key in te) {
        if (te[key]) {
        te[key].style.display = usingh2o ? "none" : "";
        }
        if (h2o[key]) {
        h2o[key].style.display = usingh2o ? "" : "none";
        }
    }
    }

  if (btn) {
    btn.addEventListener("click", () => {
      usingh2o = !usingh2o;
      toggle();

      btn.innerHTML = usingh2o
        ? "Use TE buffer"
        : "Use dsH<sub>2</sub>O";
    });
  }
});