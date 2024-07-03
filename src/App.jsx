import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <Navbar />
          <Routes>
            <Route to="/" element={<Home />} />
            <Route to="/favorites" element={<Favorites />} />
            <Route to="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
