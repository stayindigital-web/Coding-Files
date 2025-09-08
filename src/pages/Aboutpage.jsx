import Bg from "../../public/assets/IX4A0468.jpg";
import Rating from "../../public/assets/rating-stars.png";
import Ar from "../../public/assets/architect.png";
import Ar1 from "../../public/assets/urban-planning.png";
export default function Aboutpage() {
  return (
    <>
      <div>
        <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
          {/* Background Image */}
          <img
            src={Bg}
            alt="About Us Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Title */}
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </section>

        {/* Who We Are */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-lg">Stallion Shelters</span>,
            we specialize in creating elegant, modern, and functional interior
            spaces tailored to your lifestyle. With a passion for design and a
            commitment to quality, our team transforms houses into dream homes,
            and workspaces into inspiring environments.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
            <div className="p-8 bg-[#EAE7DC] rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To design and deliver spaces that seamlessly blend aesthetics,
                functionality, and comfort — creating timeless interiors that
                truly reflect our clients' personalities.
              </p>
            </div>
            <div className="p-8 bg-[#EAE7DC] rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become a leading interior design brand known for innovation,
                sustainability, and excellence in creating living and working
                spaces across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={Rating}
                className="h-30 mb-4 w-auto mx-auto hover:scale-105 transition duration-300"
                alt=""
              />
              <h4 className="text-xl font-semibold mb-2 text-[#C19A6B]">
                Expert Designers
              </h4>
              <p className="text-gray-600">
                Our talented team brings creativity and expertise to every
                project.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={Ar1}
                className="h-30 mb-4 w-auto mx-auto hover:scale-105 transition duration-300"
                alt=""
              />
              <h4 className="text-xl font-semibold mb-2 text-[#C19A6B]">
                Tailored Solutions
              </h4>
              <p className="text-gray-600">
                We design with your lifestyle, taste, and needs in mind.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src={Ar}
                className="h-30 mb-4 w-auto m-auto  hover:scale-105 transition duration-300"
                alt="ss"
              />
              <h4 className="text-xl font-semibold mb-2 text-[#C19A6B]">
                Sustainable Approach
              </h4>
              <p className="text-gray-600">
                We use eco-friendly practices and materials whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#EAE7DC] py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-10">
              Meet Our Team
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow p-6">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  Aisha Sharma
                </h4>
                <p className="text-sm text-gray-500">Lead Designer</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  Rohan Verma
                </h4>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold text-[#2C3E50]">
                  Meera Kapoor
                </h4>
                <p className="text-sm text-gray-500">Interior Stylist</p>
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
}
