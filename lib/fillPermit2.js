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

  console.log("Rotation:", page.getRotation().angle);
  console.log("Size:", page.getSize());

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const black = rgb(0, 0, 0);

  const { height } = page.getSize();

  // =============================
  // ALAMAT RUMAH
  // =============================

  page.drawText(data.alamatRumah || "", {
    x: 72,
    y: height - 145,
    size: 11,
    font,
    color: black,
    maxWidth: 150,
    lineHeight: 14
  });

  // =============================
  // TARIKH
  // =============================

  page.drawText(data.tarikh || "", {
    x: 430,
    y: height - 145,
    size: 11,
    font,
    color: black
  });

  return await pdfDoc.save();
}