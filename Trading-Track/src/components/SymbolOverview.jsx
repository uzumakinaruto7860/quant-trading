import React from 'react'
import { SymbolOverview, SymbolInfo } from "react-ts-tradingview-widgets";

const SymbolOverview = () => {
    return (

        <>
            <SymbolInfo colorTheme="light" autosize></SymbolInfo>
            <SymbolOverview colorTheme="dark" isTransparent="True" />

        </>

    )
}

export default SymbolOverview