"use client";

import { malaysiaIPD } from "../data/malaysiaIPD";

export default function IPDSelector({
  selectedState,
  value,
  onChange,
  error
}) {
  const ipdList = selectedState
    ? malaysiaIPD[selectedState] || []
    : [];

  return (
    <div className="form-group">
      <label htmlFor="ipd" className="form-label">
        IPD <span className="required">*</span>
      </label>

      <select
        id="ipd"
        className={`form-select ${error ? "input-error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">
          {selectedState
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

      {error && (
        <p className="error-text">
          {error}
        </p>
      )}

      {!selectedState && (
        <small
          style={{
            color: "#6b7280",
            display: "block",
            marginTop: 6
          }}
        >
          Sila pilih negeri terlebih dahulu.
        </small>
      )}
    </div>
  );
}