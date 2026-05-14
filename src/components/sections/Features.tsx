import { Zap, Shield, BarChart3, Users, Code2, Globe } from 'lucide-react';
import styles from './Features.module.css';
import type { Feature } from '@/types';

const features: Feature[] = [
  {
    id: 1,
    icon: 'zap',
    title: 'Lightning Fast',
    description: 'Sub-100ms response times across all operations. Our edge network ensures your team never waits.',
    accent: '#6C63FF',
  },
  {
    id: 2,
    icon: 'shield',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, GDPR, and HIPAA compliant. End-to-end encryption and role-based access control.',
    accent: '#43D9AD',
  },
  {
    id: 3,
    icon: 'chart',
    title: 'Advanced Analytics',
    description: 'Real-time dashboards with custom metrics, funnels, and automated insights powered by AI.',
    accent: '#FF6584',
  },
  {
    id: 4,
    icon: 'users',
    title: 'Team Collaboration',
    description: 'Unified workspaces with real-time editing, comments, and built-in approval workflows.',
    accent: '#F59E0B',
  },
  {
    id: 5,
    icon: 'code',
    title: 'Developer-First',
    description: 'Rich APIs, webhooks, SDKs in 12+ languages, and full CI/CD integration support.',
    accent: '#8B85FF',
  },
  {
    id: 6,
    icon: 'globe',
    title: 'Global Infrastructure',
    description: '28 data centers worldwide with automatic failover and 99.9% uptime guarantee.',
    accent: '#34D399',
  },
];

function FeatureIcon({ icon, accent }: { icon: string; accent: string }) {
  const props = { size: 24, color: accent };
  switch (icon) {
    case 'zap': return <Zap {...props} />;
    case 'shield': return <Shield {...props} />;
    case 'chart': return <BarChart3 {...props} />;
    case 'users': return <Users {...props} />;
    case 'code': return <Code2 {...props} />;
    case 'globe': return <Globe {...props} />;
    default: return <Zap {...props} />;
  }
}

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.pill}>Features</div>
          <h2 className={styles.title}>
            Everything your team needs
            <br />
            <span className={styles.gradient}>to move faster</span>
          </h2>
          <p className={styles.subtitle}>
            Nexus combines the tools you love into one cohesive platform, eliminating context-switching and boosting output.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feat) => (
            <div key={feat.id} className={styles.card} style={{ '--accent': feat.accent } as React.CSSProperties}>
              <div className={styles.iconWrap} style={{ background: `${feat.accent}18`, border: `1px solid ${feat.accent}30` }}>
                <FeatureIcon icon={feat.icon} accent={feat.accent} />
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
