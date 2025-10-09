import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function TopColleges() {
  // topCollege

  const topCollegeSchoolIntro = [
    {
      sectionTitle: "Top Colleges in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/College/Image/top-colleges-chennai.jpg",
      imgAlt: "",
    },
  ];

  const topCollegeschoolsContents = [
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

  const topCollegeimageSections = [
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
                  Chennai stands tall as one of India’s premier destinations for
                  higher education, boasting a mix of world-class engineering
                  colleges, top-tier medical institutions, business schools,
                  liberal arts universities, and niche creative colleges. The
                  city’s colleges not only attract students from across India
                  but also from Asia, Africa, and the Middle East—thanks to its
                  academic legacy, urban infrastructure, and strong research
                  ecosystem.
                </>,
                <>
                  From the globally renowned IIT Madras to the historic Loyola
                  College, Chennai nurtures both academic excellence and social
                  equity, empowering future scientists, artists, engineers,
                  entrepreneurs, and civic leaders.
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

  const topCollegechoolsContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Engineering & Technology",
              para: [
                <>
                  <p>
                    Chennai is home to over 150 engineering colleges, including
                    some of India’s best-known institutions.
                  </p>
                </>,
                ,
                <>
                  <ul>
                    <strong>Top Institutions :</strong>

                    <li>
                      IIT Madras – India’s #1 engineering institute (NIRF
                      Ranking 2024)
                    </li>
                    <li>
                      Anna University – A top-ranked public tech university
                    </li>
                    <li>
                      SSN College of Engineering, Hindustan Institute of
                      Technology, Sathyabama Institute
                    </li>
                  </ul>
                </>,
              ],
              imgs: "/images/education/College/icon/Overview.svg",
            },
            {
              title: "Medical & Health Sciences",
              para: [
                <>
                  <p>
                    Known for pioneering medical education and research, Chennai
                    has several top medical colleges and allied health
                    institutions.
                  </p>
                </>,
                ,
                <>
                  <ul>
                    <strong>Top Institutions :</strong>

                    <li>Madras Medical College</li>
                    <li>Stanley Medical College</li>
                    <li>
                      Sri Ramachandra Institute of Higher Education & Research
                    </li>
                    <li>Saveetha Medical College, Meenakshi Medical College</li>
                  </ul>
                </>,
              ],
              imgs: "/images/education/College/icon/Overview.svg",
            },
          ],
        },
      ],
    },
  ];

  // topCollege

  return (
    <>
      <div>
        {/* Top Colleges */}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {topCollegeSchoolIntro.map((section, index) => {
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
            {topCollegeimageSections.map((section, index) => (
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

            {topCollegeschoolsContents.map((section, index) => (
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
                Categories of Colleges in Chennai
              </h2>
            </div>

            {topCollegechoolsContents2.map((section, index) => (
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
        </section>
        {/* Top Colleges */}
      </div>
    </>
  );
}
