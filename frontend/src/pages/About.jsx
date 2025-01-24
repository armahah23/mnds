import HomeFooter from "../components/HomeFooter";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-4 py-8 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About MNDS
          </h1>
          <p className="text-gray-300 mt-4">
            Your Ultimate Movie & Series Destination
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12 px-4">
          {/* Mission Section */}
          <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Our Story
            </h2>
            <p className="text-gray-300 leading-relaxed">
              MNDS (Movies & Series) was born from a passion for entertainment.
              We curate and deliver the best streaming experience, bringing
              together movies and series from across the globe.
            </p>
          </section>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900 to-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                500+
              </div>
              <p className="text-gray-300">Movies Available</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900 to-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl font-bold text-pink-400 mb-2">200+</div>
              <p className="text-gray-300">TV Series</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900 to-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                50k+
              </div>
              <p className="text-gray-300">Happy Users</p>
            </div>
          </div>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                HD Streaming
              </h3>
              <p className="text-gray-300">
                Experience cinema-quality streaming with our HD and 4K options.
              </p>
            </div>
            <div className="bg-gradient-to-bl from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">
                Multiple Devices
              </h3>
              <p className="text-gray-300">
                Watch your favorite content across all your devices seamlessly.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Regular Updates
              </h3>
              <p className="text-gray-300">
                New content added weekly to keep you entertained.
              </p>
            </div>
            <div className="bg-gradient-to-tl from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Smart Recommendations
              </h3>
              <p className="text-gray-300">
                Personalized content suggestions based on your preferences.
              </p>
            </div>
          </section>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default About;
