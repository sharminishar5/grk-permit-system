import {
  PDFDocument,
  StandardFonts,
  rgb,
  degrees
} from "pdf-lib";

export default async function fillPermit2(data) {
  // Load template
  const existingPdfBytes = await fetch("/permit2.pdf").then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const page = pdfDoc.getPages()[0];

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const black = rgb(0, 0, 0);

  const { height } = page.getSize();

  // =============================
  // ALAMAT RUMAH
  // =============================

  const addressLines = (data.alamatRumah || "").split(",");

  addressLines.forEach((line, index) => {
    page.drawText(line.trim(), {
      x: 75,
      y: 655 - (index * 22),
      size: 11,
      font,
      color: black,
    });
  });

  // =============================
  // TARIKH
  // =============================

  page.drawText(data.tarikh || "", {
    x: 475,
    y: 595,
    size: 11,
    font,
    color: black
  });

  return await pdfDoc.save();
}