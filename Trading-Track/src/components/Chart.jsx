import React, { useEffect } from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Chart = () => {
    useEffect(() => {
        document.title = "Trading-Track/Charts"
    }, [])

    return (

        <div>
            <AdvancedRealTimeChart theme="dark" width={1500} height={730} hide_side_toolbar="true"
                hide_top_toolbar="true"
                // show_popup_button='true'

            // hide_legend="true"
            >

            </AdvancedRealTimeChart>
        </div >
    )
}

export default Chart