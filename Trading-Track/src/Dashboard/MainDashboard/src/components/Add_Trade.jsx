import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Add_Trade = () => {
    var [articles, setArticles] = useState([])
    const API_KEY = '26c92b41998e4059a32348fb598c07ac';
    const CURRENCY = 'USD';

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
            <div className="flex flex-wrap">
                {articles.map(article => (
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2" key={articles.url}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                                <p className="text-gray-700 text-sm">{article.description}</p>
                                <a href={article.url} className="block mt-4 text-blue-500 hover:text-blue-700">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Add_Trade