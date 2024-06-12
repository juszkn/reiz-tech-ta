import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from "./components/countries/CountryList.jsx";
import Sort from "./components/filters/Sort.jsx";
import Filter from "./components/filters/Filter.jsx"

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => {
                setCountries(response.data);
                setFilteredCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSort = () => {
        const sortedCountries = [...filteredCountries].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setFilteredCountries(sortedCountries);
    };

    const handleFilter = (filterType) => {
        let filtered;
        if (filterType === 'smallerThanLithuania') {
            filtered = countries.filter(country => country.area < 65300); // LTU area size
        } else if (filterType === 'oceania') {
            filtered = countries.filter(country => country.region === 'Oceania');
        }
        setFilteredCountries(filtered);
    };

    return (
        <div className='container'>
            {/*Heading*/}
            <div>
                <h2>TA: List Of Countries</h2>
            </div>

            <div className="d-flex mb-3">
                {/*Sort By Size*/}
                <div className="me-auto p-2">
                    <Filter handleFilter={handleFilter}/>
                </div>

                {/*Sort By Name*/}
                <div className="p-2">
                    <Sort handleSort={handleSort} sortOrder={sortOrder}/>
                </div>
            </div>

            {/*List Displayed*/}
            <div>
                <table className='table'>
                    <CountryList countries={filteredCountries}/>
                </table>
            </div>
        </div>
    );
};

export default App;
