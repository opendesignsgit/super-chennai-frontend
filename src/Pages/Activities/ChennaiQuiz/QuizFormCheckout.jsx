import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function TicketCheckout() {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContinue = () => {
    setShowForm(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!file) {
      toast.error("Please upload your payment screenshot.");
      setIsSubmitting(false);
      return;
    }

    // Get stored form data from previous page
    const stored = JSON.parse(localStorage.getItem("carRallyUser") || "{}");
    const { name, name2, email, phone, message } = stored;

    // Validate fields
    if (!name || !name2 || !email || !phone || !message) {
      toast.error("Missing required user details.");
      setIsSubmitting(false);
      return;
    }

    // Build FormData with only correct fields
    const formData = new FormData();
    formData.append("name", name);
    formData.append("name2", name2);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("paymentImage", file); 

    try {
      // Debug FormData
      const formObj = {};
      formData.forEach((value, key) => {
        formObj[key] = value;
      });

      console.log("Form Send Data:", JSON.stringify(formObj, null, 2));
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payments1`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        toast.success("Payment submitted successfully!");
        localStorage.removeItem("carRallyUser");

        setTimeout(() => handleClose(), 2000);
        setTimeout(() => {
          navigate("/carthankyou");
        }, 1000);
      } else {
        toast.error("Failed to submit payment.");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(`Upload Failed: ${err.response.data.message}`);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div>
      <section className="accaodomationBannerSection">
        <div>
          <img
            className="eventsCalenderIamge"
            src="/images/events/Carrallybanner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>CheckOut </h3>
            <div className="breadCrum flex items-center gap-2 text-white">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
              <span>-</span>
              <Link to="/events" className="text-white hover:underline">
                CheckOut{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <div className="checkoutForm min-h-screen bg-gray-100 p-4 md:p-10 h-screen flex items-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-4">
              Please follow the instructions below
            </h3>

            <div className="bg-blue-100 p-4 rounded-md text-sm text-gray-800 leading-relaxed">
              <h4 className="font-semibold mb-4">
                Car Treasure Hunt – Chennai | GPay Payment Instructions
              </h4>

              <p className="mb-2">
                <strong>Step 1: Scan to Pay via GPay </strong>
              </p>
              <p className="mb-2">
                Scan the QR code below using Google Pay to pay ₹1250 per car.
              </p>

              <p className="mb-2">
                <strong>Step 2: Upload Payment Screenshot</strong>
              </p>

              <ol className="list-decimal ml-5 space-y-1">
                <li>Click ‘Continue’ on this page.</li>
                <li>Upload a screenshot of your successful payment.</li>
                <li>Once verified, your ticket will be emailed.</li>
              </ol>

              <h5 className="!mb-[20px]">
                Note: Ticket will not be issued without uploading payment proof.
              </h5>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="border rounded-md p-4 mb-4">
              <h3 className="font-semibold">Event Details</h3>
              <p className="text-sm text-gray-600 mt-1">
                Ticket Price : ₹1250 per car
              </p>

              <p className="text-sm text-gray-700 mt-3">
                1 Ticket <br />
                Team Size : Up to 4 people <br />
                Start Time : 8:30 AM <br />
                Duration : 2hrs <br />
                Starting point : Lady Andal School, Chetpet <br />
                Finish point : VGP Heritage Resort
              </p>

              <p className="text-sm text-gray-700 mt-2">
                <strong>Date: Sunday, August 17, 2025</strong>
              </p>
            </div>

            <div className="flex justify-between font-semibold text-base mb-4">
              <span>Amount to Pay</span>
              <span>₹1250.00</span>
            </div>

            <button
              onClick={handleShow}
              className="w-full bg-rose-500 text-white text-sm font-semibold py-2 rounded hover:bg-rose-600 transition"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
        {show && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>

              {/* Header */}
              <h2 className="text-xl font-semibold mb-4 text-center">
                {showForm ? "Upload Payment Proof" : "Scan to Pay"}
              </h2>

              {/* Body */}
              {showForm ? (
                <form
                  onSubmit={handleSubmit}
                  className="border-2 border-dashed border-[#a44294] rounded-lg p-6 text-center"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="https://icon-library.com/images/file-management-icon/file-management-icon-11.jpg"
                      alt="Upload"
                      className="w-12 mb-4"
                    />

                    <p className="text-gray-600">
                      Upload your payment screenshot
                    </p>

                    <label htmlFor="fileUpload">
                      <div className="bg-[#a44294] text-white px-4 py-2 rounded cursor-pointer mt-3">
                        Click here to Upload
                      </div>
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      id="fileUpload"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {file && (
                      <p className="mt-4 text-sm text-gray-700">
                        Uploaded: <strong>{file.name}</strong>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src="/images/qrcode.png"
                    alt="QR"
                    className="w-60 mb-4"
                  />
                  <h4 className="text-center text-gray-700">
                    Click Continue after Payment
                  </h4>
                </div>
              )}

              {/* Footer Buttons */}
              {!showForm && (
                <button
                  onClick={handleContinue}
                  className="w-full bg-[#a44294] hover:bg-[#8a357d] text-white py-2 rounded mt-5"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
