import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.icon}>
          <Sparkles size={28} color="white" />
        </div>
        <h2 className={styles.title}>
          Ready to supercharge
          <br />
          <span className={styles.gradient}>your team?</span>
        </h2>
        <p className={styles.subtitle}>
          Join over 50,000 teams already using Nexus to ship faster and scale smarter.
          Start free — no credit card required.
        </p>
        <div className={styles.actions}>
          <a href="#pricing" className={styles.btnPrimary}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <a href="#" className={styles.btnSecondary}>
            Talk to sales
          </a>
        </div>
        <p className={styles.note}>Free forever plan available · Setup in under 5 minutes</p>
      </div>
    </section>
  );
}
