import React from 'react';
const VisitedCountries = ({ visitedCountries, country }) => {

  return (
    <div className="visited-countries">
      <h2>Visited Countries</h2>
      {visitedCountries.length > 0 ? (
      // {visitedCountries.length > 0 && {country.name.common} !== visitedCountries(country.name.common) ? (
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      ) : (
        <p>No countries visited yet.</p>
      )}
    </div>
  );
};
export default VisitedCountries;