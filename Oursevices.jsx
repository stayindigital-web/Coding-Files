import React from "react";
import { useNavigate } from "react-router-dom";
import img6 from "./public/assets/resedential.jpg"

export default function OurServices() {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      image: img6,
      path: "/residential",
      title: "Residential Design",
      description:
        "Transform your living spaces into stylish, functional, and cozy homes with personalized interior design.",
    },
    {
      id: 2,
      image: "./public/assets/commercial.jpg",
      path: "/commercial",
      title: "Commercial Design",
      description:
        "Modern, professional, and aesthetic interiors for offices, shops, and workspaces that inspire productivity.",
    },
    {
      id: 3,
      image: "./public/assets/custom furniture.jpg",
      path: "/interior",
      title: "Custom Furniture",
      description:
        "Handcrafted furniture tailored to your space, blending comfort, luxury, and design perfection.",
    },
    {
      id: 4,
      image: "./public/assets/renovation.jpg",
      path: "/interior",
      title: "Renovation & Remodeling",
      description:
        "Revamp your interiors with creative makeovers, ensuring modern trends meet timeless elegance.",
    },
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
          Our <span className="text-[#C0392B]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Stallion Shelters, we specialize in creating interiors that blend
          functionality, comfort, and aesthetics. Explore our wide range of
          design services tailored for every space.
        </p>

        {/* Step-like Alignment */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#F8F8F8] p-6 rounded-2xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-2
              ${index % 2 === 1 ? "md:mt-12" : ""}`} // shift alternate cards
            >
             <a onClick={()=>{navigate(service.path)}}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:h-80 h-60 mx-auto mb-4 grayscale-50 hover:grayscale-0 hover:scale-105 transform transition duration-500"
              />
              </a> 
              <h3 className="text-2xl font-semibold text-[#C0392B] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
