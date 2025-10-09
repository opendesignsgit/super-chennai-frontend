import { motion, AnimatePresence } from "framer-motion";
import ExpandableList from "../../../../Components/cardScroller/ExpandableList";

export default function ArtsScienceColleges() {
  // Arts, Science & Commerce

  const artsScienceIntro = [
    {
      sectionTitle: "Arts, Science & Commerce Colleges in Chennai",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/education/College/Image/arts-science-commerce-colleges-chennai.jpg",
      imgAlt: "",
    },
  ];

  const artsScienceContents = [
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

  const artsScienceimageSections = [
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
                  Chennai is celebrated for its exceptional network of arts,
                  science, and commerce colleges. These institutions combine
                  academic rigor with cultural depth and societal values,
                  shaping generations of thinkers, citizens, and professionals.
                  From historic landmarks like Loyola College to progressive,
                  autonomous institutions, Chennai continues to be at the
                  forefront of arts and liberal education in India.
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

  const artsScienceContents2 = [
    {
      sectionTitle:
        "Chennai’s Auto Startup Scene: Building the Future of Mobility",

      fintechEvolution: [
        {
          points: [
            {
              title: "Government Support & Expansion",
              para: [
                <>
                  <p>
                    For the 2025–26 academic year, the Tamil Nadu government
                    approved a 20% seat increase in government arts and science
                    colleges, responding to the rising demand in commerce and
                    arts courses. Over 179 government colleges currently operate
                    in the state. The Times of IndiaChennaitop10+4Stanza
                    Living+4The Times of India+4
                  </p>
                </>,
                ,
              ],
              imgs: "/images/education/College/icon/Government Support & Expansion.svg",
            },
            {
              title: "Admission Demand Highlights",
              para: [
                <>
                  <strong>
                    Presidency College saw 40,167 applications for 2,380 seats.
                  </strong>
                </>,
                ,
                <>
                  <strong>
                    Queen Mary’s College received 23,018 applications for 2,038
                    seats.
                  </strong>
                </>,
                <>
                  <p>
                    BSc (Computer Science), BA (Tamil/English), BCom, and BBA
                    remain the most sought-after disciplines.
                    <a href="https://www.studyclap.com/arts-colleges-in-chennai/?utm_source=chatgpt.com">
                      collegesintamilnadu.com+10studyclap.com+10Stanza
                      Living+10The Times of IndiaIndCareer+1
                    </a>
                  </p>
                </>,
                ,
              ],
              imgs: "/images/education/College/icon/Admission Demand Highlights.svg",
            },
            {
              title: "Autonomy & Curriculum Innovation",
              para: [
                <>
                  <p>
                    Chennai hosts several{" "}
                    <strong>autonomous arts and science colleges </strong> —
                    such as MCC, Loyola, Stella Maris, Presidency, and
                    Ethiraj—that create their own syllabi and adaptive learning
                    models.
                  </p>
                </>,

                ,
              ],
              imgs: "/images/education/College/icon/Autonomy & Curriculum Innovation.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Why Choose Arts, Science & Commerce in Chennai?",
              para: [
                <>
                  <strong>Academic Legacy Meets Modern Curriculum : </strong>
                  Institutions like Loyola and MCC blend centuries of academic
                  reputation with progressive pedagogy.
                </>,
                <>
                  <strong>Affordability & Accessibility : </strong>
                  Government colleges offer high-quality education at accessible
                  pricing, while autonomous colleges maintain moderate fee
                  structures with scholarship options.
                </>,
                <>
                  <strong>High Engagement & Placement Network : </strong>
                  Strong student demand reflects institutional confidence; many
                  colleges actively support internships, placement drives, and
                  international exchanges.
                </>,
                <>
                  <strong>Holistic Education & Social Awareness : </strong>
                  Students benefit from programs in liberal arts, social
                  sciences, community engagement, and environmental awareness
                  that align with Future Chennai’s emphasis on inclusive
                  learning.
                </>,
              ],
              imgs: "/images/education/College/icon/Why Choose Arts, Science & Commerce in Chennai_.svg",
            },
          ],
        },
      ],
    },
  ];

  // Arts, Science & Commerce

  return (
    <>
      <div>
        {/* Arts, Science & Commerce*/}
        <section id="fourthSection" className="relative">
          {/* -----------------CentralChennai--------------------  */}

          <div className="foodlistsec">
            {artsScienceIntro.map((section, index) => {
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
            {artsScienceimageSections.map((section, index) => (
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

            {artsScienceContents.map((section, index) => (
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
                Top Institutions in Chennai
              </h2>

              <p>
                Here are some of the most prestigious and sought-after colleges
                where arts, science, and commerce flourish:
              </p>
            </div>

            {artsScienceContents2.map((section, index) => (
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
        {/* Arts, Science & Commerce*/}
      </div>
    </>
  );
}
