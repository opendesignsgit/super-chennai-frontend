import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function LawColleges() {
  // lawCollege

  const lawCollegeIntro = [
    {
      sectionTitle: "Law Colleges in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/College/Image/law-colleges-chennai.jpg",
      imgAlt: "",
    },
  ];

  const lawCollegeContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [],
        },
      ],
    },
  ];

  const lawCollegeSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc:
        "Once known for its hardware exports and call centers, Chennai has now become:",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  Chennai is a leading academic center for legal education,
                  offering a rich array of institutions—from prestigious
                  government-run universities to high-performing private and
                  deemed colleges. These law schools provide a comprehensive
                  legal education rooted in ethical scholarship and practical
                  learning.
                </>,
              ],
              imgs: "/images/education/College/icon/Overview.svg",
            },
          ],
        },
        {
          points: [],
        },
      ],
    },
  ];

  const lawCollegeContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Admissions & Entrance Exams",
              para: [
                <>
                  <strong> Accepted Exams: </strong>
                  CLAT, LSAT India, AILET, CUET, with some colleges also taking
                  state or university-specific assessments College
                  Gamut+12Careers360 Law+12Careers360 Law+12.
                </>,
                ,
                <>
                  <strong>Government law institutions </strong>
                  like TNDALU may offer admissions based on academic merit or
                  university criteria CollegeDekho+4Careers360 Law+4Primebook+4.
                </>,

                ,
              ],
              imgs: "/images/education/College/icon/Admissions & Entrance Exams.svg",
            },
            {
              title: "Placements & Return on Investment (ROI)",
              para: [
                <>
                  <strong>SRMIST Law: </strong>
                  Excellent ROI at 71.3%, average placement ~₹7.13 LPA
                  Collegedunia+1.
                </>,
                ,
                <>
                  <strong>Sathyabama Law: </strong>
                  ROI ~70%, median salary ~₹5.57 LPA Collegedunia.
                </>,
                <>
                  {" "}
                  <strong>VISTAS: </strong>Median placement ~₹6 LPA
                  Collegedunia+2Shiksha+2.
                </>,
                <>
                  <strong>Student ratings: </strong>
                  Saveetha Law (4.1/5), VISTAS (3.9), Vel Tech (3.7), VIT (4.0),
                  Sathyabama (3.9) Collegedunia+1.
                </>,
                <>
                  <strong>TNDALU: </strong>
                  Strong placement records with salaries up to ₹6.5 LPA College
                  Gamut+8Careers360 Law+8Collegedunia+8.
                </>,
                <>
                  <strong>Med. University Law: </strong>
                  Average package ~₹3.6 LPA; Vel Tech ~₹2.5 LPA Careers360
                  Law+2Collegedunia+2.
                </>,
              ],
              imgs: "/images/education/College/icon/Placements & Return on Investment (ROI).svg",
            },
            {
              title: "Why Study Law in Chennai?",
              para: [
                <>
                  <strong>Affordable Options Available: </strong>
                  Significantly lower fees in government institutions like
                  TNDALU and Madras University.
                </>,
                ,
                <>
                  <strong>High-ROI Private Law Schools: </strong>
                  SRMIST, Sathyabama provide strong job outcomes for invested
                  costs.
                </>,
                <>
                  <strong>Historic & Specialized Institutions: </strong>
                  University of Madras and TNDALU offer legacy and academic
                  rigor.
                </>,
                <>
                  <strong>Diverse Curricular Offerings: </strong>
                  from integrated degrees to LLB/LLM, and niche specializations.
                </>,
                <>
                  <strong>Engaged Learning: </strong>
                  Moot courts, legal aid clinics, and research hubs support
                  practice-oriented education.
                </>,
              ],
              imgs: "/images/education/College/icon/Why Study Law in Chennai_.svg",
            },
          ],
        },
      ],
    },
  ];

  const lawCollegeSchools = [
    {
      SchoolName: "Saveetha School of Law",
      ProgrammesOffered: "BA LLB, BBA LLB, B.Com LLB",
      Location: null,
      ApproxFees: "₹17.5 lakh",
      ExtraInfo:
        "High CD Score: 1532/2000; strong infrastructure Zollege+7Primebook+7LawShun+7Higher Education in India+5Collegedunia+5Collegedunia+5",
    },
    {
      SchoolName:
        "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
      ProgrammesOffered: "BA LLB, BBA LLB, B.Com LLB",
      Location: null,
      ApproxFees: "₹9.5 – ₹10.9 lakh",
      ExtraInfo: "Median Placement: ₹6 LPA; good scholarships",
    },
    {
      SchoolName: "Vel Tech University (Law)",
      ProgrammesOffered: "BA LLB, BBA LLB",
      Location: null,
      ApproxFees: "₹7.55 lakh",
      ExtraInfo: "Ranked among top law institutes",
    },
    {
      SchoolName: "VIT Law School (VIT Chennai)",
      ProgrammesOffered: "BA LLB, BBA LLB",
      Location: null,
      ApproxFees: "₹10.02 lakh",
      ExtraInfo: "Known for global pedagogy",
    },
    {
      SchoolName: "SRM Institute of Science & Technology (Law)",
      ProgrammesOffered: "BA LLB, BBA LLB, B.Com LLB, LLB",
      Location: null,
      ApproxFees: "₹10 lakh",
      ExtraInfo: "Highest ROI: 71% avg; placements ~₹7.13 LPA",
    },
    {
      SchoolName: "Sathyabama Institute of Science & Technology (Law)",
      ProgrammesOffered: "BA LLB, BBA LLB, B.Com LLB, LLB",
      Location: null,
      ApproxFees: "₹7.95 lakh",
      ExtraInfo: "Affordable legal education; ISR ~₹4.83 LPA",
    },
    {
      SchoolName: "Tamil Nadu Dr. Ambedkar Law University (TNDALU)",
      ProgrammesOffered: "LLB, Integrated Law (BA/BBA/B.Com LLB)",
      Location: null,
      ApproxFees: "₹4.38 lakh (Integrated)",
      ExtraInfo: "State public law university",
    },
    {
      SchoolName: "University of Madras (Law)",
      ProgrammesOffered: "LLB, LLM",
      Location: null,
      ApproxFees: "₹9,770 (LLB)",
      ExtraInfo: "Historic institution, strong legal legacy",
    },
    {
      SchoolName: "Chettinad Academy of Research & Education",
      ProgrammesOffered: "BA LLB, BBA LLB, B.Com LLB",
      Location: null,
      ApproxFees: "₹30 lakh (Integrated)",
      ExtraInfo: "Premium law education offering",
    },
    {
      SchoolName: "Bharath Institute of Law (BIHER)",
      ProgrammesOffered: "BBA LLB Integrated",
      Location: null,
      ApproxFees: "₹10.6 lakh",
      ExtraInfo: "Well-regarded law programmes",
    },
  ];

  // lawCollege

  return (
    <>
      <div>
        {/* Law-Colleges*/}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {lawCollegeIntro.map((section, index) => {
              const tenantCount = section.tenantInfoSections?.length ?? 0;
              const parentClass =
                tenantCount % 2 === 0 ? "even-count" : "odd-count";

              return (
                <section
                  key={index}
                  style={{ paddingBottom: "50px" }}
                  className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
        ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
        ${
          index === 0
            ? "pattern-a"
            : index % 2 === 0
            ? "pattern-b"
            : "pattern-c"
        }`}
                >
                  <div className="imgLeft">
                    <img src={section.image} alt={section.imgAlt} />
                  </div>
                  <div className="imgText flex items-center">
                    <div className="imgcolTitle bg-[#682865] relative">
                      <h2 className="flex flex-col text-white">
                        <small>{section.sectionTitle}</small>
                      </h2>
                      {/* <p>{section.sectionDesc}</p> */}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
            {lawCollegeSections.map((section, index) => (
              <section
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
        ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
        ${
          index % 3 === 0
            ? "pattern-a"
            : index % 3 === 1
            ? "pattern-b"
            : "pattern-c"
        }`}
                key={index}
              >
                <div className="space-y-6 bg-white p-4  rounded bottomListIcon w-full">
                  {section.fintechEvolution.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div
                          key={j}
                          className="clcboxItemss flex mb-4"
                          style={{ paddingBottom: "0" }}
                        >
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.imgAlt} />
                          </div>
                          <div className="clcboxICont">
                            <h3 className="text-lg font-semibold mb-2">
                              {item.title}
                            </h3>
                            {item.note && (
                              <p className="">{item.note}</p> // ✅ note displayed clearly
                            )}
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                              {item.para.map((point, k) => (
                                <li key={k}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {lawCollegeContents.map((section, index) => (
              <section
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                ${
                  index % 2 === 0
                    ? "bg-white whitebgsec"
                    : "bg-[#f7f7f7] colorbgsec"
                } 
              ${
                index % 3 === 0
                  ? "pattern-a"
                  : index % 3 === 1
                  ? "pattern-b"
                  : "pattern-c"
              }`}
                key={index}
              >
                <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                  <p>{section.sectionDesc}</p>
                  {section.fintechEvolution.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div
                          key={j}
                          className="clcboxItemss flex mb-4"
                          style={{ paddingBottom: "0" }}
                        >
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.imgAlt} />
                          </div>
                          <div className="clcboxICont">
                            <h3 className="text-lg font-semibold mb-2">
                              {item.title}
                            </h3>

                            {item.note && (
                              <p className="text-gray-700 mb-1">{item.note}</p>
                            )}
                            {item.para && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}

                            {item.note2 && (
                              <p className="text-gray-700  mb-1">
                                {item.note2}
                              </p>
                            )}
                            {item.para2 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para2.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}
                            {item.note3 && (
                              <p className="text-gray-700  mb-1">
                                {item.note3}
                              </p>
                            )}

                            {item.para3 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para3.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}

                            {item.para4 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para4.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {lawCollegeContents2.map((section, index) => (
              <section
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                ${
                  index % 2 === 0
                    ? "bg-white whitebgsec"
                    : "bg-[#f7f7f7] colorbgsec"
                } 
              ${
                index % 3 === 0
                  ? "pattern-a"
                  : index % 3 === 1
                  ? "pattern-b"
                  : "pattern-c"
              }`}
                key={index}
              >
                <div className="space-y-6 bg-white p-4 rounded bottomListIcon w-full">
                  <p>{section.sectionDesc}</p>
                  {section.fintechEvolution.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div
                          key={j}
                          className="clcboxItemss flex mb-4"
                          style={{ paddingBottom: "0" }}
                        >
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.imgAlt} />
                          </div>
                          <div className="clcboxICont">
                            <h3 className="text-lg font-semibold mb-2">
                              {item.title}
                            </h3>

                            {item.note && (
                              <p className="text-gray-700 mb-1">{item.note}</p>
                            )}
                            {/* {item.para && (
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                      {item.para.map((point, k) => (
                                        <li key={k}>{point}</li>
                                      ))}
                                    </ul>
                                  )} */}
                            {item.para && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}

                            {item.note2 && (
                              <p className="text-gray-700  mb-1">
                                {item.note2}
                              </p>
                            )}
                            {item.para2 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para2.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}
                            {item.note3 && (
                              <p className="text-gray-700  mb-1">
                                {item.note3}
                              </p>
                            )}

                            {item.para3 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para3.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}

                            {item.para4 && (
                              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                                {item.para4.map((point, k) => (
                                  <li key={k}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
            <div className="overflow-x-auto my-6">
              <h2 className="text-2xl font-bold">
                Top Law Colleges in Chennai
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      College Name
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Course Offerings
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Approx. Total Fees (5-Year Integrated Law)
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Highlights & Rankings
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {lawCollegeSchools.map((giant, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.SchoolName}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.ProgrammesOffered}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.ApproxFees}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.ExtraInfo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Law-Colleges*/}
      </div>
    </>
  );
}
