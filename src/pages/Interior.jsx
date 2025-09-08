
import React from 'react';
import {useNavigate } from 'react-router-dom';
import Int from '../../public/assets/IX4A0389.JPG'

function Interior() {
  const navigate = useNavigate();
    return (


<div className="bg-white min-h-screen">

  {/* Hero Section */}
  <div className="relative w-full h-72 md:h-96">
    <img
      src={"../../public/assets/IX4A0389.JPG" }
        alt="Interior Design Banner"
      className="w-full h-full object-cover"
    />
    
    
    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center responsive-text responsive-padding responsive-margin ">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 drop-shadow-lg">
        Interior Design Services
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-800 drop-shadow-lg max-w-2xl">
        by Stallion shelters Interior Decorators — best interior design solutions in
         Chennai
      </p>
      </div>
      </div>
    
  
  

             

      <div className="bg-white min-h-screen flex items-center justify-center px-6 py-12">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side Image */}
    <div className="flex justify-center">
      <img
         src="../../public/assets/IX4A0401.JPG"
          alt="Interior Design"
        className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-green-200 hover:scale-105 transform transition duration-300"/>
    </div>

    {/* Right Side Content */}
    <div>
      <h2 className="text-3xl font-bold text-orange-500 mb-4">
        Interior Design Services
      </h2>
      <p className="text-gray-700 p-10px m-10px mb-6 leading-relaxed">
        At Stallion shelters, we transform your ideas into reality. 
        From modern living rooms to functional modular kitchens, our designs 
        are tailored to your lifestyle and preferences. Interior design is the art and science
         of improving a building's interior to create a healthier, functional, and aesthetically
          pleasing environment for occupants. It encompasses conceptual development, space planning,
           and the careful selection and integration of elements like color, lighting, furniture,
            and materials to meet specific needs, user well-being, safety, and the overarching 
            architectural context. A professional interior designer manages the entire process,
             from research and planning to coordinating with stakeholders and executing the design
              to produce functional, sustainable, and beautiful spaces tailored to diverse applications, 
              including residential, commercial, and hospitality sectors
      </p>
     
      <button onClick={()=>{navigate("/contact")}} className="mt-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange transition">
        Contact Us
      </button>
    </div>
      </div>
    </div>

 {/* --- Cards Section --- */}
      <div className="bg-gray-50 py-16 px-6">
        

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            
            <img
             src="../../public/assets/IX4A0389.jpg" alt="Modular Kitchen" />
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
           <img 
           src="../../public/assets/IX4A0371.jpg" alt="Living Room Design  " />
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="../../public/assets/IX4A0367.jpg" alt="Office Interiors" />
          </div>
        </div>
      </div>
    </div>
  );
}





     

export default Interior;