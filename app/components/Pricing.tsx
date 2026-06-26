'use client';

import React, { useEffect } from 'react';
import { PRICING_MATRIX, calculatePrice, formatPrice } from '@/lib/pricing';

export default function Pricing() {
  useEffect(() => {
    const updatePrices = () => {
      const currencySelect = document.getElementById('currency-select') as HTMLSelectElement;
      const billingToggle = document.getElementById('billing-toggle') as HTMLInputElement;

      if (!currencySelect || !billingToggle) return;

      const currency = currencySelect.value as 'USD' | 'INR' | 'EUR';
      const isAnnual = billingToggle.checked;
      const billingMode = isAnnual ? 'annual' : 'monthly';

      // UPDATE ONLY TEXT NODES — no parent re-render
      (['starter', 'pro'] as const).forEach((tier) => {
        const priceEl = document.querySelector(`[data-price="${tier}"]`);
        if (priceEl) {
          const price = calculatePrice(tier, currency, billingMode);
          priceEl.textContent = formatPrice(price, currency);
        }
      });
    };

    const currencySelect = document.getElementById('currency-select');
    const billingToggle = document.getElementById('billing-toggle');

    currencySelect?.addEventListener('change', updatePrices);
    billingToggle?.addEventListener('change', updatePrices);

    // Initialize prices on mount
    updatePrices();

    return () => {
      currencySelect?.removeEventListener('change', updatePrices);
      billingToggle?.removeEventListener('change', updatePrices);
    };
  }, []);

  return (
    <section id="pricing" className="w-full bg-arctic-powder py-2xl px-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl text-nocturnal text-center mb-lg font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="font-inter text-center text-gray-600 max-w-2xl mx-auto mb-2xl">
          Choose the plan that fits your needs. All plans include core automation features and email support.
        </p>

        {/* Pricing Controls */}
        <div className="flex justify-center gap-md md:gap-lg mb-2xl flex-wrap items-end">
          <div>
            <label className="block text-sm font-inter text-nocturnal font-semibold mb-sm">
              Currency
            </label>
            <select
              id="currency-select"
              defaultValue="USD"
              className="px-md py-sm border-2 border-mystic-mint rounded-md bg-white text-nocturnal font-inter font-medium hover:border-forsythia transition-colors"
            >
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <label className="flex items-center gap-sm cursor-pointer">
            <input
              type="checkbox"
              id="billing-toggle"
              className="w-5 h-5 rounded accent-forsythia"
            />
            <span className="font-inter text-sm md:text-base text-nocturnal font-medium">
              Annual Billing <span className="text-saffron font-bold">(Save 20%)</span>
            </span>
          </label>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {(['starter', 'pro', 'enterprise'] as const).map((tier) => {
            const tierData = PRICING_MATRIX.tiers[tier];
            return (
              <article
                key={tier}
                className="bg-white border-2 border-mystic-mint rounded-lg p-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <h3 className="font-mono text-2xl text-nocturnal mb-sm font-bold">
                  {tierData.name}
                </h3>
                <p className="font-inter text-sm text-gray-600 mb-lg flex-grow">
                  {tierData.description}
                </p>

                {/* Price — Updated by vanilla JS */}
                <div className="mb-lg">
                  <span data-price={tier} className="text-4xl font-mono font-bold text-forsythia">
                    {/* Dynamically updated */}
                  </span>
                  {tier !== 'enterprise' && (
                    <span className="font-inter text-sm text-gray-600">/month</span>
                  )}
                </div>

                {/* Features List */}
                <ul className="mb-lg space-y-sm flex-grow">
                  {tierData.features.map((feature, idx) => (
                    <li key={idx} className="font-inter text-sm text-gray-700 flex items-start gap-sm">
                      <span className="text-forsythia font-bold mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-md rounded-md font-inter font-semibold transition-all duration-200 ${
                    tier === 'pro'
                      ? 'bg-forsythia text-nocturnal hover:shadow-lg'
                      : 'bg-nocturnal text-white hover:bg-oceanic'
                  }`}
                >
                  Choose {tierData.name}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}