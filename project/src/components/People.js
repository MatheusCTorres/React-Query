import React from 'react';
import {useQuery} from "react-query"
import PersonComponent from './PersonComponent';

const fetchPleople = async() => {
    const res = await fetch("https://swapi.dev/api/people/")
    return res.json()
}

export default function People() {

    const {data, status} = useQuery("people", fetchPleople)
    console.log(data)

  return (
      <div>
        <h2>People</h2>

        {status === "error" && (
              <div>Error fething data</div>
        )}

        {status === "loading" && (
              <div>loading...</div> 
        )}

        {status === "success" && (
              <div>
                  {data.results.map(person => (
                      <PersonComponent key={person.name} person={person}/>
                  ))}
              </div>
          )}
      </div>
  )
}
