export const PRICING_MATRIX = {
  tiers: {
    starter: {
      name: 'Starter',
      baseUSD: 99,
      description: 'Perfect for solopreneurs and small teams',
      features: ['Up to 5 users', 'Basic analytics', 'Email support'],
    },
    pro: {
      name: 'Professional',
      baseUSD: 299,
      description: 'For growing businesses and teams',
      features: ['Up to 25 users', 'Advanced analytics', 'Priority support'],
    },
    enterprise: {
      name: 'Enterprise',
      baseUSD: 999,
      description: 'Unlimited power for your organization',
      features: ['Unlimited users', 'Custom analytics', '24/7 support'],
    },
  },
  currencies: {
    USD: { symbol: '$', multiplier: 1, code: 'USD' },
    INR: { symbol: '₹', multiplier: 83, code: 'INR' },
    EUR: { symbol: '€', multiplier: 0.92, code: 'EUR' },
  },
  annualDiscount: 0.2, // 20% discount when billed annually
};

export function calculatePrice(
  tier: 'starter' | 'pro' | 'enterprise',
  currency: 'USD' | 'INR' | 'EUR',
  billingMode: 'monthly' | 'annual'
): number {
  // Enterprise is "custom pricing"
  if (tier === 'enterprise') return NaN;

  const basePrice = PRICING_MATRIX.tiers[tier].baseUSD;
  const currencyMultiplier = PRICING_MATRIX.currencies[currency].multiplier;

  let finalPrice = basePrice * currencyMultiplier;

  if (billingMode === 'annual') {
    // Apply 20% discount and multiply by 12 months
    finalPrice = finalPrice * (1 - PRICING_MATRIX.annualDiscount) * 12;
  }

  return Math.round(finalPrice);
}

export function formatPrice(
  price: number | null,
  currency: 'USD' | 'INR' | 'EUR'
): string {
  if (isNaN(price as number) || price === null) {
    return 'Custom';
  }

  const symbol = PRICING_MATRIX.currencies[currency].symbol;
  return `${symbol}${(price as number).toLocaleString()}`;
}

export function getPricingTier(tier: 'starter' | 'pro' | 'enterprise') {
  return PRICING_MATRIX.tiers[tier];
}