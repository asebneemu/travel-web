// Navbar.jsx
import { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // 100px veya istediğiniz bir mesafede sabitlenmesini sağlayabilirsiniz
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <div
        className={`flex items-center w-full py-4 px-8 bg-white ${
          isFixed ? 'fixed top-0 left-0 z-10 shadow-md' : ''
        }`}
      >
        {/* İlk Div - Butonlar */}
        <div className="flex justify-around w-[60%] mx-auto">
          <button className="text-xl font-medium">Home</button>
          <button className="text-xl font-medium">About</button>
          <button className="text-xl font-medium">Contact</button>
          <button className="text-xl font-medium">Adventure</button>
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
