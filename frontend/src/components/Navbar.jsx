import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-bl from-yellow-600 to-black py-4 px-6 flex justify-between items-center text-white">
      <div className="flex items-center w-1/2">
        <img src="" alt="logo" />
      </div>
      <div className="w-1/2 py-2 flex justify-end items-center">
        <div className="hidden md:flex items-center gap-4 navStyle">
          {user ? (
            <>
              <Link to="/">Home</Link>
              {user.role === "publisher" ? (
                <>
                <Link to="/publisher/about">About</Link>
              <Link to="/publisher/newsfeed">New Feed</Link>
              </>
              ) : (       
                <>       
              <Link to="/about">About</Link>
              <Link to="/newfeed">New Feed</Link>
              </>)
              }
              <button onClick={logout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-yellow-700 w-full p-4 z-40">
          <ul className="flex flex-col items-center gap-4 navStyle">
            {user ? (
              <>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
                <Link to="/newfeed" onClick={toggleMenu}>
                  New Feed
                </Link>
                <button
                  onClick={() => {
                    toggleMenu();
                    logout();
                  }}
                  className="btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={toggleMenu} className="btn">
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
