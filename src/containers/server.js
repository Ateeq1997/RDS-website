// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { fullname, email, phone, subject, message } = req.body;


//   const transporter = nodemailer.createTransport({
//     host: 'mail.sharixvisions.com', 
//     port: 465, 
//     secure: true, 
//     auth: {
//       user: 'message@rdsprecisionbilling.com',
//       pass: 'Message@804', 
//     },
//   });

//   const mailOptions = {
//     from: 'message@rdsprecisionbilling.com',
//     to: 'shariq@sharixvisions.com', 
//     subject: `Message from ${fullname}: ${subject}`,
//     text: `You have received a new message:
//     Name: ${fullname}
//     Email: ${email}
//     Phone: ${phone}
//     Message: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully!');
//   } catch (error) {
//     console.error('Error details:', error);
//     res.status(500).send('Failed to send email.');
//   }
// });

// const PORT = process.env.PORT || 5000;
