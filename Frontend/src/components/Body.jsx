import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import India from '../pages/India';
import World from '../pages/World';
import Search from '../pages/Search';
import Login from '../pages/Login';
import About from '../pages/About';
import HomePage from '../pages/HomePage';
import './Body.css';
import LoadingSpinner from '../pages/LoadingSpinner'; // Assuming this component exists

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate a data fetch or content loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate a network request delay of 800ms

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className="main-content">
      <div className="router-content">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/india" element={<India />} />
            <Route path="/world" element={<World />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </div>
    </main>
  );
};

export default Body;