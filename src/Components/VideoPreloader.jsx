import React, { useEffect, useRef, useState } from "react";

const VideoPreloader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth <= 800;

    setVideoSrc(isMobile ? "./videos/Mobile.mp4" : "./videos/Web.mp4");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      onFinish();
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
      video.play();
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, [onFinish]);

  return (
    <div className="video-preloader">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default VideoPreloader;