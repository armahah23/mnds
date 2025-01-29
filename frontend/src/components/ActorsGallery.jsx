function ActorsGallery() {
  const actors = [
    {
      id: 1,
      name: "Leonardo DiCaprio",
      image: "https://example.com/leonardo_dicaprio.jpg",
      movie_count: 45,
    },
    {
      id: 2,
      name: "Scarlett Johansson",
      image: "https://example.com/scarlett_johansson.jpg",
      movie_count: 50,
    },
    {
      id: 3,
      name: "Rajinikanth",
      image: "https://example.com/rajinikanth.jpg",
      movie_count: 170,
    },
    {
      id: 4,
      name: "Kamal Haasan",
      image: "https://example.com/kamal_haasan.jpg",
      movie_count: 233,
    },
    {
      id: 5,
      name: "Robert Downey Jr.",
      image: "https://example.com/robert_downey_jr.jpg",
      movie_count: 60,
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Popular Actors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {actors.map((item) => (
            <div key={item.id} className="group relative cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gray-700"></div>
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-white font-medium">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.movie_count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActorsGallery;
