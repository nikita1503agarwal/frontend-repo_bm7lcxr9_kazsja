import React from 'react';
import { Upload, Wallet, MessagesSquare } from 'lucide-react';

export default function SupplierDashboardPreview() {
  const items = [
    {
      icon: Upload,
      title: 'Upload Invoices',
      desc: 'Drag-and-drop PDF or image and auto-extract key fields.'
    },
    {
      icon: Wallet,
      title: 'Funding Offers',
      desc: 'Compare rates, tenor, and tranche capacity in one view.'
    },
    {
      icon: MessagesSquare,
      title: 'Chat with PayBot',
      desc: 'Ask about eligibility, escrow status, and next steps.'
    }
  ];

  return (
    <section id="supplier" className="px-4 py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">For MSME Suppliers</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">A mobile-first workspace to submit invoices, review offers, join pooled tranches, and track escrow in real time.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow transition bg-white">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
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

        <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4 text-center text-sm text-gray-600">
          Sample invoice upload: drag a file or tap to select. OCR + AI will parse invoice number, buyer, amount, and due date.
        </div>
      </div>
    </section>
  );
}
