import React from 'react'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Technical_Analysis = (props) => {
    return (
        <div>
            <TechnicalAnalysis colorTheme="dark" isTransparent="True" symbol={props.currency} width="400"></TechnicalAnalysis>
        </div >
    )
}

export default Technical_Analysis
