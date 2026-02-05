import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, X } from "lucide-react";
import heroCollage from "@/assets/hero-collage.jpg";

// Sample video URL - replace with your actual video URL
const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function HeroMedia() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section className="container-custom pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <div className="aspect-[21/9] relative image-zoom">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <img
                  src={heroCollage}
                  alt="Editorial magazine collage"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <button 
                  onClick={handlePlayClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-xl play-button-pulse hover:scale-110 transition-transform cursor-pointer"
                >
                  <Play size={28} className="ml-1 text-foreground" fill="currentColor" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative group"
              >
                <video
                  ref={videoRef}
                  src={VIDEO_URL}
                  className="w-full h-full object-cover"
                  autoPlay
                  onEnded={handleCloseVideo}
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  {/* Pause/Play Button */}
                  <button 
                    onClick={togglePause}
                    className="w-16 h-16 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    {isPaused ? (
                      <Play size={24} className="ml-1 text-foreground" fill="currentColor" />
                    ) : (
                      <Pause size={24} className="text-foreground" fill="currentColor" />
                    )}
                  </button>
                  
                  {/* Close Button */}
                  <button 
                    onClick={handleCloseVideo}
                    className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    <X size={20} className="text-foreground" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}