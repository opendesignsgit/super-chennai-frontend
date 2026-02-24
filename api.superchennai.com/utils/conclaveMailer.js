const transporter = require("../config/mailer");

/* ================= TEMPLATE ================= */

// const registrationTemplate = ({ name }) => `
//   <p>Dear ${name},</p>
//   <p>
//    Thank you for registering for the SuperChennai Conclave.
//   </p>
//   <p>
//   We appreciate your interest in being part of the event. Our team will review your registration and confirm your participation. Participation is confirmed only upon receiving an confirmation email from our team.
//   </p>

//   <p>
//     Warm regards,<br/>
//     <b>Team SuperChennai</b>
//   </p>
// `;
const registrationTemplate = ({ name }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SuperChennai Conclave Registration</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px 0;">
      <tr>
        <td align="center">
          
          <!-- Main Container -->
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:6px;">
            
            <!-- Content -->
            <tr>
              <td style="padding:24px; color:#333333; font-size:15px; line-height:1.6;">
                
                <p style="margin:0 0 12px;">
                  Dear <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 12px;">
                  Thank you for registering for the <strong>SuperChennai Conclave</strong>.
                </p>

                <p style="margin:0 0 12px;">
                  We appreciate your interest in being part of the event. Our team will review your registration and confirm your participation.
                </p>

                <p style="margin:0 0 20px;">
                  Please note that participation is confirmed only upon receiving a confirmation email from our team.
                </p>

                <p style="margin:0;">
                  Warm regards,<br/>
                  <strong>Team SuperChennai</strong>
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;

/* ================= MAIL TRIGGER ================= */

exports.sendConclaveRegistrationMail = async ({ name, email }) => {
  return transporter.sendMail({
    from: `"Super Chennai Conclave" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Registration Confirmed – Super Chennai Conclave",
    html: registrationTemplate({ name }),
  });
};
