import React from 'react'
import { chartsvideo } from '../assets'
const Video = () => {
    return (
        <div className='main'>
            <video src={chartsvideo} autoPlay loop muted></video>
        </div>
    )
}

export default Video;
// import { useEffect } from 'react';

// useEffect(() => {
//     const script = document.createElement('script');

//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//         document.body.removeChild(script);
//     }
// }, []);

// const Ticker = () => {
//     return (
//         <div class="tradingview-widget-container">
//             <div class="tradingview-widget-container__widget"></div>
//             <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
//                 {
//                     "symbols": [
//                 {
//                     "proName": "FOREXCOM:SPXUSD",
//                 "title": "S&P 500"
//         },
//                 {
//                     "proName": "FOREXCOM:NSXUSD",
//                 "title": "US 100"
//         },
//                 {
//                     "proName": "FX_IDC:EURUSD",
//                 "title": "EUR/USD"
//         },
//                 {
//                     "proName": "BITSTAMP:BTCUSD",
//                 "title": "Bitcoin"
//         },
//                 {
//                     "proName": "BITSTAMP:ETHUSD",
//                 "title": "Ethereum"
//         }
//                 ],
//                 "showSymbolLogo": true,
//                 "colorTheme": "light",
//                 "isTransparent": false,
//                 "displayMode": "adaptive",
//                 "locale": "en"
//     }
//             </script>
//         </div>
//     )
// }

// export default Ticker