import React from 'react';
import NavBar from './components/NavBar';
import Hero3D from './components/Hero3D';
import SupplierDashboardPreview from './components/SupplierDashboardPreview';
import FinancierDashboardPreview from './components/FinancierDashboardPreview';
import PayBotChat from './components/PayBotChat';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <Hero3D />
        <SupplierDashboardPreview />
        <FinancierDashboardPreview />
        <div id="chat">
          <PayBotChat />
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-600">
          © {new Date().getFullYear()} PayTranche — Built for MSME suppliers and forward-thinking financiers.
        </div>
      </footer>
    </div>
  );
}

export default App;
