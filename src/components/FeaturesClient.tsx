"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  image: string;
  badge?: string; // optional "New" / "Coming Soon" label
};

const features: Feature[] = [
  {
    title: "Upload & Digitize Your Wardrobe",
    description:
      "Snap or upload your pieces. LookMate auto-tags brand, category, color, pattern, and more—so your closet is searchable and ready for styling.",
    image: "/images/1image.png",
   
  },
  {
    title: "AI Stylist with Self-Critique",
    description:
      "Multiple outfits are generated and ranked by an AI critique loop, returning the best fit for your body, preferences, and constraints.",
    image: "/images/2image.png",
    
  },
  {
    title: "3D Avatar Try-On",
    description:
      "Preview outfits on a 3D avatar that mirrors your proportions. Rotate, zoom, and inspect details before you wear it IRL.",
    image: "/images/3image.png",
   
  },
  {
    title: "Weather, Mood & Occasion Aware",
    description:
      "LookMate adapts to rain, heat, or cold—and curates looks for class, work, dates, or nights out based on your vibe.",
    image: "/images/4image.png",
  },
  {
    title: "Learns Your Style",
    description:
      "Keep, regenerate, and rate fits. LookMate trains on your feedback and history, improving recommendations every day.",
    image: "/images/5image.png",
  },
  {
    title: "Share, Compete, Inspire",
    description:
      "Join style challenges, post fits, and climb leaderboards. Discover ideas from a community that keeps you leveling up.",
    image: "/images/6image.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-midnight-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-soft-white mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          What You’ll Get
        </motion.h2>

        {features.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center mb-28 ${isEven ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Image */}
              <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <motion.div
                  className="relative w-full h-auto max-w-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={640}
                    height={480}
                    className="object-contain rounded-xl shadow-lg"
                    priority={index < 2}
                  />
                </motion.div>
              </div>

              {/* Copy */}
              <div className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-soft-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {feature.title}
                  </motion.h3>
                  {feature.badge && (
                    <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/30">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <p className="text-soft-white text-lg opacity-80">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
