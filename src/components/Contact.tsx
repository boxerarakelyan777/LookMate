"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") as string) || "";
    const name = (data.get("name") as string) || "";
    // mailto fallback; later wire to your API
    window.location.href = `mailto:hello@lookmate.app?subject=Waitlist&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-midnight-black py-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-soft-white">Join the Waitlist</h2>
        <p className="mt-3 text-soft-white/80">Add your email and we’ll notify you when the mobile app launches.</p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name (optional)"
              className="w-full rounded-lg bg-[#0d0d0d] border border-electric-cyan/30 px-4 py-3 text-soft-white outline-none focus:border-electric-cyan"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-lg bg-[#0d0d0d] border border-electric-cyan/30 px-4 py-3 text-soft-white outline-none focus:border-electric-cyan"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-gradient-to-r from-royal-purple to-electric-cyan text-soft-white rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="mt-6 text-emerald-400">Thanks! We’ll be in touch soon. 💌</p>
        )}
      </div>
    </section>
  );
}
