import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import styles from './Navbar.module.css';
import type { NavLink } from '@/types';

const links: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <Zap size={22} className={styles.logoIcon} />
          <span>Nexus</span>
        </a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#" className={styles.btnGhost}>Sign in</a>
          <a href="#pricing" className={styles.btnPrimary}>Get started</a>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
