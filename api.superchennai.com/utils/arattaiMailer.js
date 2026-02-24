const transporter = require("../config/mailer");

exports.sendArattaiRegistrationMail = async ({ name, email }) => {
  const mailOptions = {
    from: `"Arattai with Aruna Sairam" <no-reply@superchennai.com>`,
    to: email,
    subject: "Super Chennai – Arattai with Aruna Sairam",
    html: `
      <div style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial, sans-serif;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;margin-top:20px;border-radius:10px;overflow:hidden;">
          
          <tr>
            <td align="center">
              <img 
                src="https://www.superchennai.com/images/mailer-thanks.jpg" 
                alt="Arattai with Aruna Sairam"
                style="width:100%;max-width:600px;height:auto;display:block;"
              />
            </td>
          </tr>

          <tr>
            <td style="padding:30px;text-align:left;">
              
             <p style="font-size:16px;color:#333;line-height:1.6;">
  You're one step closer to being part of <strong>Super Chennai - Arattai with Aruna Sairam</strong>.
</p>
              <p style="font-size:15px;color:#555;line-height:1.6;margin-top:15px;">
                Thank you for registering. Our team is looking over your submission and will confirm your participation by email soon.
              </p>

              <p style="font-size:15px;color:#555;line-height:1.6;margin-top:15px;">
                Just to let you know, your registration is considered confirmed only after you receive our official confirmation email.
              </p>

              <p style="font-size:15px;color:#555;line-height:1.6;margin-top:20px;">
                Thanks and Regards,<br/>
                <strong>Team Super Chennai</strong>
              </p>

            </td>
          </tr>

        </table>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};