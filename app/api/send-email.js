import transporter from '../../lib/nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;
    
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending to yourself
        subject: 'New Contact Form Submission',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
      });
      
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}