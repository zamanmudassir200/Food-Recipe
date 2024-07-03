import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const params = useParams();
  console.log(params);
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFav,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipsDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data.recipe);
      }
    };
    getRecipsDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            src={recipeDetailsData?.image_url}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium text-md text-cyan-700">
          {recipeDetailsData?.publisher}
        </span>
        <h1 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.title}
        </h1>
        <button
          onClick={() => handleAddToFav(recipeDetailsData)}
          className="self-start text-sm p-3 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          {favoritesList &&
          favoritesList.length > 0 &&
          favoritesList.findIndex(
            (item) => item.id === recipeDetailsData.id
          ) !== -1
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
        <div className="">
          <span className="text-2xl font-bold text-black">Ingredients:</span>
          <ul className="flex flex-col mt-3 gap-3">
            {recipeDetailsData?.ingredients.map((ingredientItem, index) => {
              return (
                <li key={index}>
                  <span className="text-xl font-semibold text-black">
                    {ingredientItem.quantity} {ingredientItem.unit}
                  </span>
                  <span className="text-xl font-semibold text-black">
                    {ingredientItem.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
