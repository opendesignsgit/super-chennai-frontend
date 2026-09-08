import React from "react";
import {
  ArrowRight,
  Landmark,
  Users,
  Lightbulb,
  Globe,
  Building2,
  ClipboardList,
  Sparkles,
  Camera,
  UploadCloud,
  Trophy,
  ChevronsRight,
  Flame,
  Flower2,
  ClipboardCheck,
  Image as ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function GoluIndexPage() {
  const features = [
    {
      id: "01",
      title: "Chennai’s Culture, Heritage & Traditions",
      description:
        "Celebrating Chennai’s vibrant culture, heritage, traditions and festivals.",
      icon: (
        <img src="/images/golu/heritage.png" className="w-14 h-14 text-white" />
      ),
      bgColor: "",
      numColor: "text-[#4B1F8A]",
    },
    {
      id: "02",
      title: "People, Food, Landmarks & Local Identity",
      description:
        "Showcasing Chennai’s people, food, landmarks and unique character.",
      icon: (
        <img
          src="/images/golu/PEOPLE-ICON.png"
          className="w-14 h-14 text-white"
        />
      ),
      bgColor: "",
      numColor: "text-[#F82763]",
    },
    {
      id: "03",
      title: "Innovation, Technology & Infrastructure",
      description:
        "Highlighting Chennai’s innovation, technology and modern infrastructure.",
      icon: (
        <img
          src="/images/golu/Innovate-final.png"
          className="w-14 h-14 text-white"
        />
      ),
      bgColor: "",
      numColor: "text-[#F88E27]",
    },
    {
      id: "04",
      title: "Chennai’s Growing Global Outlook",
      description:
        "Showcasing Chennai’s global connections, opportunities and growing influence.",
      icon: (
        <img
          src="/images/golu/Finaly-global-icon.png"
          className="w-14 h-14 text-white"
        />
      ),
      bgColor: "",
      numColor: "text-[#2753F8]",
    },
    {
      id: "05",
      title: "The Chennai of Tomorrow & Future Aspirations",
      description:
        "Imagining Chennai’s future, possibilities, aspirations and progress.",
      icon: (
        <img
          src="/images/golu/finaly-chennai-tomor-icon.png"
          className="w-14 h-14 text-white"
        />
      ),
      bgColor: "",
      numColor: "text-[#006A00]",
    },
  ];

  const steps = [
    {
      id: "01",
      title: "REGISTER",
      description: "Register for the Super Chennai Golu Contest.",
      icon: (
        <img
          src="/images/golu/regsiter-icon.png"
          className="w-18 h-18 text-white"
        />
      ),
      circleBorder: "border-indigo-300 bg-indigo-50/20",
      color: "text-indigo-900",
    },
    {
      id: "02",
      title: "CREATE",
      description: "Create your Golu and your Super Chennai Corner.",
      icon: (
        <img
          src="/images/golu/regsiter-icon.png"
          className="w-18 h-18 text-white"
        />
      ),
      circleBorder: "border-pink-300 bg-pink-50/20",
      color: "text-pink-600",
    },
    {
      id: "03",
      title: "CAPTURE",
      description: "Click photographs of your Golu.",
      icon: (
        <img
          src="/images/golu/CAPTURE-ICON.png"
          className="w-18 h-18 text-white"
        />
      ),
      circleBorder: "border-amber-300 bg-amber-50/20",
      color: "text-amber-500",
    },
    {
      id: "04",
      title: "SUBMIT",
      description: "Submit your Golu and Super Chennai Corner photographs.",
      icon: (
        <img
          src="/images/golu/UPLOAD-ICON.png"
          className="w-18 h-18 text-white"
        />
      ),
      circleBorder: "border-sky-300 bg-sky-50/20",
      color: "text-sky-600",
    },
    {
      id: "05",
      title: "SHORTLIST & JUDGE",
      description: "Shortlisted Golus move to the final judging stage.",
      icon: (
        <img
          src="/images/golu/regsiter-icon.png"
          className="w-18 h-18 text-white"
        />
      ),
      circleBorder: "border-emerald-300 bg-emerald-50/20",
      color: "text-emerald-600",
    },
  ];

  const firstSection = [
    {
      title: {
        primary: "SUPER CHENNAI",
        highlight: "GOLU CONTEST",
        subtitle: "GLOBAL OUTLOOK, LOCAL UNIQUENESS",
      },
      description:
        "Golu is a beautiful South Indian tradition where stories, culture and creativity come alive through carefully arranged dolls and colourful displays.",
      cta: {
        label: "REGISTER NOW",
        url: "/register",
        showIcon: true,
      },
      media: {
        type: "image",
        altText: "Main Banner Image",
        placeholderText: "Main Banner Image",
        src: "/images/golu/Why-superchennai-corner.jpeg",
      },
      features: [
        {
          id: 1,
          type: "richText",
          segments: [
            {
              text: "Golu is a beautiful South Indian tradition where stories, culture and creativity come alive through carefully arranged dolls and colourful displays. In this contest, participants are invited to create a unique Golu that celebrates Chennai’s rich heritage, distinctive identity and vibrant way of life, while imagining the city of tomorrow.",
            },
          ],
        },

        // {
        //   id: 4,
        //   type: "richText",
        //   segments: [
        //     { text: "Imagine the Chennai of tomorrow, bringing together " },
        //     { text: "local uniqueness", highlight: true },
        //     { text: ", " },
        //     { text: "innovation", highlight: true },
        //     { text: " and a " },
        //     { text: "global outlook", highlight: true },
        //     { text: "." },
        //   ],
        // },
        // {
        //   id: 5,
        //   type: "richText",
        //   segments: [
        //     {
        //       text: "Let your creativity showcase a vibrant, future-ready Chennai that inspires the world.",
        //     },
        //   ],
        // },
        {
          id: 6,
          type: "richText",
          segments: [
            {
              text: "From Chennai’s temples, traditions, food and arts to its technology, infrastructure, innovation and future possibilities, participants can bring together the city’s past, present and future through their Golu. The theme encourages creativity, storytelling and imagination, showcasing what makes Chennai truly unique while presenting a futuristic vision of the city. Celebrate Chennai through tradition. Imagine Chennai through innovation. Create a Golu that tells the story of a city moving confidently into the future.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="accaodomationBannerSection">
        <img src="/images/education/education.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Education in Chennai</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <span>Education in Chennai</span>
            </div>
          </div>
        </div>
      </div>
      <div className="golupaggggeee" id="poppinsfamilyybody">
        <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans goluufirstsectionmainn">
          {firstSection.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight leading-tight uppercase">
                    {item.title.primary}
                  </h1>
                  <h1 className="text-3xl md:text-4xl font-black text-pink-600 tracking-tight leading-tight uppercase">
                    {item.title.highlight}
                  </h1>
                  <h3 className="text-xs font-bold text-indigo-950 uppercase mt-2">
                    {item.title.subtitle}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>

                <div className="pt-2">
                  <a
                    href={item.cta.url}
                    className="inline-flex items-center justify-center gap-3 bg-indigo-900 hover:bg-indigo-950 text-white font-black text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>{item.cta.label}</span>
                    {item.cta.showIcon && (
                      <span className="bg-white text-indigo-900 rounded-full p-1 flex items-center justify-center">
                        <ArrowRight size={14} strokeWidth={3} />
                      </span>
                    )}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 w-full h-[280px] md:h-[340px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-0 text-gray-400 relative overflow-hidden">
                {item.media.src ? (
                  <img
                    src={item.media.src}
                    alt={item.media.altText}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <>
                    <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
                    <span className="text-xs font-semibold uppercase text-gray-400">
                      {item.media.placeholderText}
                    </span>
                  </>
                )}
              </div>

              <div className="lg:col-span-4 space-y-6 golufirstsectionheight">
                {item.features.map((feature, featureIdx) => (
                  <React.Fragment key={feature.id}>
                    <div className="flex items-start space-x-4 parafirstsectionn">
                      <p className="text-xs text-gray-700 leading-relaxed pt-1">
                        {feature.segments
                          ? feature.segments.map((seg, segIdx) =>
                              seg.highlight ? (
                                <span
                                  key={segIdx}
                                  className="font-bold text-pink-600"
                                >
                                  {seg.text}
                                </span>
                              ) : (
                                seg.text
                              ),
                            )
                          : feature.text}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
          <div className="flex items-center justify-center space-x-3 mb-10">
            <span className="text-pink-500 text-lg">
              <img className="w-14" src="/images/golu/golu-second.png" alt="" />
            </span>
            <h2 className="text-xl md:text-2xl font-black text-indigo-950  font-bold  uppercase text-center">
              WHY A SUPER CHENNAI CORNER?
            </h2>
            <span className="text-pink-500 text-lg">
              <img className="w-14" src="/images/golu/golu-second.png" alt="" />
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 w-full h-[320px] md:h-[460px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
              <img
                src="/images/golu/Why-superchennai-corner.jpeg"
                alt=""
                className="h-[100%]"
              />
            </div>

            <div className="lg:col-span-7 space-y-5 heighgolli">
              {features.map((feature, index) => (
                <div key={feature.id} className="group parafirstsectionn">
                  <div className="flex items-start space-x-4 gap-2 golumaincon">
                    <div
                      className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      {feature.icon}
                    </div>

                    <div className="mr-0">
                      <span
                        className={`text-lg font-black ${feature.numColor} shrink-0 numberfontt`}
                      >
                        {feature.id}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#000] tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-0.5 paragolorr">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {index < features.length - 1 && (
                    <div className="border-b border-gray-100 mt-4 ml-14"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
          <div className="flex items-center justify-center space-x-4 mb-10">
            <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
            <h2 className="text-xl md:text-2xl font-black text-indigo-950 font-bold uppercase text-center">
              HOW IT WORKS
            </h2>
            <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-18 h-18 rounded-full ${step.circleBorder} flex items-center justify-center shadow-sm shrink-0 `}
                  >
                    {step.icon}
                  </div>

                  <div className="text-left">
                    <span
                      className={`text-xl font-black ${step.color} block leading-none`}
                    >
                      {step.id}
                    </span>
                    <h3
                      className={`text-xs font-black ${step.color} uppercase font-bold mt-0.5`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-6 text-purple-900 opacity-60">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl shadow-lg border border-gray-100 font-sans">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
            <h2 className="text-xl md:text-3xl font-bold text-indigo-950 text-center uppercase">
              How Will Your Golu Be Judged?
            </h2>
            <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="relative pt-6">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-indigo-900 text-white font-bold text-xs px-6 py-1.5 rounded-full uppercase shadow-sm text-[15px]">
                Stage 01
              </div>

              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 md:p-8 flex flex-row items-center text-center h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-100 widthmax">
                  <div className="flex flex-col items-center">
                    <div className="w-25 h-25 rounded-full  border-purple-200 flex items-center justify-center mb-4  text-indigo-900">
                      <img
                        src="/images/golu/GET-Shortlist-judging-icon.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold headigggggfont">
                        Get Shortlisted
                      </h3>
                      <p className="text-xs md:text-sm font-black text-black uppercase mt-1 mb-3 font-bold subheadinggfonrs">
                        Super Chennai Corner
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 font-medium max-w-100 mt-auto widthmax paragaraphcolosection ">
                    Your Super Chennai Corner is your chance to showcase what
                    makes Chennai special. Bring your creativity, local pride
                    and unique ideas together to stand out and get shortlisted.
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium max-w-100 mt-auto widthmax paragaraphcolosection pt-[15px]">
                    Creating a dedicated Super Chennai Corner is mandatory for
                    every entry. The creativity, relevance and originality of
                    the Corner will play a key role in determining which Golus
                    move forward to the final round.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-6">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-pink-600 text-white font-bold text-xs px-6 py-1.5 rounded-full uppercase   shadow-sm text-[15px]">
                Stage 02
              </div>

              <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-6 md:p-8 flex flex-row items-center text-center h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-100 widthmax">
                  <div className="flex flex-col items-center">
                    <div className="w-25 h-25 rounded-full  border-purple-200 flex items-center justify-center mb-4  text-indigo-900">
                      <img src="/images/golu/win-iOC.png" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold headigggggfont">
                        Win The Prize
                      </h3>
                      <p className="text-xs md:text-sm font-black text-black uppercase mt-1 mb-3 font-bold subheadinggfonrs">
                        Grandness + Innovation
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 font-medium max-w-100 mt-auto widthmax paragaraphcolosection">
                    Shortlisted Golus will be evaluated based on their overall
                    grandness, creativity and innovation. Judges will also
                    consider how effectively the Golu brings the theme to life,
                    including the concept and execution of the Super Chennai
                    Corner.
                  </p>

                  <p className="text-xs md:text-sm text-gray-600 font-medium max-w-100 mt-auto widthmax paragaraphcolosection pt-[15px]">
                    The Super Chennai Corner gets you shortlisted, while the
                    grandness and innovation of your Golu determine whether you
                    win the prize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CPOMPOLEATED @@@@@@@@ */}

        <section className="max-w-7xl mx-auto my-8 p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[10%]  px-4 md:px-12">
            <div className="text-pink-400 opacity-80">
              <img src="/images/golu/flower-image.png" alt="" />
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold">
                READY TO CREATE YOUR GOLU?
              </h2>

              <button className="cursor-pointer flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-black text-sm   px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span>REGISTER NOW</span>
                <span className="bg-white text-pink-600 rounded-full p-1 flex items-center justify-center">
                  <ArrowRight size={16} strokeWidth={3} />
                </span>
              </button>
            </div>

            <div className="text-pink-400 opacity-80">
              <img src="/images/golu/flower-image.png" alt="" />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-8 relative overflow-hidden rounded-3xl shadow-xl font-sans backgoungoloimage text-white">
          <div className="relative z-10 py-10 px-6 md:px-12 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none uppercase">
              GLOBAL OUTLOOK.
            </h2>
            <h2 className="text-2xl md:text-4xl font-black text-amber-400 tracking-tight leading-none uppercase mt-1">
              LOCAL UNIQUENESS.
            </h2>

            <p className="text-xs md:text-sm font-bold text-gray-200  st uppercase mt-3 mb-6">
              A GOLU FOR THE CHENNAI OF TOMORROW.
            </p>

            <button className="cursor-pointer flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-black text-sm   px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>REGISTER NOW</span>
              <span className="bg-indigo-950 text-amber-400 rounded-full p-1 flex items-center justify-center">
                <ArrowRight size={16} strokeWidth={3} />
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
