
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFound from './NotFound';

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setRecipe(null);
    setNotFound(false);
    setError(false);

    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }

        if (!res.ok) {
          throw new Error('Something went wrong');
        }

        return res.json();
      })
      .then((data) => {
        if (!data) return;

        if (!data.id || !data.name) {
          setNotFound(true);
        } else {
          setRecipe(data);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  // Recipe not found
  if (notFound) {
    return <NotFound />;
  }

  // Network or server error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">
          Something went wrong!
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Try Again
        </button>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Loading state
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading recipe...
        </h2>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-600 hover:underline inline-flex items-center gap-1 mb-6"
      >
        <span>←</span> Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-md border"
        />

        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="font-serif text-3xl font-bold mb-2">
            {recipe.name}
          </h1>

          <p className="text-gray-500 mb-4">
            {recipe.cuisine} - {recipe.difficulty}
          </p>

          <div className="flex items-center gap-1 mb-4 font-medium">
            <span className="text-yellow-500">★</span>
            <span>
              {recipe.rating} ({recipe.reviewCount} reviews)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4 mb-4">
            <p>
              <strong>Prep time:</strong> {recipe.prepTimeMinutes} mins
            </p>
            <p>
              <strong>Cook time:</strong> {recipe.cookTimeMinutes} mins
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
            </p>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            <strong>Meal Type:</strong>{' '}
            {Array.isArray(recipe.mealType)
              ? recipe.mealType.join(', ')
              : 'Not available'}
          </p>

          <p className="text-sm text-gray-500">
            <strong>Tags:</strong>{' '}
            {Array.isArray(recipe.tags)
              ? recipe.tags.join(', ')
              : 'Not available'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8">
        <div>
          <h2 className="font-serif text-xl font-bold mb-4">
            Ingredients
          </h2>

          <ul className="list-disc pl-5 space-y-1">
            {Array.isArray(recipe.ingredients) &&
              recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold mb-4">
            Instructions
          </h2>

          <ol className="list-decimal pl-5 space-y-2">
            {Array.isArray(recipe.instructions) &&
              recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>
        </div>
      </div>
    </main>
  );
}

export default RecipeDetails;
