import React from "react";
import Img1 from "../public/assets/IX4A0461(2).jpg"
import Img2 from "../public/assets/IX4A0443.jpg"
import Img3 from "../public/assets/IX4A0417.jpg"
import Img4 from "../public/assets/IX4A0469.jpg"

export default function WhoWeAre() {
  const services = [
    {
      title: "Architectural Design",
      desc: "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural expertise creates timeless spaces.",
      image:Img1
    },
    {
      title: "Interior Design & Planning",
      desc: "Make your space shine! Our team crafts inviting, functional, and elegant interiors tailored to your lifestyle.",
      image:Img2
    },
    {
      title: "Consulting Services",
      desc: "Think of us as your design partners. We provide expert advice and solutions to bring your vision to life.",
      image:Img3
    },
    {
      title: "Project Management",
      desc: "From start to finish, we handle it all. Our project management ensures seamless execution with precision.",
      image:Img4
    },
  ];

  return (
    <section
      id="who-we-are"
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Label */}
        <p className="uppercase tracking-wide text-sm font-semibold text-[#C39B63] mb-4">
          • Who We Are
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Experience{" "}
          <span className="text-[#C39B63]">The Art Of Interior Design</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          We specialize in transforming visions into reality. Explore our
          portfolio of innovative architectural and interior design projects,
          crafted with precision and passion.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-500 border border-white/20"
            >
              <img
                src={service.image}
                alt="service image"
                className="w-auto md:h-80 h-60 mx-auto rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-[#C0392B] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
