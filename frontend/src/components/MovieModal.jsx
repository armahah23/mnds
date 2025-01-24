import { useState } from "react";

function MovieModal({ movie, onClose }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ comment, rating, movieId: movie.id });
    setComment('');
    setRating(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 sm:p-4">
      <div className="bg-white rounded-lg p-3 sm:p-4 w-full max-w-[95%] sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl p-1">✕</button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Left Section */}
          <div className="w-full sm:w-1/3">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
            <p className="text-gray-600 text-sm">Released: {movie.releaseYear}</p>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-2/3">
            <p className="text-gray-600 text-sm">Directed by: {movie.directedBy}</p>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">{movie.detailedDescription}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Rate & Comment</h3>
              <div className="flex gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-xl sm:text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                  >★</button>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-2">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border rounded p-2 text-sm"
                  placeholder="Add your comment..."
                  rows="2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 w-full sm:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;