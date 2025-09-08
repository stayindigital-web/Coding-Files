import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="bg-[#2C3E50] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/stallion shelters logo.jpg" // replace with your logo path
              alt="Stallion Shelters Logo"
              className="h-25 w-auto rounded-full"
            />
            <span className="text-white text-xl font-bold">
              Stallion Shelters
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Creating timeless interiors with elegance, comfort, and innovative
            design solutions tailored to your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#C19A6B]">Home</a></li>
            <li><a onClick={()=>navigate("/about")} className="hover:text-[#C19A6B] cursor-pointer">About Us</a></li>
            <li><a href="#services" className="hover:text-[#C19A6B] cursor-pointer">Services</a></li>
            <li><a href="#projects" className="hover:text-[#C19A6B]">Projects</a></li>
            <li><a href="#blog" className="hover:text-[#C19A6B]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[#C19A6B]">Contact</a></li>
          </ul>
        </div>

        {/* Address + Map */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-4">
            <i className="fa-solid fa-location-dot"></i> 7th Floor, Fathima Akthar Court, 453, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018<br />
            <i className="fa-solid fa-phone"></i> +91 9043977809 <br />
            <i className="fa-solid fa-envelope"></i> Contact@stallianshelters.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@STALLIONSHELTERS" target={"_blank"} className="hover:text-red-600 text-xl hover:scale-125 transform transition duration-500 "><i className="fa-brands fa-youtube fa-xl"></i></a>
            <a
  href="https://www.instagram.com/stallionshelters/"target={"_blank"} 
  className="text-xl hover:scale-125 transform transition duration-500 
             bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
             bg-clip-text text-transparent"
>
  <i className="fa-brands fa-instagram fa-xl"></i>
</a>

            <a href="https://www.facebook.com/profile.php?id=61559042123943" target={"_blank"}  className="hover:text-blue-600 text-xl hover:scale-125 transform transition duration-500"><i className="fa-brands fa-facebook fa-xl"></i></a>
            <a href="https://wa.me/919043977809" target={"_blank"}  className="hover:text-green-400 text-xl hover:scale-125 transform transition duration-500"><i className="fa-brands fa-whatsapp fa-xl"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Personally crafted by <a href="https://www.stayindigital.com/" className="text-orange-600 cursor-pointer font-semibold" target={"_blank"}>stay in digital</a>-every pixel tells a story. All rights reserved.
      </div>
    </footer>
  );
}
