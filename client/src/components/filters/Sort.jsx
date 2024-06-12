import React from 'react';

// sortOrder indicates the current sort order (asc or desc)
const Sort = ({ handleSort, sortOrder }) => {
    return (
        <div className='d-flex'>
            <button className='btn btn-light' onClick={handleSort}>
                Sort by Name ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
            </button>
        </div>
    );
};

export default Sort;
