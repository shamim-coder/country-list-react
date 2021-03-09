import React, { useContext } from 'react';
import { AllCountries } from '../../../App';
import Country from '../../Country/Country';

const Europe = () => {
    const countries = useContext(AllCountries)

    const europeRegion = countries.filter(country => country.region === "Europe")

    return (

        <React.Fragment>
            <div className="title">
                <h1>Europe মহাদেশ</h1>
            </div>
            <div className="countries">
                {europeRegion.map(country => <Country country={country} />)}
            </div>
        </React.Fragment>
    )
};

export default Europe;