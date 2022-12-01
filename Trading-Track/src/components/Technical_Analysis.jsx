import React from 'react'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Technical_Analysis = () => {
    return (
        <div>
            <TechnicalAnalysis colorTheme="dark" isTransparent="True" symbol='EURUSD' width="400"></TechnicalAnalysis>
        </div >
    )
}

export default Technical_Analysis
