import styles, { layout } from "../style";
import { useEffect, useState } from "react";
import axios from 'axios';

const News = () => {

    var [articles, setArticles] = useState([])
    const API_KEY = '26c92b41998e4059a32348fb598c07ac';
    const CURRENCY = 'EURUSD';

    function fetchNews() {
        axios.get(`https://newsapi.org/v2/everything?q=${CURRENCY}&sortBy=relevancy&apiKey=${API_KEY}`)
            .then(response => {
                setArticles(response.data.articles);
                console.log(response.data.articles)
                // Now you can use the "articles" array to display the news in your React component
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchNews();

    }, [])

    return (
        <>
            <section id="product" className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>

                    <div className="flex flex-col bg-white m-auto p-auto bg-transparent mt-20 ">

                        <div
                            className="flex overflow-x-scroll overflow-y-hidden pb-10 w-[600px] h-[380px]"
                        >
                            <div
                                className="flex flex-nowrap lg:ml-5 md:ml-5 ml-[8.25rem] h-[350px]"
                            >

                                {articles.map(article => (
                                    <div className="inline-block pr-3 ">
                                        <div className=" w-64 h-[350px] max-w-xs overflow-x-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border">
                                            <img src={article.urlToImage} />
                                            <h1 className="text-white text-xl font-medium mb-2">{article.title.substring(0)}</h1>
                                            <h1 className="text-white text-md mb-4">{article.description.substring(0, 70)}</h1>
                                            <a className="text-blue-500 align-baseline" target="_blank" href={article.url}>Learn more</a>
                                        </div>
                                    </div>
                                ))}




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
