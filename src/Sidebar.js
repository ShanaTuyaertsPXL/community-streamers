// src/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h2 className="text-xl font-bold mb-4">My App</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-white hover:underline">
            Frontend
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/admin" className="text-white hover:underline">
            Admin
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/signup" className="text-white hover:underline">
            Sign Up
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
