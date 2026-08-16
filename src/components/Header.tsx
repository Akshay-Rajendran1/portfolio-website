import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={isScrolled ? 'glass' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em' }}>
        Akshay Rajendran<span className="text-accent">.</span>
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'none' }} className="desktop-nav">
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          <li><a href="#home" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Home</a></li>
          <li><a href="#projects" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Projects</a></li>
          <li><a href="#contact" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Contact</a></li>
          <li>
            <button onClick={toggleTheme} className="btn-outline" style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/profile.jpg" 
              alt="Akshay Rajendran" 
              style={{ 
                display: 'block',
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: '2px solid var(--accent-color)' 
              }}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <div className="mobile-toggle" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <img 
            src="/profile.jpg" 
            alt="Akshay Rajendran" 
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '2px solid var(--accent-color)' 
            }}
          />
         <button onClick={toggleTheme} className="btn-outline" style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="glass" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
