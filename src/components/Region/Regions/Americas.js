import React, { useContext } from 'react';
import { AllCountries } from '../../../App';
import Country from '../../Country/Country';

const Americas = () => {

    const countries = useContext(AllCountries)

    const americasRegion = countries.filter(country => country.region === "Americas")

    return (
        <React.Fragment>
            <div className="title">
                <h1>Americas মহাদেশ</h1>
            </div>
            <div className="countries">
                {americasRegion.map(country => <Country country={country} />)}
            </div>
        </React.Fragment>
    );
};

export default Americas;