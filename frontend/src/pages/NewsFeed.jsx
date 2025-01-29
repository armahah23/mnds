import { FiClock, FiHeart, FiShare2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import marvelStudio from "../assets/images/marvelstudio.jpeg";
import houseofdragon from "../assets/images/houseofdragon.jpeg";
import avatar from '../assets/images/avatar.jpg';
import superhero from '../assets/images/superHeros.jpg'

function NewsFeed() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">
              Entertainment News
            </h1>
            <p className="text-center mt-2">
              Your daily dose of movie and series updates
            </p>
          </div>
        </div>

        {/* Trending News */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Trending News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={marvelStudio}
                alt="Movie news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-purple-600 text-sm font-semibold">
                  Breaking News
                </span>
                <h3 className="text-xl font-bold mt-2">
                  Upcoming Marvel Phase 5 Revealed
                </h3>
                <p className="text-gray-600 mt-2">
                  Marvel Studios announces exciting lineup for Phase 5 including
                  new movies and Disney+ series...
                </p>
                <div className="flex items-center mt-4 text-gray-500">
                  <FiClock className="mr-2" />
                  <span className="text-sm">2 hours ago</span>
                  <div className="flex items-center ml-6">
                    <FiHeart className="mr-2 cursor-pointer hover:text-red-500" />
                    <span>2.5k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={houseofdragon}
                alt="Series news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  TV Series
                </span>
                <h3 className="text-xl font-bold mt-2">
                  House of Dragon Season 2
                </h3>
                <p className="text-gray-600 mt-2">
                  HBO confirms release date for the highly anticipated second
                  season...
                </p>
                <div className="flex items-center mt-4 text-gray-500">
                  <FiClock className="mr-2" />
                  <span className="text-sm">5 hours ago</span>
                  <div className="flex items-center ml-6">
                    <FiHeart className="mr-2 cursor-pointer hover:text-red-500" />
                    <span>1.8k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="container mx-auto px-4 py-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div>
                <img src={avatar} alt="avatar" className="w-full h-48 object-cover" />
              </div>
              <span className="text-blue-600 text-sm font-semibold">
                Movies
              </span>
              <h3 className="font-bold mt-2">Avatar 3 Production Update</h3>
              <p className="text-sm text-gray-600 mt-1">
                James Cameron shares insights on the progress...
              </p>
              <div className="flex items-center mt-2 text-gray-500 text-sm">
                <FiClock className="mr-1" />
                <span>30 mins ago</span>
              </div>
            </div>
            {/* Add more latest news items */}
          </div>
        </div>

        {/* Featured Stories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={superhero}
                  alt="Featured story"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-purple-600 text-sm font-semibold">
                    Special Feature
                  </span>
                  <h3 className="text-2xl font-bold mt-2">
                    Evolution of Superhero Cinema
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A deep dive into how superhero movies have transformed...
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* Featured side stories */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Upcoming Movie Releases</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Complete list of summer blockbusters...
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Streaming Platform Updates</h3>
                <p className="text-sm text-gray-600 mt-1">
                  New features coming to major platforms...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="container mx-auto px-4 py-8 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-white rounded-lg shadow text-center hover:bg-blue-50">
              <span className="font-semibold">Movies</span>
            </button>
            <button className="p-4 bg-white rounded-lg shadow text-center hover:bg-blue-50">
              <span className="font-semibold">TV Shows</span>
            </button>
            <button className="p-4 bg-white rounded-lg shadow text-center hover:bg-blue-50">
              <span className="font-semibold">Streaming</span>
            </button>
            <button className="p-4 bg-white rounded-lg shadow text-center hover:bg-blue-50">
              <span className="font-semibold">Celebrity</span>
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6">
                Subscribe to our newsletter for the latest entertainment updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800 w-full sm:w-auto"
                />
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
