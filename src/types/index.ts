export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  accent: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type PricingPlan = {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export type Stat = {
  id: number;
  value: string;
  label: string;
};
