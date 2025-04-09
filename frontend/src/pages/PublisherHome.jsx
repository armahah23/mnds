import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { IoMdOptions } from "react-icons/io";
import Swal from "sweetalert2";
import { LOCAL_HOST_URL } from "../../config/Config.js";


function PublisherHome() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${LOCAL_HOST_URL}/posts`);
        const publisherPosts = response.data.filter(
          (post) => post.publisherId === user.id
        );
        setPosts(publisherPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    // if (user && user.role === "publisher") {
    //   fetchPosts();
    // }
    fetchPosts();
  }, [user]);

  const handleDelete = async (postId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`${LOCAL_HOST_URL}/posts/${postId}`);
        setPosts(posts.filter((post) => post.id !== postId));
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      Swal.fire("Error!", "Failed to delete post.", "error");
    }
  };

  const handleUpdate = async (values) => {
    try {
      await axios.put(`${LOCAL_HOST_URL}/posts/${editingPost.id}`, {
        ...editingPost,
        ...values,
      });
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...post, ...values } : post
        )
      );
      setEditingPost(null);
      Swal.fire("Updated!", "Your post has been updated.", "success");
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire("Error!", "Failed to update post.", "error");
    }
  };

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
                <div className="relative w-full md:w-1/2">
                  {/* Options Button */}
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      onClick={() => setShowOptions(posts[currentIndex].id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <IoMdOptions className="text-xl text-gray-600" />
                    </button>

                    {/* Options Dropdown */}
                    {showOptions === posts[currentIndex].id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                        <button
                          onClick={() => {
                            setEditingPost(posts[currentIndex]);
                            setShowOptions(null);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(posts[currentIndex].id);
                            setShowOptions(null);
                          }}
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
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
      {/* Update Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Update Post</h2>
            <Formik
              initialValues={{
                title: editingPost.title,
                description: editingPost.description,
                directedBy: editingPost.directedBy,
                releasedYear: editingPost.releasedYear,
                cast: editingPost.cast,
                type: editingPost.type,
              }}
              onSubmit={handleUpdate}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <Field
                      name="title"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Director
                      </label>
                      <Field
                        name="directedBy"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Released Year
                      </label>
                      <Field
                        name="releasedYear"
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cast
                    </label>
                    <Field
                      name="cast"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setEditingPost(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50"
                    >
                      Save Changes
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublisherHome;
