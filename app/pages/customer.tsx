import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Customer() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Dein Styflex Kundenbereich</h1>
          <p className="mt-4 text-xl text-gray-600">Verwalte dein Abo, buche Termine und genieße exklusive Vorteile.</p>

          {/* Abo Abschließen */}
          <section id="subscribe" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Abo abschließen</h2>
            <p className="mt-2 text-base text-gray-600">Wähle dein Abo und starte noch heute.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/subscribe/basic">
                <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Basic</button>
              </Link>
              <Link href="/subscribe/premium">
                <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Premium</button>
              </Link>
              <Link href="/subscribe/pro">
                <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Pro</button>
              </Link>
            </div>
            <Link href="/signup">
              <p className="mt-4 text-base text-styflex-gold hover:underline">Noch kein Konto? Jetzt registrieren</p>
            </Link>
          </section>

          {/* Salon-Suche */}
          <section id="search" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Salon-Suche</h2>
            <p className="mt-2 text-base text-gray-600">Finde deinen perfekten Salon nach Ort, Dienstleistung oder Bewertung.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <input type="text" placeholder="Ort" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Dienstleistung" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Preis" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Bewertung" className="border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Suchen</button>
          </section>

          {/* Terminbuchung */}
          <section id="booking" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Terminbuchung</h2>
            <p className="mt-2 text-base text-gray-600">Buche deinen nächsten Termin mit Google oder Apple Kalender-Integration.</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Google Kalender</button>
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Apple Kalender</button>
            </div>
          </section>

          {/* Treuepunkte */}
          <section id="loyalty" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Treuepunkte & Prämien</h2>
            <p className="mt-2 text-base text-gray-600">Sammle Punkte und löse sie für exklusive Prämien ein.</p>
            <div className="mt-6 bg-styflex-pastel p-6 rounded-lg">
              <p className="text-lg font-medium text-styflex-dark">Dein Punktestand: 50 Punkte</p>
              <p className="mt-2 text-base text-gray-600">20 Punkte = 5 € Gutschein | 50 Punkte = 15 € Gutschein</p>
              <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Prämien einlösen</button>
            </div>
          </section>

          {/* Wallet/NFC */}
          <section id="wallet" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Wallet & NFC</h2>
            <p className="mt-2 text-base text-gray-600">Verwalte deine digitale Wallet oder bestelle eine NFC-Karte (bald verfügbar).</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark opacity-50" disabled>Wallet aktivieren</button>
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark opacity-50" disabled>NFC-Karte bestellen</button>
            </div>
          </section>

          {/* Support-Chat */}
          <section id="support" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Support-Chat</h2>
            <p className="mt-2 text-base text-gray-600">Kontaktiere uns bei Fragen oder Problemen.</p>
            <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Chat starten</button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
