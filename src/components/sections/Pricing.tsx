import { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import styles from './Pricing.module.css';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects just getting started.',
    features: [
      'Up to 3 projects',
      '5 team members',
      '10GB storage',
      'Basic analytics',
      'Community support',
      'API access',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing teams that need more power, collaboration, and insights.',
    features: [
      'Unlimited projects',
      '25 team members',
      '250GB storage',
      'Advanced analytics + AI',
      'Priority support',
      'Custom webhooks',
      'SSO & SAML',
      'Audit logs',
    ],
    cta: 'Start Pro trial',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations that need maximum scale, security, and control.',
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Unlimited storage',
      'Custom AI models',
      'Dedicated support (24/7)',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.pill}>Pricing</div>
          <h2 className={styles.title}>
            Simple, transparent
            <br />
            <span className={styles.gradient}>pricing for all teams</span>
          </h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprise bills. Cancel anytime.
          </p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.toggleActive : styles.toggleInactive}>Monthly</span>
            <button
              className={`${styles.toggleSwitch} ${annual ? styles.toggleOn : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
            >
              <span className={styles.toggleKnob} />
            </button>
            <span className={annual ? styles.toggleActive : styles.toggleInactive}>
              Annual <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}>
              {plan.highlighted && (
                <div className={styles.popularBadge}>
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {plan.price === 'Custom'
                    ? 'Custom'
                    : annual && plan.price !== '$0'
                    ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}`
                    : plan.price}
                </span>
                <span className={styles.period}>/ {plan.period}</span>
              </div>
              <p className={styles.desc}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={15} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`${styles.cta} ${plan.highlighted ? styles.ctaPrimary : styles.ctaSecondary}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
