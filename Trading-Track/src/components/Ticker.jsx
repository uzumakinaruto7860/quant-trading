import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

const Ticker = () => {
    return (
        <div>
            <TickerTape colorTheme="dark" isTransparent={true}></TickerTape>
        </div>
    )
}

export default Ticker