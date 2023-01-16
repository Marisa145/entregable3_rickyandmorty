import './App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentsCard from './components/ResidentsCard'
import ErrorFetch from './components/ErrorFetch'


function App() {
const [location, setLocation] = useState()
const [locationInput, setLocationInput] = useState()
const [hasError, setHasError] = useState(false)

useEffect(()=>{
  let URL
  if(locationInput){
    //si existe se renderiza el numero de  la ubicacion que se coloque en el input
    URL = `https://rickandmortyapi.com/api/location/${locationInput}`

  }else{
    //si locationIput no existe se renderiza de manera random  hago normal
    const randomIdLocation = Math.floor(Math.random()*126) + 1
    URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
  }
  axios.get(URL)
  .then(res=>{setLocation(res.data) ;setHasError(false)})
  .catch(err => {setHasError(true) ;console.log(err)})
},[locationInput])

const handleSubmit = e =>{
  e.preventDefault()
  setLocationInput(e.target.inputSearch.value)
  
}

  return (
    <div className="App">
      <div className='background'>  
      <img src="images/portada.png" alt="" /> </div>
    
      <form onSubmit={handleSubmit} >
        <input id='inputSearch'type="text" />
        <button>Search</button>
        

      </form>
   
      {
        hasError ?
          <ErrorFetch />
        :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentsCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }

    </div>
  )
}

export default App
