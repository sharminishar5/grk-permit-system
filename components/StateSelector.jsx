"use client";

import { stateList } from "../data/malaysiaIPD";

export default function StateSelector({
  value,
  onChange,
  error
}) {
  return (
    <div className="form-group">
      <label htmlFor="state" className="form-label">
        Negeri <span className="required">*</span>
      </label>

      <select
        id="state"
        className={`form-select ${error ? "input-error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

      {error && (
        <p className="error-text">
          {error}
        </p>
      )}
    </div>
  );
}