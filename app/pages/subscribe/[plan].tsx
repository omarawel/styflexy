import { GetServerSideProps } from 'next';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Subscribe({ plan }: { plan: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
    setLoading(false);
  };

  const plans = {
    basic: { price: '19,99 €/Monat', desc: '1 Basisleistung, Nebenzeiten, 5% Rabatt auf Zusatzleistungen.' },
    premium: { price: '39,99 €/Monat', desc: '2 Basisleistungen, bevorzugte Zeiten, 10% Rabatt auf Zusatzleistungen.' },
    pro: { price: '59,99 €/Monat', desc: '3 Basisleistungen, Prioritätsbuchung, 20% Rabatt auf Zusatzleistungen.' },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-md mx-auto bg-styflex-pastel p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-styflex-dark mb-6">Abo: {plan.charAt(0).toUpperCase() + plan.slice(1)}</h1>
          <p className="text-xl text-styflex-dark">{plans[plan as keyof typeof plans].price}</p>
          <p className="text-base text-gray-600 mt-2">{plans[plan as keyof typeof plans].desc}</p>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 w-full bg-styflex-gold text-white py-3 rounded-md hover:bg-styflex-dark disabled:bg-gray-400"
          >
            {loading ? 'Lade...' : 'Jetzt abonnieren'}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const plan = params?.plan as string;
  if (!['basic', 'premium', 'pro'].includes(plan)) {
    return { notFound: true };
  }
  return { props: { plan } };
};
