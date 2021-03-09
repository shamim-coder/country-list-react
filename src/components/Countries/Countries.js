import React, { useContext } from 'react';
import axios from 'axios';
import Country from '../Country/Country';
import "./Countries.css"
import { AllCountries } from '../../App';



const Countries = () => {

    const countries = useContext(AllCountries)

    console.log(countries);

    return (
        <div className="countries mt-5">
            {
                countries.map(country => <Country country={country} />)
            }
        </div>
    );
};

export default Countries;