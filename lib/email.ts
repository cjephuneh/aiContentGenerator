import { FormData } from "@/app/dashboard/contact/page";

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email.ts';

    const d = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
        });
    return d;
}