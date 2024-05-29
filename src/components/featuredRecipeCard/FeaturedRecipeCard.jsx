import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const FeaturedRecipeCard = ({ featuredRecipe }) => {
  const { id, name, image, description, likes, cookTime, prepTime } = featuredRecipe;

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-slate-200">
      <div className="pb-4">
        <LazyLoad offset={250}>
          <img className="w-full object-cover" src={image} alt={name} />
        </LazyLoad>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Prep Time: {prepTime} mins</span>
          <span className="text-gray-600 text-sm">Cook Time: {cookTime} hour</span>
        </div>
        <div className="flex items-center mt-4">
          <Link
            to={`recipe/${id}`}
            className="btn btn-primary hover:bg-gray-100 hover:text-primary rounded-full mr-2 px-6"
          >
            View Recipe
          </Link>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 13.333L6.667 16l1.666-5L3.333 8l5-0.333L10 3l1.667 4.667 5 0.333-4 3.667 1.666 5L10 13.333z"></path>
            </svg>
            <span className="text-gray-600 text-sm">{likes / 1000}k Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
