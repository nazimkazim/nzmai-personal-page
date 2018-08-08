import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};
