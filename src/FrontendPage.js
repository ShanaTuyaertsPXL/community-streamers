// src/FrontendPage.js
import React from "react";

const FrontendPage = ({ items }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4">Frontend Page</h2>
      <ul className="list-disc pl-5">
        {items.length > 0 ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p className="text-gray-500">No items to display.</p>
        )}
      </ul>
    </div>
  );
};

export default FrontendPage;
