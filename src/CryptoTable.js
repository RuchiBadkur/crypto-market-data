import React from 'react';

const CryptoTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Total Volume</th>
                </tr>
            </thead>
            <tbody>
                {data.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.current_price}</td>
                        <td>{coin.total_volume}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable;
