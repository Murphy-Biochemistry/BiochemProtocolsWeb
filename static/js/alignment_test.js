document.getElementById("label-alignment-test")
  ?.addEventListener("click", () => {

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;

    let labels = "";
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 3; c++) {
        labels += `
          <div class="test-label"
               style="left:${c * 70}mm; top:${r * 37}mm;">
            ${c + 1} × ${r + 1}
          </div>`;
      }
    }

    doc.open();
    doc.write(`
<!doctype html>
<html>
<head>
<style>
@page { size: A4; margin: 0; }
body { margin: 0; }

.test-label {
  position: absolute;
  width: 70mm;
  height: 37mm;
  border: 1px dashed black;
  box-sizing: border-box;
  font-size: 10pt;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
</head>
<body>
${labels}
</body>
</html>
    `);
    doc.close();

    setTimeout(() => {
      iframe.contentWindow.print();
      setTimeout(() => iframe.remove(), 1000);
    }, 100);
});
