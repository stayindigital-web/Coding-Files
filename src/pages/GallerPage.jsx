import React from "react";

// Import your images
import img1 from "../../public/assets/IX4A0367.jpg";
import img2 from "../../public/assets/IX4A0380.jpg";
import img3 from "../../public/assets/IX4A0389.jpg";
import img4 from "../../public/assets/IX4A0401.jpg";
import img5 from "../../public/assets/IX4A0406.jpg";
import img6 from "../../public/assets/IX4A0378(2).jpg";

export default function GalleryPage() {
  const images = [img1,img2, img3, img4, img5, img6];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#2C3E50" }}
        >
          Our Interior Design Projects
        </h1>
        <p
          className="text-lg md:text-xl"
          style={{ color: "#2C3E50" }}
        >
          Experience Modern Luxury – Warm Neutrals with Elegant Gold Accents
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg relative group"
              style={{ backgroundColor: "#EAE7DC" }}
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-white bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span
                  className="text-white font-semibold text-lg"
                  style={{ color: "#D4AF37" }}
                >
                  Project {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 px-6" style={{ backgroundColor: "#EAE7DC" }}>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#2C3E50" }}
        >
          Transform Your Space Today
        </h2>
        <p
          className="text-lg mb-6"
          style={{ color: "#2C3E50" }}
        >
          Schedule a free consultation and bring modern luxury into your home.
        </p>
        <button
          className="px-8 py-3 rounded-full font-semibold hover:bg-[#A93226] transition-colors"
          style={{ backgroundColor: "#C0392B", color: "#FAF7F2" }}
          onClick={() => alert("CTA clicked!")}
        >
          Free Consultation
        </button>
      </section>
    </div>
  );
}
