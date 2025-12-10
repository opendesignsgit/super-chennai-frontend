import { useState } from "react";

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter password",
  className = "",
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg pr-12 focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-600 focus:outline-none"
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.5 12c1.352 3.807 
                 4.95 6.5 9.525 6.5 1.586 0 3.106-.316 
                 4.475-.888M6.223 6.223A10.45 10.45 0 0111.025 
                 5.5c4.575 0 8.173 2.693 9.525 
                 6.5-.558 1.57-1.507 2.942-2.73 
                 4.017M6.223 6.223L3 3m3.223 3.223L3 
                 3m0 0l3.223 3.223M16.5 16.5L21 
                 21M12 9.75A2.25 2.25 0 019.75 
                 12m4.5 0A2.25 2.25 0 0012 9.75"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 
                7.51 7.36 4.5 12 4.5c4.64 0 8.577 
                3.01 9.964 7.178.07.207.07.437 
                0 .644C20.577 16.49 16.64 19.5 12 
                19.5c-4.64 0-8.577-3.01-9.964-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 
                016 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
