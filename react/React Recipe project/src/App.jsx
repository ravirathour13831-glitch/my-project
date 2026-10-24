
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
