const transporter = require("../config/mailer");


module.exports = function thankYouMail({ name }) {
  return {
    subject: "You’re Registered! SuperChennai Trivia Quiz 2025",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hello ${name || "there"}, </h2>

        <p>Thank you for registering for the SuperChennai Trivia Quiz 2025 Your registration has been completed</p>
        <p>
         Best Regards,<br/>
          <strong>Super Chennai Team</strong>
        </p>

        <hr/>
     
      </div>
    `,
  };
};



module.exports = async ({ name, email }) => {
  return transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Thank You for Submitting Your Margazhi Photo!",
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for participating in <strong>Margazhi Moments – Photography Contest 2025</strong>.</p>
      <p>We have successfully received your entry.</p>
      <p>Our team will review all submissions and announce the winners soon.</p>
      <br />
      <p>Warm regards,<br/>Super Chennai Team</p>
    `,
  });
};
