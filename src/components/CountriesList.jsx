import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function CountriesList() {

  const [ countriesList, setCountriesList ] = useState([])

    // ! Deberiamos llamar a la API
    // ! ---- ASYNC/AWAIT ----
    useEffect(() => {
        getCountries()
    })

    const getCountries = async () => {
        try {
            const  response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
            // console.log(response.data)
            setCountriesList(response.data)

        } catch(err) { console.log(err) }
    }

  return (

    <div>
        {
        countriesList.map((eachCountry) => {
            return(
                <li key={eachCountry._id} className="list-group-item list-group-item-action">
                    <Link to={`/${eachCountry.alpha3Code}`}> { eachCountry.name.common } </Link>
                </li>
            )
        })
        }
    </div>
  )
}

export default CountriesList