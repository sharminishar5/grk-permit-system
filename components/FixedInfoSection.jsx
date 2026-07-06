"use client";

export default function FixedInfoSection() {
  return (
    <div className="card">
      <h2>Maklumat Tetap</h2>

      <div className="grid">
        {/* Jenis / Jumlah */}
        <div
          className="form-group"
          style={{
            gridColumn: "1 / -1"
          }}
        >
          <label>Jenis / Jumlah Bunga Api Akan Dibeli / Dijual</label>

          <textarea
            readOnly
            rows={2}
            value="SEPERTI DI LAMPIRAN A"
            style={{
              background: "#f5f5f5",
              color: "#111827",
              fontWeight: "600",
              resize: "none",
              cursor: "not-allowed"
            }}
          />
        </div>

        {/* Supplier */}
        <div
          className="form-group"
          style={{
            gridColumn: "1 / -1"
          }}
        >
          <label>Nama dan Alamat Syarikat Pembekal</label>

          <textarea
            readOnly
            rows={5}
            value={`GRK PYROTECHNICS SDN BHD
10, JLN PELEPAS 4/7,
81550 GELANG PATAH,
JOHOR`}
            style={{
              background: "#f5f5f5",
              color: "#111827",
              fontWeight: "600",
              resize: "none",
              cursor: "not-allowed"
            }}
          />
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
            background: "#ecfeff",
            border: "1px solid #99f6e4",
            borderRadius: "8px",
            padding: "12px",
            color: "#115e59"
          }}
        >
          <strong>Notice</strong>

          <p
            style={{
              marginTop: "8px",
              marginBottom: 0
            }}
          >
            Maklumat di atas telah ditetapkan oleh GRK Pyrotechnics
            Sdn. Bhd. dan tidak boleh diubah oleh pemohon.
          </p>
        </div>
      </div>
    </div>
  );
}