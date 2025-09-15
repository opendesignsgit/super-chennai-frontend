import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function CollegeUniversities() {
  // Colleges and Universities

  const CollegesandUniversitiesIntro = [
    {
      sectionTitle: "Colleges and Universities in Chennai",
      sectionDesc:
        "has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Live-Images/SubPages/Central Chennai.jpg",
      imgAlt: "",
    },
  ];

  const CollegesandUniversitiesContents = [
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

  const CollegesandUniversitiesSections = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",
      sectionDesc: "",

      fintechEvolution: [
        {
          points: [
            {
              title: "Overview",
              para: [
                <>
                  Chennai is widely recognized as one of India’s premier higher
                  education destinations. With a rich legacy of excellence and a
                  dynamic network of institutions, the city offers
                  undergraduate, postgraduate, doctoral, and vocational
                  education across a wide range of disciplines. From engineering
                  and medicine to arts, law, design, and business, Chennai’s
                  colleges and universities form the backbone of its knowledge
                  economy.
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Key Highlights.svg",
            },
          ],
        },
        {
          points: [],
        },
      ],
    },
  ];

  const CollegesandUniversitiesContents2 = [
    {
      sectionTitle: "Key Public Universities",

      fintechEvolution: [
        {
          points: [
            {
              title: "1. University of Madras",
              para: [
                <ul>
                  <li>Established: 1857</li>

                  <li>
                    One of India’s oldest universities, offering UG, PG, and
                    Ph.D. programs across arts, science, commerce, and
                    humanities
                  </li>
                  <li>
                    Affiliated to over 100 colleges across Chennai and Tamil
                    Nadu
                  </li>
                  <li>
                    Known for: Research in social sciences, public
                    administration, and history
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "2. Anna University",
              para: [
                <ul>
                  <li>Premier state technical university</li>

                  <li>Offers B.E., B.Tech, M.E., MBA, and M.Arch programs</li>
                  <li>
                    Home to 4 engineering campuses in Chennai, including the
                    prestigious CEG (College of Engineering, Guindy)
                  </li>
                  <li>Known for: Engineering, technology, and architecture</li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "3. Tamil Nadu Dr. MGR Medical University",
              para: [
                <ul>
                  <li>Focuses exclusively on health sciences</li>

                  <li>
                    Affiliation body for medical, dental, nursing, pharmacy, and
                    allied health colleges
                  </li>
                  <li>
                    Known for: High-quality clinical research and professional
                    education in medicine
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
          ],
        },
      ],
    },
  ];

  const CollegesandUniversitiesContents3 = [
    {
      sectionTitle: "Central & Deemed Universities",

      fintechEvolution: [
        {
          points: [
            {
              title: "1. IIT Madras (Indian Institute of Technology Madras)",
              para: [
                <ul>
                  <li>Ranked #1 in NIRF Rankings for multiple year</li>

                  <li>
                    Globally renowned for engineering, data science, AI, and
                    interdisciplinary research
                  </li>
                  <li>Hosts India’s first university-based research park</li>
                  <li>
                    Known for: Cutting-edge innovation, deep-tech
                    entrepreneurship, and global collaborations
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "2. SRM Institute of Science and Technology",
              para: [
                <ul>
                  <li>
                    Offers a wide range of professional programs in engineering,
                    law, medicine, and business
                  </li>

                  <li>Has a significant international student population</li>
                  <li>
                    Known for: Innovation-focused curriculum and international
                    partnerships
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "3. Sathyabama Institute of Science and Technology",
              para: [
                <ul>
                  <li>
                    Strong emphasis on engineering, space research, and marine
                    studies
                  </li>

                  <li>
                    Collaborates with ISRO and DRDO for research and student
                    training
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title:
                "4. Vellore Institute of Technology (VIT) – Chennai Campus",
              para: [
                <ul>
                  <li>One of India’s top-ranked private universities</li>

                  <li>
                    Offers specialized programs in AI, blockchain, aerospace,
                    and fintech
                  </li>
                  <li>
                    Known for: Industry interface, global MoUs, and high
                    placement records
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },

            {
              title: "Professional & Allied Institutions",
              para: [
                <>
                  <strong>Loyola College: </strong>
                  An Autonomous institution known for arts, commerce, and social
                  work
                </>,
                ,
                <>
                  <strong> Stella Maris College: </strong>
                  Women’s college excelling in humanities, economics, and
                  international studies
                </>,
                <>
                  <strong>Madras School of Social Work (MSSW): </strong>
                  Premier institution for social sciences, psychology, and HRM
                </>,
                <>
                  <strong> Asian College of Journalism (ACJ): </strong>
                  One of India’s top journalism schools
                </>,
                <>
                  <strong>
                    National Institute of Fashion Technology (NIFT – Chennai):{" "}
                  </strong>
                  Design and fashion technology education leader
                </>,
                <>
                  <strong>National Institute of Siddha (NIS) : </strong>
                  Promotes AYUSH and Indian systems of medicine
                </>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
          ],
        },
      ],
    },
  ];

  const CollegesandUniversitiesContents4 = [
    {
      sectionTitle: "Programs, Services & Future Vision",

      fintechEvolution: [
        {
          points: [
            {
              title: "Dual Degrees & Expanded Pathways",
              para: [
                <p>
                  The University of Madras is set to introduce a dual degree
                  model (UG + PG) from 2025–26. Students can simultaneously
                  pursue courses through regular and Open & Distance Learning
                  (ODL), enhancing flexibility and interdisciplinary
                  skill-building. The initiative aligns with NEP 2020 and
                  supports emerging fields like AI and data science.
                  <a
                    className="anchortag"
                    href="https://timesofindia.indiatimes.com/city/chennai/madras-univ-students-may-get-to-pursue-dual-degrees/articleshow/123350935.cms?utm_source=chatgpt.com"
                  >
                    {" "}
                    The Times of India
                  </a>
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "VETRI Schools: Bridging Learning & Aspirations",
              para: [
                <p>
                  With an allocation of ₹54.73 crore, the government is
                  launching VETRI (Vibrant Education Targeting Reputed
                  Institutions) schools in 236 higher secondary schools. These
                  will offer coaching and career guidance to students aiming for
                  competitive exams like NEET, IIT, and CLAT—serving about 1
                  lakh learners.{" "}
                  <a
                    className="anchortag"
                    href="https://timesofindia.indiatimes.com/city/chennai/55cr-allotted-for-vetri-schools/articleshow/123337526.cms?utm_source=chatgpt.com"
                  >
                    The Times of India
                  </a>
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Smart Campus Revamps",
              para: [
                <p>
                  In Tiruvallur district, two government schools—GHSS Pulicat
                  and PUMS Minjur—will receive modern makeovers worth ₹8 crore.
                  New classrooms, labs, smart classrooms, rainwater harvesting,
                  and child-centered facilities aim to enhance learning
                  environments for nearly 1,000 students.{" "}
                  <a
                    className="anchortag"
                    href="https://timesofindia.indiatimes.com/city/chennai/two-govt-schools-in-tiruvallur-dist-to-receive-8cr-makeover/articleshow/123326137.cms?utm_source=chatgpt.com"
                  >
                    The Times of India+1
                  </a>
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "STEM Innovation for Schools",
              para: [
                <p>
                  The AIF Digital Equalizer STEM Innovation & Learning Center in
                  Chennai is among India’s first of its kind. It features
                  hands-on robotics, AI, and space-tech workstations, along with
                  student incubation zones—designed to spark creativity from
                  early school years.{" "}
                  <a
                    className="anchortag"
                    href="https://aif.org/aif-inaugurates-indias-first-stem-innovation-and-learning-center-in-chennai/?utm_source=chatgpt.com"
                  >
                    aif.org+1
                  </a>
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "High-Level Dialogue on Higher Education",
              para: [
                <p>
                  The Tamil Nadu State Council for Higher Education (TANSCHE) is
                  launching a series of expert forums to shape the future of
                  higher education in the state, with a focus on the impact of
                  generative AI on learning and employment dynamics.{" "}
                  <a
                    className="anchortag"
                    href="https://www.freepressjournal.in/education/tansche-to-roll-out-high-level-dialogues-on-challenges-future-of-higher-education?utm_source=chatgpt.com"
                  >
                    Free Press Journal
                  </a>
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "AI at School: Microsoft & TEALS Program",
              para: [
                <p>
                  Under the TEALS (Technology Education and Learning Support)
                  initiative by Microsoft, over 38,000 students in Classes 6–9
                  across 100 government schools will receive AI and robotics
                  training—marking a leap toward smart classroom futures.
                </p>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Vocational & Skill Development",
              para: [
                <ul>
                  <li style={{ listStyle: "none" }}>
                    Numerous vocational institutes offer courses in IT, design,
                    hospitality, languages, and technical trades.
                  </li>
                  <li>
                    Popular centres include NIIT, Arena Animation, and
                    government-run Industrial Training Institutes (ITIs).
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
            {
              title: "Special Education",
              para: [
                <ul>
                  <li>
                    Chennai has dedicated institutions for children with special
                    needs, including The Spastics Society of Tamil Nadu and
                    Vidya Sagar.
                  </li>
                </ul>,
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/The Stats Behind the Scene.svg",
            },
          ],
        },
      ],
    },
  ];

  // Colleges and Universities

  return (
    <>
      <div>
        {/* Colleges and Universities*/}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {CollegesandUniversitiesIntro.map((section, index) => {
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
            {CollegesandUniversitiesSections.map((section, index) => (
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

            {CollegesandUniversitiesContents.map((section, index) => (
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
            {CollegesandUniversitiesContents2.map((section, index) => (
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
                  <h2>{section.sectionTitle}</h2>
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
            {CollegesandUniversitiesContents3.map((section, index) => (
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
                  <h2>{section.sectionTitle}</h2>
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
            {CollegesandUniversitiesContents4.map((section, index) => (
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
                  <h2>{section.sectionTitle}</h2>
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
        {/* Colleges and Universities*/}
      </div>
    </>
  );
}
