
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text px-4">
      <main className="text-center">
        <h1 className="font-serif text-7xl font-bold text-accent mb-2">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-muted mb-6">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="bg-accent hover:bg-accent-hover text-white rounded px-5 py-3 inline-block font-medium transition"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
