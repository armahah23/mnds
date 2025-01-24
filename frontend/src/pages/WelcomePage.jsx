import logo from '../assets/images/logo.jpeg'
import cinemaBackground from '../assets/images/cinema-bg.jpg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBgPosition({
        x: (e.clientX / window.innerWidth) * 5,
        y: (e.clientY / window.innerHeight) * 5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cinemaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(1.1) translate(${bgPosition.x}px, ${bgPosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 z-10 bg-black bg-opacity-60"
      />

      {/* Content Container */}
      <div className="relative z-20 pt-4 flex flex-col items-center justify-center text-white">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-64 h-64 object-contain mb-6 animate-fade-in"
        />

        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Movie & Web Series</h1>
          <p className="text-xl mb-2 max-w-2xl">
            Discover and explore the ultimate entertainment platform for movies and web series
          </p>
        </div>

        <div className="flex gap-8">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold
                       hover:bg-purple-600 hover:text-white transition-all duration-300
                       transform hover:scale-105 shadow-lg"
          >
            User
          </button>
          <button
            onClick={() => navigate('/publisher')}
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold
                       hover:bg-white hover:text-purple-600 transition-all duration-300
                       transform hover:scale-105 shadow-lg"
          >
            Publisher
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage