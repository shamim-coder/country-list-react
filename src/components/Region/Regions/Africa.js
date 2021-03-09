import React, { useContext } from 'react';
import { AllCountries } from '../../../App';
import Country from '../../Country/Country';

const Africa = () => {
    const countries = useContext(AllCountries)

    const africaRegion = countries.filter(country => country.region === "Africa")

    return (
        <React.Fragment>
            <div className="title">
                <h1>আফ্রিকা মহাদেশ</h1>
            </div>
            <div className="countries">
                {
                    africaRegion.map(country => <Country country={country} />)
                }
            </div >
        </React.Fragment >
    );
};

export default Africa;