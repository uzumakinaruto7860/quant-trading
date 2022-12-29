import styles from "./style";
import { Ticker, Video, Technical, Market_Overview, Prediction, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, News, Market_Data } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chart from "./components/Chart";
import LoginPage from "./Dashboard/pages/Login";
import SignupPage from "./Dashboard/pages/Signup";
import { useState } from "react";
import SymbolOver from "./components/SymbolOver";
import Dashboard from "/src/Dashboard/MainDashboard/src/pages/Dashboard.jsx"
import '/src/Dashboard/MainDashboard/src/css/style.css';
import '/src/Dashboard/MainDashboard/src/charts/ChartjsConfig';
import Add_Trade from "./Dashboard/MainDashboard/src/components/Add_Trade";
import AllNews from "./components/AllNews";
import Calendar from "./components/Calendar";

const App = () => {
  const [search, setSearch] = useState('EURUSD')

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
                {/*  */}
                <Stats />
                <Video />
                <SymbolOver currency={search} />
                <Market_Overview />
                <Technical currency={search} />
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

            {/* <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div> */}

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <SymbolOver currency={search} />
                {/* <Stats />
                <Video /> */}
                <Market_Overview />
                <Technical currency={search} />
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
          {/* ////////////////////////////////Route test for dashboard */}


          <Route path="/user" element={
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">

                <LoginPage />
              </div>
            </div>
          } />
          <Route path="/signup" element={
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">

                <SignupPage />
              </div>
            </div>
          } />
          <Route path="/news" element={
            <AllNews currency={search} />
          }
          />
          <Route path="/calendar" element={
            <Calendar />
          }
          />
          <Route path="/testing" element={
            <Dashboard />
          }
          />
          <Route path="/addTrade" element={
            <Add_Trade />
          }
          />



        </Routes>
      </div>
    </Router >
  );
}

export default App;
