import React from 'react';

export const showError = (field, err) => {
  let error = err[field];
  return error ? (
    <div style={{ color: 'red', fontSize: 14 }}>
      {error.message || `This field is required`}
    </div>
  ) : null;
};
