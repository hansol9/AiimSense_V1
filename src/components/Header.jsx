import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h2>AiimSense</h2>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="mission" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Mission
          </Link>
          <Link 
            to="whychoose" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Why Choose Us
          </Link>
          <Link 
            to="technology" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Technology
          </Link>
          <Link 
            to="application" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Application
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
