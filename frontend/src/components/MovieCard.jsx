import { useState } from "react";
import movies from "../assets/data/movie";
import MovieModal from "./MovieModal";

function MovieCard() {
  const [selectedMovie, setSelectedMovie] = useState(null);
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
                Description: {movie.smallDescription}
              </p>
              <p className="text-gray-600 ">Released: {movie.releaseYear}</p>
              <p className="text-gray-600 ">Directed: {movie.directedBy}</p>
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
