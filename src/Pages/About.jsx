import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="max-w-4xl w-full px-6 py-8 bg-black rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-6">About Movie Search App</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is this App?</h2>
          <p>
            The Movie Search App allows you to search for your favorite movies and
            celebrities. By utilizing movie databases like IMDB and TMDB, users can
            view detailed information about movies, celebrity news, trailers, and much more.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Search for movies by title, genre, or year.</li>
            <li>View detailed information about each movie (cast, release date, etc.).</li>
            <li>Stay up-to-date with the latest celebrity news.</li>
            <li>Watch trailers directly from the app.</li>
            <li>Get suggestions for popular and trending movies.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <p>
            Simply enter the name of the movie or celebrity in the search bar, and explore
            all the relevant information. You can also filter by category to find the latest
            news or trending movies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            For any questions or feedback, please feel free to reach out to us at
            <a
              href="mailto:support@moviesearchapp.com"
              className="text-blue-400 underline"
            >
             nida711711@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
