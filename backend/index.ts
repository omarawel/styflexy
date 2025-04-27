import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import stripe from 'stripe';
import bcrypt from 'bcryptjs';

const app = express();
const prisma = new PrismaClient();
const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!);

app.use(cors());
app.use(express.json());

// User Registration
app.post('/api/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role: role || 'customer' },
    });
    if (role === 'salon') {
      await prisma.salon.create({
        data: { name: email, address: '', userId: user.id },
      });
    }
    res.json({ user });
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
});

// Create Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  const { plan, userId } = req.body;
  const priceIds = {
    basic: 'price_basic_monthly',
    premium: 'price_premium_monthly',
    pro: 'price_pro_monthly',
  };

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceIds[plan as keyof typeof priceIds], quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      client_reference_id: userId.toString(),
    });
    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Create Booking
app.post('/api/bookings', async (req, res) => {
  const { userId, salonId, service, date } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { userId, salonId, service, date: new Date(date) },
    });
    res.json({ booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get Salon Bookings
app.get('/api/salons/:id/bookings', async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await prisma.booking.findMany({
      where: { salonId: parseInt(id) },
    });
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

app.listen(4000, () => console.log('Backend running on port 4000'));
