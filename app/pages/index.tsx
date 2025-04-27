import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-styflex-pastel py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl md:text-6xl">
                Beauty, wie du willst – wann du willst
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl">
                Entdecke Styflex: Deine digitale Plattform für planbare Beauty- und Friseurservices. Flexible Abos, transparente Preise, nachhaltige Lösungen.
              </p>
              <div className="mt-10 sm:flex sm:gap-4 sm:justify-center lg:justify-start">
                <Link href="/customer">
                  <button className="w-full sm:w-auto px-8 py-3 bg-styflex-gold text-white rounded-md text-base font-medium hover:bg-styflex-dark md:py-4 md:text-lg md:px-10">
                    Jetzt buchen
                  </button>
                </Link>
                <Link href="/salons">
                  <button className="w-full sm:w-auto mt-4 sm:mt-0 px-8 py-3 bg-styflex-dark text-white rounded-md text-base font-medium hover:bg-styflex-gold md:py-4 md:text-lg md:px-10">
                    Partner werden
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Styflex Hero" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Abo-Modelle Section */}
        <section id="subscriptions" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-styflex-dark sm:text-4xl">Unsere Abo-Modelle</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                Wähle dein perfektes Abo und genieße Beauty-Services nach deinen Wünschen.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                { name: 'Basic', price: '19,99 €/Monat', desc: 'Perfekt für Gelegenheitsnutzer: 1 Basisleistung (z.B. Haarschnitt) in Nebenzeiten, 5% Rabatt auf Extras.', features: ['Green-Abo optional (+2 €)', 'Flexible Kündigung'] },
                { name: 'Premium', price: '39,99 €/Monat', desc: 'Für regelmäßige Nutzer: 2 Basisleistungen, bevorzugte Zeiten, 10% Rabatt auf Extras.', features: ['Treuepunkte & Prämien', 'Bevorzugte Buchungszeiten'] },
                { name: 'Pro', price: '59,99 €/Monat', desc: 'Für Vielnutzer: 3 Basisleistungen, Prioritätsbuchung, 20% Rabatt auf Extras.', features: ['Z pel-Salons', 'VIP-Zugang'] },
              ].map((plan) => (
                <div key={plan.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-styflex-dark">{plan.name}</h3>
                      <p className="mt-2 text-2xl font-bold text-styflex-gold">{plan.price}</p>
                      <p className="mt-4 text-base text-gray-600">{plan.desc}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="text-gray-600">✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/subscribe/${plan.name.toLowerCase()}`}>
                      <button className="mt-6 w-full bg-styflex-gold text-white py-2 rounded-md hover:bg-styflex-dark">
                        Jetzt abonnieren
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile Section */}
        <section id="benefits" className="py-16 bg-styflex-pastel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-styflex-dark sm:text-4xl">Warum Styflex?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                Für Kunden und Salons: Entdecke die Vorteile unserer Plattform.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-styflex-dark">Für Kunden</h3>
                <ul className="mt-4 space-y-4 text-gray-600">
                  <li>Planbare Beauty-Services zu transparenten Preisen.</li>
                  <li>Einfache Terminbuchung mit Kalenderintegration.</li>
                  <li>Treuepunkte für exklusive Prämien.</li>
                  <li>Nachhaltigkeit mit dem Green-Abo fördern.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-styflex-dark">Für Salons</h3>
                <ul className="mt-4 space-y-4 text-gray-600">
                  <li>Planbare Auslastung durch Abo-Kunden.</li>
                  <li>Moderne Tools für Termin- und Umsatzmanagement.</li>
                  <li>Zusatzumsätze durch VIP-Services.</li>
                  <li>Premium-Badges für mehr Sichtbarkeit.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="download" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-styflex-dark sm:text-4xl">Styflex App – Bald verfügbar!</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Bleib dran: Unsere App für iOS und Android kommt bald. Jetzt für Updates anmelden!
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Image src="/app-store-placeholder.png" alt="App Store" width={150} height={50} className="opacity-50" />
              <Image src="/google-play-placeholder.png" alt="Google Play" width={150} height={50} className="opacity-50" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
