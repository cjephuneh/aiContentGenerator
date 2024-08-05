"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl lg:max-w-5xl mx-auto py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-neutral-50 sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-1 text-gray-600">
          We&apos;d love to talk about how we can help you.
        </p>
      </div>

      <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-50">
            Fill in the form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sr-only">First Name</label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
                </div>

                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
                </div>
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border"
                  placeholder="Email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span className="text-red-500 text-xs">Please enter a valid email</span>}
              </div>

              <div>
                <label className="sr-only">Details</label>
                <textarea
                  className="py-3 px-4 block w-full min-h-32 border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border"
                  placeholder="Details"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs">This field is required</span>}
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center hover:bg-primary-darker items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-dark text-white disabled:opacity-50 disabled:pointer-events-none"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div role="status" className="bg-purple-800">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <>Send inquiry</>
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="mt-3 text-green-600 text-center">Your message has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-3 text-red-600 text-center">There was an error sending your message. Please try again.</p>
            )}

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>

        {/* The rest of your component remains unchanged */}
      </div>
    </div>
  );
}