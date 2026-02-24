const ExcelJS = require("exceljs");
const baseUrl = process.env.BASE_URL || "http://api.superchennai.com";

const exportToExcel = async ({ posts = [], payments = [], margazhiEntries = [] }) => {
  const workbook = new ExcelJS.Workbook();

  // ? Sheet 1: All Submissions (both posts & payments)

  const allSheet = workbook.addWorksheet("All Submissions");
  allSheet.columns = [
    { header: "Type", key: "type", width: 12 },
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Mobile / Phone", key: "mobile", width: 15 },
    { header: "Description / Location", key: "description", width: 30 },
    { header: "Video URL / Receipt ID", key: "video", width: 40 },
    { header: "Image", key: "image", width: 40 },
    { header: "Pincode", key: "pincode", width: 10 },
    { header: "Created At", key: "created_at", width: 25 },
  ];

  posts.forEach((post) => {
    allSheet.addRow({
      type: "Post",
      id: post.id,
      name: post.name,
      email: post.email,
      mobile: post.mobile,
      description: post.description,
      video: post.video,
      image: post.image ? `${baseUrl}/uploads/images/${post.image}` : "",
      pincode: "",
      created_at: post.created_at,
    });
  });

  payments.forEach((payment) => {
    allSheet.addRow({
      type: "Payment",
      id: payment.id,
      name: payment.name,
      email: payment.email,
      mobile: payment.phone,
      // description: payment.location || payment.address || "",
      video: payment.receipt_id,
      image: "",
      pincode: payment.pincode,
      created_at: payment.created_at,
    });
  });

  // Sheet 2: Newsletter Subscribers
  const newsletterSheet = workbook.addWorksheet("Newsletter Subscribers");
  newsletterSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Email", key: "email", width: 25 },
    { header: "Created At", key: "created_at", width: 25 },
  ];
  posts
    .filter((post) => post.newsletter === true)
    .forEach((subscriber) => {
      newsletterSheet.addRow({
        id: subscriber.id,
        email: subscriber.email,
        created_at: subscriber.created_at,
      });
    });

  // Sheet 3: Volunteers (no video)
  const volunteerSheet = workbook.addWorksheet("Volunteers");
  volunteerSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Mobile", key: "mobile", width: 15 },
    { header: "Description", key: "description", width: 40 },
    { header: "Created At", key: "created_at", width: 25 },
  ];
  posts
    .filter((post) => !post.video || post.video.trim() === "")
    .forEach((volunteer) => {
      volunteerSheet.addRow({
        id: volunteer.id,
        name: volunteer.name,
        email: volunteer.email,
        mobile: volunteer.mobile,
        description: volunteer.description,
        created_at: volunteer.created_at,
      });
    });

  // Sheet 4: Namma Stories (with video)
  const storiesSheet = workbook.addWorksheet("Namma Stories");
  storiesSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Mobile", key: "mobile", width: 15 },
    { header: "Video URL", key: "video", width: 40 },
    { header: "Created At", key: "created_at", width: 25 },
  ];
  posts
    .filter((post) => post.video && post.video.trim() !== "")
    .forEach((story) => {
      storiesSheet.addRow({
        id: story.id,
        name: story.name,
        email: story.email,
        mobile: story.mobile,
        video: story.video,
        created_at: story.created_at,
      });
    });

  // ? Sheet 5: Receipt Payments (from `payments` table)
  const receiptSheet = workbook.addWorksheet("Madras Day");
  receiptSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Phone", key: "phone", width: 15 },
    { header: "Location", key: "location", width: 20 },
    { header: "Pincode", key: "pincode", width: 10 },
    { header: "Receipt ID", key: "receipt_id", width: 25 },
    { header: "Created At", key: "created_at", width: 25 },
  ];
  payments
    .filter((payment) => payment.receipt_id)
    .forEach((p) => {
      receiptSheet.addRow({
        id: p.id,
        name: p.name,
        email: p.email,
        phone: p.phone,
        location: p.location,
        pincode: p.pincode,
        receipt_id: p.receipt_id,
        created_at: p.created_at,
      });
    });

  // IMAGE IRUNTHA ATHU CHENNAI REIMAGINE TAB KU POGUM
  const imageSheet = workbook.addWorksheet("Reimagine Chennai");
  imageSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Mobile", key: "mobile", width: 15 },
    { header: "Image Filename", key: "image", width: 40 },
    { header: "Created At", key: "created_at", width: 25 },
  ];

  posts
    .filter((post) => post.image && String(post.image).trim() !== "")
    .forEach((imgPost) => {
      imageSheet.addRow({
        id: imgPost.id,
        name: imgPost.name,
        email: imgPost.email,
        mobile: imgPost.mobile,
        image: `${baseUrl}/uploads/images/${imgPost.image}`,
        created_at: imgPost.created_at,
      });
    });

  // Sheet 7: Quiz Submissions
  const quizSheet = workbook.addWorksheet("Quiz Submissions");
  quizSheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Participant 1", key: "name", width: 20 },
    { header: "Participant  2", key: "name2", width: 20 },
    { header: "Email", key: "email", width: 25 },
    { header: "Phone", key: "phone", width: 15 },
    { header: "Message", key: "message", width: 40 },
    { header: "Receipt ID", key: "receipt_id", width: 25 },
    { header: "Payment Image", key: "payment_image", width: 60 },
    { header: "Created At", key: "created_at", width: 25 },
  ];

  // Add rows for quiz entries (from payments table)
  payments
    .filter((p) => p.is_quiz_form === true || p.isQuizForm === true) // supports both formats
    .forEach((quiz) => {
      quizSheet.addRow({
        id: quiz.id,
        name: quiz.name,
        name2: quiz.name2,
        email: quiz.email,
        phone: quiz.phone,
        message: quiz.message,
        receipt_id: quiz.receipt_id,
        payment_image: quiz.payment_image || "",
        created_at: quiz.created_at,
      });
    });

 /* ================= MARGAZHI ================= */
const margazhiSheet = workbook.addWorksheet("Margazhi Month");
margazhiSheet.columns = [
  { header: "ID", key: "id", width: 10 },
  { header: "Name", key: "name", width: 20 },
  { header: "Email", key: "email", width: 25 },
  { header: "Phone", key: "phone", width: 15 },
  { header: "Country Code", key: "country_code", width: 15 },
  { header: "Message", key: "message", width: 40 },
  { header: "Images", key: "images", width: 80 },
  { header: "Created At", key: "created_at", width: 25 },
];

margazhiEntries.forEach((e) => {
  let imagesArray = [];
  if (typeof e.images === "string") {
    try {
      imagesArray = JSON.parse(e.images);
    } catch (err) {
      console.error("Invalid JSON in images:", e.images);
      imagesArray = [];
    }
  } else if (Array.isArray(e.images)) {
    imagesArray = e.images;
  }

  const imgs = imagesArray.map((i) => `${baseUrl}${i.path}`).join(", ");

  margazhiSheet.addRow({
    id: e.id,
    name: e.name,
    email: e.email,
    phone: e.phone,
    country_code: e.country_code,
    message: e.message,
    images: imgs,
    created_at: e.created_at,
  });
});

  return await workbook.xlsx.writeBuffer();
};

module.exports = exportToExcel;
