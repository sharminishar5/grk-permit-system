"use client";

import ApplicantForm from "../components/ApplicantForm";

export default function HomePage() {
  return (
    <main className="page-container">

      <div className="header-card">

        {/* Replace with your logo later */}
        {/* <img src="/logo.png" alt="GRK Logo" className="logo" /> */}

        <h1>
          GRK Pyrotechnics
        </h1>

        <p>
          PERMOHONAN UNTUK MEMBELI / MENYIMPAN / MENJUAL
        </p>

      </div>

      <ApplicantForm />

    </main>
  );
}