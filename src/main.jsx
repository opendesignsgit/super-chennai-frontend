import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this!
import { HelmetProvider } from "react-helmet-async";
import ScrollManager from "./Components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </HelmetProvider>
  </StrictMode>
);

main.jsx;
