"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const headings = [
  "Effortless Outfits, Every Day",
  "Your Closet’s Best Friend",
  "AI-Powered Style for Any Occasion",
  "Get Dressed, Get Noticed",
];

export default function HeroSection() {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    const id = setInterval(() => setCurrentHeading((h) => (h + 1) % headings.length), 5000);
    return () => clearInterval(id);
  }, []);

  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 800], [5, 0]);
  const translateY = useTransform(scrollY, [0, 800], ["5%", "0%"]);
  const scale = useTransform(scrollY, [0, 800], [0.9, 1]);
  const opacity = useTransform(scrollY, [0, 800], [0.8, 1]);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-midnight-black via-deep-slate-gray to-midnight-black min-h-screen overflow-hidden">
      {/* floating particles */}
      <div className="absolute inset-0">
        {isClient && [...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-electric-cyan mix-blend-screen"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
              scale: [1, Math.random() * 1.5 + 1, 1],
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[60%] aspect-square rounded-full bg-gradient-radial from-electric-cyan/20 via-electric-cyan/5 to-transparent" style={{ filter: "blur(80px)" }} />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center relative z-10 py-24 px-6 min-h-screen">
        <div className="flex items-center mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeading}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-wide text-center text-soft-white glow-effect-purple"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {headings[currentHeading]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-center gradient-text-sub mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We’re building a beautiful <span className="font-semibold">mobile app</span> for iOS &amp; Android —{" "}
          <span className="font-semibold">coming soon.</span>
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.a
            href="#waitlist"
            className="px-10 py-4 bg-gradient-to-r from-royal-purple to-electric-cyan text-soft-white rounded-full text-lg font-semibold shadow-glow hover:shadow-glow-hover transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Mobile Waitlist
          </motion.a>

          <motion.a
            href="#features"
            className="px-10 py-4 text-soft-white rounded-full text-lg font-semibold transition-all relative"
            style={{
              background: "transparent",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(to right, #7B2CBF, #00FFFF), linear-gradient(to right, #7B2CBF, #00FFFF)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              boxShadow: "2px 1000px 1px #0D0D0D inset",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.a>
        </div>

        {/* <motion.div className="mt-1 relative w-full max-w-7.5xl overflow-visible" style={{ perspective: "1000px", perspectiveOrigin: "center top" }}>
          <motion.div className="w-full aspect-video" style={{ rotateX, translateY, scale, opacity, transformStyle: "preserve-3d", willChange: "transform" }}>
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative" style={{ boxShadow: "0 20px 50px -10px rgba(0, 255, 255, 0.3)" }}>
              <Image src="/images/HeroSection.png" alt="AI-powered styling" fill style={{ objectFit: "contain" }} className="bg-midnight-black" />
            </div>
          </motion.div>
        </motion.div> */}

        <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
          <p className="text-soft-white animate-pulse gradient-text-sub">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto mt-2 animate-bounce text-electric-cyan" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="w-256 h-256 rounded-full bg-electric-cyan opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
