"use client";

import React, { useState } from 'react';
import Slider from 'react-slider';

const BudgetRange: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<[number, number]>([0, 1500]);

  const handleChange = (newValue: number | number[]): void => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setValue([newValue[0], newValue[1]]);
    }
  };

  return (
    <div className="form-group col-lg-12">
      <label>Budget Range</label>
      <div className="range-slider-one">
        <input
          type="text"
          className="range-amount"
          value={`$${value[0]} - $${value[1]}`}
          readOnly
        />
        <Slider
          className="distance-range-slider"
          value={value}
          onChange={handleChange}
          min={0}
          max={2000}
          step={1}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  );
};

export default BudgetRange;