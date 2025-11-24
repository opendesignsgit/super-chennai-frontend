import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function ICSESchool() {
  // ICSE-Schools
  const ICSESchoolIntro = [
    {
      sectionTitle: "ICSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/School/image/icse-schools-chennai.jpg",
      imgAlt: "",
    },
  ];

  const ICSETopSchools = [
    {
      SchoolName: "Sishya School",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹1.8L – ₹3.2L",
      Rating: "4.6",
    },
    {
      SchoolName: "St. Michael’s Academy",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹80K – ₹1.5L",
      Rating: "4.2",
    },
    {
      SchoolName: "The School – KFI",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹1.5L – ₹2.5L",
      Rating: "4.3",
    },
    {
      SchoolName: "Chettinad Hari Shree Vidyalayam",
      ProgrammesOffered: null,
      Location: "RA Puram",
      ApproxFees: "₹1.8L – ₹2.8L",
      Rating: "4.4",
    },
    {
      SchoolName: "Don Bosco School of Excellence",
      ProgrammesOffered: null,
      Location: "Egmore",
      ApproxFees: "₹1.2L – ₹2L",
      Rating: "4.1",
    },
    {
      SchoolName: "St. Francis International School",
      ProgrammesOffered: null,
      Location: "Perambur",
      ApproxFees: "₹90K – ₹1.5L",
      Rating: "4.0",
    },
  ];

  const ICSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Primary (I–V) ( English, Math, Science, Tamil/Hindi, GK )",
                "Middle (VI–VIII) ( History, Geography, Computer Applications )",
                "Secondary (IX–X) ( Physics, Chemistry, Biology, Commercial Studies, Economics, Environmental Science, Literature & Language ) ",
                "Electives: Art, Drama, Music, Yoga, Physical Education",
                "Language Options: English (mandatory), second language from Tamil, Hindi, French, Sanskrit (varies by school)",
              ],
              imgs: "/images/education/School/Icons/curriculum-features.svg",
            },
            {
              title: "Fee Structure",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "Budget Range: ₹70,000 – ₹1.5L/year (basic private ICSE schools)",
                "Mid-Tier Schools: ₹1.5L – ₹2.5L/year (includes Sishya, Don Bosco, etc.)",
                "Premium: ₹3L+ for integrated ICSE–ISC programs or international campus standards",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools charge a one-time admission fee (₹15K–₹50K) and
                    collect term-wise tuition.
                  </strong>
                </div>
              ),
              imgs: "/images/education/School/Icons/fee-structure.svg",
            },
            {
              title: "Who Should Consider IGCSE in Chennai?",
              note: "",
              para: [
                "Expats & Global Citizens: Seeking a curriculum transferable across countries",
              ],
              para2: [
                "High-Performing Students: Aiming for Ivy League or top European/Asian universities",
              ],
              para3: [
                "Creative & Analytical Thinkers: Who thrive in non-rote learning formats",
              ],
              para4: [
                "Parents Preferring Skill-Based Education: With emphasis on real-world thinking and project work",
              ],
              imgs: "/images/education/School/Icons/who-should-consider-igcse-in-chennai_-1.svg",
            },
          ],
        },
      ],
    },
  ];

  const ICSEschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Strong Emphasis on Arts & Humanities",
              para: [
                "Literature, history, sociology, and languages receive equal academic weight.",
                "Schools like The School – KFI and Sishya integrate art, music, drama, and philosophy into the mainstream curriculum.",
                "Interdisciplinary projects encourage storytelling, debate, and critical reasoning.",
              ],
              imgs: "/images/education/School/Icons/strong-community-&-values-education.svg",
            },
            {
              title: "English Proficiency & Global Communication",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "ICSE is widely known for its high standard of English language instruction—ideal for students aiming for study abroad.",
                "Reading comprehension, essay writing, creative writing, and literary appreciation are emphasized across grades.",
              ],

              note3: <div></div>,
              imgs: "/images/education/School/Icons/english-proficiency-&-global-communication.svg",
            },
            {
              title: "Well-Rounded Science & Lab Focus",
              note: "",
              para: [
                "Internal assessments and practical lab work (20-30%) are key to science subjects from Grade 9 onward.",
              ],
              para2: [
                "Hands-on experience in physics, chemistry, and biology labs is a hallmark of ICSE pedagogy.",
              ],

              imgs: "/images/education/School/Icons/well-rounded-science-&-lab-focus.svg",
            },
            {
              title: "Second Language Diversity",
              note: "",
              para: [
                "Offers flexible second/third language options: Hindi, Tamil, Sanskrit, French and in some schools, German or Spanish.",
              ],
              para2: [
                "This supports both local cultural integration and global readiness.",
              ],

              imgs: "/images/education/School/Icons/second-language-diversity.svg",
            },
            {
              title: "Project-Based Learning & Internal Assessments",
              note: "",
              para: [
                "Unlike rote-based systems, ICSE uses continuous assessments in subjects like Environmental Science, Literature, and Commercial Studies.",
              ],
              para2: [
                "Students often engage in independent research projects, presentations, and community reports.",
              ],

              imgs: "/images/education/School/Icons/project-based-learning-&-internal-assessments.svg",
            },
            {
              title: "Liberal Thinking and Civic Learning",
              note: "",
              para: [
                "Several ICSE schools incorporate values education, ethics, and social awareness programs.",
              ],
              para2: [
                "Many are affiliated with NGOs or local civic projects (e.g., beach cleanups, heritage walks, tree plantation drives).",
              ],

              imgs: "/images/education/School/Icons/liberal-thinking-and-civic-learning.svg",
            },
            {
              title: "ISC Stream Continuity (Class 11 & 12)",
              note: "",
              para: [
                "Most Chennai ICSE schools offer a seamless transition to ISC (Indian School Certificate – Class 12), with streams in:",
              ],
              para2: [
                <ul>
                  <li>Science (with Biotechnology or Computer Science)</li>
                  <li>Commerce (with Legal Studies, Business Studies)</li>
                  <li>
                    Humanities (with Psychology, Sociology, Environmental
                    Science)
                  </li>
                </ul>,
              ],

              imgs: "/images/education/School/Icons/isc-stream-continuity-(class-11&-12).svg",
            },
          ],
        },
      ],
    },
  ];

  const ICSEimageSections = [
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
                  The Indian Certificate of Secondary Education (ICSE) board,
                  governed by the Council for the Indian School Certificate
                  Examinations (CISCE), is well-regarded in Chennai for its
                  rigorous academics, balanced subject focus, and English
                  language proficiency. Often chosen for its holistic and
                  structured curriculum, ICSE schools in Chennai are especially
                  popular among families who value both STEM subjects and
                  literature, humanities, and the arts.
                </>,
                <>
                  Chennai is home to 40+ ICSE-affiliated schools, many of which
                  have operated for decades and offer a legacy of academic
                  excellence, individual attention, and extracurricular
                  opportunity.
                </>,
              ],
              imgs: "/images/education/School/Icons/overview.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose ICSE in Chennai?",
              para: [
                <>
                  <strong>Balanced Curriculum: </strong>
                  Equal emphasis on language, science, humanities, and arts.
                </>,
                <>
                  <strong>Strong English Foundation: </strong>
                  Ideal for students planning higher education abroad or
                  preparing for entrance tests like SAT, GRE, or IELTS.
                </>,
                <>
                  <strong>Project-Based Evaluation: </strong>
                  20%–30% of subject scores are internally assessed through lab
                  work, presentations, and field projects.
                </>,
                <>
                  <strong> Higher Language Flexibility: </strong>
                  Offers Hindi, Tamil, Sanskrit, and French in most schools.
                </>,
              ],
              imgs: "/images/education/School/Icons/why-choose-icse-in-chennai_.svg",
            },
          ],
        },
      ],
    },
  ];

  // ICSE-Schools

  return (
    <>
      <div>
        {/* IGCSE Schools */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {ICSESchoolIntro.map((section, index) => {
              const tenantCount = section.tenantInfoSections?.length ?? 0;
              const parentClass =
                tenantCount % 2 === 0 ? "even-count" : "odd-count";

              return (
                <section
                  key={index}
                  style={{ paddingBottom: "50px" }}
                  className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
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
            {ICSEimageSections.map((section, index) => (
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

            <div className="overflow-x-auto my-6">
              <h2 className="text-2xl font-bold">
                Top ICSE Schools in Chennai (Sample List)
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
                <tbody className="divide-y divide-gray-200">
                  {ICSETopSchools.map((giant, index) => (
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

            {ICSEschoolsContents.map((section, index) => (
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

            <div className="overflow-x-auto my-6">
              <h2 className="text-2xl font-bold">
                Special Features in Chennai ICSE Schools
              </h2>
              <p>
                ICSE schools in Chennai combine traditional educational values
                with progressive, skill-based learning approaches. While they
                may not offer NEET/IIT coaching like some CBSE schools, they
                excel in nurturing{" "}
                <strong>
                  creative, analytical, and globally capable learners.
                </strong>
              </p>
            </div>

            {ICSEschoolsContents2.map((section, index) => (
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
        {/* IGCSE Schools */}
      </div>
    </>
  );
}
