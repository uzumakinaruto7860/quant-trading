import styles from "./style";
import { Ticker, Video, Technical, Market_Overview, Prediction, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, News, Market_Data } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chart from "./components/Chart";
// import Guage from "./components/Gauge";
// import { useMemo } from "react";
const App = () => {
  // useMemo(() => Ticker, [])

  return (
    < Router >
      <div className="bg-primary w-full overflow-hidden">


        <Routes>
          {/* ////////////////Route /        ////////////////////////////////////////// */}
          <Route path="/" element={<>
            {/* <Guage /> */}

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
            <Ticker />

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>


            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>

                <Stats />
                <Video />
                <Market_Overview />
                <Technical />
                <News />
                <Prediction />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </>} />
          {/* //////////////////Route /home      //////////////////////////////// */}
          <Route path="/home" element={<>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
            <Ticker />

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>

                <Stats />
                <Video />
                <Market_Overview />
                <Technical />
                <News />
                <Prediction />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </>} />
          {/* //////////////////////Route /charts  ///////////////////////////////*/}
          <Route path="/charts" element={<Chart />} />


        </Routes>
      </div>
    </Router >
  );
}

export default App;
