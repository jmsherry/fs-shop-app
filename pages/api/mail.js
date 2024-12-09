// import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail'

const {
  MAIL_HOST,
  MAIL_PORT='587',
  MAIL_USERNAME,
  MAIL_PASSWORD,
  ADMIN_EMAIL,
  SENDGRID_API_KEY,
} = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const transporter = nodemailer.createTransport({
//   host: MAIL_HOST,
//   port: Number(MAIL_PORT),
//   auth: {
//       user: MAIL_USERNAME,
//       pass: MAIL_PASSWORD
//   }
// });

export default async function handler(req, res) {
  console.log('body', req.body)
  // email
  const {from, subject, message} = req.body;
  console.log(from, subject, message);

  const msg = {
    to: ADMIN_EMAIL,
    from, // Use the email address or domain you verified above
    subject,
    text: message,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ name: "sent"});
  } catch (err) {
    console.log(err);
    console.log(err?.response?.body);
    res.status(500).json('Failed to send');
  }


}


// try {
//   const info = await transporter.sendMail({
//     from,
//     to: ADMIN_EMAIL, // list of receivers
//     subject, // Subject line
//     text: message, // plain text body
//   });

//   console.log("Message sent: %s", info.messageId);
//   res.status(200).json({ name: "sent", messagId: info.messageId });
// } catch (err) {
//   res.status(500).json(err);
// }