import React, { useContext, useEffect, useState } from "react";
import NewsCard from "../newsCard/NewsCard";
import { AuthContext } from "../../context/auth";

const NewsLater = () => {
  const { loading } = useContext(AuthContext);
  const [news, setNews] = useState([]);

  const loadNews = () => {
    loading(true);
    fetch("https://dream-chef-server-minhaj06.vercel.app/news-items")
      .then((res) => res.json())
      .then((news) => {
        setNews(news);
        loading(false);
      })
      .catch((error) => {
        console.log(error);
        loading(false);
      });
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">News Later</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((news) => {
            return <NewsCard news={news} key={news?.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsLater;
