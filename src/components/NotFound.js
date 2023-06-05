import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Va bene così?</h1>
      <p>
        <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
