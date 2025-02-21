import React, { useEffect, useState } from "react";
import gsap from "gsap";

const MovieCards = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "779d95327b5a0e91b07bd52fb92e2ea1"; // Replace with your own API Key

  useEffect(() => {
    if (search.trim() === "") return; // Agar search khali hai to API call mat karo

    setLoading(true);
    setError(null);

    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies");
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="absolute top-140 bottom-0 left-0 right-0 px-4">
      {loading && <p className="text-white text-center">Loading movies...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="relative backdrop-blur-xl bg-white/10 p-6 rounded-xl shadow-lg text-white text-center transition-all duration-500 hover:bg-white/20 hover:shadow-xl border border-white/30"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-lg mb-4 shadow-md border border-white/20"
              />
              <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{movie.title}</h2>
              <p className="text-sm text-gray-200">{movie.overview.substring(0, 100)}...</p>
              <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-md hover:shadow-xl">
                Watch Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-3 text-lg">No movies found 😢</p>
        )}
      </div>
    </div>
  );
};

export default MovieCards;
