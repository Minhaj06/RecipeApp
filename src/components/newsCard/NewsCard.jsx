import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { id, title, image, content } = news;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <LazyLoad offset={250}>
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </LazyLoad>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{content}</p>
        <Link to={`news/${id}`} className="btn btn-outline btn-primary rounded-full px-6">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
