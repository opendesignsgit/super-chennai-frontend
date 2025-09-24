import React from "react";
import { Range, getTrackBackground } from "react-range";

const BudgetSlider = ({ min, max, values, onChange }) => {
  const STEP = 100000;
  const MIN = min;
  const MAX = max;

  return (
    <div style={{ margin: "16px 0" }}>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#0d6efd", "#ccc"],
                min: MIN,
                max: MAX,
              }),
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#0d6efd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        )}
      />
      <p>
        ₹{values[0].toLocaleString()} – ₹{values[1].toLocaleString()}
      </p>
    </div>
  );
};

export default BudgetSlider;
