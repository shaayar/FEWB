"use client";

import Link from "next/link";

const links = [
  { name: "Platform", href: "#platform" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172B36] text-[#FFC801] font-bold">
            V
          </div>

          <div>
            <p className="font-mono text-lg font-bold tracking-[0.18em] text-[#172B36]">
              VERUM
            </p>

            <p className="-mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
              AI OS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-[#172B36]"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#FFC801] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="group flex items-center gap-2 rounded-full bg-[#172B36] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            Get Started

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </button>
        </div>

        {/* Mobile */}
        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E8E2] md:hidden">

          <span className="flex flex-col gap-1">
            <span className="h-[2px] w-5 bg-[#172B36]" />
            <span className="h-[2px] w-5 bg-[#172B36]" />
            <span className="h-[2px] w-5 bg-[#172B36]" />
          </span>

        </button>

      </div>
    </nav>
  );
}