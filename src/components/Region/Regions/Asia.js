import React, { useContext } from 'react';
import { AllCountries } from '../../../App';
import Country from '../../Country/Country';

const Asia = () => {


    const countries = useContext(AllCountries)

    const asiaRegion = countries.filter(country => country.region === "Asia")

    return (

        <React.Fragment>
            <div className="title">
                <h1>এশিয়া মহাদেশ</h1>
            </div>
            <div className="countries">
                {asiaRegion.map(country => <Country country={country} />)}
            </div>
        </React.Fragment>
    )
};

export default Asia;