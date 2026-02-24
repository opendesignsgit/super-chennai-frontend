require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const paymentRoutes = require("./routes/paymentRoutes");
const path = require('path');
const handleExcelDownloadWithErrorHandle = require('./utils/erorrHandle');
const app = express();
const videoLikesRoutes = require("./routes/videoLikesRoutes");
const quizRoutes = require("./routes/quizRoutes");     
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");
const adminRoutes = require("./routes/Admin/all-users")
const margazhiRoutes = require("./routes/margazhiMonthRoutes")
const hotshotChennaiRoutes = require("./routes/hotshotChennaiRoutes");
const blogOgRoute = require("./routes/og/blogOgRoute");

const conclaves = require ("./routes/conclaveRoutes")
const arattai = require ("./routes/arattaiRoutes")
const aiRoutes = require("./routes/ai")

//##################### MIDDLEWARE  AREA #######################################
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

//##################### ROUTES AREA #############################################

//##################### AUTH AND PROCT ROUTES NOT USED  #########################

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/admin", adminRoutes);




app.use('/api', postRoutes);
//##################### XLS SHEET AREA ##########################################
handleExcelDownloadWithErrorHandle(app);
app.use('/exports', express.static(path.join(__dirname, 'public/exports')));
app.use("/api", paymentRoutes);
app.use("/uploads", express.static("uploads")); // to access uploaded images
app.use("/api/videos", videoLikesRoutes);
app.use("/api/", quizRoutes); 
   
app.use("/api", margazhiRoutes);

app.use("/api/all", hotshotChennaiRoutes);
app.use("/api/conclaves", conclaves);


//################ ARAATTAI ###########################

app.use("/api/arattai",arattai);


app.use("/ai", aiRoutes);

app.use("/", blogOgRoute);

//#################### COMMON ERROR HANDLING ####################################
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




