import { pred } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Prediction = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Stocks Analysis <br className="sm:block hidden" /> using AI and ML
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Use of Trained bots to predict the closing prices of stocks for better trading desicions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>

      <img src={pred} alt="billing" className="w-[100%] h-[100%] rounded-[20px]
" />
    </div>
  </section>
);

export default Prediction;
