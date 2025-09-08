import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative md:h-screen min-h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Keep your old content here */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-[#C39B63]">Stallion Shelters</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Designing spaces that inspire, comfort, and reflect your unique style.
        </p>
        <a
          href="#about-us"
          className="bg-[#C39B63] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A67C52] transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
