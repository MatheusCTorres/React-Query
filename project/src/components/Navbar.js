import React from 'react';

export default function Navbar({setPage}) {
  return (
  <div>
      <button onClick={()=> setPage("planet")}>Planets</button>
      <button onClick={()=> setPage("people")}>Poeple</button>
      <button onClick={()=> setPage("vehicles")}>Vehicles</button>
  </div>
  );
}
