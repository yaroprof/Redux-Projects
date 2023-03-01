import React from 'react';
import './Error.scss';
import { error } from '../../utils/images';

const Error = () => {
  return (
    <div className="flex flex-center erro">
      <img src={error} alt="error" />
    </div>
  );
};

export default Error;
