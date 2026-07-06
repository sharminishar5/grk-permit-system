"use client";

export default function GenerateButton({
  loading,
  onClick,
  disabled = false
}) {
  return (
    <div className="generate-container">
      <button
        type="button"
        className="generate-btn"
        onClick={onClick}
        disabled={loading || disabled}
      >
        {loading ? (
          <>
            <span
              style={{
                display: "inline-block",
                marginRight: 10
              }}
            >
              ⏳
            </span>
            Generating Permit...
          </>
        ) : (
          <>📄 Generate Permit PDF</>
        )}
      </button>
    </div>
  );
}