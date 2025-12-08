import React, { useEffect, useState } from "react";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    if (!document.querySelector("#google_translate_script")) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.id = "google_translate_script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleTranslate = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
    setOpen(false);
  };

  return (
    <div className="relative inline-block langaugesection">
      <button
        className="px-4 py-2 bg-blue-600 text-white  focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        Language
      </button>

      {open && (
        <ul className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
          <li
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleTranslate("en")}
          >
            English
          </li>
          <li
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleTranslate("ta")}
          >
            Tamil
          </li>
          <li
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleTranslate("de")}
          >
            German
          </li>
          <li
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleTranslate("ar")}
          >
            Arabic
          </li>
        </ul>
      )}

      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default LanguageDropdown;
