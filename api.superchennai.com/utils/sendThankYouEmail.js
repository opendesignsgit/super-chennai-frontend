

const transporter = require("../config/mailer");
require("dotenv").config();
const path = require('path');
const fs = require('fs');


const sendThankYouEmail = async ({ name, email, receipt_id, phone, no_of_persons, payment_image, excelDownloadLink }) => {
  const adminEmail = process.env.FORM_RECEIVER_EMAIL;
  const ccEmails = process.env.FORM_CC_EMAIL
    ? process.env.FORM_CC_EMAIL.split(',').map(e => e.trim())
    : undefined;
  const userSubject = " You’re In! Get Ready for the Super Chennai Car Treasure Hunt ";
  const adminSubject = ` New Payment Received from ${name || email}`;

  //   const userHtml = `

  //      <p>Hi ${name || "there"},</p>
  //         <p>Thank you for registering for the Super Chennai Car Treasure Hunt! 
  //     We’re thrilled to have you on board for an unforgettable adventure through the streets of Chennai.</p>
  //     <p>Your Registration is Confirmed!</p>
  //         <p>We’ve received your payment successfully. You’re now officially part of the Car Treasure Hunt — all while driving from Lady Andal School, Chetpet, to VGP Heritage Resort.</p>
  //     <p>We'll get back to you if further action is needed.</p>
  //     <p>Thanks for supporting Super Chennai! </p>
  //         <p>Your Receipt ID is: <strong>${receipt_id}</strong></p>

  //     <li>Event Details :
  // Date & Time: 17th Aug 2025 & 08.30AM
  // Starting Point: Lady Andal School, Chetpet
  // Ending Point: VGP Heritage Resort 
  // Duration: 2 hours</li>
  //   `;
  const userHtml = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>You’re In! Get Ready for the Super Chennai Car Treasure Hunt</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                background-color: #995098;
                color: white;
                padding: 10px;
                border-radius: 8px 8px 0 0;
            }
            .header h2 {
                margin: 0;
            }
            .content {
                margin-top: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.6;
            }
            .highlight {
                font-weight: bold;
                color: #995098;
            }
            .event-details {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin-top: 20px;
                list-style-type: none;
            }
            .event-details li {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 14px;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="email-container">   
            <div class="content">
                <p>Hi <span class="highlight">${name || "there"}</span>,</p>
                <p>Thank you for registering for the <strong>Super Chennai Car Treasure Hunt</strong>! We’re thrilled to have you on board for an unforgettable adventure through the streets of Chennai.</p>
                <p><strong>Your Registration is Confirmed!</strong></p>
                <p>We’ve received your payment successfully. You’re now officially part of the Car Treasure Hunt — all while driving from <strong>Lady Andal School, Chetpet</strong> to <strong>VGP Heritage Resort</strong>.</p>
                <p>Your Receipt ID is: <strong>${receipt_id}</strong></p>
                <div class="event-details">
                    <h3>Event Details:</h3>
                    <ul>
                        <li><strong>Date & Time:</strong> 17th Aug 2025, 08:30 AM </li>
                        <li><strong>Starting Point:</strong>  Lady Andal School, Chetpet</li>
                        <li><strong>Ending Point:</strong>VGP Heritage Resort</li>
                        <li><strong>Duration:</strong> 2 hours </li>
                    </ul>
                </div>
            </div>

            <div class="footer">
                <p>SuperChennai Team</p>
            </div>
        </div>
    </body>
    </html>
`;

  const adminHtml = `
    <h2>New Payment Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>No Of Persons:</strong> ${no_of_persons}</p>
    <p><strong>Receipt ID:</strong> ${receipt_id}</p>
    ${payment_image ? `<p><a href="${payment_image}" target="_blank">📎 View Receipt Image</a></p>` : ""}
    ${excelDownloadLink ? `
  <p>
    <a href="${excelDownloadLink}" target="_blank"
       style="background-color: #a44294; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
      📥 Download Latest Excel
    </a>
  </p>
` : ""}

  `;

  const attachments = payment_image
    ? [
      {
        filename: "receipt.jpg",
        path: payment_image,
        contentType: "image/jpeg",
      },
    ]
    : [];

  const userAttachments = [
    {
      filename: "CarTreasureHuntTicket.pdf",
      path: path.join(__dirname, '..', 'assets', 'pdf', 'location.pdf'),
      contentType: "application/pdf",
    },
  ];



  const pdfPath = path.join(__dirname, '..', 'assets', 'pdf', 'location.pdf');
  fs.access(pdfPath, fs.constants.F_OK, async (err) => {
    if (err) {
      console.error("PDF file not found:", pdfPath);
      return; 
    }

    // Send to user
    await transporter.sendMail({
      from: `"Super Chennai Car Treasure Hunt" <${process.env.SMTP_USER}>`,
      to: email,
      subject: userSubject,
      html: userHtml,
      attachments: userAttachments,
    });

    // Send to admin
    await transporter.sendMail({
      from: `"Super Chennai Car Treasure Hunt" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      cc: ccEmails,
      subject: adminSubject,
      html: adminHtml,
      attachments,

    });
  });
};

module.exports = sendThankYouEmail;
