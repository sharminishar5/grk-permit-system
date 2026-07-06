"use client";

import { useState } from "react";

import PersonalSection from "./PersonalSection";
import CompanySection from "./CompanySection";
import PoliceSection from "./PoliceSection";
import SignaturePad from "./SignaturePad";
import GenerateButton from "./GenerateButton";

import createApplicationPdf from "../lib/createApplicationPdf";
import fillPermit1 from "../lib/fillPermit1";
import fillPermit2 from "../lib/fillPermit2";
import mergePdf from "../lib/mergePdf";

export default function ApplicantForm() {
  const [loading, setLoading] = useState(false);

  const [signature, setSignature] = useState(null);

  const [formData, setFormData] = useState({
    namaPemohon: "",
    ic: "",
    pekerjaan: "",
    telefon: "",

    alamatRumah: "",

    namaSyarikat: "",
    ssm: "",
    alamatPremis: "",

    negeri: "",
    ipd: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function validateForm() {
    const requiredFields = [
      "namaPemohon",
      "ic",
      "pekerjaan",
      "telefon",
      "alamatRumah",
      "namaSyarikat",
      "ssm",
      "alamatPremis",
      "negeri",
      "ipd"
    ];

    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        alert("Please complete all required fields.");
        return false;
      }
    }

    if (!signature) {
      alert("Please provide your signature.");
      return false;
    }

    return true;
  }

  async function handleGenerate() {
    if (loading) return;

    if (!validateForm()) return;

    setLoading(true);

    try {
      const today = new Date();

      const tarikh =
        today.getDate().toString().padStart(2, "0") +
        "/" +
        (today.getMonth() + 1)
          .toString()
          .padStart(2, "0") +
        "/" +
        today.getFullYear();

      const pdfData = {
        ...formData,
        tarikh,
        signature
      };

      // Step 1
      const applicationPdf = await createApplicationPdf(pdfData);

      // Step 2
      const permit1 = await fillPermit1(pdfData);

      // Step 3
      const permit2 = await fillPermit2(pdfData);

      // Step 4
      await mergePdf([
        applicationPdf,
        permit1,
        permit2,
        "/surat1.pdf",
        "/surat2.pdf"
      ]);

    } catch (error) {

      console.error(error);

      alert(
        "An error occurred while generating the permit."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <>
      <PersonalSection
        formData={formData}
        handleChange={handleChange}
      />

      <CompanySection
        formData={formData}
        handleChange={handleChange}
      />

      <PoliceSection
        formData={formData}
        setFormData={setFormData}
      />

      <SignaturePad
        onSignatureChange={setSignature}
      />

      <GenerateButton
        loading={loading}
        onClick={handleGenerate}
      />
    </>
  );
}