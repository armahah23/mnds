import vanangaan from "../assets/images/vanangaan.jpg";
import gameChanger from "../assets/images/gamechanger.jpeg";
import madhaGajaRaja from "../assets/images/mathagajaraja.jpeg";

function UpcomingRelease() {
  const nextRelease = [
    {
      id: 1,
      title: "Vanangaan",
      release_date: "2025-01-10",
      description:
        "Directed by Bala, 'Vanangaan' stars Arun Vijay in a gripping action drama set in Kanyakumari, revolving around a shocking and gruesome murder case.",
      image: { vanangaan },
    },
    {
      id: 2,
      title: "Game Changer",
      release_date: "2025-01-10",
      description:
        "'Game Changer' is a political action thriller directed by Shankar, featuring Ram Charan and Kiara Advani. The film delves into political dynamics and power struggles.",
      image: { gameChanger },
    },
    {
      id: 3,
      title: "Madha Gaja Raja",
      release_date: "2025-01-12",
      description:
        "After a long delay, 'Madha Gaja Raja' is an action-comedy directed by Sundar C, starring Vishal, Santhanam, and Anjali. The film promises a blend of high-octane action and humor.",
      image: { madhaGajaRaja },
    },
  ];

  return (
    <section className="py-12 bg-gray-800 mb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Upcoming Releases
        </h2>
        <div className="space-y-4">
          {nextRelease.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 bg-gray-700 p-4 rounded-lg"
            >
              <div className="w-full md:w-48 h-32 bg-gray-600 rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-yellow-600 text-white text-sm rounded">
                    Coming Soon
                  </span>
                  <span className="text-gray-400">{item.release_date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingRelease;
