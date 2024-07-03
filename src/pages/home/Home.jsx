import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem/RecipeItem";

const Home = () => {
  const { loading, recipeList, errMsg } = useContext(GlobalContext);
  if (loading) {
    return (
      <div className="">
        <div>Loading please wait</div>;
      </div>
    );
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0
        ? recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
        : null}
    </div>
  );
};

export default Home;
