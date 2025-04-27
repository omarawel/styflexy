import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-styflex-dark">Impressum</h1>
          <div className="mt-4 text-base text-gray-600">
            <p>Styflex GmbH</p>
            <p>Musterstraße 1, 40213 Düsseldorf</p>
            <p>E-Mail: support@styflex.de</p>
            <p>Telefon: +49 123 456789</p>
            <p>Geschäftsführer: Max Mustermann</p>
            <p>Handelsregister: HRB 12345, Amtsgericht Düsseldorf</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
