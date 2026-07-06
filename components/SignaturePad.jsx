"use client";

import { useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignaturePad({
  onSignatureChange
}) {
  const signatureRef = useRef(null);

  useEffect(() => {
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  function resizeCanvas() {
    const canvas = signatureRef.current?.getCanvas();

    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    const parentWidth =
      canvas.parentElement.offsetWidth;

    canvas.width = parentWidth * ratio;
    canvas.height = 220 * ratio;

    canvas.getContext("2d").scale(ratio, ratio);

    signatureRef.current.clear();
  }

  function saveSignature() {
    if (!signatureRef.current) return;

    if (signatureRef.current.isEmpty()) {
      onSignatureChange(null);
      return;
    }

    const image = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    onSignatureChange(image);
  }

  function clearSignature() {
    signatureRef.current.clear();
    onSignatureChange(null);
  }

  return (
    <div className="card">
      <h2>Tandatangan Pemohon</h2>

      <p
        style={{
          marginTop: 0,
          color: "#6b7280"
        }}
      >
        Sila tandatangani menggunakan
        jari (telefon) atau tetikus
        (komputer).
      </p>

      <div className="signature-wrapper">
        <SignatureCanvas
          ref={signatureRef}
          penColor="black"
          onEnd={saveSignature}
          canvasProps={{
            style: {
              width: "100%",
              height: "220px"
            }
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 15
        }}
      >
        <button
          type="button"
          onClick={clearSignature}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Clear Signature
        </button>
      </div>
    </div>
  );
}