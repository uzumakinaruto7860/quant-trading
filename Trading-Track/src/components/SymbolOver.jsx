import React, { useState } from 'react'
import { SymbolOverview, SymbolInfo } from "react-ts-tradingview-widgets";

const SymbolOver = (props) => {
    const [currency, setCurrency] = useState(props.currency)
    var pairs = [["APPLE", "AAPL"],
    ["MICROSOFT", "MSFT"],
    ["GOLD", "XAUUSD"],
    ["EURUSD", "EURUSD"],
    ["CRUDE_OIL", "USOIL"]]

    // to add the search bar value to the array .splice(the index where value is to be added, how many items to dlt)
    pairs.splice(0, 0, [currency, currency])
    // console.log(pairs);



    return (

        <div className='my-10'>
            {/* <SymbolInfo colorTheme="light" autosize></SymbolInfo> */}
            <SymbolOverview
                colorTheme="dark"
                isTransparent="True"
                symbols={
                    pairs
                }
                lineColor='#89202D'
                topColor="#1F1924"
                bottomColor='#1F1924'
                lineWidth="2"
                noTimeScale="True"
                width={1600}
                height={550}
            />

        </div>

    )
}

export default SymbolOver;