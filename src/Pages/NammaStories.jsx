import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";
import { nammaStoriesNewsEPaper, NammaStoreiesnewsArticle } from "./NewsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "./NammaStoriesForm";
import NammaStoriesVideo from "./NammaStoriesVideo";

export default function NammaStories() {
  const [tab, setTab] = useState("active");
  const [tab1, setTab1] = useState("");
  const [newsarticle, setNewsArticle] = useState("active");
  const [newsLetter, setLetter] = useState("");
  const [newsYoutube, setNewsYoutube] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <Helmet>
        <title>Media Coverage | News & TVC Features – Super Chennai</title>
        <meta
          name="description"
          content="Explore all the buzz around Super Chennai! From newspaper features and online articles to TV commercials and media mentions — see how the city’s story is being told."
        />
      </Helmet>

      <div className="NewsLetterPage">
        <section className="accaodomationBannerSection">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/namma-stories-banner.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Namma Stories </h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> - <a href="">Namma Stories </a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </section>
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workIntro">
              <h3>Namma Stories – A Short Film Contest from Super Chennai</h3>
              <p>
                Every street in Chennai has a story waiting to be told. Every
                face, every moment, every memory contributes to the pulse of
                this incredible city. Namma Stories is a short film contest from
                Super Chennai that invites you to capture the city as you see
                it. The beauty, the chaos, the charm, and the change. This
                contest is open to everyone. There are no age limits, no entry
                barriers, and no need for fancy equipment. Whether you're a
                filmmaker, a student, a working professional, or simply someone
                with a story to share, this is your platform. Shoot it on a
                phone or with a DSLR. What matters most is the heart behind the
                story.
              </p>
              <p>
                Your film can be up to 5 minutes long and must revolve around
                Chennai in some meaningful way. It could be a personal memory, a
                social message, a documentary-style portrait of a neighborhood,
                or a fictional tale set in the city. We’re looking for
                originality, emotion, and authenticity.
              </p>
              <p>
                The best entries will be featured by Super Chennai and one
                standout film will win a <strong style={{fontSize:"18px"}}> cash prize of  ₹1,00,000.</strong> Selected films
                may also be screened at upcoming Super Chennai events and
                festivals.The last date for submission is <strong style={{fontSize:"18px"}}>August 15.</strong>  The winning
                entry will be announced on Madras Day.Start scripting, shooting,
                and sharing. Let your lens become the voice of the city. This is
                your chance to tell your story and be part of Chennai’s story.
              </p>
            </div>
          </div>
        </div>

        {/* <ContactForm /> */}
        <NammaStoriesVideo/>
        <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter">
          <div className="container max-w-7xl mx-auto ">
            <div class="Eventitlesec mb-[50px] text-center">
              <h2 className="text-[#a44294]">Namma Stories</h2>
              <p>
                Stay updated with the latest images, videos, and highlights from
                SuperChennai’s events, announcements, and developments.
              </p>
            </div>
            <div className="flex justify-center mb-8 newsLetterSection">
              <button
                className={`newsLetterButton ${
                  tab === "active" ? "active" : ""
                }`}
                onClick={() => {
                  setTab("active");
                  setTab1("");
                }}
              >
                News - E Paper
              </button>
              <button
                className={`newsLetterButton ${
                  tab1 === "active" ? "active" : ""
                }`}
                onClick={() => {
                  setTab1("active");
                  setTab("");
                }}
              >
                News Articles
              </button>
            </div>

            {tab === "active" && (
              <div className="EventsListboxs flex flex-wrap justify-center">
                {nammaStoriesNewsEPaper.map((card, index) => (
                  <div
                    key={index}
                    className="EventsItems bg-white cursor-pointer newsLetterImage"
                    onClick={() => setSelectedCard(card)}
                    style={{
                      transition: "transform 0.3s",
                    }}
                  >
                    <div
                      className="relative w-full EventsItemImg"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      {/* <h2 className="titlePublished">{card.Company}</h2> */}
                      <h3 className="EveItemtitles">
                        <Link
                          // style={{ fontWeight: "500" }}
                          // to={card.link}
                          onClick={() => setSelectedCard(card)}
                          state={{ card }}
                        >
                          {`${card.EventsCalendarTitle.slice(0, 60)}...`}
                        </Link>
                        <div
                          className="readMoreMainDiv"
                          onClick={() => setSelectedCard(card)}
                        >
                          <Link
                            onClick={() => setSelectedCard(card)}
                            // to={card.link}
                            className="ReadmoreNewArticles"
                          >
                            Click to View
                          </Link>
                        </div>
                      </h3>
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab1 === "active" && (
              <>
                <div className="EventsListboxs flex flex-wrap nammaStoriesNewsLtter">
                  {NammaStoreiesnewsArticle.map((card, index) => (
                    <div
                      key={index}
                      className="EventsItems bg-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-full EventsItemImg">
                        <Link to={card.link} target="_blank" state={{ card }}>
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full object-cover"
                          />
                        </Link>
                      </div>
                      <div className="EventsIteCont flex flex-col items-start">
                        <h2 className="titlePublished">{card.Company}</h2>
                        <h3 className="EveItemtitles">
                          <Link
                            // style={{
                            //   fontFamily: `'29LT Bukra SmBd', 'Noto Sans Tamil', sans-serif`,
                            //   fontWeight: 500,
                            // }}
                            style={{
                              fontFamily: `'Poppins', 'Noto Sans Tamil', sans-serif`,
                              // fontWeight: 500,
                            }}
                            to={card.link}
                            target="_blank"
                            state={{ card }}
                          >
                            {`${card.EventsCalendarTitle.slice(0, 60)}...`}
                          </Link>
                          <div className="readMoreMainDiv">
                            <Link
                              target="_blank"
                              to={card.link}
                              className="ReadmoreNewArticles"
                            >
                              Readmore
                            </Link>
                          </div>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <AnimatePresence>
              {selectedCard && (
                <motion.div
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-xl w-auto relative popupSection"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <button
                      className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                      onClick={() => setSelectedCard(null)}
                    >
                      ×
                    </button>
                    <img
                      src={selectedCard.image1}
                      alt={selectedCard.title}
                      className="w-full mb-4 rounded popupSection paddingSection"
                    />
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedCard.title}
                    </h2>
                    <p className="text-gray-600">{selectedCard.description}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
}



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../assets/Css/Eventstyle.css";

// const ContactSalesForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     video: "",
//     description: "",
//   });
//   const [video, setVideoFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [videoFileName, setVideoFileName] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [loading]);

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, mobile, video, description } = formData;

//     if (!name.trim() || name.trim().length < 2) {
//       toast.error("Please enter a valid name (min 2 characters)");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailRegex.test(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     const mobileRegex = /^[0-9]{10}$/;
//     if (!mobile.trim() || !mobileRegex.test(mobile)) {
//       toast.error("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     if (!video.trim() || video.trim().length < 5 || !video.includes("http")) {
//       toast.error("Please enter a valid video URL (e.g., YouTube link)");
//       return;
//     }

//     if (!description.trim() || description.trim().length < 10) {
//       toast.error("Please enter a description (min 10 characters)");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/posts`,
//         {
//           name,
//           email,
//           mobile,
//           video,
//           description,
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Successfully submitted!");
//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           video: "",
//           description: "",
//         });

//         setTimeout(() => {
//           navigate("/thankyou");
//         }, 1000);
//       } else {
//         toast.error("Submission failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="contactFormStyle">
//       <div className="container max-w-6xl mx-auto   rounded-md ">
//         <h2 className="text-2xl font-semibold text-center mb-6 ">
//           Upload your video
//         </h2>
//         <ToastContainer
//           position="bottom-center"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <input
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-4">
//             <div>
//               <input
//                 placeholder="Mobile Number"
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 pattern="[0-9]{10}"
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="video"
//                 value={formData.video}
//                 onChange={handleChange}
//                 placeholder="YouTube Video Link"
//                 required
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />

//               <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                 <strong>Note:</strong>  Share your uploaded YouTube video link here.
//               </p>
//             </div>

//             {/* <div className="w-full">
//               <div className="flex uploadmainContainer">
//                 <div className="flex items-center justify-center w-full buttonUploadButton">
//                   <label
//                     htmlFor="videoUpload"
//                     className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//                   >
//                     <div className="flex flex-col items-center justify-center">
//                       <svg
//                         aria-hidden="true"
//                         className="w-10 h-10 mb-3 text-gray-800"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M7 16V4m0 0l-4 4m4-4l4 4M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.414 2.414A1 1 0 0112 22H4a2 2 0 01-2-2V6a2 2 0 012-2h2"
//                         />
//                       </svg>

//                       <p className="mb-1 text-sm text-gray-500 font-medium text-center">
//                         Click to Upload Video
//                       </p>
//                     </div>

//                     <input
//                       id="videoUpload"
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>

//               {videoFileName ? (
//                 <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                   *Selected-Video : {videoFileName}
//                 </p>
//               ) : (
//                 <p className="mt-2 text-sm text-gray-700 font-medium truncate slectedVideo">
//                   * Max size: 20mb
//                 </p>
//               )}
//             </div> */}
//           </div>

//           <div className="mb-4">
//             <textarea
//               placeholder="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="uppercase font-[29LT Bukra SmBd] text-black text-[14px] mt-[10px] bg-[#fff] px-4 py-[7px] rounded-[3px] tracking-[1px] transition-colors hover:bg-[#7d3e7e] SubmitbuttonContact"
//             >
//               {/* {loading ? "Uploading..." : "Submit"} */}
//               {loading ? (
//                 <>
//                   <span className="loaderSpinner"></span>
//                   Uploading...
//                 </>
//               ) : (
//                 "Submit"
//               )}
//             </button>
//             {message && <p>{message}</p>}
//           </div>
//         </form>

//         {/* {loading && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
//             <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default ContactSalesForm;