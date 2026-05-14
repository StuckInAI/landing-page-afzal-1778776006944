import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Zap size={20} className={styles.logoIcon} />
              <span>Nexus</span>
            </a>
            <p className={styles.tagline}>
              Building the tools that power the next generation of teams.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter" className={styles.social}><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub" className={styles.social}><Github size={18} /></a>
              <a href="#" aria-label="LinkedIn" className={styles.social}><Linkedin size={18} /></a>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.colTitle}>Product</h4>
              <ul>
                <li><a href="#features" className={styles.colLink}>Features</a></li>
                <li><a href="#pricing" className={styles.colLink}>Pricing</a></li>
                <li><a href="#" className={styles.colLink}>Changelog</a></li>
                <li><a href="#" className={styles.colLink}>Roadmap</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul>
                <li><a href="#" className={styles.colLink}>About</a></li>
                <li><a href="#" className={styles.colLink}>Blog</a></li>
                <li><a href="#" className={styles.colLink}>Careers</a></li>
                <li><a href="#" className={styles.colLink}>Press</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.colTitle}>Legal</h4>
              <ul>
                <li><a href="#" className={styles.colLink}>Privacy</a></li>
                <li><a href="#" className={styles.colLink}>Terms</a></li>
                <li><a href="#" className={styles.colLink}>Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
          <p className={styles.copy}>Made with ♥ for teams everywhere</p>
        </div>
      </div>
    </footer>
  );
}
