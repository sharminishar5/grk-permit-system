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

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const black = rgb(0, 0, 0);

  // PDF size
  const { width, height } = page.getSize();

  
  // =============================
  // ALAMAT RUMAH
  // =============================

  const addressLines = (data.alamatRumah || "").split(",");

  addressLines.forEach((line, index) => {
    page.drawText(line.trim(), {
      x: 75,
      y: 655 - (index * 15),
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

  // =============================
  // NAMA
  // =============================

  page.drawText(data.namaPemohon || "", {
    x: 140,
    y: 460,
    size: 11,
    font,
    color: black,
  });

  // =============================
  // IC NUMBER
  // =============================

  page.drawText(data.ic || "", {
    x: 175,
    y: 445,
    size: 11,
    font,
    color: black
  });

  // =============================
  // ALAMAT PERNIAGAAN
  // =============================

  page.drawText(data.alamatPremis || "", {
    x: 185,
    y: 370,
    size: 11,
    font,
    color: black,
    maxWidth: 470,
    lineHeight: 14
  });

  return await pdfDoc.save();
}