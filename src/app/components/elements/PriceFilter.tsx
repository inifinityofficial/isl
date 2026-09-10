"use client";
import { useState, FormEvent } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter: React.FC = (): JSX.Element => {
  const [price, setPrice] = useState<[number, number]>([0, 1000]);

  const handlePriceChange = (value: number | number[]): void => {
    if (Array.isArray(value) && value.length === 2) {
      setPrice([value[0], value[1]]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Selected Price Range: ${price[0]} - ${price[1]}`);
  };

  return (
    <div className="range-slider">
        <Slider
          range
          min={0}
          max={2000}
          value={price}
          onChange={handlePriceChange}
          allowCross={false}
        />
        <form onSubmit={handleSubmit} className='align-items-center'>
          <input
            type="text"
            className="property-amount"
            name="field-name"
            value={`$${price[0]} - $${price[1]}`}
            readOnly
          />
          <input type="submit" value="Filter" />
        </form>
    </div>
  );
};

export default PriceFilter;
