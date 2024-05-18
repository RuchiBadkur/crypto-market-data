import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search by name or symbol"
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default Search;
