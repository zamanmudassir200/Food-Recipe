import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

const Navbar = () => {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  return (
    <nav className="sticky top-0 bg-white px-3 rounded-lg z-10 flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5  shadow-lg lg:gap-0">
      <h1 className="text-2xl font-semibold">
        <Link
          to="/"
          className="text-black font-bold hover:text-gray-700 duration-300"
        >
          Food Recipe
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 w-[100%] font-bold p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to="/"
            className="text-black font-bold hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="text-black font-bold hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
