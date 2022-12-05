import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {
  return (
    <article>
        <h2 className='name__location'>{location?.name}</h2>
        <ul className='list__location'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>

    </article>
  )
}

export default LocationInfo