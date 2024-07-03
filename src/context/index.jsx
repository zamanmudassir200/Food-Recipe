import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export const GlobalState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
      setSearch("");
    }
  };
  const handleAddToFav = (getCurrItem) => {
    console.log(getCurrItem);
    let copyFavList = [...favoritesList];
    const index = copyFavList.findIndex((item) => item.id === getCurrItem.id);
    if (index === -1) {
      copyFavList.push(getCurrItem);
    } else {
      copyFavList.splice(index);
    }
    setFavoritesList(copyFavList);
  };
  console.log(favoritesList);

  return (
    <GlobalContext.Provider
      value={{
        search,
        loading,
        recipeList,
        errMsg,
        setSearch,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFav,
        favoritesList,
        setFavoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
