
const transporter = require("../config/mailer");
const path = require("path");
require("dotenv").config();

const sendEmail = async ({
  name,
  email,
  mobile,
  video,
    image,
  description,
  newsletter,
  excelDownloadLink,
}) => {
  const hasVideo = video && video !== "";
  const isNewsletter = newsletter === true || newsletter === "true";
    const hasImage = image && image !== "";


  const subject = isNewsletter
    ? `📬 New Newsletter Subscriber: ${email}`
    : hasVideo
    ? `🎥 Namma Stories: New Video Uploaded by ${name || email}`
    : hasImage
    ? `🖼️ Chennai Reimagine: New Image Uploaded by ${name || email}`
    : `📝 Volunteer Submission from ${name || email}`;

  // let htmlContent = `
  //   <h2>${isNewsletter ? "New Newsletter Subscription" : "New Submission Received"}</h2>
  //   <p><strong>Email:</strong> ${email}</p>
  // `;

  let htmlContent = `
    <h2>${isNewsletter ? "New Newsletter Subscription" : hasImage ? "Chennai Reimagine Received" : "New Submission Received"}</h2>
    <p><strong>Email:</strong> ${email}</p>
  `;

  if (!isNewsletter) {
    if (name) htmlContent += `<p><strong>Name:</strong> ${name}</p>`;
    if (mobile) htmlContent += `<p><strong>Mobile:</strong> ${mobile}</p>`;
    if (description) htmlContent += `<p><strong>Description:</strong> ${description}</p>`;
    if (hasVideo) htmlContent += `<p><strong>Video Attached:</strong> Yes</p>`;
     if (hasImage) {
      htmlContent += `
        <p><strong>Uploaded Image:</strong></p>
        <img src="${process.env.BASE_URL || ""}/uploads/images/${image}" alt="Uploaded Image" style="max-width:400px; border:1px solid #ddd; border-radius:5px;" />
      `;
    }
  }

  if (excelDownloadLink) {
    htmlContent += `
      <p>
        <a href="${excelDownloadLink}" 
           style="background-color: #4CAF50; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none;">
           📥 Download Latest Excel
        </a>
      </p>`;
  }

  const attachments = [];
  // if (hasVideo) {
  //   attachments.push({
  //     filename: path.basename(video),
  //     path: video,
  //     contentType: "video/mp4",
  //   });
  // }


  let fromName = "Super Chennai Volunteer Submission";

  if (isNewsletter) {
    fromName = "Super Chennai Newsletter Subscriber";
  } else if (hasVideo) {
    fromName = " Super Chennai Namma Stories Submission";
  } else if (hasImage) {
    fromName = "Super Chennai Reimagine Submission";
  }

  const from = `"${fromName}" <${process.env.SMTP_USER}>`;
  await transporter.sendMail({
    // from: `"Super Chennai Enquiry" <${process.env.SMTP_USER}>`,
    from,
    to: process.env.FORM_RECEIVER_EMAIL,
    cc: process.env.FORM_CC_EMAIL ? process.env.FORM_CC_EMAIL.split(',').map(email => email.trim()) : undefined,
    subject,
    html: htmlContent,
    attachments,
  });





  // ✅ 2. Send Thank You Mail to User
  if (email) {
    const thankYouSubject = "🙏 Thank you for your submission - Super Chennai";
    let thankYouHtml = `
      <h2>Vanakkam ${name || ""},</h2>
      <p>Thank you for reaching out to <strong>Super Chennai</strong>.</p>
      <p>Your submission has been received successfully. Our team will review it shortly.</p>
    `;

    if (isNewsletter) {
      thankYouHtml += `<p>You’ve been successfully subscribed to our Newsletter. 🎉</p>`;
    } else if (hasVideo) {
      thankYouHtml += `<p>We appreciate your contribution to <strong>Namma Stories</strong>. 🎥</p>`;
    } else if (hasImage) {
      thankYouHtml += `<p>Your <strong>Chennai Reimagine</strong> submission has been saved. 🖼️</p>`;
    } else {
      thankYouHtml += `<p>Thanks for volunteering with us. We’ll get back to you soon. 🤝</p>`;
    }

    thankYouHtml += `<br/><p> <br/>Team Super Chennai</p>`;

    await transporter.sendMail({
      from: `"Super Chennai" <${process.env.SMTP_USER}>`,
      to: email,
      subject: thankYouSubject,
      html: thankYouHtml,
    });
  }
};

module.exports = sendEmail;
