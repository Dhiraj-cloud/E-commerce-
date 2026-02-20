import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved mode on mount
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  // Apply dark class and save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 p-4 flex justify-between items-center text-white">
      <div className="flex gap-4 font-semibold">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white dark:bg-gray-700 text-blue-500 dark:text-gray-200 px-3 py-1 rounded transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;