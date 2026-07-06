import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default async function createApplicationPdf(data) {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([595.28, 841.89]); // A4

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const black = rgb(0, 0, 0);

  const left = 45;
  let y = 800;

  // ======================================================
  // TITLE
  // ======================================================

  page.drawText(
    "PERMOHONAN MEMBELI / MENJUAL BUNGA API",
    {
      x: 95,
      y,
      size: 15,
      font: bold,
      color: black
    }
  );

  y -= 40;

  // ======================================================
  // APPLICANT
  // ======================================================

  page.drawText("1. Nama Pemohon", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.namaPemohon, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("2. No. Kad Pengenalan", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.ic, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("3. Pekerjaan / Jawatan", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.pekerjaan, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("4. No Telefon", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.telefon, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  // ======================================================
  // HOME ADDRESS
  // ======================================================

  page.drawText("5. Alamat Rumah", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  y -= 20;

  page.drawText(data.alamatRumah, {
    x: left + 20,
    y,
    size: 11,
    maxWidth: 500,
    lineHeight: 16,
    font
  });

  y -= 60;

  // ======================================================
  // COMPANY
  // ======================================================

  page.drawText("6. Nama Syarikat", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.namaSyarikat, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("7. No. SSM", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.ssm, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("8. Alamat Premis Perniagaan", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  y -= 20;

  page.drawText(data.alamatPremis, {
    x: left + 20,
    y,
    size: 11,
    maxWidth: 500,
    lineHeight: 16,
    font
  });

  y -= 70;

  // ======================================================
  // FIXED INFORMATION
  // ======================================================

  page.drawText(
    "9. Jenis / Jumlah Bunga Api Akan Dibeli / Dijual",
    {
      x: left,
      y,
      size: 11,
      font: bold
    }
  );

  y -= 20;

  page.drawText(
    "SEPERTI DI LAMPIRAN A",
    {
      x: left + 20,
      y,
      size: 11,
      font
    }
  );

  y -= 40;

  page.drawText(
    "10. Nama Dan Alamat Syarikat Pembekal",
    {
      x: left,
      y,
      size: 11,
      font: bold
    }
  );

  y -= 20;

  page.drawText(
`GRK PYROTECHNICS SDN BHD
10, JLN PELEPAS 4/7
81550 GELANG PATAH
JOHOR`,
    {
      x: left + 20,
      y,
      size: 11,
      lineHeight: 16,
      font
    }
  );

  y -= 90;

  // ======================================================
  // POLICE
  // ======================================================

  page.drawText("11. Negeri", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.negeri, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 30;

  page.drawText("12. IPD", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.ipd, {
    x: 210,
    y,
    size: 11,
    font
  });

  y -= 40;

  page.drawText("Tarikh:", {
    x: left,
    y,
    size: 11,
    font: bold
  });

  page.drawText(data.tarikh, {
    x: 90,
    y,
    size: 11,
    font
  });

  // ======================================================
  // SIGNATURE
  // ======================================================

  if (data.signature) {
    const png = await pdfDoc.embedPng(data.signature);

    page.drawImage(png, {
      x: 370,
      y: 40,
      width: 130,
      height: 55
    });

    page.drawText(
      "(Tandatangan Pemohon)",
      {
        x: 350,
        y: 25,
        size: 10,
        font
      }
    );
  }

  return await pdfDoc.save();
}