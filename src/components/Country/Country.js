import React from 'react';
import './Country.css'

const Country = (props) => {

    const {area, population,name,region, flags, capital} = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h3>Area: {area}</h3>
            <h3>Region: {region}</h3>
            <h3>Capital: {capital}</h3>
            
            

        </div>
    );
};

export default Country;