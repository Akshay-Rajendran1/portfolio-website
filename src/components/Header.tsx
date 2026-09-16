import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

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
      className={`${styles.header} ${isScrolled ? `glass ${styles.headerScrolled}` : styles.headerTop}`}
    >
      <div className={styles.logo}>
        Akshay Rajendran<span className="text-accent">.</span>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.desktopNav}>
        <ul>
          <li><a href="#home" className={styles.navLink}>Home</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          <li>
            <button onClick={toggleTheme} className={`btn-outline ${styles.iconButton}`} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li className={styles.profilePicWrapper}>
            <img 
              src="/profile.jpg" 
              alt="Akshay Rajendran" 
              className={styles.profilePic}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <div className={styles.mobileToggle}>
          <img 
            src="/profile.jpg" 
            alt="Akshay Rajendran" 
            className={styles.mobileProfilePic}
          />
         <button onClick={toggleTheme} className={`btn-outline ${styles.mobileIconButton}`} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={styles.hamburgerBtn}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`glass ${styles.mobileMenu}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};
