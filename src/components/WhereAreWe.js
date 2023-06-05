import React from 'react';

function WhereAreWe() {
  const address = 'Via del Corso, 123';

  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/place/${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <p>
      <i onClick={handleAddressClick}>{address}</i>
    </p>
  );
}

export default WhereAreWe;
