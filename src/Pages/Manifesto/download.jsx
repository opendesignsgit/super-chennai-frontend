
import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    window.location.href =
      "https://www.superchennai.com/pdfs/file-example_PDF_1MB.pdf";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Downloading Manifesto...</p>
    </div>
  );
}