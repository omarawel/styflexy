import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-styflex-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-styflex-gold tracking-wider uppercase">Styflex</h3>
            <p className="mt-4 text-base text-gray-300">
              Beauty, wie du willst – wann du willst. Planbar. Flexibel. Fair.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-styflex-gold tracking-wider uppercase">Links</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/customer" className="text-base text-gray-300 hover:text-styflex-gold">Kundenbereich</Link></li>
              <li><Link href="/salons" className="text-base text-gray-300 hover:text-styflex-gold">Salonbereich</Link></li>
              <li><Link href="/vip" className="text-base text-gray-300 hover:text-styflex-gold">VIP-Service</Link></li>
              <li><Link href="/faq" className="text-base text-gray-300 hover:text-styflex-gold">FAQ</Link></li>
              <li><Link href="/datenschutz" className="text-base text-gray-300 hover:text-styflex-gold">Datenschutz</Link></li>
              <li><Link href="/impressum" className="text-base text-gray-300 hover:text-styflex-gold">Impressum</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-styflex-gold tracking-wider uppercase">Kontakt</h3>
            <p className="mt-4 text-base text-gray-300">E-Mail: support@styflex.de</p>
            <p className="mt-2 text-base text-gray-300">Telefon: +49 123 456789</p>
            <div className="mt-4 flex space-x-6">
              <a href="https://instagram.com/styflex" className="text-gray-300 hover:text-styflex-gold">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com/styflex" className="text-gray-300 hover:text-styflex-gold">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.55 2.89 2.89 0 0 1 .88.15V9.28a6.34 6.34 0 0 0-1.47-.15A6.34 6.34 0 0 0 3 15.62a6.34 6.34 0 0 0 10.86 4.49A6.34 6.34 0 0 0 15.62 9.3v-3.4a8.28 8.28 0 0 0 4.28 1.22V6.69z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">© 2025 Styflex. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
