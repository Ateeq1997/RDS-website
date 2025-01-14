const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Company owner's email address
const ownerEmail = 'ateeq@sharixvisions.com';

// Endpoint to handle Calendly webhook
app.post('/api/calendly-webhook', async (req, res) => {
    try {
        const event = req.body.payload; // Extract event payload

        // Dynamically extract user email and name
        const userEmail = event.invitee.email; // This comes from Calendly's webhook
        const userName = event.invitee.name || 'User'; // Fallback if name is not provided
        const eventTime = event.event.start_time; // Scheduled event time

        // Prepare email content
        const emailContent = `
            Hi ${userName},
            
            Your call has been successfully scheduled.

            Scheduled Time: ${new Date(eventTime).toLocaleString()}

            Thank you!
        `;

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ateeq@sharixvisions.com', // Replace with your email
                pass: 'Ateequr@804'  // Replace with your email password
            }
        });

        // Send email to both the user and the company owner
        const mailOptions = {
            from: 'ateeq@sharixvisions.com', // Replace with your email
            to: [userEmail, ownerEmail], // Send to both user and owner
            subject: 'Scheduled Call Details',
            text: emailContent
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Emails sent successfully.');
        res.status(200).json({ message: 'Emails sent successfully.' });
    } catch (error) {
        console.error('Error handling Calendly webhook:', error);
        res.status(500).json({ error: 'Error handling webhook.' });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
