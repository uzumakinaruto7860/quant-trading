import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const AllNews = (props) => {
    var [articles, setArticles] = useState([])
    const [currency, setCurrency] = useState(props.search)
    const API_KEY = '26c92b41998e4059a32348fb598c07ac';
    const CURRENCY = 'EURUSD';
    const COUNTRY = 'us'

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
        <div className='bg-black'>
            <h1 className='text-white flex justify-center text-6xl font-bold p-4 rounded-lg shadow-lg py-5'>Trending News</h1>
            <div className="flex flex-wrap ">
                {articles.map(article => (
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-black" key={articles.url}>
                        <div className="bg-black border text-white rounded-lg shadow-md overflow-hidden">
                            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-4 text-white">
                                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                                <p className="text-gray-400 text-sm">{article.description}</p>
                                <a href={article.url} className="block mt-4 text-blue-500 hover:text-blue-700">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllNews