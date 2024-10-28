// Navbar.jsx
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
      <div className="flex items-center w-full py-4 px-8">
        {/* İlk Div - Butonlar */}
        <div className="flex justify-around w-[60%] mx-auto">
          <button className="text-lg font-medium">Home</button>
          <button className="text-lg font-medium">About</button>
          <button className="text-lg font-medium">Contact</button>
          <button className="text-lg font-medium">Adventure</button>
        </div>
        
        {/* İkinci Div - İkonlar */}
        <div className="flex justify-end w-[40%] pr-4 space-x-4 text-black">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
};

export default Navbar;
