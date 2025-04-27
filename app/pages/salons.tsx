import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Salons() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Salon-Dashboard</h1>
          <p className="mt-4 text-xl text-gray-600">Verwalte Buchungen, Mitarbeiter, Umsätze und mehr.</p>

          {/* Buchungen Verwalten */}
          <section id="bookings" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Buchungen verwalten</h2>
            <p className="mt-2 text-base text-gray-600">Übersicht deiner aktuellen und kommenden Termine.</p>
            <div className="mt-6 bg-styflex-pastel p-6 rounded-lg">
              <p className="text-lg font-medium text-styflex-dark">Heutige Termine: 5</p>
              <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Alle Buchungen anzeigen</button>
            </div>
          </section>

          {/* Kalender & Mitarbeiter */}
          <section id="calendar" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Kalender & Mitarbeiter</h2>
            <p className="mt-2 text-base text-gray-600">Plane Mitarbeiter und Termine effizient.</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Kalender anzeigen</button>
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Mitarbeiter hinzufügen</button>
            </div>
          </section>

          {/* Umsatzberichte */}
          <section id="reports" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Umsatzberichte</h2>
            <p className="mt-2 text-base text-gray-600">Analysiere deinen Umsatz und Kundenfeedback.</p>
            <div className="mt-6 bg-styflex-pastel p-6 rounded-lg">
              <p className="text-lg font-medium text-styflex-dark">Monatsumsatz: 3.500 €</p>
              <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Bericht anzeigen</button>
            </div>
          </section>

          {/* Bewertungen */}
          <section id="reviews" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Bewertungen verwalten</h2>
            <p className="mt-2 text-base text-gray-600">Reagiere auf Kundenbewertungen und verbessere deine Sichtbarkeit.</p>
            <div className="mt-6 bg-styflex-pastel p-6 rounded-lg">
              <p className="text-lg font-medium text-styflex-dark">Durchschnitt: 4.8/5 (50 Bewertungen)</p>
              <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Bewertungen anzeigen</button>
            </div>
          </section>

          {/* Rabattaktionen */}
          <section id="promotions" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Rabattaktionen erstellen</h2>
            <p className="mt-2 text-base text-gray-600">Erstelle attraktive Angebote für deine Kunden.</p>
            <button className="mt-4 px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Neue Aktion erstellen</button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
