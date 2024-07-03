import React, { useContext } from "react";
import RecipeItem from "../../components/recipeItem/RecipeItem";
import { GlobalContext } from "../../context";
const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);
  //   if (loading) {
  //     return (
  //       <div className="text-center">
  //         <h1 className="font-bold text-xl ">Loading please wait</h1>;
  //       </div>
  //     );
  //   }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <p className="font-bold text-2xl ">Nothing is added in Favorites.</p>
      )}
    </div>
  );
};

export default Favorites;
