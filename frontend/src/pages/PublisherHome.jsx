import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function PublisherHome() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleNavigation = () => {
    navigate("/publisher/newfeed");
  };

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4 sm:my-6 py-3 sm:py-4 border-b-2 border-gray-200 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Publisher Dashboard
          </h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                       transition-colors duration-200 text-sm sm:text-base"
            onClick={handleNavigation}
          >
            Create Post
          </button>
        </div>

        {/* Posts Display Area */}
        <div className="mt-4 sm:mt-6">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No posts available
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row min-h-[400px]">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img
                    src={posts[currentIndex]?.image}
                    alt={posts[currentIndex]?.title}
                    className="w-full h-[300px] md:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {posts[currentIndex]?.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {posts[currentIndex]?.description}
                    </p>
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold">Directed by:</span>{" "}
                        {posts[currentIndex]?.directedBy}
                      </p>
                      <p>
                        <span className="font-semibold">Released Year:</span>{" "}
                        {posts[currentIndex]?.releasedYear}
                      </p>
                      <p>
                        <span className="font-semibold">Cast:</span>{" "}
                        {posts[currentIndex]?.cast}
                      </p>
                      <p>
                        <span className="font-semibold">Type:</span>{" "}
                        {posts[currentIndex]?.type}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                      className={`px-4 py-2 rounded-lg ${
                        currentIndex === 0
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white transition-colors duration-200`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentIndex === posts.length - 1}
                      className={`px-4 py-2 rounded-lg ${
                        currentIndex === posts.length - 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white transition-colors duration-200`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PublisherHome;
