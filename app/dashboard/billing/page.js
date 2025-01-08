import React, { useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axios.post('/api/create-subscription', { currency: 'USD' });
      console.log(resp.data);
      OnPayment(resp.data.data.plan_code); // Plan code from Paystack
    } catch (error) {
      console.error('Error creating subscription:', error);
      setLoading(false);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const OnPayment = async (planCode) => {
    const res = await loadScript('https://js.paystack.co/v1/inline.js');

    if (!res) {
      alert('Paystack failed to load!!');
      setLoading(false);
      return;
    }

    const amount = 5; // Amount in USD

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: user?.primaryEmailAddress?.emailAddress,
      amount: amount * 100, // Amount in cents
      currency: 'USD',
      ref: `PSK-${Math.floor(Math.random() * 1000000000)}`,
      metadata: {
        custom_fields: [
          {
            display_name: 'Subscription Plan',
            variable_name: 'subscription_plan',
            value: planCode,
          },
        ],
      },
      callback: function (response) {
        console.log(response);
        if (response) {
          SaveSubscription(response.reference);
        }
        setLoading(false);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  const SaveSubscription = async (paymentReference) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentReference,
      joinDate: moment().format('DD/MM/yyyy'),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-3xl my-6">Upgrade With Monthly Plan</h2>
        <div className="mt-8 gap-3 flex justify-center">
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
            onClick={() => CreateSubscription()}
          >
            {loading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Subscribe Now'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;