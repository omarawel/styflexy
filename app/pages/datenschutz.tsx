import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Datenschutz</h1>
          <p className="mt-4 text-base text-gray-600">
            Styflex verpflichtet sich, deine Daten gemäß DSGVO zu schützen. Wir speichern nur notwendige Informationen wie E-Mail, Zahlungsdaten und Buchungsverläufe. Alle Daten sind verschlüsselt und werden nicht an Dritte weitergegeben.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Für Fragen zum Datenschutz kontaktiere uns unter: support@styflex.de
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
