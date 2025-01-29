import bg_container from "../assets/images/bg_container.jpg";

function Header() {
  return (
    <section className="relative w-full mt-4">
      <div className="relative">
        <div
          className="relative min-h-[300px] sm:h-[400px] md:h-[450px] 
          flex justify-center items-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(17,24,39,0.8)), url(${bg_container})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="text-center space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[72px] 
                font-bold text-white opacity-90 transition-all duration-300 
                hover:opacity-100 main_header">
                <span className="block mb-2 sm:mb-4 animate-fade-in-down">
                  Welcome to the
                </span>
                <span className="inline-block bg-gradient-to-r from-orange-300 
                  via-orange-400 to-orange-600 text-transparent bg-clip-text 
                  text-8xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wider 
                  font-extrabold transform transition-transform duration-300 
                  hover:scale-105">
                  MndS
                </span>
              </h1>
              <h3 className="h3 text-2xl text-white">Your Ultimate Movie & Series Destination</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;