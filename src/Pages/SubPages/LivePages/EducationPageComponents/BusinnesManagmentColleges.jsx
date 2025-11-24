import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function BusinessManagementColleges() {
  // Business & Management Colleges

  const BusinessandManagementIntro = [
    {
      sectionTitle: "Business & Management Colleges in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/College/Image/business-management-colleges-chennai.jpg",
      imgAlt: "",
    },
  ];

  const BusinessandManagementContents = [
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

  const BusinessandManagementSections = [
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
                  Chennai is a vibrant hub for management education, offering a
                  dynamic mix of MBA and BBA institutions known for excellence
                  in academics, placement networks, and innovation. The city
                  hosts over 220 management colleges, including elite public
                  universities, top-tier private institutes, and emerging
                  boutique business schools. trainings.io+4Campus
                  Option+4echoVME Digital+4CollegeDekho
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

  const BusinessandManagementContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Key Admissions & ROI Highlights",
              para: [
                <>
                  Total MBA colleges: 158–220 Chennai-based institutions, ~120
                  private and 8 public. Collegedunia+2Shiksha+2
                </>,
                ,
                <>
                  Entrance exams commonly accepted: CAT, XAT, CMAT, TANCET, and
                  national-level tests. Collegedunia+9Collegedunia+9Shiksha+9
                </>,
                <>
                  <ul>
                    <strong>ROI leaders :</strong>

                    <li>VISTAS: ~205% ROI (Avg. ₹11 LPA on ₹5.35 L fees)</li>
                    <li>DoMS IIT-M: ~140% ROI</li>
                    <li>
                      HITS: ~102% ROI
                      CollegeduniaShiksha+3Collegedunia+3Collegedunia+3
                    </li>
                  </ul>
                </>,
              ],
              imgs: "/images/education/College/icon/Key Admissions & ROI Highlights.svg",
            },
            {
              title: "Why B‑Schools in Chennai Stand Out",
              para: [
                <>
                  <strong>Innovation and Research Leadership: </strong>
                  DoMS IIT‑Madras is often ranked first, backed by global
                  research exposure. echoVME Digital+5Collegedunia+5Chegg
                  India+5
                </>,
                ,
                <>
                  <strong> Wide Spectrum of Fees: </strong>
                  From highly affordable options (₹1.5 L total), to premium
                  programs (₹19 L), Chennai accommodates diverse economic
                  backgrounds. CollegeduniaCollegeDekhocollegevidya.com
                </>,
                <>
                  <strong>Strong Placements: </strong>
                  Institutions like DoMS IIT‑M and Great Lakes average
                  ₹17–18 LPA, with top packages crossing ₹50 LPA.
                  Shiksha+15Collegedunia+15Collegedunia+15
                </>,
                <>
                  <strong> Flexible Specialisations: </strong>
                  Beyond classic streams like Finance and HR, colleges now offer
                  modules in Analytics, Operations, and Entrepreneurship.
                  universitykart.com+2echoVME Digital+2
                </>,
                <>
                  <strong>Digital and Hybrid Learning Innovations: </strong>
                  Several institutions integrate AI and digital strategy in
                  their curriculum—aligning with Future Chennai’s tech-forward
                  vision.
                </>,
              ],
              imgs: "/images/education/College/icon/Why B-Schools in Chennai Stand Out.svg",
            },
            {
              title: "Creative Arts, Design & Media",
              para: [
                <>
                  Chennai fosters creative minds through focused design, music,
                  and media colleges.
                </>,
                ,
                <>
                  <ul>
                    Top Institutions:
                    <li>MOP Vaishnav College for Women – Visual Comm</li>
                    <li>National Institute of Fashion Technology (NIFT)</li>
                    <li>Raffles Design International</li>
                    <li>
                      KM Music Conservatory, Image College of Arts Animation &
                      Technology (ICAT)
                    </li>
                  </ul>
                </>,
              ],
              imgs: "/images/education/College/icon/Creative Arts, Design & Media.svg",
            },
            {
              title: "Emerging & Multidisciplinary Universities",
              para: [
                <>
                  New-age private universities offer global curricula,
                  cross-disciplinary streams, and research innovation.
                </>,
                ,
                <>
                  <ul>
                    Top Institutions:
                    <li>Ashoka University (satellite campus plans in TN)</li>
                    <li>Vellore Institute of Technology (VIT Chennai)</li>
                    <li>SRM Institute of Science & Tech</li>
                    <li>Hindustan University, Sathyabama Institute</li>
                  </ul>
                </>,
              ],
              imgs: "/images/education/College/icon/Emerging & Multidisciplinary Universities.svg",
            },
          ],
        },
      ],
    },
  ];

  const BusinessandManagementSchools = [
    {
      SchoolName: "DoMS, IIT Madras",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹12.9 L total",
      MedianSalary: "₹18 LPA",
      EntranceExamAccepted:
        "CAT-85 admission cutoff Careers360 University+9Collegedunia+9Collegedunia+9Getmyuni+2Shiksha+2",
    },
    {
      SchoolName: "Great Lakes Institute of Management",
      ProgrammesOffered: "PGDM/MBA",
      feesRangeApproxmiate: "₹18.8 L total",
      MedianSalary: "₹17.8 LPA",
      EntranceExamAccepted: "CAT/XAT/CMAT – CAT-85 Collegedunia+1",
    },
    {
      SchoolName: "LIBA, Loyola",
      ProgrammesOffered: "PGDM",
      feesRangeApproxmiate: "₹19.1 L total",
      MedianSalary: "₹11.21 LPA",
      EntranceExamAccepted: "CAT-80 / XAT-75 cutoffs Collegedunia+1",
    },
    {
      SchoolName: "SSM (Saveetha School of Management)",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹7 L total",
      MedianSalary: null,
      EntranceExamAccepted: "— Collegedunia",
    },
    {
      SchoolName: "CEG, Anna University",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹1.78 L total",
      MedianSalary: null,
      EntranceExamAccepted: "TANCET-91.2+ Collegedunia",
    },
    {
      SchoolName: "HITS",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹4.4 L total",
      MedianSalary: "₹4.5 LPA",
      EntranceExamAccepted: "CAT-70 cutoff Collegedunia",
    },
    {
      SchoolName: "BIHER – College of Management",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹5.03 L total",
      MedianSalary: "₹4.5 LPA",
      EntranceExamAccepted: "— Collegedunia",
    },
    {
      SchoolName: "VISTAS",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹5.35 L total",
      MedianSalary: "₹11 LPA",
      EntranceExamAccepted: "— Collegedunia",
    },
    {
      SchoolName: "SIMS Chennai",
      ProgrammesOffered: "MBA",
      feesRangeApproxmiate: "₹1.5 L total",
      MedianSalary: null,
      EntranceExamAccepted: "— Collegedunia",
    },
  ];
  const BusinessandManagementSchools1 = [
    {
      CollegeType: "Govt Arts/Science",
      AnnualFeeRange: "₹1,000 – ₹10,000",
      AdmissionMode: "Merit via TN state board marks",
    },
    {
      CollegeType: "Self-Financing UG",
      AnnualFeeRange: "₹30,000 – ₹2L",
      AdmissionMode: "Merit + Entrance (where applicable)",
    },
    {
      CollegeType: "Engineering/Tech",
      AnnualFeeRange: "₹60,000 – ₹2.5L",
      AdmissionMode: "TNEA, JEE, or institute entrance",
    },
    {
      CollegeType: "Medical",
      AnnualFeeRange: "₹80,000 – ₹15L (MBBS)",
      AdmissionMode: "NEET + Counselling",
    },
    {
      CollegeType: "MBA/BBA",
      AnnualFeeRange: "₹1L – ₹7L",
      AdmissionMode: "CAT / XAT / MAT / internal tests",
    },
    {
      CollegeType: "Design/Media",
      AnnualFeeRange: "₹80K – ₹4L",
      AdmissionMode: "Portfolio + Entrance/Interview",
    },
  ];
  // Business & Management Colleges

  return (
    <>
      <div>
        {/* Business & Management Colleges*/}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {BusinessandManagementIntro.map((section, index) => {
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
        index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"
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
            {BusinessandManagementSections.map((section, index) => (
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

            {BusinessandManagementContents.map((section, index) => (
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

            {BusinessandManagementContents2.map((section, index) => (
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
                Leading Business Schools – Quick Glance
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      College / Institute
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Programmes Offered
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Fee Range (Approx.)
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Median Salary
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Entrance Exam Accepted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {BusinessandManagementSchools.map((giant, index) => (
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
                        {giant.feesRangeApproxmiate}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.MedianSalary}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.EntranceExamAccepted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
            <div className="overflow-x-auto my-6">
              <h2 className="text-2xl font-bold">
                Fees, Admissions & Scholarships
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      College Type
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Annual Fee Range
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Admission Mode
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {BusinessandManagementSchools1.map((giant, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.CollegeType}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.AnnualFeeRange}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.AdmissionMode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Business & Management Colleges*/}
      </div>
    </>
  );
}
