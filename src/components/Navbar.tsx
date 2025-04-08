import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-green-700/95 py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center"> {/* Replace a href="#" with Link */}
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.png`} 
            alt="Logo" 
            className={`transition-all duration-300 ${isSticky ? 'w-24' : 'w-32'}`}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={`
          fixed top-0 right-0 h-full w-64 bg-green-700 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-start p-8 pt-16">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { to: "/", text: "Beranda" },
    { to: "/tentang-kami", text: "Tentang Kami" },
    { to: "/informasi", text: "Informasi" },
    { to: "/produk", text: "Produk" },
    { to: "/kontak", text: "Kontak" },
  ];

  const baseClasses = "text-white hover:text-green-200 transition-colors duration-300";
  const mobileClasses = "block py-3";
  const desktopClasses = "relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-green-400 after:transition-all hover:after:w-full";

  return (
    <div className="flex items-center space-x-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to} // Use Link's to attribute
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
          onClick={onClick}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;