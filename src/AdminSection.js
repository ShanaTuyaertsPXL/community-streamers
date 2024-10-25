// src/AdminSection.js
import React, { useState } from "react";

const AdminSection = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4">Admin Section</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700">
          Enter Item:
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item name"
          />
        </label>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AdminSection;
