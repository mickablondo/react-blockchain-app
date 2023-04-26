import { useState, useEffect } from 'react';

function Currencies() {
    const API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch(`${API_URL}`);
                const data = await response.json();
                console.log(data);
                setOptions(data);
            } catch(err) {
                console.log(err.message);
            }
        }

        fetchOptions();
    }, []);

    return (
        <select>
            {Object.entries(options).map(([key, value]) => (
              <option key={key}>{value}</option>
            ))}
        </select>
    );
}

export default Currencies;