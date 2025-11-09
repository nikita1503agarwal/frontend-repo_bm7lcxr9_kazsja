import React from 'react';
import { Banknote, User } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <Banknote className="h-5 w-5 text-blue-400" />
          <span className="font-semibold tracking-wide">PayTranche</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#supplier" className="hover:text-white">Suppliers</a>
          <a href="#financier" className="hover:text-white">Financiers</a>
          <a href="#chat" className="hover:text-white">PayBot</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
          <User className="h-4 w-4" /> Sign in
        </button>
      </div>
    </header>
  );
}
