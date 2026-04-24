

import { API_BASE_URL } from "../../../../config";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";

const MobileAdMedia = ({ ad }) => {
  const media = ad?.mobileSettings?.mobileMedia || ad.media;
  const mediaType = ad?.mobileSettings?.mobileMediaType || ad.mediaType;
  const mediaUrl = ad?.mobileSettings?.mobileMediaUrl || ad.mediaUrl;
  const altText = ad?.mobileSettings?.mobileAltText || ad.altText;
  
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  if (mediaType === "video" && mediaUrl) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-full h-full rounded-2xl overflow-hidden group"
      >
        <motion.iframe
          src={mediaUrl}
          className="w-full h-full rounded-2xl shadow-2xl"
          title={ad.title}
          allow="autoplay"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
    );
  }

  if (media?.url) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-full rounded-2xl overflow-hidden group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Premium Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.a
          href={ad.targetUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          variants={hoverVariants}
          className="block relative z-10"
        >
          <motion.img
            src={withBaseUrl(media.url)}
            alt={altText || ad.title}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            variants={imageVariants}
            initial={false}
            animate={imageLoaded ? "animate" : "initial"}
            onLoad={() => setImageLoaded(true)}
            transition={{ duration: 0.8 }}
          />
          
          {/* Floating Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: -10, opacity: 1 } : { y: 20, opacity: 0 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-lg border border-white/50"
          >
           Advertisement
          </motion.div>

          {/* Click Prompt */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-2xl border border-white/50 flex items-center space-x-2"
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>👆 Tap to visit</span>
          </motion.div>
        </motion.a>
      </motion.div>
    );
  }

  return null;
};

export default MobileAdMedia;


// import { API_BASE_URL } from "../../../../config";

// const withBaseUrl = (url) =>
//   url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";


// const MobileAdMedia = ({ ad }) => {
//   const media =
//     ad?.mobileSettings?.mobileMedia || ad.media;

//   const mediaType =
//     ad?.mobileSettings?.mobileMediaType || ad.mediaType;

//   const mediaUrl =
//     ad?.mobileSettings?.mobileMediaUrl || ad.mediaUrl;

//   const altText =
//     ad?.mobileSettings?.mobileAltText || ad.altText;

//   if (mediaType === "video" && mediaUrl) {
//     return (
//       <iframe
//         src={mediaUrl}
//         className="w-full h-full rounded-lg"
//         title={ad.title}
//         allow="autoplay"
//       />
//     );
//   }

//   if (media?.url) {
//     return (
//       <a href={ad.targetUrl || "#"} target="_blank">
//         <img
//           src={withBaseUrl(media.url)}
//           alt={altText || ad.title}
//           className="w-full rounded-lg"
//         />
//       </a>
//     );
//   }

//   return null;
// };

// export default MobileAdMedia;
