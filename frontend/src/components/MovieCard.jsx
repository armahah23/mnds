import { useState, useEffect } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";

function MovieCard() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("REACT_APP_LOCALHOST_ADDRESS/posts");
        // Filter posts where type is "movie"
        const moviePosts = response.data.filter(
          (post) => post.type === "movie"
        );
        setMovies(moviePosts);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="p-4">
      <div>
        <h1 className="text-yellow-500 text-4xl mb-4">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="p-4 border rounded shadow w-full bg-blue-100 cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="rounded-lg p-4 border-orange-500 border-2 mb-1">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-[200px] w-full"
                />
              </div>
              <h2 className="text-black text-xl">Title: {movie.title}</h2>
              <p className="text-gray-600 ">
                <span className="font-extrabold">Description:</span>{" "}
                <span className="line-clamp-4">{movie.description}</span>
              </p>
              <p className="text-gray-600 font-extrabold">
                Released: {movie.releasedYear}
              </p>
              <p className="text-gray-600 font-extrabold">
                Directed: {movie.directedBy}
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
}

export default MovieCard;
