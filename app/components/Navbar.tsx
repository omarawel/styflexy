import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/logo.png" alt="Styflex Logo" width={150} height={50} />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-styflex-dark hover:text-styflex-gold inline-flex items-center px-1 pt-1 text-sm font-medium">Home</Link>
              <Link href="/customer" className="text-styflex-dark hover:text-styflex-gold inline-flex items-center px-1 pt-1 text-sm font-medium">Kunden</Link>
              <Link href="/salons" className="text-styflex-dark hover:text-styflex-gold inline-flex items-center px-1 pt-1 text-sm font-medium">Salons</Link>
              <Link href="/vip" className="text-styflex-dark hover:text-styflex-gold inline-flex items-center px-1 pt-1 text-sm font-medium">VIP-Service</Link>
              <Link href="/about" className="text-styflex-dark hover:text-styflex-gold inline-flex items-center px-1 pt-1 text-sm font-medium">Über uns</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/signup" className="bg-styflex-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-styflex-dark">Registrieren</Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-styflex-dark hover:text-styflex-gold hover:bg-gray-100">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-styflex-gold text-base font-medium text-styflex-dark bg-styflex-pastel">Home</Link>
          <Link href="/customer" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-styflex-dark hover:bg-styflex-pastel hover:border-styflex-gold">Kunden</Link>
          <Link href="/salons" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-styflex-dark hover:bg-styflex-pastel hover:border-styflex-gold">Salons</Link>
          <Link href="/vip" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-styflex-dark hover:bg-styflex-pastel hover:border-styflex-gold">VIP-Service</Link>
          <Link href="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-styflex-dark hover:bg-styflex-pastel hover:border-styflex-gold">Über uns</Link>
          <Link href="/signup" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white bg-styflex-gold hover:bg-styflex-dark">Registrieren</Link>
        </div>
      </div>
    </nav>
  );
}
