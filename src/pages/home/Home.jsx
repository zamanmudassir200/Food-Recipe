import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem/RecipeItem";

const Home = () => {
  const { loading, recipeList, errMsg } = useContext(GlobalContext);
  if (loading) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-xl ">Loading please wait</h1>;
      </div>
    );
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <p className="font-bold text-2xl ">
          Nothing to show! Please search something else
        </p>
      )}
    </div>
  );
};

export default Home;
