import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            We’d love to hear from you! Reach us through any of the following ways.
          </p>
        </div>

        {/* Full-width Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <i className="fa-solid fa-phone text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-[#2C3E50]">Phone Number</h3>
            <p className="text-gray-600">+91 9043977809</p>
            <p className="text-gray-600"></p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <i className="fa-solid fa-envelope text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-[#2C3E50]">Email Address</h3>
            <p className="text-gray-600">contact@stallianshelters.com</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <i className="fa-solid fa-location-dot text-3xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-[#2C3E50]">Address</h3>
            <p className="text-gray-600">
              7th Floor, Fathima Akthar Court, 453, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018
            </p>
          </div>
        </div>

        {/* Form + Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration Image */}
          <div className="flex justify-center">
            <img
              src="../public/assets/contact.png"
              alt="Contact Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C0392B] focus:border-[#C0392B] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C0392B] focus:border-[#C0392B] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C0392B] focus:border-[#C0392B] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C0392B] focus:border-[#C0392B] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C0392B] text-white py-3 rounded-lg font-semibold hover:bg-[#A93226] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            title="Stallion Shelters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.905463625027!2d80.2209669153624!3d13.050556916356011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d0f3d5b2d7%3A0x44e1c5a7d1af8f4a!2sInterior%20Design!5e0!3m2!1sen!2sin!4v1693731938352!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
