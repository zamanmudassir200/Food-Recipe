import React from "react";
import { Link } from "react-router-dom";
const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img className="w-[300px] h-[250px]" src={item.image_url} alt="" />
      </div>
      <div className="">
        <span className="font-medium text-md text-cyan-700">
          {item.publisher}
        </span>
        <h1 className="font-bold text-2xl truncate text-black">{item.title}</h1>
        <Link
          to={`/recipe-item/${item.id}`}
          className="text-sm p-3 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
