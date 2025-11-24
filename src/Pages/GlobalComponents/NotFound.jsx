import React from "react";
import { Link } from "react-router-dom";

export default function NotFound({
  title = "Not Found",
  message = "The content you are looking for might be unavailable or the link is incorrect.",
  redirect = "/",
  redirectLabel = "Go Back",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 px-4 text-center m-10 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>

      <p className="text-gray-500 text-sm max-w-md mb-6">{message}</p>

      <Link
        to={redirect}
        className="px-6 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
      >
        {redirectLabel}
      </Link>
    </div>
  );
}
