import { useState, useEffect } from "react";
import axios from "axios";
import WebSeriesModal from "./WebSeriesModal";

function WebSeries() {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        // Filter posts where type is "webseries"
        const seriesPosts = response.data.filter(post => post.type === "webseries");
        setSeries(seriesPosts);
      } catch (error) {
        console.error("Error fetching web series:", error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <section className="p-4">
      <div>
        <h1 className="text-yellow-500 text-4xl mb-4">Web Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
          {series.map((series) => (
            <div
              key={series.id}
              className="p-4 border rounded shadow w-full bg-blue-100"
              onClick={() => setSelectedSeries(series)}
            >
              <div className="rounded-lg p-4 border-orange-500 border-2 mb-1">
                <img
                  src={series.image}
                  alt={series.title}
                  className="h-[200px] w-full"
                />
              </div>
              <h2 className="text-black text-xl">Title: {series.title}</h2>
              <p className="text-gray-600 ">
                Description: {series.description}
              </p>
              <p className="text-gray-600 ">Released: {series.releasedYear}</p>
              <p className="text-gray-600 ">Directed: {series.directedBy}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedSeries && (
        <WebSeriesModal
          series={selectedSeries}
          onClose={() => setSelectedSeries(null)}
        />
      )}
    </section>
  );
}

export default WebSeries;