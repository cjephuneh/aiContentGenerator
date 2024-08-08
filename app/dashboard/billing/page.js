"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function billing() {
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState('KES'); // Default currency
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axios.post('/api/create-subscription', { currency });
      console.log(resp.data);
      OnPayment(resp.data.data.plan_code, currency); // Plan code from Paystack
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

  const OnPayment = async (planCode, currency) => {
    const res = await loadScript('https://js.paystack.co/v1/inline.js');

    if (!res) {
      alert('Paystack failed to load!!');
      setLoading(false);
      return;
    }

    const amount = 600; // Base amount in the smallest currency unit (e.g., kobo for NGN)

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: user?.primaryEmailAddress?.emailAddress,
      amount: amount * 100, // Amount in kobo (convert based on currency if needed)
      currency: currency,
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
    <div>
      <script src="https://js.paystack.co/v1/inline.js"></script>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Plan</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 ">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 10,000 Words/Month </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 50+ Content Templates </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Unlimited Download & Copy </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 1 Month of History </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Monthly
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 5$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 100,000 Words/Month </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 50+ Content Templates </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> Unlimited Download & Copy </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

                <span className="text-gray-700"> 3 Months of History </span>
              </li>
            </ul>
            <div className="mt-8">
          <Button
            type="button"
            className="w-full"
            onClick={() => CreateSubscription()}
          >
            {loading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Subscribe Now'
            )}
          </Button>
        </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default billing;
