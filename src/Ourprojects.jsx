import { useNavigate } from "react-router-dom";
import Img1 from "../public/assets/IX4A0367.jpg";
import Img2 from "../public/assets/IX4A0389.jpg";
import Img3 from "../public/assets/IX4A0401.jpg";
export default function OurProjects() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Modern Interior design",
      image: Img1,
    },
    {
      id: 2,
      title: "Residential design",
      image: Img2,
    },
    {
      id: 3,
      title: "Commercial design",
      image: Img3,
    },
  ];

  return (
    <section className="bg-[#F9F9F7] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">
          Our <span className="text-[#C19A6B]">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our portfolio of innovative interior design projects crafted
          with precision, creativity, and attention to detail.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C3E50]">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12">
          <button
            onClick={() => {
              navigate("/gallery");
            }}
            className="px-8 py-3 bg-[#C19A6B] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#a57e52] transition duration-300"
          >
            Explore More
          </button>
        </div>
      </div>
          {/* Testimonial Section */}
          <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-10">
              What Our Clients Say
            </h2>
            <div className="grid sm:grid-cols-2  gap-8">
              {/* Testimonial – FPL Group */}
              <div className="bg-[#EAE7DC] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <img
                  src="../public/assets/fbl.png"
                  alt="FPL Group"
                  className="w-40 h-40 rounded-full mb-4 border-4 border-white shadow bg-amber-100 p-2"
                />
                <p className="text-gray-600 italic mb-4">
                  "Partnering with Stallion Shelters for our office interiors
                  was a seamless experience. Their team understood our corporate
                  requirements and delivered a workspace that is both functional
                  and aesthetically pleasing. The attention to detail and timely
                  execution reflect their professionalism. Today, our employees
                  enjoy a modern, collaborative environment that truly aligns
                  with FPL Group’s culture."
                </p>
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  FPL Group
                </h4>
                <p className="text-sm text-gray-500">Corporate Client</p>
              </div>

              {/* Testimonial – Emirates Logistics */}
              <div className="bg-[#EAE7DC] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.6cg5jn2O5Xy-zMI9RMtuSAAAAA?pid=Api&P=0&h=180"
                  alt="Emirates Logistics"
                  className="w-40 h-40 rounded-full mb-4 border-4 border-white shadow p-2 bg-amber-50"
                />
                <p className="text-gray-600 italic mb-4">
                  "Stallion Shelters transformed our workspace into a smart,
                  efficient, and welcoming environment. From design to
                  execution, the process was handled with utmost expertise. The
                  interiors not only reflect our brand identity but also enhance
                  productivity across our teams. We appreciate their commitment
                  to quality and innovation, making Stallion Shelters our
                  trusted partner for interior solutions."
                </p>
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  Emirates Logistics
                </h4>
                <p className="text-sm text-gray-500">Corporate Client</p>
              </div>

              {/* Testimonial – Individual Client */}
             
            </div>
          </div>
        </section>
    </section>
  );
}
