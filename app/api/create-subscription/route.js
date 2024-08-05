import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { currency } = await req.json(); // Accept currency from request

  try {
    const response = await axios.post(
      'https://api.paystack.co/plan',
      {
        name: 'Monthly Subscription',
        interval: 'monthly',
        amount: 500 * 100, // Amount in kobo (convert based on currency if needed)
        currency: currency
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating plan:', error);
    return NextResponse.json({ error: 'Error creating plan' });
  }
}
