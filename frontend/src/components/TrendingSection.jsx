import thedarkknight from "../assets/images/thedarkknight.jpg";
import inception from "../assets/images/inception.jpeg";
import pulpfiction from "../assets/images/pulpfiction.jpeg";
import godfather from "../assets/images/thegodfather.jpg";
import fightclub from "../assets/images/fightclub.jpg";

function TrendingSection() {
  const trendingContent = [
    {
      id: 1,
      title: "The Dark Knight",
      image: thedarkknight,
      rating: 4.9,
      duration: "2h 32m",
      genre: "Action",
      year: "2008",
    },
    {
      id: 2,
      title: "Inception",
      image: inception,
      rating: 4.8,
      duration: "2h 28m",
      genre: "Sci-Fi",
      year: "2010",
    },
    {
      id: 3,
      title: "Pulp Fiction",
      image: pulpfiction,
      rating: 4.7,
      duration: "2h 34m",
      genre: "Crime",
      year: "1994",
    },
    {
      id: 4,
      title: "The Godfather",
      image: godfather,
      rating: 4.9,
      duration: "2h 55m",
      genre: "Crime",
      year: "1972",
    },
    {
      id: 5,
      title: "Fight Club",
      image: fightclub,
      rating: 4.8,
      duration: "2h 19m",
      genre: "Drama",
      year: "1999",
    },
  ];

  return (
    <section className="py-12 bg-gray-800 border-b-8 border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Trending This Week
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {trendingContent.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] bg-gray-700 rounded-lg overflow-hidden"
            >
              <div className="h-40 bg-gray-600">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">⭐ {item.rating}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">{item.duration}</span>
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
