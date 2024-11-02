"use client";
import React, { useEffect, useRef, useState } from "react";
import ParticlesBg from "particles-bg";
import { motion } from "framer-motion";

export const switchPageSound = "/sounds/switch-page.mp3";
export const typingSound = "/sounds/type.wav";

const IntroScreen: React.FC = () => {
  const fullText = "Welcome to My Portfolio"; // The full text to display
  const words = fullText.split(" "); // Split the text into words
  const [displayedText, setDisplayedText] = useState<string>(""); // State for the displayed text
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Index of the current word
  const audioRef = useRef<HTMLAudioElement>(null);
  const switchPageAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < words.length) {
        // Append the next word if within bounds
        setDisplayedText(
          (prev) => (prev ? prev + " " : "") + words[currentIndex],
        );
        if (audioRef.current) {
          audioRef.current.play();
        }
        setCurrentIndex((prev) => prev + 1); // Move to the next word
      } else {
        clearInterval(intervalId); // Clear the interval when done
        if (switchPageAudioRef.current) {
          switchPageAudioRef.current.play(); // Play switch page sound
        }
        // Scroll down after all words are displayed
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight, // Scroll to the height of the viewport
            behavior: "smooth", // Smooth scroll effect
          });
        }, 500); // Delay for half a second before scrolling
      }
    }, 400); // Change this value for different speeds (400ms for typing effect)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, words]); // Add currentIndex and words as dependencies

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} />
      <audio ref={audioRef}>
        <source src={typingSound} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={switchPageAudioRef}>
        <source src={switchPageSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
        initial={{ opacity: 0 }} // Start with invisible text
        animate={{ opacity: 1 }} // Fade in effect
        transition={{ duration: 1 }}
      >
        {displayedText}
      </motion.div>
    </div>
  );
};

export default IntroScreen;
