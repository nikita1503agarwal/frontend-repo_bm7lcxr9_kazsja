import React from 'react';
import { Search, LineChart, ShieldCheck } from 'lucide-react';

export default function FinancierDashboardPreview() {
  const items = [
    {
      icon: Search,
      title: 'Deal Discovery',
      desc: 'Filter by sector, credit grade, payment terms, and escrow rules.'
    },
    {
      icon: LineChart,
      title: 'Bid & Allocate',
      desc: 'Place competitive bids, set limits, and auto-join tranches.'
    },
    {
      icon: ShieldCheck,
      title: 'Portfolio & Escrow',
      desc: 'Monitor repayments, covenants, and escrow balances live.'
    }
  ];

  return (
    <section id="financier" className="px-4 py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">For Financiers</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Discover compliant invoice pools, bid into tranches, and manage a real-time portfolio with escrow protections.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow transition bg-white">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
