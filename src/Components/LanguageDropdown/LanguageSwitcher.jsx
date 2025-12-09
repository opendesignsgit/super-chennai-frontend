import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");

  const handleChange = (lang) => {
    if (window.Weglot) {
      window.Weglot.switchTo(lang);
      setCurrent(lang);
    }
  };

  useEffect(() => {
    if (window.Weglot) {
      setCurrent(window.Weglot.getCurrentLanguage());
    }
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`px-3 py-1 rounded ${
            current === lang.code
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
