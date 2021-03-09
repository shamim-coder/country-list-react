import React, { useContext } from 'react';
import { AllCountries } from '../../../App';
import Country from '../../Country/Country';

const Oceania = () => {
    const countries = useContext(AllCountries)

    const oceaniaRegion = countries.filter(country => country.region === "Oceania")

    return (

        <React.Fragment>
            <div className="title">
                <h1>Oceania মহাদেশ</h1>
            </div>
            <div className="countries">
                {oceaniaRegion.map(country => <Country country={country} />)}
            </div>
        </React.Fragment>
    )
};

export default Oceania;