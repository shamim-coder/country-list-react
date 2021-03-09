import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Africa from './components/Region/Regions/Africa';
import Americas from './components/Region/Regions/Americas';
import Asia from './components/Region/Regions/Asia';
import Region from './components/Region/Region';
import Saarc from './components/SAARC/Saarc';
import SingleCountry from './components/SingleCountry/SingleCountry';
import Europe from './components/Region/Regions/Europe';
import Oceania from './components/Region/Regions/Oceania';


export const AllCountries = createContext();


function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    const api = "https://restcountries.eu/rest/v2/all"
    axios(api)
      .then(data => setCountries(data.data))
  }, [])

  return (

    <BrowserRouter>
      <AllCountries.Provider value={countries}>
        <Header />
        <Container>
          <Switch>

            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/region" >
              <Region />
            </Route>
            <Route path="/saarc" >
              <Saarc />
            </Route>
            <Route path="/country/:countryCode" >
              <SingleCountry />
            </Route>

            <Route exact path="/region/asia" >
              <Asia />
            </Route>

            <Route path="/region/africa" >
              <Africa />
            </Route>

            <Route path="/region/americas" >
              <Americas />
            </Route>

            <Route path="/region/europe" >
              <Europe />
            </Route>

            <Route path="/region/oceania" >
              <Oceania />
            </Route>

            <Route path="*" >
              <NotFound />
            </Route>

          </Switch>
        </Container>
      </AllCountries.Provider>
    </BrowserRouter >

  );
}

export default App;
