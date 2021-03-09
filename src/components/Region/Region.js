import React from 'react';
import { Link } from 'react-router-dom';
import './Regions.css'


const Region = () => {

    return (
        <div className="mt-5 region">
            <Link to="/region/asia"> Asia</Link>
            <Link to="/region/africa"> Africa</Link>
            <Link to="/region/americas"> Americas</Link>
            <Link to="/region/europe"> Europe</Link>
            <Link to="/region/oceania"> Oceania</Link>
        </div>
    );
};

export default Region;