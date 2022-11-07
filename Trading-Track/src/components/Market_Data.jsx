import React from 'react'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Market_Data = () => {
    return (
        <div>
            <TechnicalAnalysis colorTheme="dark" isTransparent="True" symbol='EURUSD' width="400"></TechnicalAnalysis>
        </div >
    )
}

export default Market_Data
