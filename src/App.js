// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  Navigate,
} from "react-router-dom";
import AdminSection from "./AdminSection";
import FrontendPage from "./FrontendPage";
import Signup from "./Signup";
import Login from "./Login";
import { auth } from "./firebase"; // Firebase auth setup
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase auth functions
import Sidebar from "./Sidebar"; // Import the Sidebar component

const App = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null); // State to manage user authentication status

  // Load items from localStorage on initial load
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Check for authenticated user on app load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Cleanup the listener on component unmount
  }, []);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  // Handle user logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Add the Sidebar here */}
        <div className="flex-grow p-4 min-h-screen bg-gray-100">
          <nav className="mb-6">
            {/* You can keep this or remove it if you want to use the sidebar only */}
          </nav>

          {/* Display user information when logged in */}
          {user && (
            <div className="mb-4">
              <p className="text-green-500">Logged in as: {user.email}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          )}

          <Routes>
            <Route path="/" element={<FrontendPage items={items} />} />
            {/* Protect the /admin route; redirect to /login if user is not authenticated */}
            <Route
              path="/admin"
              element={
                user ? (
                  <AdminSection addItem={addItem} handleLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
