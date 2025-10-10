import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function StateBoardSchool() {
  // StateBoard-Schools

  const StateSchoolIntro = [
    {
      sectionTitle: "State Board Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/School/image/igcse-schools-chennai.jpg",
      imgAlt: "",
    },
  ];

  const StateTopSchools = [
    {
      SchoolName: "Government Schools",
      ProgrammesOffered: "Tamil / English",
      Location: "TN Education Department",
      ApproxFees: "Free – ₹2,000 / Per Year",
      Rating: null,
    },
    {
      SchoolName: "Government Aided Schools",
      ProgrammesOffered: "Tamil / English",
      Location: "Private Management, Govt-Funded",
      ApproxFees: "₹3,000 – ₹12,000 / Per Year",
      Rating: null,
    },
    {
      SchoolName: "Self Financing Schools",
      ProgrammesOffered: "English",
      Location: "Private but follows State Govt Syllabus",
      ApproxFees: "₹15,000 – ₹45,000 / Per Year",
      Rating: null,
    },
  ];

  const StateschoolsContents = [
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

  const StateimageSections = [
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
                  <strong>State Board schools in Chennai</strong> follow the{" "}
                  <strong>
                    {" "}
                    Tamil Nadu State Board of School Education (TNBSE){" "}
                  </strong>{" "}
                  curriculum, managed by the Department of School Education,
                  Government of Tamil Nadu. These schools provide the most
                  accessible form of education in the city—catering to a broad
                  demographic through government-run and government-aided
                  institutions.
                </>,
                <>
                  With recent investments in smart classrooms, bilingual
                  textbooks, and digital learning tools under the{" "}
                  <strong>
                    “Illam Thedi Kalvi” and “Naan Mudhalvan” initiatives, the
                    quality and equity of education in Chennai’s state board
                    schools are witnessing strong growth.{" "}
                  </strong>
                </>,
              ],
              imgs: "/images/education/School/Icons/overview.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose a State Board School in Chennai?",
              para: [
                <>
                  <strong> Free or Subsidized Education:</strong>
                  Especially in government schools, including free uniforms,
                  textbooks, and noon meals.
                </>,
                <>
                  <strong>Strong Regional Language Focus: </strong>
                  Tamil-medium and bilingual instruction help ensure learning
                  continuity across communities.
                </>,
                <>
                  {" "}
                  <strong>Aligned with State Entrance Exams: </strong>
                  Curriculum prepares students well for TNPSC, TNEA, and
                  government service pathways.
                </>,
                <>
                  <strong>Scholarship & Upliftment Schemes:</strong>
                  Scholarships, bicycles, laptops, and skill-training are
                  offered at high school level.
                </>,
              ],
              imgs: "/images/education/School/Icons/why-choose-a-state-board-school-in-chennai_.svg",
            },
          ],
        },
      ],
    },
  ];

  const StateschoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Smart Classroom & ICT Labs",
              para: [
                "Over 1,500 schools in Chennai zone upgraded with projectors, digital boards, and audio-visual aids.",
                "Content aligned with Samacheer Kalvi (Uniform System of School Education).",
              ],
              imgs: "/images/education/School/Icons/smart-classroom-&-ict-labs.svg",
            },
            {
              title: "Bridge Programs & NEP-Ready Modules",
              note: <></>,
              para: [],
              note2: <></>,
              para2: [
                "After-school support under Illam Thedi Kalvi initiative for learning loss recovery.",
                "NEP-aligned skill modules introduced at higher secondary levels.",
              ],

              note3: <div></div>,
              imgs: "/images/education/School/Icons/bridge-programs-&-nep-ready-modules.svg",
            },
            {
              title: "Civic & Environmental Literacy",
              note: "",
              para: [
                "Programs on tree planting, disaster preparedness, menstrual hygiene, water conservation, and more.",
                "Collaboration with Greater Chennai Corporation for health & wellness education.",
              ],

              imgs: "/images/education/School/Icons/civic-&-environmental-literaсу.svg",
            },
            {
              title: "Inclusive & Gender-Responsive Environment",
              note: "",
              para: [
                "Separate toilets for boys and girls, female wardens, and self-defence training for girl students.",
              ],
              para2: [],

              imgs: "/images/education/School/Icons/inclusive-&-gender-responsive-environment.svg",
            },
            {
              title: "Midday Meal Scheme + Nutrition",
              note: "",
              para: [
                "Highly rated in Tamil Nadu for quality cooked food, iron supplements, and milk program (under CM's nutrition mission).",
              ],
              para2: [],

              imgs: "/images/education/School/Icons/midday-meal-scheme-+-nutrition.svg",
            },
            {
              title: "Curriculum & Structure",
              note: (
                <>
                  <strong>Medium of Instruction: </strong> Tamil or English
                  (bilingual sections in many schools)
                </>
              ),
              para: [],
              note2: <strong>Examinations:</strong>,
              para2: [
                "SSLC (Class 10) and HSC (Class 12) board exams",
                "Curriculum includes core academics, sports, drawing, value education",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools offer sibling discounts, scholarships, or
                    monthly/term payment plans.
                  </strong>
                </div>
              ),
              imgs: "/images/education/School/Icons/curriculum-&-structure.svg",
            },
            {
              title: "Stage & Focus Area",
              note: <></>,
              para: [],
              note2: <strong></strong>,
              para2: [
                "Primary (I–V) : Tamil, English, Math, EVS",
                "Middle (VI–VIII) : Science, Social Science, ICT",
                "High School- : Physics, Chemistry, Bio/Botany/Zoology, Commerce, Accountancy, CS.",
              ],

              note3: <div></div>,
              imgs: "/images/education/School/Icons/stage-&-focus-area.svg",
            },
          ],
        },
      ],
    },
  ];

  // StateBoard-Schools

  return (
    <>
      <div>
        {/* State Schools */}
        <section id="fourthSection" className="relative">
          <div className="foodlistsec">
            {StateSchoolIntro.map((section, index) => {
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
            {StateimageSections.map((section, index) => (
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
                Types of State Board Schools in Chennai
              </h2>

              <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      School Type
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Managed By
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Medium
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Fee Range
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {StateTopSchools.map((giant, index) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {StateschoolsContents.map((section, index) => (
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
                Special Features of Chennai State Board Schools
              </h2>
            </div>

            {StateschoolsContents2.map((section, index) => (
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
        {/* State Schools */}
      </div>
    </>
  );
}
