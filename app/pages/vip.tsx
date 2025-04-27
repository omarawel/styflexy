import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VIP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">VIP-Service</h1>
          <p className="mt-4 text-xl text-gray-600">Exklusive Beauty-Services für besondere Ansprüche.</p>

          {/* VIP-Login */}
          <section id="login" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">VIP-Login</h2>
            <p className="mt-2 text-base text-gray-600">Nur für exklusive Kunden (Einladung erforderlich).</p>
            <div className="mt-6 bg-styflex-pastel p-6 rounded-lg">
              <input type="email" placeholder="E-Mail" className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <input type="password" placeholder="Passwort" className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <button className="w-full px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Anmelden</button>
            </div>
          </section>

          {/* Luxus-Services */}
          <section id="services" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Luxus-Services anfragen</h2>
            <p className="mt-2 text-base text-gray-600">Buche mobile Beauty-Services an deinem Wunschort.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Ort" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Dienstleistung" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="date" placeholder="Datum" className="border border-gray-300 rounded-md px-4 py-2" />
              <input type="time" placeholder="Uhrzeit" className="border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <button className="mt-4 px-6 py-3 bg-styflex-dark text-white rounded-md hover:bg-styflex-gold">Anfrage senden</button>
          </section>

          {/* Persönlicher Ansprechpartner */}
          <section id="contact" className="mt-12">
            <h2 className="text-2xl font-semibold text-styflex-dark">Persönlicher Ansprechpartner</h2>
            <p className="mt-2 text-base text-gray-600">Kontaktiere dein VIP-Team direkt.</p>
            <button className="mt-4 px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Kontakt aufnehmen</button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
