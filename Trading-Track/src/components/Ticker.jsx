import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";


const Ticker = () => {

    return (



        <div>
            <TickerTape colorTheme="dark" isTransparent={true} showSymbolLogo={true} largeChartUrl={false}
                symbols={[
                    {
                        "proName": "FX_IDC:PKRUSD",
                        "title": "PKR/USD"
                    },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "Nasdaq 100"
                    },
                    {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR/USD"
                    },
                    {
                        "proName": "BITSTAMP:BTCUSD",
                        "title": "BTC/USD"
                    },
                    {
                        "proName": "BITSTAMP:ETHUSD",
                        "title": "ETH/USD"
                    }
                ]} />
        </div>
    )
}

export default Ticker