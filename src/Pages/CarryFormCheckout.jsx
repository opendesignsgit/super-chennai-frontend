import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function TicketCheckout() {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

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

    const stored = JSON.parse(localStorage.getItem("carRallyUser") || "{}");
    const { name, email, phone, no_of_persons } = stored;

    if (!name || !email || !phone || !no_of_persons) {
      toast.error("Missing required user details.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("no_of_persons", no_of_persons);
    formData.append("paymentImage", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payments`,
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


  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="">
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
            <h3> Car Treasure Hunt</h3>
            <div className="breadCrum">
              <Link style={{ color: "#fff" }} to="/">
                Home
              </Link>
              -
              <Link style={{ color: "#fff" }} to="/eventsmain">
                (Car Treasure Hunt)
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <div className="checkoutForm min-h-screen bg-gray-100 p-4 md:p-10 h-screen flex items-center">
        {/* <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-4">
              Please select from the following option(s)
            </h3>

        

            <div className="bg-blue-100 p-4 rounded-md text-sm text-gray-800 leading-relaxed">
              <h4 className="font-semibold mb-4">
                Car Treasure Hunt – Chennai | GPay Payment Instructions
              </h4>
              <p className="mb-2">
                <strong>Step 1: Scan to Pay via GPay </strong>
              </p>
              <p className="mb-2">
                Scan the QR code below using Google Pay to pay ₹1000 per car.
              </p>
              <p className="mb-2">
                <strong>Step 2: Upload Payment Screenshot</strong>
              </p>
              <p className="mb-2">
                <strong>After completing the payment:</strong>
              </p>
           
              <ol className="list-decimal ml-5 space-y-1">
                <li>Click ‘Continue’ on this page.</li>
                <li>Upload a screenshot of your successful GPay payment.</li>
                <li>Once verified, your ticket will be sent to your email.</li>
              </ol>

              <h5 className="!mb-[20px]">
                Note: Tickets will not be issued without uploading the payment proof.
              </h5>
              <h6>
                <strong>( Ticket Delivery:</strong>  Tickets will be sent via email only after payment verification. )
              </h6>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="border rounded-md p-4 mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">Event Details</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Ticket Price: ₹1000 per car
              </p>
              <p className="text-sm text-gray-700 mt-3">
                1 Ticket
                <br />
                Team Size: Up to 4 people
                <br />
                Start Time: 8:30 AM
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Date: Saturday, August 17, 2025</strong>
              </p>
            </div>

            <div className="space-y-2 text-sm mb-4">
      

              <div className="flex justify-between font-semibold text-base">
                <span>Amount to Pay</span>
                <span>₹1000.00</span>
              </div>
            </div>

            <button
              onClick={handleShow}
              className="w-full bg-rose-500 text-white text-sm font-semibold py-2 rounded hover:bg-rose-600 transition"
            >
              Proceed to Pay
            </button>
          </div>
        </div> */}

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Pickup Info */}
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
              <p className="mb-2">
                <strong>After completing the payment:</strong>
              </p>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Click ‘Continue’ on this page.</li>
                <li>Upload a screenshot of your successful GPay payment.</li>
                <li>Once verified, your ticket will be sent to your email.</li>
              </ol>

              <h5 className="!mb-[20px]">
                Note: Tickets will not be issued without uploading the payment
                proof.
              </h5>
              <h6>
                <strong>( Ticket Delivery:</strong> Tickets will be sent via
                email only after payment verification. )
              </h6>
            </div>
          </div>

          {/* Right Section: Ticket Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="border rounded-md p-4 mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">Event Details</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Ticket Price : ₹1250 per car
              </p>
              <p className="text-sm text-gray-700 mt-3">
                1 Ticket
                <br />
                Team Size : Up to 4 people
                <br />
                Start Time : 8:30 AM
                <br />
                Duration : 2hrs
                <br />
                Starting point : Lady Andal School, Chetpet
                <br />
                Finish point : VGP Heritage Resort
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Date: Sunday, August 17, 2025</strong>
              </p>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between font-semibold text-base">
                <span>Amount to Pay</span>
                <span>₹1250.00</span>
              </div>
            </div>

            <button
              onClick={handleShow}
              className="w-full bg-rose-500 text-white text-sm font-semibold py-2 rounded hover:bg-rose-600 transition"
            >
              Proceed to Pay
            </button>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {showForm ? "Enter Your Details" : "Scan to Pay"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {showForm ? (
              <form
                onSubmit={handleSubmit}
                className="border-2 border-dashed border-[#a44294] rounded-lg p-6 text-center max-w-md mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://icon-library.com/images/file-management-icon/file-management-icon-11.jpg"
                    alt="Upload"
                    className="w-10 mb-4"
                  />

                  <p className="text-gray-600">
                    Upload your payment screenshot
                  </p>
                  <p className="text-gray-500 my-2">– OR –</p>

                  <label htmlFor="fileUpload">
                    <div className="bg-[#a44294] text-white px-4 py-2 rounded cursor-pointer">
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
                  className="!mt-[20px] bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center">
                <img src="/images/qrcode.png" alt="QR" className="w-60 mb-4" />
                <h4 className="text-center">Click to Finish Payment</h4>
              </div>
            )}
          </Modal.Body>

          <Modal.Footer>
            {!showForm && (
              <Button variant="primary" onClick={handleContinue}>
                Continue
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
