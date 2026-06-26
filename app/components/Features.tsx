'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const FEATURES = [
  {
    id: 0,
    title: 'Real-Time Automation',
    description: 'Automate repetitive workflows and financial tracking with precision. Save hours every week.',
    icon: 'chart-pie',
  },
  {
    id: 1,
    title: 'Multi-Currency Support',
    description: 'Track finances seamlessly across USD, INR, and EUR with real-time conversion rates.',
    icon: 'cube-16-solid',
  },
  {
    id: 2,
    title: 'AI-Powered Analytics',
    description: 'Get actionable insights from your financial data with machine learning-driven recommendations.',
    icon: 'arrow-trending-up',
  },
];

export default function Features() {
  const activeFeatureRef = useRef<number | null>(null);

  useEffect(() => {
    // Track active bento card on hover (desktop only)
    document.querySelectorAll('[data-layout="bento"] [data-feature]').forEach((el, idx) => {
      el.addEventListener('mouseenter', () => {
        activeFeatureRef.current = idx;
      });
    });

    // On resize, restore active feature in accordion
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile && activeFeatureRef.current !== null) {
        const detailsEl = document.querySelector(
          `[data-layout="accordion"] [data-feature="${activeFeatureRef.current}"]`
        ) as HTMLDetailsElement;
        if (detailsEl) {
          detailsEl.open = true;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="features" className="w-full bg-white py-2xl px-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl text-nocturnal text-center mb-lg font-bold">
          Powerful Features Built for Precision
        </h2>
        <p className="font-inter text-center text-gray-600 max-w-2xl mx-auto mb-2xl">
          Everything you need to understand your finances at a glance.
        </p>

        {/* DESKTOP: 3-Column Bento */}
        <div
          data-layout="bento"
          className="hidden lg:grid grid-cols-3 gap-lg"
        >
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              data-feature={feature.id}
              className="bg-arctic-powder border-2 border-mystic-mint rounded-lg p-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <Image
                src={`/svgs/${feature.icon}.svg`}
                alt={feature.title}
                width={40}
                height={40}
                className="mb-lg"
              />
              <h3 className="font-mono text-xl text-nocturnal mb-md font-bold">
                {feature.title}
              </h3>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* TABLET: 2-Column Bento */}
        <div
          data-layout="bento-tablet"
          className="hidden md:grid lg:hidden grid-cols-2 gap-lg"
        >
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              data-feature={feature.id}
              className="bg-arctic-powder border-2 border-mystic-mint rounded-lg p-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <Image
                src={`/svgs/${feature.icon}.svg`}
                alt={feature.title}
                width={32}
                height={32}
                className="mb-md"
              />
              <h3 className="font-mono text-lg text-nocturnal mb-sm font-bold">
                {feature.title}
              </h3>
              <p className="font-inter text-xs text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* MOBILE: Accordion */}
        <div data-layout="accordion" className="md:hidden space-y-md">
          {FEATURES.map((feature) => (
            <details
              key={feature.id}
              data-feature={feature.id}
              className="bg-arctic-powder border-2 border-mystic-mint rounded-lg p-lg cursor-pointer group open:bg-mystic-mint open:bg-opacity-30 transition-colors"
            >
              <summary className="flex items-center gap-md font-mono text-nocturnal font-bold select-none text-lg">
                <Image
                  src={`/svgs/${feature.icon}.svg`}
                  alt=""
                  width={24}
                  height={24}
                />
                {feature.title}
                <svg
                  className="ml-auto w-5 h-5 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <p className="font-inter text-sm text-gray-600 mt-md pl-8">
                {feature.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}