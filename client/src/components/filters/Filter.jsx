import React from 'react';

const Filter = ({ handleFilter }) => {
    return (
        <div className='d-flex gap-2'>
            <button className='btn btn-light' onClick={() => handleFilter('smallerThanLithuania')}>Filter Smaller Than Lithuania</button>
            <button className='btn btn-light' onClick={() => handleFilter('oceania')}>Filter Oceania</button>
        </div>
    );
};

export default Filter;