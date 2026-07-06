"use client";

import { getIPDByState, stateList } from "../data/malaysiaIPD";

export default function PoliceSection({
  formData,
  setFormData
}) {
  const ipdList = getIPDByState(formData.negeri);

  const handleStateChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      negeri: e.target.value,
      ipd: ""
    }));
  };

  const handleIPDChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      ipd: e.target.value
    }));
  };

  return (
    <div className="card">
      <h2>Maklumat Polis</h2>

      <div className="grid">

        <div className="form-group">
          <label>
            Negeri
            <span className="required"> *</span>
          </label>

          <select
            value={formData.negeri}
            onChange={handleStateChange}
            required
          >
            <option value="">
              -- Pilih Negeri --
            </option>

            {stateList.map((state) => (
              <option
                key={state}
                value={state}
              >
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            IPD
            <span className="required"> *</span>
          </label>

          <select
            value={formData.ipd}
            onChange={handleIPDChange}
            disabled={!formData.negeri}
            required
          >
            <option value="">
              {formData.negeri
                ? "-- Pilih IPD --"
                : "-- Pilih Negeri Dahulu --"}
            </option>

            {ipdList.map((ipd) => (
              <option
                key={ipd}
                value={ipd}
              >
                {ipd}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}