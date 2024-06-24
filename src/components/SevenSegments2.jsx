import React from 'react';
import { useState } from 'react';
import SevenSegments1 from './SevenSegments1';
import '../styles/SevenSegment2.css';

export const SevenSegments2 = ({ text }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 9) {
      setCount(count + 1);
    } else {
      setCount(0); // Reinicia a cero si llega a 9
    }
  };

  return (
    <div>
      <SevenSegments1 digit={count} text={text} />
      <button className="buton" onClick={increment}>
        + 1
      </button>
    </div>
  );
};
