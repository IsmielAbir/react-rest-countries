import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
            <h1>Number of Countries: {country.length}</h1>
            <div  className='countries-container'>
            {
                country.map(country  => <Country country={country} 
                key={country.cca3}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;