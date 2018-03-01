import React from 'react';

const TaxButton = ({ taxButtonToggle }) => {
  return (
    <div>
      <button onClick={ taxButtonToggle } className="main-button"> Toggle Tax Total
      </button>
    </div>
  );
};

export default TaxButton;
