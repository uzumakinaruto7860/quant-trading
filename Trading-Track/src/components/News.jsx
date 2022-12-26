
import styles, { layout } from "../style";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const News = () => {


    return (
        <>
            <section id="product" className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>

                    <div className="flex flex-col bg-white m-auto p-auto bg-transparent mt-20">

                        <div
                            className="flex overflow-x-scroll pb-10 w-[600px] h-[300px]"
                        >
                            <div
                                className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                            >

                                
                                <div className="inline-block px-3">
                                    <div
                                        className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-500 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >{<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid eum animi alias quis qui omnis quia quasi nemo voluptatum architecto provident itaque ad, quo ullam ipsum consequatur commodi neque distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam.</h1>}</div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        Get market News on <br className="sm:block hidden" /> snap of your fingers.
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Maket News plays a role in deciding the volatility of market. Track the news to properly handle your trades and get rid of high volatility times for a low risk of capital liquidity
                    </p>

                </div>
            </section>
        </>
    )
};

export default News;
