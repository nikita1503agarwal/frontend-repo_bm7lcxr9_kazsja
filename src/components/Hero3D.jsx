import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradients for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
        <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
          Fintech • MSME Working Capital • Escrow
        </span>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Finance MSME Growth with Intelligent Tranches
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80 md:mt-4 md:text-base">
          Suppliers upload invoices, compare funding offers, and join pooled tranches.
          Financiers discover, bid, and monitor escrow in real time.
        </p>
        <div className="mt-6 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => handleScrollTo('supplier')}
            className="w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90 sm:w-auto"
          >
            For Suppliers
          </button>
          <button
            onClick={() => handleScrollTo('financier')}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
          >
            For Financiers
          </button>
        </div>
      </div>
    </section>
  );
}
