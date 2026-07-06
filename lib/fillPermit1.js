import {
  PDFDocument,
  StandardFonts,
  rgb,
  degrees
} from "pdf-lib";

export default async function fillPermit1(data) {
  // Load template
  const existingPdfBytes = await fetch("/permit1.pdf").then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const page = pdfDoc.getPages()[0];

  console.log("Rotation:", page.getRotation().angle);
  console.log("Size:", page.getSize());

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const black = rgb(0, 0, 0);

  // PDF size
  const { width, height } = page.getSize();

  console.log("Permit1 Size:", width, height);

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

  // =============================
  // NAMA
  // =============================

  page.drawText(data.namaPemohon || "", {
    x: 118,
    y: height - 315,
    size: 11,
    font,
    color: black,
    maxWidth: 280
  });

  // =============================
  // IC NUMBER
  // =============================

  page.drawText(data.ic || "", {
    x: 175,
    y: height - 340,
    size: 11,
    font,
    color: black
  });

  // =============================
  // ALAMAT PERNIAGAAN
  // =============================

  page.drawText(data.alamatPremis || "", {
    x: 165,
    y: height - 430,
    size: 11,
    font,
    color: black,
    maxWidth: 420,
    lineHeight: 14
  });

  return await pdfDoc.save();
}