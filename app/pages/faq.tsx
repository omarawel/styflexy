import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Häufig gestellte Fragen</h1>
          <div className="mt-12 space-y-6">
            {[
              { q: 'Wie funktioniert das Abo-Modell?', a: 'Wähle zwischen Basic, Premium oder Pro. Jedes Abo bietet monatliche Basisleistungen und Rabatte auf Zusatzservices.' },
              { q: 'Was ist das Green-Abo?', a: 'Mit einem Aufpreis von 2 €/Monat fließen 50% der Zusatzeinnahmen in nachhaltige Projekte wie CO₂-Kompensation.' },
              { q: 'Wie kann mein Salon Partner werden?', a: 'Registriere dich über den Salonbereich und nutze unser Dashboard für Buchungen und Umsatzanalysen.' },
            ].map((faq, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-styflex-dark">{faq.q}</h2>
                <p className="mt-2 text-base text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
