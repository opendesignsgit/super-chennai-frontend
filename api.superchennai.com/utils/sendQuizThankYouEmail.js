// utils/sendQuizThankYouEmail.js
const transporter = require("../config/mailer");
require("dotenv").config();
const path = require("path");
const fs = require("fs");

const sendQuizThankYouEmail = async ({
  name,
  name2,
  email,
  phone,
  message,
  receipt_id,
  payment_image,
  excelDownloadLink

}) => {

  const adminEmail = process.env.FORM_RECEIVER_EMAIL;
  const ccEmails = process.env.FORM_CC_EMAIL
    ? process.env.FORM_CC_EMAIL.split(",").map((e) => e.trim())
    : undefined;

  const userSubject = "Thank You for Participating in the Super Chennai Quiz!";
  const adminSubject = `New Quiz Submission from ${name || email}`;

  // -------------------- USER EMAIL HTML --------------------

const userHtml = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Registering – Super Chennai Quiz</title>
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

            <p>Thank you for registering for the <strong>Super Chennai Quiz!</strong> We’re excited to welcome you—get ready to test your knowledge and enjoy the experience!</p>

            <p><strong>Your Registration is Confirmed!</strong></p>

            <p>We are pleased to confirm that your payment has been received. You are now officially enrolled in the Super Chennai Quiz happening at <strong>Sir Mutha Venkatasubba Rao Concert Hall</strong>.</p>

            <p>Your Receipt ID is: <strong>${receipt_id}</strong></p>

            <div class="event-details">
                <h3>Event Details:</h3>
                <ul>
                    <li><strong>Date:</strong> Dec 07 2025</li>
                    <li><strong>Time:</strong> 2 PM</li>
                    <li><strong>Price:</strong> Rs. 199</li>
                    <li><strong>Location:</strong> Sir Mutha Venkatasubba Rao Concert Hall</li>
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


  // -------------------- ADMIN EMAIL HTML --------------------
  const adminHtml = `
    <h2>New Quiz Submission Received</h2>
    <p><strong>Participant 1:</strong> ${name}</p>
    <p><strong>Participant  2:</strong> ${name2 || "-"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Message:</strong> ${message || "-"}</p>
    <p><strong>Receipt ID:</strong> ${receipt_id}</p>
    ${
      payment_image
        ? `<p><a href="${payment_image}" target="_blank">📎 View Uploaded Image</a></p>`
        : ""
    }

     <p>
    <a href="${excelDownloadLink}" target="_blank"
       style="background-color: #a44294; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
      📥 Download Latest Excel
    </a>
  </p>
  `;
 


  const attachments = payment_image
    ? [
        {
          filename: "quiz_upload.jpg",
          path: payment_image,
          contentType: "image/jpeg",
        },
      ]
    : [];

  // Optional PDF attachment for quiz (use if exists)
  const pdfPath = path.join(__dirname, "..", "assets", "pdf", "SuperchennaiQuizTicket.pdf");

  const userAttachments = fs.existsSync(pdfPath)
    ? [
        {
          filename: "SuperchennaiQuizTicket.pdf",
          path: pdfPath,
          contentType: "application/pdf",
        },
      ]
    : [];

  // SEND USER EMAIL
  await transporter.sendMail({
    from: `"Super Chennai Quiz" <${process.env.SMTP_USER}>`,
    to: email,
    subject: userSubject,
    html: userHtml,
    attachments: userAttachments
  });

  // SEND ADMIN EMAIL
  await transporter.sendMail({
    from: `"Super Chennai Quiz" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    cc: ccEmails,
    subject: adminSubject,
    html: adminHtml,
    attachments
  });
};

module.exports = sendQuizThankYouEmail;
