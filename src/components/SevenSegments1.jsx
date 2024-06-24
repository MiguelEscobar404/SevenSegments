import React from 'react';
import '../styles/SevenSegments.css';

const segment = {
  0: [true, true, true, false, true, true, true],
  1: [false, false, true, false, false, true, false],
  2: [true, false, true, true, true, false, true],
  3: [true, false, true, true, false, true, true],
  4: [false, true, true, true, false, true, false],
  5: [true, true, false, true, false, true, true],
  6: [true, true, false, true, true, true, true],
  7: [true, false, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, false],
};

const SevenSegments1 = ({ digit, text }) => {
  const segments = segment[digit] || [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <>
      <h2 className="tittle">{text}</h2>
      <section className="container">
        <div className="segmentsdisplay">
          <div className={`segment a ${segments[0] ? 'on' : 'off'}`}></div>
          <div className="containerVertical">
            <div className={`segment b ${segments[1] ? 'on' : 'off'}`}></div>
            <div className={`segment c ${segments[2] ? 'on' : 'off'}`}></div>
          </div>
          <div className={`segment d ${segments[3] ? 'on' : 'off'}`}></div>
          <div className="containerVertical">
            <div className={`segment e ${segments[4] ? 'on' : 'off'}`}></div>
            <div className={`segment f ${segments[5] ? 'on' : 'off'}`}></div>
          </div>
          <div className={`segment g ${segments[6] ? 'on' : 'off'}`}></div>
        </div>
      </section>
    </>
  );
};

export default SevenSegments1;
