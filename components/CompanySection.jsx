"use client";

export default function CompanySection({
  formData,
  handleChange
}) {
  return (
    <div className="card">
      <h2>Maklumat Syarikat</h2>

      <div className="grid">

        <div className="form-group">
          <label>
            Nama Syarikat
            <span className="required"> *</span>
          </label>

          <input
            type="text"
            name="namaSyarikat"
            value={formData.namaSyarikat}
            onChange={handleChange}
            placeholder="Masukkan nama syarikat"
            required
          />
        </div>

        <div className="form-group">
          <label>
            No. Pendaftaran SSM
            <span className="required"> *</span>
          </label>

          <input
            type="text"
            name="ssm"
            value={formData.ssm}
            onChange={handleChange}
            placeholder="Contoh: 202401012345"
            required
          />
        </div>

        <div
          className="form-group"
          style={{
            gridColumn: "1 / -1"
          }}
        >
          <label>
            Alamat Premis Perniagaan
            <span className="required"> *</span>
          </label>

          <textarea
            rows={4}
            name="alamatPremis"
            value={formData.alamatPremis}
            onChange={handleChange}
            placeholder="Masukkan alamat premis perniagaan"
            required
          />
        </div>

      </div>

      <div
        className="notice"
        style={{
          marginTop: 25
        }}
      >
        <strong>Maklumat Tetap</strong>

        <div
          style={{
            marginTop: 18
          }}
        >
          <label>
            Jenis / Jumlah Bunga Api Akan Dibeli / Dijual
          </label>

          <textarea
            readOnly
            rows={2}
            value="SEPERTI DI LAMPIRAN A"
          />
        </div>

        <div
          style={{
            marginTop: 18
          }}
        >
          <label>
            Nama dan Alamat Syarikat Pembekal
          </label>

          <textarea
            readOnly
            rows={5}
            value={`GRK PYROTECHNICS SDN BHD
10, JLN PELEPAS 4/7
81550 GELANG PATAH
JOHOR`}
          />
        </div>

      </div>
    </div>
  );
}