import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function createPdf() {
  return await PDFDocument.create();
}

export async function loadPdf(bytes) {
  return await PDFDocument.load(bytes);
}

export async function embedHelvetica(pdfDoc) {
  return await pdfDoc.embedFont(StandardFonts.Helvetica);
}

export async function embedHelveticaBold(pdfDoc) {
  return await pdfDoc.embedFont(StandardFonts.HelveticaBold);
}

export function black() {
  return rgb(0, 0, 0);
}

export function darkBlue() {
  return rgb(0.05, 0.18, 0.45);
}

export function grey() {
  return rgb(0.35, 0.35, 0.35);
}

export async function downloadPdf(pdfDoc, fileName = "GRK-Permit.pdf") {
  const bytes = await pdfDoc.save();

  const blob = new Blob([bytes], {
    type: "application/pdf"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}