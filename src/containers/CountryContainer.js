import React, { useEffect, useState } from 'react';
import Country from '../components/Country';
import VisitedCountries from '../components/VisitedCountries';
const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const fetchCountry = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
  }
  useEffect(() => {
    fetchCountry();
  }, []);
  const markVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };
  return (
    <div className="container">
      <div className="countries">
        <h1>Hello countries!</h1>
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisited={markVisited}
          />
        ))}
      </div>
      <div className="visited-countries">
        <VisitedCountries visitedCountries={visitedCountries} />
      </div>
    </div>
  );
};
export default CountryContainer;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const CountriesContainer = () => {

//     const [countries, setCountries] = useState([]);

//     const fetchCountries = async () => {
//         const response = await fetch("https://restcountries.com/v3.1/all");
//         const jsonResponse = await response.json();
//         setCountries(jsonResponse);
//     }
//     useEffect(() => {
//         fetchCountries()
//     },[])

//     const countryComponents = countries.map( country => {
//         return <Countries country = {country}/>
//     })
//     return ( 
//         <>
//         <p>Sup bro</p>
//         {countryComponents}

//////////////////////////////////////////////////////////////////////////////////////////


        {/* {country.map((country, index) => (
            <Countries key={index} country={country}/>))
        } */}
        
        {/* {country ? <ul 
            src={[
                country.name.common,
                country.name.official,
                country.capital,
                country.independent,
                country.unMember,
                country.region,
                country.subRegion,
                Object.values(country.languages),
                country.borders,
                country.population,
                country.area,
                country.flags
                ]} 
            alt="Where be the countries?"/> : <p>Loading Country</p>
        } */}
//         </>
//      );
// }
 
// export default CountriesContainer;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////














