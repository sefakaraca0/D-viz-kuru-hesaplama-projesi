import React, { useState } from 'react';
import '../css/curency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_fkSRWFmHcVVWeW7gUfaAw1TyCboEZ90sD0t6S6FX"

const Currency = () => {
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () =>  {
        /*console.log(amount)
        console.log(fromCurrency)
        console.log(toCurrency)*/
       const response= await axios.get(`${BASE_URL}/?apikey=${API_KEY}&base_currency=${fromCurrency}`)
    const result =(( response.data.data[toCurrency]) * amount).toFixed(2)
        setResult(result);
    }

    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'Arial', backgroundColor: "#fff", width: "100%", textAlign: "center" }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: "25px" }}>
                <input
                    type="number"
                    className='amount'
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <select onChange={(e) => setFromCurrency(e.target.value)} className="first-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight className="arrow" />

                <select onChange={(e) => setToCurrency(e.target.value)} className="second-currency-option">
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input
                    className='result'
                    value={result}
                    onChange={(e) => setResult(Number(e.target.value))}
                />
            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>
                    Çevir
                </button>
            </div>
        </div>
    );
};

export default Currency;
