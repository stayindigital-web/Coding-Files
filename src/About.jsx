import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aboutpage() {
  const navigate = useNavigate();
  return (
    <section id="about-us" className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern Interior Design"
            className="rounded-2xl shadow-lg h-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#C0392B] text-white px-6 py-4 rounded-lg shadow-lg">
            <span className="text-2xl font-bold">10+</span>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            About <span className="text-[#C0392B]">Stallion Shelters</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Stallion Shelters, we believe your space should reflect your
            personality, lifestyle, and aspirations. With over a decade of
            experience, we specialize in creating interiors that combine
            elegance, comfort, and functionality.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our team of passionate designers collaborates closely with clients
            to transform houses into dream homes and offices into inspiring
            workplaces. From modern minimalism to classic luxury, we bring your
            vision to life.
          </p>
          <a
            onClick={()=>{navigate("/about")}}
            className="inline-block bg-[#C0392B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A93226] transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
