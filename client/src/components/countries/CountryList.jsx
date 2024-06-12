import React from 'react';
import style from './CountryList.module.css';

const CountryList = ({ countries }) => {
    return (
        <tbody>
        {countries.map(country => (
            <tr key={country.name}>
                <td>
                    <div id='name'>{country.name}</div>
                    <div id='region'>{country.region}</div>
                    <div id='area'>{country.area}</div>
                </td>
            </tr>
        ))}
        </tbody>
    );
};

export default CountryList;
