import { PDFDocument } from "pdf-lib";

async function loadPdf(source) {
  if (source instanceof Uint8Array || source instanceof ArrayBuffer) {
    return await PDFDocument.load(source);
  }

  if (typeof source === "string") {
    const bytes = await fetch(source).then((res) => res.arrayBuffer());
    return await PDFDocument.load(bytes);
  }

  throw new Error("Unsupported PDF source");
}

export default async function mergePdf(pdfList) {
  const mergedPdf = await PDFDocument.create();

  for (const pdf of pdfList) {
    const pdfDoc = await loadPdf(pdf);

    const copiedPages = await mergedPdf.copyPages(
      pdfDoc,
      pdfDoc.getPageIndices()
    );

    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  const mergedBytes = await mergedPdf.save();

  const blob = new Blob([mergedBytes], {
    type: "application/pdf",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "GRK-Permit.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}