import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCountry.css'

const SingleCountry = () => {

    const { countryCode } = useParams()
    const [country, setCountry] = useState({})
    useEffect(() => {
        const api = `https://restcountries.eu/rest/v2/alpha/${countryCode}`
        axios(api)
            .then(data => setCountry(data.data))
    }, [countryCode])

    const { name, capital, region, nativeName, flag, population, altSpellings } = country

    return (
        <div className="country">
            <img className="country-img" src={flag} alt="" />
            <h2>{name}</h2>
            <p>{capital}</p>
            <p>{altSpellings && altSpellings[1]}</p>
            <p>{region}</p>
            <p>{nativeName}</p>
            <p>{population}</p>

            <br />
            <br />
        </div>
    );
};

export default SingleCountry;
