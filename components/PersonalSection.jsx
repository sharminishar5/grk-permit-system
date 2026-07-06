"use client";

export default function PersonalSection({
  formData,
  handleChange
}) {
  return (
    <div className="card">
      <h2>Maklumat Pemohon</h2>

      <div className="grid">

        <div className="form-group">
          <label>
            Nama Pemohon
            <span className="required"> *</span>
          </label>

          <input
            type="text"
            name="namaPemohon"
            value={formData.namaPemohon}
            onChange={handleChange}
            placeholder="Masukkan nama penuh"
            required
          />
        </div>

        <div className="form-group">
          <label>
            No. Kad Pengenalan
            <span className="required"> *</span>
          </label>

          <input
            type="text"
            name="ic"
            value={formData.ic}
            onChange={handleChange}
            placeholder="Contoh: 900101-01-1234"
            maxLength={14}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Pekerjaan / Jawatan
            <span className="required"> *</span>
          </label>

          <input
            type="text"
            name="pekerjaan"
            value={formData.pekerjaan}
            onChange={handleChange}
            placeholder="Contoh: Pengurus"
            required
          />
        </div>

        <div className="form-group">
          <label>
            No. Telefon
            <span className="required"> *</span>
          </label>

          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="012-3456789"
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
            Alamat Rumah
            <span className="required"> *</span>
          </label>

          <textarea
            rows={4}
            name="alamatRumah"
            value={formData.alamatRumah}
            onChange={handleChange}
            placeholder="Masukkan alamat rumah penuh"
            required
          />
        </div>

      </div>
    </div>
  );
}