import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function MatricSchool() {
  // Matric-Schools
  const MatricSchoolIntro = [
    {
      sectionTitle: "Matriculation Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const MatricTopSchools = [
    {
      SchoolName: "Velammal Matriculation Schools",
      ProgrammesOffered: null,
      Location: "Multiple campuses",
      ApproxFees: "₹30K – ₹65K",
      Rating: "4.3",
    },
    {
      SchoolName: "Don Bosco Matriculation HS School",
      ProgrammesOffered: null,
      Location: "Egmore",
      ApproxFees: "₹35K – ₹70K",
      Rating: "4.4",
    },
    {
      SchoolName: "St. John’s Matriculation HSS",
      ProgrammesOffered: null,
      Location: "Mandaveli",
      ApproxFees: "₹25K – ₹45K",
      Rating: "4.1",
    },
    {
      SchoolName: "Vani Vidyalaya MHSS",
      ProgrammesOffered: null,
      Location: "Virugambakkam",
      ApproxFees: "₹28K – ₹50K",
      Rating: "4.0",
    },
    {
      SchoolName: "St. Raphael’s MHSS",
      ProgrammesOffered: null,
      Location: "Velachery",
      ApproxFees: "₹22K – ₹40K",
      Rating: "4.1",
    },
    {
      SchoolName: "Bharathi Matric School",
      ProgrammesOffered: null,
      Location: "Perambur",
      ApproxFees: "₹20K – ₹35K",
      Rating: "3.9",
    },
  ];

  const MatricschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum & Academic Structure",
              para: [
                "Medium: English (with Tamil/Hindi as second/third language options)",
                "Grades Offered: LKG to Class 12 (HSC)",
                "Subjects:",
                "Primary: English, Tamil, Math, EVS, Drawing, Music",
                "Middle: Science, Social Science, Computer Applications",
                "Higher: Physics, Chemistry, Biology, Commerce, Accountancy, Computer Science",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Fee Structure",
              note: <></>,
              para: [],
              note2: <strong></strong>,
              para2: [
                "Budget Schools: ₹15,000 - ₹30,000",
                "Mid-Tier Schools: ₹30,000 - ₹60,000",
                "Premium Schools: ₹60,000 - ₹90,000+",
              ],

              note3: (
                <div>
                  <strong>
                    Many schools offer term-wise or monthly payments and sibling
                    discounts.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
          ],
        },
      ],
    },
  ];

  const MatricimageSections = [
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
                  <strong>Matriculation schools </strong>— a term unique to
                  Tamil Nadu—refer to institutions affiliated with the{" "}
                  <strong> Tamil Nadu State Matriculation syllabus,</strong>{" "}
                  offering a blend of foundational academic learning,
                  values-based education, and affordability. These schools are
                  popular among Chennai’s middle-class families for their
                  emphasis on discipline, regional language inclusion, and
                  structured academics, often taught in English medium.
                </>,
                <>
                  Chennai has{" "}
                  <strong>
                    {" "}
                    hundreds of Matriculation and Matriculation Higher Secondary
                    Schools (MHSS)
                  </strong>{" "}
                  — from long-standing legacy institutions to modern private
                  academies with digital upgrades.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose Matriculation Schools in Chennai?",
              para: [
                <>
                  <strong> Affordability & Access: </strong>
                  More budget-friendly than national/international boards,
                  making quality education accessible.
                </>,
                <>
                  <strong>Cultural Alignment: </strong>
                  Tamil language and values are preserved while teaching in
                  English.
                </>,
                <>
                  <strong> Exam Preparedness: </strong>
                  Many matric schools are aligned with state board exam patterns
                  (SSLC, HSC).
                </>,
                <>
                  <strong>Moral & Character Education: </strong>
                  Emphasis on discipline, civic sense, and traditional values.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  const MatricschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Strong Community & Values Education",
              para: [
                "Morning assemblies, value-based stories, civic clubs, and leadership programs.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Discipline-Oriented Learning",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "Uniform codes, exam-focused preparation, and respectful classroom behavior are central.",
              ],

              note3: <div></div>,
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
            },
            {
              title: "Cultural Celebrations & Language Fairs",
              note: "",
              para: [
                "Annual days often feature Tamil literature, folk music, and inter-school competitions.",
              ],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "State Exam Preparation (SSLC/HSC)",
              note: "",
              para: [
                "Many schools have coaching programs, model exams, and extra classes for state board success.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Affordable Private Schooling with Personal Touch",
              note: "",
              para: [
                "Smaller class sizes in budget schools promote better teacher-student bonding and mentoring.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
            {
              title: "Vocational Electives in HSC Streams",
              note: "",
              para: [
                "Options like Commerce with Business Maths, Biology with Nursing in some institutions.",
              ],
              para2: [],

              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  // Matric-Schools

  return (
    <>
      <div>
        {/* Matric Schools */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {MatricSchoolIntro.map((section, index) => {
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
            {MatricimageSections.map((section, index) => (
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
                Popular Matriculation Schools in Chennai (Sample List)
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      School Name
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Programmes Offered
                    </th>
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
                  {MatricTopSchools.map((giant, index) => (
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

            {MatricschoolsContents.map((section, index) => (
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
                Special Features of Matriculation Schools in Chennai
              </h2>
            </div>

            {MatricschoolsContents2.map((section, index) => (
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
        {/* Matric Schools */}
      </div>
    </>
  );
}
