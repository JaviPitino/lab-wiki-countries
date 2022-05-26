import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function CountriesDetails() {

  const [ countries, setCountries ] = useState([])
  const { countryurl } = useParams()


  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = async () => {
    try {
        const  response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryurl}`)
        console.log(response.data)

        setCountries(response.data)

    } catch(err) { console.log(err) }
  }

  useEffect(() => {
    getCountries();
  }, [countryurl])

  return (

    <div>
      {/* NO FUNCIONA CON EL NOMBRE */}
      {/* <li className="list-group-item list-group-item-action"> <strong> Nombre: </strong> {countries.name.common}</li> */}
      <li className="list-group-item list-group-item-action"> <strong> Capital: </strong> {countries.capital}</li>
      <li className="list-group-item list-group-item-action"> <strong> Región: </strong> {countries.region}</li>
      <li className="list-group-item list-group-item-action"> <strong> Subregión: </strong> {countries.subregion}</li>
      <li className="list-group-item list-group-item-action"> <strong> Área: </strong> {countries.area} Km2</li>
      <li className="list-group-item list-group-item-action"> <strong> Status: </strong>  {countries.status}</li>

    </div>
  )
}

export default CountriesDetails