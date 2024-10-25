// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminSection from "./AdminSection";
import FrontendPage from "./FrontendPage";

const App = () => {
  const [items, setItems] = useState([]);

  // Load items from localStorage when the app initializes
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Function to add a new item and save to localStorage
  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <nav className="mb-6">
          <Link to="/" className="px-4 py-2 text-blue-500 hover:underline">
            Frontend
          </Link>
          <Link to="/admin" className="px-4 py-2 text-blue-500 hover:underline">
            Admin
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<FrontendPage items={items} />} />
          <Route path="/admin" element={<AdminSection addItem={addItem} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
