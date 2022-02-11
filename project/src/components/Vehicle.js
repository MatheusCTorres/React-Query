import React from 'react';
import {useQuery} from "react-query"
import VehiclesComponent from './VehiclesComponent';

const fetchVehicles = async() => {
    const res = await fetch("https://swapi.dev/api/vehicles/")
    return res.json()
}

export default function Vehicles() {

    const {data, status} = useQuery("vehicles", fetchVehicles)
    console.log(data)

  return (
      <div>
        <h2>Vehicles</h2>

        {status === "error" && (
              <div>Error fething data</div>
        )}

        {status === "loading" && (
              <div>loading...</div> 
        )}

        {status === "success" && (
              <div>
                  {data.results.map(vehicles => (
                      <VehiclesComponent key={vehicles.name} vehicles={vehicles}/>
                  ))}
              </div>
          )}
      </div>
  )
}
