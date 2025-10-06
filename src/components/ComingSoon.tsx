"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <section id="mobile" className="bg-gradient-to-b from-midnight-black to-black py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-soft-white"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mobile App — Coming Soon
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-soft-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We’ve paused sign-in and payments while we focus on the best mobile experience.
          Join the waitlist and we’ll notify you when the app is ready.
        </motion.p>

        <motion.a
          href="#waitlist"
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-royal-purple to-electric-cyan text-soft-white rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Join the Mobile Waitlist
        </motion.a>

        <div className="mt-10 flex items-center justify-center gap-6 text-soft-white/70">
          <div className="text-sm">iOS</div>
          <div className="text-sm">Android</div>
        </div>
      </div>
    </section>
  );
}
