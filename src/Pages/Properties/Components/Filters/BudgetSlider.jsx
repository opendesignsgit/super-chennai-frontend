import React from "react";
import { Range, getTrackBackground } from "react-range";
import "../../Styles/BudgetSlider.css";

const BudgetSlider = ({ min, max, values, onChange }) => {
  const STEP = 100000;
  const MIN = min;
  const MAX = max;

  return (
    <div className="budget-slider">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="budget-slider-track"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#e0e0e0", "#a44294", "#e0e0e0"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index, value }) => (
          <div
            {...props}
            className="budget-slider-thumb"
            data-value={`₹${value.toLocaleString()}`}
          />
        )}
      />

      {/* <p className="budget-slider-values">
        <span>₹{values[0].toLocaleString()}</span> –{" "}
        <span>₹{values[1].toLocaleString()}</span>
      </p> */}
    </div>
  );
};

export default BudgetSlider;
