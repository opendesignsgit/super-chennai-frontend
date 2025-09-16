import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function CBSESchool() {
  // CBSE-Schools

  const CBSESchoolIntro = [
    {
      sectionTitle: "CBSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const CBSETopSchools = [
    {
      SchoolName: "SBOA School and Junior College",
      ProgrammesOffered: null,
      Location: "Anna Nagar West",
      ApproxFees: "₹55K – ₹70K",
      Rating: "4.2",
    },
    {
      SchoolName: "DAV Boys & Girls Schools",
      ProgrammesOffered: null,
      Location: "Mogappair, Gopalapuram",
      ApproxFees: "₹30K – ₹55K",
      Rating: "4.5",
    },
    {
      SchoolName: "Chettinad Vidyashram",
      ProgrammesOffered: null,
      Location: "RA Puram",
      ApproxFees: "₹85K – ₹1.2L",
      Rating: "4.3",
    },
    {
      SchoolName: "The PSBB Millennium Schools",
      ProgrammesOffered: null,
      Location: "OMR, Gerugambakkam",
      ApproxFees: "₹90K – ₹1.4L",
      Rating: "4.4",
    },
    {
      SchoolName: "Chinmaya Vidyalayas",
      ProgrammesOffered: null,
      Location: "Annanagar, Kilpauk, Virugambakkam",
      ApproxFees: "₹40K – ₹75K",
      Rating: "4.2",
    },
    {
      SchoolName: "Velammal Vidyalaya Group",
      ProgrammesOffered: null,
      Location: "Multiple Locations",
      ApproxFees: "₹35K – ₹65K",
      Rating: "4.0",
    },
  ];

  const CBSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Primary (I–V) : English, Hindi/Tamil, Math, EVS, Arts",
                "Middle (VI–VIII) : Science, Social Studies, Computer Science ",
                "Secondary (IX–X) : Physics, Chemistry, Biology, History, Geography",
                "Senior Secondary (XI–XII) : Science, Commerce, Humanities streams",
                "Languages: English (core), Tamil/Hindi/Sanskrit/French options",
                "Assessments: Formative & Summative (under NEP’s holistic report card)",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Admission & Fee Insights",
              note: (
                <>
                  <strong>Admission Fee:</strong> ₹5K – ₹25K (non-refundable;
                  varies by school)
                </>
              ),
              para: [],
              note2: <strong>Annual Tuition:</strong>,
              para2: [
                "Budget Schools: ₹30K – ₹60K/year",
                "Mid-range Schools: ₹65K – ₹1.2L/year",
                "Premium CBSE Schools: ₹1.2L – ₹2.5L/year (usually with NEET/IIT coaching or enhanced infrastructure)",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools collect fees quarterly or term-wise.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Special Features in Chennai CBSE Schools",
              note: "",
              para: [
                "NEET/JEE Foundation Programs: Offered from Grades 6+ in schools like Velammal, Aakash-integrated campuses, Narayana, etc.",
              ],
              para2: [
                "Coding & Tech Integration: Robotics, AI clubs, Microsoft partnerships in schools like PSBB and SBOA.",
              ],
              para3: [
                "Life Skills & Value Education: Emphasized in DAV, Chinmaya, and Bharatiya Vidya Bhavan schools.",
              ],
              para4: [
                "Smart Classrooms & Sports: Integrated sports coaching (chess, cricket, athletics) and multimedia classrooms.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const CBSEimageSections = [
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
                  The{" "}
                  <strong>Central Board of Secondary Education (CBSE) </strong>{" "}
                  is India’s most widely adopted national curriculum, and{" "}
                  <strong>
                    {" "}
                    Chennai is home to over 150+ CBSE-affiliated schools{" "}
                  </strong>{" "}
                  that uphold its standards of academic rigor, competitive exam
                  preparedness, and all-round development. From long-established
                  institutions to modern-day smart campuses, CBSE schools in
                  Chennai are trusted by parents seeking continuity,
                  credibility, and affordability.
                </>,
                <>
                  Whether you’re relocating from another Indian city or planning
                  long-term schooling,
                  <strong>
                    {" "}
                    CBSE is a smart, flexible, and future-ready choice{" "}
                  </strong>
                  —especially in a metro like Chennai.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose a CBSE School in Chennai?",
              para: [
                <>
                  <strong> National Curriculum: </strong>
                  Aligned with NCERT textbooks and entrance tests like NEET,
                  JEE, CUET, and UPSC foundations.
                </>,
                <>
                  <strong> Pan-India Transferability: </strong>
                  Ideal for mobile families—standardized syllabus across India
                  and Indian schools abroad.
                </>,
                <>
                  <strong>STEM & Olympiad Edge: </strong>
                  Many schools offer coaching for competitive exams, coding,
                  robotics, and Olympiads.
                </>,
                <>
                  <strong>Holistic Framework (CCE & NEP): </strong>
                  Encourages extracurriculars, physical education, and life
                  skills under the new National Education Policy (NEP 2020).
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  // CBSE-Schools

  return (
    <>
      <div>
        {/* CBSE Schools */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {CBSESchoolIntro.map((section, index) => {
              const tenantCount = section.tenantInfoSections?.length ?? 0;
              const parentClass =
                tenantCount % 2 === 0 ? "even-count" : "odd-count";

              return (
                <section
                  key={index}
                  style={{ paddingBottom: "50px" }}
                  className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
          ${
            index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"
          } 
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
            {CBSEimageSections.map((section, index) => (
              <section
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
          ${
            index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"
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

            <div className="overflow-x-auto my-6">
              <h2 className="text-2xl font-bold">
                Top CBSE Schools in Chennai (Sample List)
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      School Name
                    </th>
                    {/* <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Programmes Offered
                    </th> */}
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Location
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Approx. Fees
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {CBSETopSchools.map((giant, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.SchoolName}
                      </td>
                      {/* <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.ProgrammesOffered}
                      </td> */}
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.Location}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.ApproxFees}
                      </td>
                      <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                        {giant.Rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {CBSEschoolsContents.map((section, index) => (
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
          </div>
        </section>
        {/* CBSE Schools */}
      </div>
    </>
  );
}
