import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Über Styflex</h1>
          <p className="mt-4 text-xl text-gray-600">
            Styflex revolutioniert die Beauty- und Friseurbranche mit einer digitalen Plattform, die Kunden und Salons intelligent vernetzt.
          </p>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Unsere Vision</h2>
            <p className="mt-2 text-base text-gray-600">
              Wir modernisieren die Beauty-Branche und stärken kleine bis mittelständische Salons durch digitale Innovationen. Unser Ziel: Ein nachhaltiges Ökosystem für langfristige Kundenbindung und wirtschaftliche Stabilität.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Unsere Mission</h2>
            <ul className="mt-2 text-base text-gray-600 space-y-2">
              <li>✓ Erschwingliche, flexible Beauty-Services für Kunden.</li>
              <li>✓ Neue Umsatzquellen und bessere Planung für Salons.</li>
              <li>✓ Exklusive, diskrete High-End-Services für VIP-Kunden.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
