import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SecondSection = () => {
  const points = [
    "It's a citizen-led movement celebrating Chennai on the global stage",
    "Positioning Chennai as a hot, happening, and future-ready city",
    "Showcasing opportunities to live, visit, work, invest, and innovate",
    "Driving local pride through campaigns, contests, and city-wide collaborations",
    "Creating positive narratives across media, events, and strategic partnerships",
    "Empowering changemakers and volunteers to champion our city",
    "Harnessing technology and talent to shape Chennai's tomorrow",
    "Bold mission: Propel Chennai into the World's Top 100 Cities within 3 years",
  ];

  return (
    <section className="bg-[#f1f1f1] py-16 px-6 md:px-20">
      <div className="ChennaiInvestMents">
        <h1 class="chennaiInvestmentsHeading" style={{ textAlign: "center" }}>
          Welcome to Super Chennai
        </h1>
        <h5
          class="chennaiInvestmentsHeadingSub"
          style={{ textAlign: "center" }}
        >
          Explore restaurants, nightlife, sports, shopping, and entertainment in
          Super Chennai—where every moment is extraordinary.
        </h5>
      </div>
      <div className="max-w-5xl mx-auto text-center mt-12">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group flex items-start bg-white p-5 rounded-2xl shadow-md
                 hover:bg-[#a44294] transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle className="text-[#a44294] w-6 h-6 mr-3 mt-1 group-hover:text-white" />
              <p className="text-gray-700 group-hover:text-white">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
