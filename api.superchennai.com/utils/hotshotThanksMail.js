// const transporter = require("../config/mailer");

// module.exports = async ({ name, email }) => {
//   await transporter.sendMail({
//     from: `"Super Chennai" <${process.env.SMTP_USER}>`,
//     to: email,
//     subject: "Thanks for your Hotshots Chennai submission",
//     html: `
//       <p>Dear ${name},</p>
//       <p>Thank you for participating in <b>Hotshots Chennai</b>.</p>
//       <p>We have successfully received your submission.</p>
//       <br/>
//       <p>Regards,<br/>Super Chennai Team</p>
//     `,
//   });
// };


const transporter = require("../config/mailer");

module.exports = async ({ name, email }) => {
  await transporter.sendMail({
    from: `"Super Chennai" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thanks for reaching out – Hotshots | Super Chennai",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333;">
        <p>Hi <strong>${name}</strong>,</p>

        <p>
          Thank you for reaching out to 
          <strong>Hotshots - Super Chennai</strong>! 🙏
        </p>

        <p>
          Your form has been submitted successfully. We’ve received your details,
          and our team will contact you shortly with the next steps.
        </p>

        <p>
          We appreciate your interest and look forward to connecting with you.
        </p>

        <br />

        <p>
          Warm regards,<br />
          <strong>Team - Super Chennai</strong>
        </p>
      </div>
    `,
  });
};
