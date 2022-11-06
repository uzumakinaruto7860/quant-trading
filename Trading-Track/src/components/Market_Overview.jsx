import styles, { layout } from "../style";
import { MarketOverview } from "react-ts-tradingview-widgets";


const Market_Overview = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>

      <MarketOverview colorTheme="dark" height={400} width={600} showFloatingTooltip ></MarketOverview>


    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get market Overview on <br className="sm:block hidden" /> snap of your fingers.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Maket Overview plays a role in deciding the volatility of market. Track the news to properly handle your trades and get rid of high volatility times for a low risk of capital liquidity
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Market_Overview;
