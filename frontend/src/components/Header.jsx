import bg_container from "../assets/images/bg_container.jpg";

function Header() {
  return (
    <section>
      <div>
        <div
          className="bg-gray-800 text-white py-8 h-[400px] flex justify-center items-center"
          style={{ backgroundImage: `url(${bg_container})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-[48px] font-bold text-center main_header">
              Welcome to the <br />
              <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text text-5xl md:text-8xl tracking-wider">
                MndS
              </span>
            </h1>
            <h2 className="text-center text-lg md:text-2xl tracking-wide">Movie and Web Series</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;