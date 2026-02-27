
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
    </>
  );
}

