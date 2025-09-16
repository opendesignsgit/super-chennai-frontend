import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function IGCSESchool() {

    
  // IGCSE-Schools
  const IGCSESchoolIntro = [
    {
      sectionTitle: "IGCSE Schools in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];
  const IGCSESchoolsList = [
    {
      category: "Full list of IGCSE  schools in Chennai",
      places: [
        {
          name: "Amethyst International School",
          desc: "",
          locations: [
            {
              name: "Sithalapakkam",
              link: "https://maps.app.goo.gl/Au7qHQvDn9Pd6Lbd6",
            },
          ],
        },
        {
          name: "Aachi Global School",
          desc: "",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/d4diJ7Y1Vt7E4biZ7",
            },
          ],
        },
        {
          name: "Akshar Arbol International School",
          desc: "",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/1k56iHoAAvrbgaJg6",
            },
          ],
        },
        {
          name: "APL Global School",
          desc: "",
          locations: [
            {
              name: "Thoraipakkam",
              link: "https://maps.app.goo.gl/MeY9k1rvjUDGNdnq8",
            },
          ],
        },
        {
          name: "Athena Global School",
          desc: "",
          locations: [
            {
              name: "OMR",
              link: "https://maps.app.goo.gl/PLGDAkEsSMAUhkjg6",
            },
          ],
        },
        {
          name: "Canopo International School",
          desc: "",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/aCVhVtBv5qURsPKW9",
            },
          ],
        },
        {
          name: "CPS Global School",
          desc: "",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/6quPgT7JcJhV9dn1A",
            },
          ],
        },
        {
          name: "Crescent School",
          desc: "",
          locations: [
            {
              name: "Vandalur",
              link: "https://maps.app.goo.gl/Ezo7CqrKLw8P6kbRA",
            },
          ],
        },
        {
          name: "Gateway The Complete School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/XtDvwiDuuEmYT1ir7",
            },
          ],
        },
        {
          name: "GGN International School",
          desc: "",
          locations: [
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/DrU94pqAy8z9o5z86",
            },
          ],
        },
        {
          name: "Grassroots Global School",
          desc: "",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/ew5CG78SN6SEg2cAA",
            },
          ],
        },
        {
          name: "Horizon International Academy",
          desc: "",
          locations: [
            {
              name: "Kovilancheri",
              link: "https://maps.app.goo.gl/5YqjdG7N5jimgsps8",
            },
          ],
        },
        {
          name: "HLC International School",
          desc: "",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/wK433EYsZSrbuhdVA",
            },
          ],
        },
        {
          name: "The Indian Public School - TIPS Globeducate",
          desc: "",
          locations: [
            {
              name: "Perungudi",
              link: "https://maps.app.goo.gl/NQZdkzdzZXrNJctz8",
            },
          ],
        },
        {
          name: "JS Global School",
          desc: "",
          locations: [
            {
              name: "JSholinganallur",
              link: "https://maps.app.goo.gl/42293eZDB4gZuzDRA",
            },
          ],
        },
        {
          name: "Lalaji Memorial Omega International School",
          desc: "",
          locations: [
            {
              name: "Kovur",
              link: "https://maps.app.goo.gl/dFPEzypTCqyKTnVP8",
            },
          ],
        },
        {
          name: "The Lords' International School",
          desc: "",
          locations: [
            {
              name: "Periyar Nagar West",
              link: "https://maps.app.goo.gl/wZDnHJHPkvRzYMgN7",
            },
          ],
        },
        {
          name: "M.C.T.M. Chidambaram Chettyar International School",
          desc: "",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/n6GSCpx8mj12Rz5F9",
            },
          ],
        },
        {
          name: "Olive International School",
          desc: "",
          locations: [
            {
              name: "Shenoy Nagar",
              link: "https://maps.app.goo.gl/gLA1H2pfB2TMbx7W7",
            },
          ],
        },
        {
          name: "Orchids The International School",
          desc: "",
          locations: [
            {
              name: "",
              link: "",
            },
          ],
        },
        {
          name: "Peace Academy",
          desc: "",
          locations: [
            {
              name: "MMDA Colony",
              link: "https://maps.app.goo.gl/CBCtNpZeaSYWZXpp7",
            },
          ],
        },
        {
          name: "Sharanalaya Montessori School",
          desc: "",
          locations: [
            {
              name: "Injambakkam",
              link: "https://maps.app.goo.gl/Tp1E97kwXVHFZtP96",
            },
          ],
        },
        {
          name: "Sri Krish International School (Cambridge Curriculum)",
          desc: "",
          locations: [
            {
              name: "Kovur",
              link: "https://maps.app.goo.gl/3T883CqA9jQkpNWF9",
            },
          ],
        },
        {
          name: "Sri Sankara Global Academy",
          desc: "",
          locations: [
            {
              name: "",
              link: "",
            },
          ],
        },
        {
          name: "TATVA School",
          desc: "",
          locations: [
            {
              name: "Polachery",
              link: "https://maps.app.goo.gl/i6xkoTa5fQN9iL2b7",
            },
          ],
        },
        {
          name: "Trileaves Group of Schools",
          desc: "",
          locations: [
            {
              name: "Madambakkam",
              link: "https://maps.app.goo.gl/SgNq6BHcofXsZc9V8",
            },
          ],
        },
        {
          name: "Vruksha Montessori School",
          desc: "",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/WEPG9JDW1R9Jy5RA7",
            },
          ],
        },
        {
          name: "Velammal global school",
          desc: "",
          locations: [
            {
              name: "Puzhal",
              link: "https://maps.app.goo.gl/C5TfiywfYHJFMCKX8",
            },
          ],
        },
      ],
    },
  ];
  const IGCSETopSchools = [
    {
      SchoolName: "The British International School (TBIS)",
      ProgrammesOffered: null,
      Location: "Adyar",
      ApproxFees: "₹5L – ₹8L/year",
      Rating: "4.2",
    },
    {
      SchoolName: "APL Global School",
      ProgrammesOffered: null,
      Location: "Thoraipakkam",
      ApproxFees: "₹4L – ₹7L/year",
      Rating: "4.1",
    },
    {
      SchoolName: "HLC International School",
      ProgrammesOffered: null,
      Location: "Karanai",
      ApproxFees: "₹3L – ₹6.5L/year",
      Rating: "4.0",
    },
    {
      SchoolName: "Akshar Arbol International School",
      ProgrammesOffered: null,
      Location: "Injambakkam",
      ApproxFees: "₹4L – ₹7L/year",
      Rating: "4.3",
    },
    {
      SchoolName: "Vaels International School",
      ProgrammesOffered: null,
      Location: "Injambakkam",
      ApproxFees: "₹2.5L – ₹4.5L/year",
      Rating: "4.0",
    },
  ];

  const IGCSEschoolsContents = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Curriculum Features",
              para: [
                "Grades Offered: From Grade 1 up to A Levels (equivalent to Class 12)",
                "Subjects Offered: English, Math, Science, ICT, Economics, Global Perspectives, and Art & Design",
                "Languages: Most schools offer French, Hindi, and Tamil as second/third language options",
                "Technology Integration: Smart classrooms, online submissions, and blended learning models are widely adopted",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Admission & Fee Insights",
              note: (
                <strong>
                  Admission Process: Application form, entrance assessment
                  (Grade 6+), and interview with student & parent
                </strong>
              ),
              para: [],
              note2: <strong>Fees:</strong>,
              para2: [
                "Pre-Primary: ₹1.8L – ₹3L/year",
                "Primary & Middle: ₹2.5L – ₹5.5L/year",
                "High School (IGCSE/AS/A): ₹4L – ₹8L/year",
              ],

              note3: (
                <div>
                  <strong>
                    Most schools offer sibling discounts, scholarships, or
                    monthly/term payment plans.
                  </strong>
                </div>
              ),
              imgs: "/images/Innovate-Images/SubPages/Icons/Chennai’s Tech Map (Suggested Interactive Feature).svg",
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
              imgs: "/images/Innovate-Images/SubPages/Icons/Future Ready Chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const IGCSEimageSections = [
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
                  Chennai is rapidly emerging as a hub for internationally
                  benchmarked education, and IGCSE schools (Cambridge
                  Curriculum) are at the forefront of this transformation.
                  Designed and administered by Cambridge Assessment
                  International Education (CAIE), the IGCSE (International
                  General Certificate of Secondary Education) curriculum
                  emphasizes critical thinking, inquiry-based learning, and
                  academic excellence.With over 25+ Cambridge-accredited schools
                  in and around Chennai, parents today can choose a truly global
                  academic framework while retaining the cultural grounding and
                  community values unique to the city.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose an IGCSE School in Chennai?",
              para: [
                <>
                  Global Recognition: IGCSE is accepted by universities and
                  employers worldwide, including Ivy League institutions and UK
                  Russell Group universities.
                </>,
                <>
                  Custom Learning Pathways: Students can choose subject
                  combinations from over 70 options, allowing for individualized
                  academic journeys.
                </>,
                <>
                  Focus on Skills: Inquiry, reasoning, application, and research
                  are at the heart of the curriculum—preparing students for a
                  future beyond rote exams.
                </>,
                <>
                  Assessment Flexibility: Cambridge schools in Chennai offer
                  multiple exam windows (May/June and Oct/Nov), along with
                  internal assessments and project work.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
      ],
    },
  ];

  // IGCSE-Schools

  return (
    <>
      <div>
        {/* IGCSE Schools */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <>
            <div className="foodlistsec">
              {IGCSESchoolIntro.map((section, index) => {
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
              {IGCSEimageSections.map((section, index) => (
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
                  Top IGCSE Schools in Chennai (Sample)
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
                    {IGCSETopSchools.map((giant, index) => (
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

              {IGCSEschoolsContents.map((section, index) => (
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
            <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
              {IGCSESchoolsList.map((section, sectionIdx) => {
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
        {/* IGCSE Schools */}
      </div>
    </>
  );
}
