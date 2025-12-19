import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ImagePopup = ({ onClose, imageUrl }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setAnimateIn(true), 10);
  }, []);

  return (
    <div className="fixed popupImageBackground inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999] transition-opacity duration-300 ease-in-out"id="superchennai-quiz-popup">
      <div
        className={`popupStyleMainContainer bg-white p-4 rounded shadow-lg relative max-w-[90%] max-h-[90%] transform transition-all duration-500 ease-in-out ${
          animateIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-black text-[40px] cursor-pointer"
          onClick={() => {
            console.log("Close clicked");
            onClose();
          }}
        >
          &times;
        </button>
        <div
          className="flex ImagePopupFlex
        "
          // to="/namma-stories"
          // onClick={onClose}
        >
          {/* <Link to="/namma-stories#NammaStoriesVideoId" onClick={onClose}> */}
          <Link to="contest/margazhi-month-photography-contest" onClick={onClose}>
            <img
              src={imageUrl}
              alt="Popup"
              className="LeftSideImagePopup max-w-full max-h-[80vh]"
            />
          </Link>
          {/* <Link  className="RightSideImagePopup" to="/car-treasure-hunt" onClick={onClose}>
            <img
              src="/images/treasure-hunt.png"
              alt="Popup"
              className="max-w-full max-h-[80vh]"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;