import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function IBSchool() {
  // IB-Schools
  const IbSchoolIntro = [
    {
      sectionTitle: "IB Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/School/image/ib-schools-chennai.jpg",
      imgAlt: "",
    },
  ];
  const IbSchoolsList = [
    {
      category: "Full list of IB schools in Chennai",
      places: [
        {
          name: "Akshar Arbol International School",
          desc: "Known for fostering open-mindedness and innovative thinking.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/DFcUVz2FEu5eTSFu9",
            },
          ],
        },
        {
          name: "CPS Global School",
          desc: "Caters to students aged 3-19 and emphasizes curiosity and lifelong learning.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/Bh4tQxWXAwKgCNLo8",
            },
          ],
        },
        {
          name: "Gateway International School (CBSE) - Padur",
          desc: "The first IB Continuum school in Chennai, offering all three IB programs (PYP, MYP, & DP).",
          locations: [
            {
              name: "Kelambakkam",
              link: "https://maps.app.goo.gl/bjqc4GGAUB7Czv6PA",
            },
          ],
        },
        {
          name: "Hiranandani Upscale School",
          desc: "Offers a well-rounded education with a focus on academics, community service, and extracurriculars.",
          locations: [
            {
              name: "Padur",
              link: "https://maps.app.goo.gl/ikSSzvUjDbtddmgs9",
            },
          ],
        },
        {
          name: "The Indian Public School - TIPS Globeducate",
          desc: "Focuses on extraordinary education, exposure, and experience.",
          locations: [
            {
              name: "Perungudi",
              link: "https://maps.app.goo.gl/i1ygjr26akLW9sxm6",
            },
          ],
        },
        {
          name: "M.C.T.M. Chidambaram Chettyar International School",
          desc: "Chennai's first Indian school to offer the IB Diploma Programme (IBDP).",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/2YYmEVX9ooWbunJTA",
            },
          ],
        },
        {
          name: "Lalaji Memorial Omega International School",
          desc: "Offers various facilities and has received high rankings for innovation and resources.",
          locations: [
            {
              name: "Kovalur",
              link: "https://maps.app.goo.gl/ZzE21VBgCRa86cXK8",
            },
          ],
        },
        {
          name: "International Village School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/Qh4FmLY9ZhVgjoyb9",
            },
          ],
        },
        {
          name: "KC High International School",
          desc: "",
          locations: [
            {
              name: "Navalur",
              link: "https://maps.app.goo.gl/XFZrVBvgNeQWLrD7A",
            },
          ],
        },
        {
          name: "Ela Green School",
          desc: "Located near Maraimalai Nagar, and offers the IB program.",
          locations: [
            {
              name: "Maraimalai Nagar",
              link: "https://maps.app.goo.gl/ZcHbSLPZkykZVvkb7",
            },
          ],
        },
        {
          name: "LADY ANDAL SCHOOL",
          desc: "",
          locations: [
            {
              name: "Chetpet",
              link: "https://maps.app.goo.gl/dbtEdqagFg5xmWmY8",
            },
          ],
        },
        {
          name: "Velammal Global School (Puzhal)",
          desc: "Known for quality education, professional staff, and amenities.",
          locations: [
            {
              name: "Puzhal",
              link: "https://maps.app.goo.gl/F4QHbByVMBB9xy8J8",
            },
          ],
        },
        {
          name: "Alphabet International School",
          desc: "Creates a calming learning environment with colorful spaces and a focus on IB values.",
          locations: [
            {
              name: "Palavakkam",
              link: "https://maps.app.goo.gl/PPd5HYYiHnHxhPjZ8",
            },
          ],
        },
        {
          name: "Sharanalaya Montessori School",
          desc: "",
          locations: [
            {
              name: "Injambakkam",
              link: "https://maps.app.goo.gl/mSPbpFH2VJc15h7r7",
            },
          ],
        },
        {
          name: "The NEST School",
          desc: "Offers the IB PYP program alongside the CAIE Curriculum.",
          locations: [
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/VEWW7Hs42rCSFoU29",
            },
          ],
        },
        {
          name: "Anand Singapore International School, Chennai",
          desc: "Offers the IBDP alongside the Cambridge IGCSE and Singapore curricula.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/CdKHQ8Bm8gJ7q2L69",
            },
          ],
        },
      ],
    },
  ];
  const IbTopSchools = [
    {
      SchoolName: "International Village School (IVS)",
      ProgrammesOffered: "PYP, MYP, DP",
      Location: "Neelankarai",
      ApproxFees: "₹5L – ₹7.5L",
      Rating: "4.4",
    },
    {
      SchoolName: "The Indian Public School (TIPS)",
      ProgrammesOffered: "PYP, DP",
      Location: "Multiple campuses",
      ApproxFees: "₹3L – ₹6.5L",
      Rating: "4.1",
    },
    {
      SchoolName: "American International School (AISC)",
      ProgrammesOffered: "PYP, MYP, DP",
      Location: "Taramani",
      ApproxFees: "₹7L – ₹12L",
      Rating: "4.6",
    },
    {
      SchoolName: "KC High International School",
      ProgrammesOffered: "PYP (with IGCSE, IB DP)",
      Location: "Navalur",
      ApproxFees: "₹4.5L – ₹9L",
      Rating: "4.3",
    },
    {
      SchoolName: "Gateway International School",
      ProgrammesOffered: "IB PYP + Cambridge MYP",
      Location: "Padur",
      ApproxFees: "₹3.5L – ₹6.5L",
      Rating: "4.0",
    },
  ];

  const IbschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Subjects Offered Include:",
              para: [
                "Group 1: English Language & Literature",
                "Group 2: French, Hindi, Tamil, Spanish",
                "Group 3: History, Global Politics, Psychology",
                "Group 4: Physics, Chemistry, Biology, Environmental Systems",
                "Group 5: Math AA / AI",
                "Group 6: Visual Arts, Film, Theatre",
              ],
              imgs: "/images/education/School/Icons/subjects-offered-include.svg",
            },
            {
              title: "Fees & Admission Process",
              note: (
                <strong>
                  Application Fee: ₹5,000 – ₹25,000 (non-refundable)
                </strong>
              ),
              para: [],
              note2: <strong>Annual Tuition:</strong>,
              para2: ["PYP: ₹3L – ₹6L", "MYP: ₹4L – ₹8L", "DP: ₹6L – ₹12L"],

              note3: (
                <div>
                  {" "}
                  <strong>Admission Timeline:</strong>{" "}
                  <span>
                    Rolling for most, but DP intake typically finalizes by
                    April–May.
                  </span>
                </div>
              ),
              imgs: "/images/education/School/Icons/fees-&-admission-process.svg",
            },
            {
              title: "Chennai’s Edge in IB Education",
              note: "",
              para: [
                "Multilingual Advantage: Most IB schools in Chennai offer Tamil and Hindi as part of Group 2.",
              ],
              para2: [
                "Cultural Integration: Chennai’s IB institutions blend international pedagogy with regional arts, music, and environmental learning.",
              ],
              para3: [
                "University Counseling: Dedicated career guidance cells help with admissions abroad—including SAT, UCAS, and Common App prep.",
              ],
              imgs: "/images/education/School/Icons/chennai's-edge-in-ib-education.svg",
            },
            {
              title: "Ideal for Families Who Want:",
              note: "",
              para: [
                "A global curriculum with flexibility and academic challenge",
              ],
              para2: [
                "An education that balances STEM with humanities and service",
              ],
              para3: [
                "An international career trajectory or early overseas relocation",
              ],
              imgs: "/images/education/School/Icons/ideal-for-families-who-want.svg",
            },
          ],
        },
      ],
    },
  ];

  const IbimageSections = [
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
                  The International Baccalaureate (IB) program is increasingly
                  shaping Chennai’s educational landscape, offering a globally
                  respected framework that nurtures intellectual curiosity,
                  ethical leadership, and lifelong learning. With an emphasis on
                  conceptual understanding, interdisciplinary thinking, and
                  service-driven values, IB schools in Chennai are ideal for
                  families seeking internationally aligned, inquiry-based
                  education with deep local roots.Currently, Chennai hosts over
                  10 IB World Schools, delivering Primary Years Programme (PYP),
                  Middle Years Programme (MYP), and Diploma Programme (DP) for
                  various age groups.
                </>,
              ],
              imgs: "/images/education/School/Icons/overview.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose an IB School in Chennai?",
              para: [
                <>
                  Globally Accredited: IB is accepted by 2,000+ universities
                  across 90 countries, including Oxford, Stanford, and NUS.
                </>,
                <>
                  Skill-Rich Curriculum: Encourages independent research,
                  intercultural awareness, and real-world problem solving.
                </>,
                <>
                  Teacher Quality: IB teachers undergo rigorous global training
                  and ongoing pedagogy development.
                </>,
                <>
                  Focus on Learner Identity: IB’s “learner profile” model
                  supports holistic growth—intellectual, emotional, ethical.
                </>,
              ],
              imgs: "/images/education/School/Icons/why-choose-an-ib-school-in-chennai_.svg",
            },
          ],
        },
      ],
    },
  ];
  const IbsaasSuperstars = [
    {
      Programme: "PYP",
      AgeGroup: "3–12 yrs",
      Description:
        "Focus on inquiry, community, foundational literacy and numeracy",
    },
    {
      Programme: "MYP",
      AgeGroup: "11–16 yrs",
      Description:
        "Interdisciplinary learning, project work, and global contexts",
    },
    {
      Programme: "DP",
      AgeGroup: "16–19 yrs",
      Description:
        "2-year pre-university program with subjects across 6 groups, Theory of Knowledge (TOK), Extended Essay (EE), and CAS (Creativity-Activity-Service)",
    },
  ];
  // IB-Schools

  return (
    <>
      <div>
        {/* IB-Schools */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <>
            <div className="foodlistsec">
              {IbSchoolIntro.map((section, index) => {
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
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
              {IbimageSections.map((section, index) => (
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
                  Top IB Schools in Chennai (Sample)
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
                    {IbTopSchools.map((giant, index) => (
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

              <div className="overflow-x-auto my-6 mt-10" >
                <h2 className="text-2xl font-bold">
                  Curriculum Pathways & Subjects
                </h2>

                <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-left mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                        Programme
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                        Age Group
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 mb-20">
                    {IbsaasSuperstars.map((giant, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                          {giant.Programme}
                        </td>
                        <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                          {giant.AgeGroup}
                        </td>
                        <td className="px-4 py-3 text-gray-800 text-sm md:text-base">
                          {giant.Description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {IbschoolsContents.map((section, index) => (
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
                                <p className="text-gray-700 mb-1">
                                  {item.note}
                                </p>
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
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
              {IbSchoolsList.map((section, sectionIdx) => {
                return (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
                            <p className="text-gray-700 mb-2">{place.desc}</p>

                            {place.locations?.length > 0 && (
                              <ExpandableList
                                items={place.locations.map((loc) => ({
                                  label: loc.name,
                                  link: loc.link,
                                }))}
                                maxVisible={2}
                              />
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </section>
        {/* IB-Schools */}
      </div>
    </>
  );
}
