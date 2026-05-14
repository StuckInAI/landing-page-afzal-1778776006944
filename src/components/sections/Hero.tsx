import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

const badges = ['SOC 2 Certified', 'GDPR Compliant', '99.9% Uptime'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.gridOverlay} />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Introducing Nexus 2.0 — now with AI</span>
          <ArrowRight size={14} />
        </div>

        <h1 className={styles.heading}>
          Build Better Products,
          <br />
          <span className={styles.gradient}>Insanely Fast</span>
        </h1>

        <p className={styles.subheading}>
          Nexus brings your team's workflows, data, and tools into one powerful platform.
          Ship faster, collaborate smarter, and scale with confidence.
        </p>

        <div className={styles.ctas}>
          <a href="#pricing" className={styles.btnPrimary}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <button className={styles.btnSecondary}>
            <span className={styles.playIcon}><Play size={14} fill="currentColor" /></span>
            Watch demo
          </button>
        </div>

        <div className={styles.trust}>
          {badges.map((badge) => (
            <div key={badge} className={styles.trustBadge}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dots}>
                <span /><span /><span />
              </div>
              <div className={styles.dashboardTitle}>nexus / workspace</div>
            </div>
            <div className={styles.dashboardBody}>
              <div className={styles.sidebar}>
                {['Dashboard', 'Projects', 'Analytics', 'Team', 'Settings'].map((item, i) => (
                  <div key={item} className={`${styles.sidebarItem} ${i === 0 ? styles.active : ''}`}>{item}</div>
                ))}
              </div>
              <div className={styles.content}>
                <div className={styles.statRow}>
                  {[{v:'2,847', l:'Active Users'},{v:'98.4%', l:'Satisfaction'},{v:'4.2M', l:'Events/day'}].map(s => (
                    <div key={s.l} className={styles.statCard}>
                      <div className={styles.statVal}>{s.v}</div>
                      <div className={styles.statLabel}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.chartArea}>
                  <div className={styles.chartBars}>
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.floatCard1}>
            <div className={styles.floatIcon}>🚀</div>
            <div>
              <div className={styles.floatTitle}>Deployment done</div>
              <div className={styles.floatSub}>v2.4.1 is live</div>
            </div>
          </div>

          <div className={styles.floatCard2}>
            <div className={styles.floatIcon}>⚡</div>
            <div>
              <div className={styles.floatTitle}>+124% faster</div>
              <div className={styles.floatSub}>Build time reduced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
