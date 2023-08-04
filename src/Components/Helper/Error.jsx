import React from 'react';

const Error = ({ error }) => {
  if (error)
    return <span style={{ color: '#a10532', display: 'block' }}>{error}</span>;
  else return null;
};

export default Error;
