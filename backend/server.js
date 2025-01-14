const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { fullname, email, phone, subject, message } = req.body;

    // Configure Nodemailer for cPanel email
    const transporter = nodemailer.createTransport({
      host: 'mail.sharixvisions.com', // cPanel SMTP server
      port: 465, // SSL port (use 587 for TLS if required)
      secure: true, // Use SSL
      auth: {
        user: 'message@rdsprecisionbilling.com', // Your cPanel email address
        pass: 'Message@804', // Replace with the email account's password
      },
    });

    const mailOptions = {
      from: 'message@rdsprecisionbilling.com', // Sender email address
      to: 'shariq@sharixvisions.com', // Replace with the recipient's email
      subject: `Message from ${fullname}: ${subject}`,
      text: `You have received a new message:
      Name: ${fullname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      console.error('Error details:', error);
      res.status(500).send('Failed to send email.');
    }
  } else {
    res.status(404).send('Not found');
  }
};
