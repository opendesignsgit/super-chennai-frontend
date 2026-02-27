
export default function menifestoInfo() {
  return (
    <>
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="hidden sm:block w-full h-full object-cover"
            src="https://www.superchennai.com/images/Work-Images/SubPages/career-growth.jpg"
            alt="Carnatic Vocalist"
          />

          <img
            className="block sm:hidden w-full h-full object-cover"
            src="https://www.superchennai.com/images/Work-Images/SubPages/career-growth.jpg"
            alt="Aruna sairam"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>
      <div style={{ padding: 20 }}>
        <iframe
          src="/pdfs/file-example_PDF_1MB.pdf"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </div>

      <footer className="bg-black text-white py-10">
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

    <h3 className="text-lg font-semibold mb-4">
      Scan to Download Manifesto
    </h3>

    <img
      src="/images/manifesto-qr.png"
      alt="Download Manifesto QR Code"
      className="w-40 h-40 object-contain mb-4"
    />

    <a
      href="https://manifesto.superchennai.com/pdfs/manifesto.pdf"
      download
      className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
    >
      Download PDF
    </a>

  </div>
</footer>
    </>
  );
}

