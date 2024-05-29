import React from "react";
import homeBannerBg from "../../assets/images/homeBanner.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div style={{ height: "40rem" }} className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Discover Delicious Recipes</h1>
          <p className="text-xl text-white mb-12">
            Explore our collection of chef-inspired recipes and elevate your cooking game.
          </p>
          <Link
            to="/shop"
            className="px-8 py-4 bg-white text-base font-bold text-gray-800 rounded-full hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img className="object-cover object-center w-full h-full" src={homeBannerBg} alt="" />
      </div>
      <div className="absolute inset-0 z-0 bg-black bg-opacity-75"></div>
    </div>
  );
};

export default HomeBanner;
