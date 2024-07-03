import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export const GlobalState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
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
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
      setSearch("");
    }
  };
  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{ search, loading, recipeList, errMsg, setSearch, handleSubmit }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
