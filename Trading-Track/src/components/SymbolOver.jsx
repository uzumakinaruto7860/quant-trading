import React from 'react'
import { SymbolOverview, SymbolInfo } from "react-ts-tradingview-widgets";

const SymbolOver = () => {
    return (

        <div className='my-10'>
            {/* <SymbolInfo colorTheme="light" autosize></SymbolInfo> */}
            <SymbolOverview colorTheme="dark" isTransparent="True" />

        </div>

    )
}

export default SymbolOver;