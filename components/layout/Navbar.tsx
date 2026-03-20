'use client';

import { Magnet } from '@/components/bits/Magnet';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'about.tsx' },
    { href: '/skills', label: 'skills.ts' },
    { href: '/projects', label: 'projects.ts' },
    { href: '/experience', label: 'changelog.md' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-jetbrains font-bold text-xl tracking-tighter group flex items-center">
          <span className="text-white opacity-50 group-hover:opacity-100 transition-opacity">&lt;</span>
          <span className="text-brand-green mx-1">Guduri</span>
          <span className="text-white opacity-50 group-hover:opacity-100 transition-opacity">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-jetbrains text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-2 py-1 transition-colors duration-300 ${
                  isActive ? 'text-brand-green' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-brand-green animate-pulse">
                    &gt;
                  </span>
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <Magnet>
          <Link 
            href="/contact"
            className={`font-jetbrains text-sm px-4 py-2 rounded-sm transition-colors backdrop-blur-sm ${
              pathname === '/contact'
                ? 'border border-brand-green text-brand-green bg-brand-green/10'
                : 'border border-white/20 text-white hover:border-brand-violet hover:text-brand-violet bg-white/5'
            }`}
          >
            ./contact
          </Link>
        </Magnet>
      </div>
    </nav>
  );
};
