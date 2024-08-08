"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/email";
// import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  // const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    if (isLoading) return;

    setIsLoading(true)
    const d = await sendEmail(data).then((data: any) => {
        setIsLoading(false)
        return data
    });

    console.log("RESULT => ", d);
    if (!d.success) {
      console.log({
        description: "An Error has occured, please try again later.",
        variant: "destructive",
      });
      reset({lastName: "", firstName: "", email: "", message: ""})
    } else {
      console.log({
        title: "Message submitted",
        description: "We will be in touch in 1-2 business days.",
      });
      reset({lastName: "", firstName: "", email: "", message: ""})
    }

  }
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
        <div className="flex flex-col bg-white border rounded-xl p-4 sm:p-6 lg:p-8">
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
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border  "
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                </div>

                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  id="hs-email-contacts-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>

              {/* <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="text"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border"
                  placeholder="Phone Number"
                />
              </div> */}

              <div>
                <label className="sr-only">Details</label>
                <textarea
                  id="hs-about-contacts-1"
                  className="py-3 px-4 block w-full min-h-32 border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border"
                  placeholder="Details"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                type="submit"
                className="w-full py-3 bg-purple-700 px-4 inline-flex justify-center hover:bg-primary-darker items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-dark text-white disabled:opacity-50 disabled:pointer-events-none"
              >
                
                {isLoading ? (
                    <div role="status">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                ): (<>Send inquiry</>)}
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>

        <div className="divide-y divide-gray-200 ">
        <div className="flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-50 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-neutral-50 ">
                What Template should we add?
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We are always looking to improve our services. Please let us know what template you would like to see added.
              </p>
            </div>
          </div>
          <div className="flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-50 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-neutral-50 ">
                Knowledgebase
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We&apos;re here to help with any questions.
              </p>
            </div>
          </div>

          <div className="flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-50"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-neutral-50 ">
                FAQ
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Search our FAQ for answers to anything you might ask.
              </p>
              <Link
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-50"
                href="#"
              >
                Visit FAQ
                <svg
                  className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* <div className=" flex gap-x-7 py-6">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7 11 2-2-2-2" />
                <path d="M11 13h4" />
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              </svg>
              {/* <div className="grow">
                <a href="https://gtahidiapi.developer.azure-api.net">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-50 ">Developer APIs</h3>
                </a>
                <p className="mt-1 text-sm text-gray-500">
                  Check out our development quickstart guide.
                </p>
              </div> 
            </div> */}

          <div className=" flex gap-x-7 py-6">
            <svg
              className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-neutral-50 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800 dark:text-neutral-50 ">
                Contact us by email
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                If you wish to write us an email instead please use
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-50 "
                href="#"
              >
                cto@bricklabsai.com{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}