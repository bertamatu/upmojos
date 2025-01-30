'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>UPMOJOS</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Navigation menu */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
} 