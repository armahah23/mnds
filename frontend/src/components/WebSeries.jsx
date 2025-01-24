import { useState } from "react";
import webseries from "../assets/data/webseries";
import WebSeriesModal from "./WebSeriesModal";

function WebSeries() {
  const [selectedSeries, setSelectedSeries] = useState(null);
  return (
    <section className="p-4">
      <div>
        <h1 className="text-yellow-500 text-4xl mb-4">Web Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
          {webseries.map((series) => (
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
                Description: {series.smallDescription}
              </p>
              <p className="text-gray-600 ">Released: {series.releaseYear}</p>
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
