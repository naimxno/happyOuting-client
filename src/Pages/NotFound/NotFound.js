import React from 'react';

const NotFoundStyle = {
  color: "red",
  maxWidth: '500px',
  height: "500px"
}

const NotFound = () => {
  return (
    <div style={NotFoundStyle}>
      <h1>404 page</h1>
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;