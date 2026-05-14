import styles from './Stats.module.css';
import type { Stat } from '@/types';

const stats: Stat[] = [
  { id: 1, value: '50K+', label: 'Teams worldwide' },
  { id: 2, value: '4.9★', label: 'Average rating' },
  { id: 3, value: '99.9%', label: 'Uptime SLA' },
  { id: 4, value: '2.4B+', label: 'Events processed' },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.item}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
