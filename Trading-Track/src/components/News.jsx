import styles, { layout } from "../style";
import { useEffect } from "react";
import { useState } from "react";


const News = () => {

    const [news, setNews] = useState([])
    const response = {};
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4693e8cacmshf1cb4bdb462146bp121510jsne55367585024',
                'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
            }
        };

        fetch('https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?until=0&since=0&size=20', options)
            .then(response => response.json())
            .then(response => setNews(response.data))
            .catch(err => console.error(err));

    }, [])
    // console.log(news[0].attributes.title);

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
                                {news.map((eachNews) => {
                                    console.log(eachNews.attributes.titles)
                                    return <div className="inline-block px-3">
                                        <div
                                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-green-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                        >{eachNews.attributes.titles}</div>
                                    </div>
                                })}


                            </div>
                        </div>
                    </div>

                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        Get market Overview on <br className="sm:block hidden" /> snap of your fingers.
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Maket Overview plays a role in deciding the volatility of market. Track the news to properly handle your trades and get rid of high volatility times for a low risk of capital liquidity
                    </p>

                </div>
            </section>
        </>
    )
};

export default News;
