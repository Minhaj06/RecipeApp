import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p>
              We are a team of passionate chefs who love to share our favorite recipes with
              food enthusiasts around the world.
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Explore Recipes</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link to="#">Appetizers</Link>
              </li>
              <li>
                <Link to="#">Entrees</Link>
              </li>
              <li>
                <Link to="#">Desserts</Link>
              </li>
              <li>
                <Link to="#">Drinks</Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p>
              123 Main Street
              <br /> Anytown, USA 12345
              <br /> info@chefrecipes.com
              <br /> 555-123-4567
            </p>
          </div>
        </div>
        <hr className="my-10 border-gray-600" />
        <div className="flex justify-between items-center">
          <p className="text-white">&copy; 2023 Chef Recipes. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
