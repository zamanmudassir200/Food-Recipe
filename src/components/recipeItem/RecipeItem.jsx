import React from "react";

const RecipeItem = ({ item }) => {
  return (
    <div className="text-center">
      <p>{item.title}</p>
      <img className="w-[250px]" src={item.image_url} alt="" />
      <p>{item.publisher}</p>
    </div>
  );
};

export default RecipeItem;
