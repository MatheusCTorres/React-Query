import React from 'react';

export default function VehiclesComponent({vehicles}) {
  return (
  <div className="card">
      <h3>{vehicles.name}</h3>
      <p>model - {vehicles.model}</p>
      <p>vehicle class - {vehicles.vehicle_class}</p>
  </div>
  );
}
