import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import FeaturedRecipeCard from "../featuredRecipeCard/FeaturedRecipeCard";

const FeaturedRecipesSection = () => {
  const { loading } = useContext(AuthContext);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  const loadFeaturedRecipes = () => {
    loading(true);
    fetch("https://dream-chef-server-minhaj06.vercel.app/featured-recipes")
      .then((res) => res.json())
      .then((recipes) => {
        setFeaturedRecipes(recipes);
        loading(false);
      })
      .catch((error) => {
        console.log(error);
        loading(false);
      });
  };

  useEffect(() => {
    loadFeaturedRecipes();
  }, []);

  return (
    <div className="bg-white py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Featured Recipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((featuredRecipe) => {
            return (
              <FeaturedRecipeCard featuredRecipe={featuredRecipe} key={featuredRecipe?.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipesSection;
