import React, { useState } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';

export default function PayBotChat() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi, I\'m PayBot. Ask me about invoice eligibility, offers, tranches, or escrow status.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);

    // Local mock response for prototype
    setLoading(true);
    setTimeout(() => {
      const reply = mockPayBot(text);
      setMessages((m) => [...m, { role: 'bot', content: reply }]);
      setLoading(false);
    }, 600);
  };

  const mockPayBot = (q) => {
    const lower = q.toLowerCase();
    if (lower.includes('escrow')) return 'Escrow is currently funded at 92%, with next settlement on Friday 4pm UTC.';
    if (lower.includes('offer')) return 'You have 3 offers: 1) 1.4%/30d, 2) 1.7%/45d, 3) 2.1%/60d. Tap Funding Offers to compare.';
    if (lower.includes('eligibility')) return 'Upload your latest invoice. We check buyer risk, recency, and duplicates to confirm eligibility.';
    if (lower.includes('tranche')) return 'The pooled tranche TR-204 closes in 6 hours. Minimum ticket: $1,000.';
    return 'I can help with invoices, offers, tranches, and escrow. What would you like to do?';
  };

  return (
    <section className="px-4 py-14 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            <Bot className="h-4 w-4 text-blue-600" /> PayBot — your funding assistant
          </div>

          <div className="max-h-80 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-xl px-3 py-2 text-sm max-w-[80%]`}>\n                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" /> PayBot is typing…
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="border-t border-gray-200 p-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask about offers, escrow, or tranches"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
