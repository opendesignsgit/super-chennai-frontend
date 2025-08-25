import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewsletterForm() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newsletter: true,
            email: email.trim(),
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Thanks for subscribing!");
        setEmail("");
      } else {
        toast.error(result?.error || "Subscription failed. Try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <ToastContainer
        //   position="top-center" autoClose={3000} hideProgressBar
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="relative w-full max-w-md">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer"
          >
            Subscribe to Newsletter
          </button>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform translate-x-0">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/HomePage-Images/Superchennai.png"
                alt="Logo"
                className="w-18 mb-3"
              />
              <h2 className="text-xl font-bold">Super Chennai's Newsletter</h2>
              <p className="text-gray-600 text-sm mb-4">
                Weekly updates on what’s new, now, and next in Chennai,
                <br />
                from food to startups!
              </p>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Type your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="Newsletterinputbox flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="Newsletterinputbutton bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Subscribe"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                By subscribing you agree to{" "}
                <a href="#" className="underline">
                  Substack’s Terms of Use
                </a>
                ,{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                , and{" "}
                <a href="#" className="underline">
                  Information collection notice
                </a>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
