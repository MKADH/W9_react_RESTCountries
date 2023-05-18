import React from 'react';
const Country = ({ country, handleVisited }) => {
  const { name, capital, languages, flags, region } = country;
  const markVisited = () => {
    handleVisited(country);
  };
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Language(s): {languages && languages[0]}</p>
      <p>Region: {region}</p>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <button onClick={markVisited}>Mark as Visited</button>
    </div>
  );
};
export default Country;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Countries = ({country}) => {

//     const {
//         // common,
//         // official,
//         capital,
//         independent,
//         unMember,
//         region,
//         subRegion,
//         // languages,
//         borders,
//         population,
//         area,
//         flags
//     } = country;






//     return ( 
//         <>
//             <p>Hey there</p>
//             {/* <h2>{common}</h2> */}
//             {/* <p>{official}</p> */}
//             <p>{capital}</p>
//             <p>{independent}</p>
//             <p>{unMember}</p>
//             <p>{region}</p>
//             <p>{subRegion}</p>
//             {/* <p>{languages}</p> */}
//             <p>{borders}</p>
//             <p>{population}</p>
//             <p>{area}</p>
//             <p>{flags}</p>
//             </>
//      );
// }
 
// export default Countries;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

