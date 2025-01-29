import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function HomeFooter() {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">MndS</h2>
            <p>123 Movie Lane, Film City, CA 12345</p>
            <p>Contact: (123) 456-7890</p>
            <p>Email: info@mnds.com</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Partners</h3>
            <ul className="list-disc list-inside">
              <li>GEO Cenima</li>
              <li>Star Cinematic</li>
              <li>Marvel</li>
              <li>Red Giant</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="list-disc list-inside">
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-orange-500">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
        <div className="text-center mt-8 bg-black py-1">
          <p>&copy; 2023 MndS. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default HomeFooter;