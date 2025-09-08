import React from "react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Modern Interior Design Ideas",
      desc: "Discover how minimalism and elegance blend in today’s interior trends.",
      img: "../public/assets/IX4A0371.jpg",
    },
    {
      id: 2,
      title: "Residential Architecture Trends",
      desc: "Explore the latest innovations shaping modern homes and living spaces.",
      img: "../public/assets/IX4A0401.jpg",
    },
    {
      id: 3,
      title: "Commercial Space Planning",
      desc: "Learn how to maximize space efficiency in offices and commercial buildings.",
      img: "../public/assets/IX4A0404.jpg",
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Our Blog</h2>
          <p className="text-lg text-gray-600">
            Insights, stories, and the latest updates in architecture & design.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <button className="bg-[#C0392B] text-white px-4 py-2 rounded-full font-medium hover:bg-[#A93226] transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
