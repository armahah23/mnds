import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="bg-gradient-to-bl from-yellow-600 to-black py-4 px-6 flex justify-between items-center text-white ">
      <div className="flex items-center w-1/2">
        <img src="" alt="logo" />
      </div>
      <div className="w-1/2 py-2">
        <ul className="flex justify-end items-center gap-4 navStyle">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/newfeed"><li>New Feed</li></Link>
          <Link to="/login" className="btn"><li>Login</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
