
// import React, { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { FaRobot, FaChartLine, FaSchool, FaCheckCircle } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div data-scroll-container className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen text-gray-800 ">
//       <Navbar />
//       <div >
      
//         <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white text-center relative overflow-hidden px-4">
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-bounce drop-shadow-lg">EduStruct</h1>
//           <p className="text-lg md:text-2xl font-medium animate-slide-up max-w-2xl">
//             From Odd to Outstanding — One School at a Time.
//           </p>
//           <p className="mt-4 max-w-xl text-sm md:text-base text-gray-200">
//             Empowering rural and under-equipped schools with AI-driven assessments, actionable insights, and transparent reporting.
//           </p>
//         </section>

      
//         <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12">
//           <div className="max-w-6xl mx-auto px-4">
//             <img
//               src="/src/assets/image/ab.jpg"
//               alt="School Illustration"
//               data-scroll
//               data-scroll-speed="1.2"
//               className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </section>

       
//         <section className="bg-gradient-to-b from-purple-100 via-indigo-100 to-pink-100 py-20">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">🚀 What is EduStruct?</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10  backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105">
             
//               {[
//                 {
//                   icon: <FaRobot className="text-4xl text-blue-600 animate-pulse" />,
//                   title: "AI-Powered Classification",
//                   desc: "Smartly categorizes schools based on grade configuration and infrastructure norms."
//                 },
//                 {
//                   icon: <FaChartLine className="text-4xl text-green-600 animate-pulse" />,
//                   title: "Improvement Tracker",
//                   desc: "Real-time tracking of school upgrades and required changes."
//                 },
//                 {
//                   icon: <FaCheckCircle className="text-4xl text-purple-600 animate-pulse" />,
//                   title: "Tailored Suggestions",
//                   desc: "Actionable insights for improvement in academics, buildings, and facilities."
//                 },
//                 {
//                   icon: <FaSchool className="text-4xl text-orange-500 animate-pulse" />,
//                   title: "PDF Report Generator",
//                   desc: "Generate comprehensive school audit reports for official use."
//                 }
//               ].map((feature, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
//                 >
//                   {feature.icon}
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
//                     <p className="text-gray-700">{feature.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
         
//         </section>

      
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaRobot, 
  FaChartLine, 
  FaSchool, 
  FaCheckCircle, 
  FaArrowRight, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaLaptopCode 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });
    
    // Clean up locomotive scroll
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  
  useEffect(() => {
    // Animate elements on page load
    setIsLoaded(true);
    
    // Initialize AOS or other animation libraries here if needed
    
  }, []);

  return (
    <div data-scroll-container className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen text-gray-800 overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated Geometric Shapes */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500/20 animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-pink-500/20 animate-float-medium"></div>
            <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-purple-500/20 animate-float-fast"></div>
          </div>
        </div>
        
        <div data-scroll data-scroll-speed="0.3" className="z-10 px-4 max-w-4xl">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              EduStruct
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-3xl font-medium mb-4 text-purple-100">
              From Odd to Outstanding — One School at a Time.
            </p>
            <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-purple-100/80">
              Empowering rural and under-equipped schools with AI-driven assessments, actionable insights, and transparent reporting.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/login" className="px-8 py-3 bg-white text-purple-800 rounded-full font-bold text-lg transform transition-all hover:scale-105 hover:shadow-lg flex items-center">
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/impact" className="px-8 py-3 bg-transparent border-2 border-white/50 text-white rounded-full font-bold text-lg transform transition-all hover:bg-white/10 hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "250+", label: "Schools Transformed" },
              { number: "50,000+", label: "Students Impacted" },
              { number: "98%", label: "Improvement Rate" },
              { number: "24/7", label: "Support Access" }
            ].map((stat, i) => (
              <div 
                key={i} 
                data-scroll
                data-scroll-speed={0.1 * (i + 1)}
                className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Section with Parallax */}
      <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Transforming Education Infrastructure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our platform is revolutionizing educational facilities across rural areas.</p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/src/assets/image/ab.jpg"
                alt="School Transformation"
                data-scroll
                data-scroll-speed="0.5"
                className="w-full object-cover h-96 md:h-[500px] transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Real Results, Real Impact</h3>
                  <p className="text-white/80">Our technology has helped transform over 250 schools nationwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-purple-100 via-indigo-50 to-pink-100 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">How EduStruct Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our comprehensive platform provides end-to-end solutions for educational transformation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: <FaRobot className="text-4xl text-blue-600" />,
                title: "AI-Powered Classification",
                desc: "Our advanced algorithms intelligently categorize schools based on grade configuration and infrastructure norms, providing accurate baseline assessments."
              },
              {
                icon: <FaChartLine className="text-4xl text-green-600" />,
                title: "Real-time Progress Tracking",
                desc: "Monitor school upgrades and required changes with interactive dashboards that show improvement metrics in real-time."
              },
              {
                icon: <FaCheckCircle className="text-4xl text-purple-600" />,
                title: "Tailored Improvement Plans",
                desc: "Receive customized, actionable insights for improvement in academics, buildings, facilities, and administrative processes."
              },
              {
                icon: <FaSchool className="text-4xl text-orange-500" />,
                title: "Comprehensive Reporting",
                desc: "Generate detailed school audit reports for stakeholders, government officials, and funding organizations with our one-click PDF generator."
              }
            ].map((feature, i) => (
              <div
                key={i}
                data-scroll
                data-scroll-speed={0.1}
                className="flex flex-col sm:flex-row items-start gap-6 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] group"
              >
                <div className="p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A systematic process that drives meaningful change in educational infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-4xl text-blue-600" />,
                title: "Assessment",
                desc: "We begin with a thorough analysis of existing infrastructure, facilities, and educational resources."
              },
              {
                icon: <FaChalkboardTeacher className="text-4xl text-purple-600" />,
                title: "Strategy",
                desc: "Our AI develops customized improvement strategies based on data-driven insights and best practices."
              },
              {
                icon: <FaUserGraduate className="text-4xl text-pink-600" />,
                title: "Implementation",
                desc: "We guide schools through prioritized changes that maximize impact while minimizing disruption."
              }
            ].map((step, i) => (
              <div
                key={i}
                data-scroll
                data-scroll-speed={0.15}
                className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute -top-6 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">{i + 1}</div>
                <div className="mb-6 p-6 bg-white rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of schools already benefiting from our cutting-edge educational infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg transform transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center">
              Request a Demo <FaArrowRight className="ml-2" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg transform transition-all hover:bg-white/10 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
      
      <Footer/>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
        
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, 20px) scale(1); }
          75% { transform: translate(-20px, -20px) scale(0.9); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s infinite ease-in-out;
        }
        
        .animate-float-medium {
          animation: float-medium 6s infinite ease-in-out;
        }
        
        .animate-float-fast {
          animation: float-fast 4s infinite ease-in-out;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite ease-in-out;
        }
        
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;