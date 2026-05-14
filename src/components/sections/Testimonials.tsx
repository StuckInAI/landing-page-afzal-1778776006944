import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Pulsar AI',
    avatar: 'SC',
    quote: 'Nexus cut our deployment cycle from 3 weeks to 2 days. The analytics alone justified the price. Our team can\'t imagine going back.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Engineering Lead',
    company: 'Vertico',
    avatar: 'MR',
    quote: 'The developer experience is unmatched. Webhooks, APIs, everything just works. We integrated in under a day and shipped faster than ever.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Aisha Okonkwo',
    role: 'Head of Product',
    company: 'Streamline',
    avatar: 'AO',
    quote: 'Finally, a platform that respects how product teams actually work. The collaboration features are leagues ahead of anything else.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tom Hargreaves',
    role: 'CEO',
    company: 'Foundry Labs',
    avatar: 'TH',
    quote: 'We scaled from 10 to 500 users without a single infrastructure headache. Nexus just handles it — the reliability is extraordinary.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Priya Mehta',
    role: 'VP Engineering',
    company: 'Stackify',
    avatar: 'PM',
    quote: 'The AI-powered insights surfaced issues we didn\'t even know we had. Prevented a major incident last quarter. Worth every penny.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lucas Fournier',
    role: 'DevOps Lead',
    company: 'Orbit Systems',
    avatar: 'LF',
    quote: 'Global infrastructure with 28 regions. Our international users now have sub-50ms latency everywhere. The team is absolutely thrilled.',
    rating: 5,
  },
];

const avatarColors = [
  '#6C63FF', '#FF6584', '#43D9AD', '#F59E0B', '#8B85FF', '#34D399',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.pill}>Testimonials</div>
          <h2 className={styles.title}>
            Loved by teams at
            <br />
            <span className={styles.gradient}>world-class companies</span>
          </h2>
          <p className={styles.subtitle}>
            Don't take our word for it — hear from the teams building the future with Nexus.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.id} className={styles.card}>
              <Quote size={24} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} className={styles.star} fill="currentColor" />
                ))}
              </div>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.meta}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
