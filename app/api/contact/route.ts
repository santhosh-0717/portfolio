import {NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const {name, email, message} = await request.json();
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'santhosh037@gmail.com',
            subject: `New Contact Form Message from ${name}`,
            html: `
          <!DOCTYPE html>
          <html lang="en">
            <body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 20px;">New Contact Form Submission</h2>
                <div style="margin-bottom: 15px;">
                  <p style="margin: 5px 0;"><strong style="color: #2c3e50;">Name:</strong> <span style="color: #34495e;">${name}</span></p>
                  <p style="margin: 5px 0;"><strong style="color: #2c3e50;">Email:</strong> <span style="color: #34495e;">${email}</span></p>
                </div>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
                  <p style="margin: 0 0 10px 0;"><strong style="color: #2c3e50;">Message:</strong></p>
                  <p style="color: #34495e; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </body>
          </html>
        `,
        });

        return NextResponse.json(
            {message: 'Email sent successfully'},
            {status: 200}
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: 500}
        );
    }
}