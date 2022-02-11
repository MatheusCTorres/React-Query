import {useState} from "react"
import Navbar from './components/Navbar';
import Planet from './components/Planets';
import People from './components/People';
import Vehicle from "./components/Vehicle";

function App() {

  const [page, setPage] = useState("planet")

  return (
    <div className="App">
      <h1>Status info</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {
          page === "planet" ? <Planet /> : 
          page === "people" ? <People /> :
          page === "vehicles" ? <Vehicle/>: null
        }
      </div>
    </div>
  )
}

export default App;
