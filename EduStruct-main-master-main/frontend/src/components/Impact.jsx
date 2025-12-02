
import React from "react";
import { FaUniversity, FaCogs, FaHandsHelping } from "react-icons/fa"; // Importing icons for more visual appeal
import Navbar from "./Navbar";  
import Footer from "./Footer"; 
import { BookOpenCheck, Flag, Globe } from "lucide-react";

const Impact = () => {
  return (
    <div>
      <Navbar />
      
      {/* About EduStruct Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 py-16 px-6 text-white">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border-l-4 border-blue-600">
          <div className="flex items-center gap-4 mb-4">
            <Flag className="text-blue-600" size={32} />
            <h2 className="text-2xl font-semibold text-gray-800">Samagra Shiksha Abhiyan</h2>
          </div>
          <p className="text-gray-700 text-lg mb-2">
            <strong>EduStruct bridges the gap between policy and practice</strong> by standardizing irregular school structures, making education delivery smarter, leaner, and more equitable.
          </p>
          <p className="text-gray-700 text-md italic">
            This problem statement is issued by the <strong>Ministry of Education, India</strong> under <strong>Smart India Hackathon</strong> and aligns with <strong>SDG-4: Quality Education</strong>.
          </p>
          <div className="flex items-center gap-6 mt-4">
            <BookOpenCheck className="text-green-600" size={28} title="Quality Education" />
            <Globe className="text-purple-600" size={28} title="Global Goals" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About EduStruct</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            EduStruct is a revolutionary AI-powered platform that aims to transform the educational landscape across rural and under-equipped schools in India.
            By leveraging real-time data, our platform helps classify schools based on infrastructure, grade configurations, and available resources. This enables data-driven decisions that lead to more equitable resource distribution, streamlined funding processes, and faster implementation of educational reforms.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our mission is to bridge the gap between educational equity and infrastructure, ensuring every school—no matter its location—has access to the resources necessary for fostering a bright future for all students.
          </p>
       
          {/* Images with Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img
                src="/src/assets/image/class.webp" // Sample image link; replace with your image path
                alt="School Assessment"
                className="w-full h-[270px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Classification</h3>
              <p className="text-gray-700">
                Our system utilizes advanced AI to analyze and categorize schools, helping identify gaps and enabling targeted interventions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img
                src="/src/assets/image/class2.jpg" // Sample image link; replace with your image path
                alt="Resource Distribution"
                className="w-full h-[270px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Targeted Resource Distribution</h3>
              <p className="text-gray-700">
                By accurately classifying schools, EduStruct ensures that resources are allocated where they are needed most, ensuring fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Impact</h2>
          <p className="text-gray-700 text-lg mb-12">
            EduStruct is transforming how schools are classified and supported. Our system empowers decision-makers with real-time insights, enables equitable funding, and supports nationwide standardization aligned with Samagra Shiksha.
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="text-blue-600 mb-3">
                <FaUniversity size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">145,012+ Schools Analyzed</h3>
              <p className="text-gray-600">
                Schools across India classified using AI-powered analysis for optimized planning and support.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="text-green-600 mb-3">
                <FaCogs size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resource Equity Improved</h3>
              <p className="text-gray-600">
                State-wise dynamic resource allocation based on real-time school needs and classification.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="text-purple-600 mb-3">
                <FaHandsHelping size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">30% Faster Policy Implementation</h3>
              <p className="text-gray-600">
                Officials can now act quicker and smarter using our progress dashboards and reports.
              </p>
            </div>
          </div>

          {/* Testimonials or Quote */}
          <div className="mt-20 max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-600 pl-4">
              "EduStruct is a game-changer for school classification and resource distribution. It brings transparency,
              accountability, and direction to the heart of educational reform." <br />
              <span className="block mt-4 text-right text-sm font-semibold text-blue-800">
                — Education Officer, West Bengal
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
