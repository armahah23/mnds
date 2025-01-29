import Navbar from "../components/Navbar"
import Header from "../components/Header"
import HomeFooter from "../components/HomeFooter"
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import WebSeries from "../components/WebSeries";
import TrendingSection from "../components/TrendingSection";
import ActorsGallery from "../components/ActorsGallery";
import UpcomingRelease from "../components/UpcomingRelease";


function Home() {
  const [activeTab, setActiveTab] = useState('movies');

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      {/* header design */}
      <Header />
      <div className="flex justify-center gap-4 p-4 bg-yellow-700 mt-2">
        <button className="btn" onClick={() => setActiveTab('movies')}>Movies</button>
        <button className="btn" onClick={() => setActiveTab('webseries')}>Web Series</button>
      </div>
      {activeTab === 'movies' ? <MovieCard /> : <WebSeries />}

      {/* Trending Section */}
      <TrendingSection />

      {/* Popular Actors */}
      <ActorsGallery />

      {/* Upcoming Releases */}
      <UpcomingRelease />

      {/* Footer */}
      <HomeFooter />
    </div>
  )
}

export default Home
