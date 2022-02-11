import {useQuery} from "react-query"
import PlanetComponent from './PlanetComponent';

const fetchPlanets = async() => {
    const res = await fetch("https://swapi.dev/api/planets/")
    return res.json()
}

export default function Planets() {

    const {data, status} = useQuery("planets", fetchPlanets)


  return (
      <div>
        <h2>Planets</h2>

        {status === "error" && (
              <div>Error fething data</div>
        )}

        {status === "loading" && (
              <div>loading...</div> 
        )}

        {status === "success" && (
              <div>
                  {data.results.map(planet => (
                      <PlanetComponent key={planet.name} planet={planet}/>
                  ))}
              </div>
          )}
      </div>
  )
}
