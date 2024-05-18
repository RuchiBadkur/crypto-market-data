import React, { useState, useEffect } from 'react';
import CryptoTable from './CryptoTable';
import Search from './Search';
import SortButtons from './SortButtons';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    // Fetch data using .then
    // const fetchDataWithThen = () => {
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             setFilteredData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // };

    // Fetch data using async/await
    const fetchDataWithAsyncAwait = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setData(data);
            setFilteredData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataWithAsyncAwait();
    }, []);

    const handleSearch = (query) => {
        const filtered = data.filter(coin =>
            coin.name.toLowerCase().includes(query.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleSort = (criteria) => {
        let sortedData;
        if (criteria === 'market_cap') {
            sortedData = [...filteredData].sort((a, b) => b.market_cap - a.market_cap);
        } else if (criteria === 'percentage_change') {
            sortedData = [...filteredData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        }
        setFilteredData(sortedData);
    };

    return (
        <div>
            <h1>Crypto Market Data</h1>
            <Search onSearch={handleSearch} />
            <SortButtons onSort={handleSort} />
            <CryptoTable data={filteredData} />
        </div>
    );
};

export default App;
