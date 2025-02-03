document.getElementById("download-pdf").addEventListener("click", () => {
  const element = document.querySelector(".container"); // Selecciona el CV

  const opt = {
    margin: 10,
    filename: "Luis_Morandi_CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { format: "a3", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  html2pdf().from(element).set(opt).save();
});
