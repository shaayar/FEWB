import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-oceanic text-white py-2xl px-lg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-2xl">
          <h3 className="font-mono text-2xl md:text-3xl mb-lg font-bold">
            Ready to Know Exactly Where You Stand?
          </h3>
          <button className="bg-forsythia text-nocturnal px-xl py-md font-inter font-semibold rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 mb-xl">
            Start Your Free Trial
          </button>
        </div>

        {/* Footer Navigation */}
        <nav className="flex justify-center gap-xl flex-wrap font-inter text-sm mb-2xl pb-2xl border-t border-oceanic border-opacity-20">
          <a href="#features" className="hover:text-forsythia transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-forsythia transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-forsythia transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-forsythia transition-colors">
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-center font-inter text-xs opacity-75">
          © 2026 VERUM AI Platform. Know exactly where you stand.
        </p>
      </div>
    </footer>
  );
}