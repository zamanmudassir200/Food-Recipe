import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipeItem/RecipeItem";

const Home = () => {
  const { loading, recipeList, errMsg } = useContext(GlobalContext);
  if (loading) {
    return (
      <div className="text-center flex flex-col gap-2 h-[calc(100vh-200px)] items-center justify-center mt-4 ">
        <h1 className="font-bold text-xl ">Loading! please wait...</h1>
        <div className="h-[60px] w-[60px] rounded-full border-t-8 border-b-8 border-red-500 animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <p className="font-bold text-2xl ">
          Nothing to show! Please search something
        </p>
      )}
    </div>
  );
};

export default Home;
