// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("gelTable");
  if (!table) return; // shortcode not on this page

  // ladder highlighting
  const updateLadder = (input) => {
    input.classList.toggle(
      "ladder",
      input.value.trim().toLowerCase() === "ladder"
    );
  };

  // initial check (VERY IMPORTANT)
  table.querySelectorAll(".gel-input").forEach(updateLadder);

  // live updates
  table.addEventListener("input", e => {
    if (!e.target.classList.contains("gel-input")) return;
    updateLadder(e.target);
  });


  // Excel
  document.getElementById("excelBtn").addEventListener("click", () => {
    const wb = XLSX.utils.book_new();
    const wsData = [];

    table.querySelectorAll("tbody tr").forEach(row => {
      const rowData = [];
      row.querySelectorAll("input").forEach(input => {
        rowData.push(input.value);
      });
      wsData.push(rowData);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Gel Table");
    XLSX.writeFile(wb, "gel-table.xlsx");
  });

  // PDF
  document.getElementById("pdfBtn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 10;
    doc.text("Gel Table", 10, y);
    y += 10;

    table.querySelectorAll("tbody tr").forEach(row => {
      let line = "";
      row.querySelectorAll("input").forEach(input => {
        line += (input.value || "-") + "   ";
      });
      doc.text(line, 10, y);
      y += 7;
    });

    doc.save("SDS-PAGE_Gels.pdf");
  });
});
