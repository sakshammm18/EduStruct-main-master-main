
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBrain, FaMapMarkedAlt, FaClipboardList, FaChartLine, FaPhoneAlt } from 'react-icons/fa';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const OfficerAdminDashboard = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col relative overflow-hidden">
//       {/* Background Floating Circles */}
//       <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 top-[-50px] left-[-100px] blur-3xl animate-pulse"></div>
//       <div className="absolute w-72 h-72 bg-purple-400 rounded-full opacity-20 bottom-[-100px] right-[-80px] blur-3xl animate-ping"></div>

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-8 text-center overflow-hidden">
//         <motion.div 
//           className="max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl font-bold mb-4">Officer Admin Panel</h1>
//           <p className="text-xl mb-8">
//             Analyze, Monitor, and Elevate Government Schools through Smart AI Insights and Mapping.
//           </p>
//           {/* Placeholder for Hero Image */}
//           <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg">
//             <span className="text-2xl font-semibold text-white/80"><img src='/src/assets/image/class.webp' alt="Hero" className='h-64 w-210 object-cover' /></span>
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-8 bg-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             className="text-4xl font-bold text-center text-gray-800 mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Core Features for Smart Governance
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Feature Cards */}
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <feature.icon className="text-6xl text-indigo-500 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
//                 <p className="text-gray-700 text-lg">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// // Feature Details
// const features = [
//   {
//     title: "AI Analysis",
//     description: "Leverage AI models to deeply analyze school infrastructure, teacher-student ratios, and readiness for funding approvals.",
//     icon: FaBrain,
//   },
//   {
//     title: "View Map",
//     description: "Interactive map to locate, filter, and monitor schools visually across different districts with color-coded statuses.",
//     icon: FaMapMarkedAlt,
//   },
//   {
//     title: "Classification Form",
//     description: "Classify schools into categories (Fully Furnished, Needs Improvement, Odd Schools) by filling AI-driven smart forms.",
//     icon: FaClipboardList,
//   },
//   {
//     title: "Improvement Tracker",
//     description: "Track real-time improvement metrics, renovation status, facility upgradations, and generate yearly progress reports.",
//     icon: FaChartLine,
//   },
//   {
//     title: "Contact Us",
//     description: "Directly send queries, reports, or issue tickets to governing bodies, district officers, or school principals.",
//     icon: FaPhoneAlt,
//   },
// ];

// export default OfficerAdminDashboard;
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaMapMarkedAlt, FaClipboardList, FaChartLine, FaPhoneAlt, FaHome, FaSchool, FaChartBar, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfficerAdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Floating Circles */}
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 top-[-50px] left-[-100px] blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full opacity-20 bottom-[-100px] right-[-80px] blur-3xl animate-ping"></div>

      {/* Navbar */}
      <Navbar>
        <nav className="flex items-center justify-center space-x-10 text-lg font-semibold text-white mt-4">
          <NavItem icon={FaHome} label="Home" />
          <NavItem icon={FaSchool} label="Schools" />
          <NavItem icon={FaChartBar} label="Analytics" />
          <NavItem icon={FaEnvelope} label="Contact" />
        </nav>
      </Navbar>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 via-purple-700 text-white py-24 px-8 text-center overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Officer Admin Panel</h1>
          <p className="text-xl mb-8">
            Analyze, Monitor, and Elevate Government Schools through Smart AI Insights and Mapping.
          </p>
          {/* Hero Image */}
          <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg">
            <img src="/src/assets/image/class.webp" alt="Hero" className="h-64 w-210 object-cover rounded-2xl" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-100 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Core Features for Smart Governance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <feature.icon className="text-6xl text-indigo-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Performance Analytics */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📊 School Performance Analytics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Analytics Cards */}
            {analytics.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-indigo-100 to-purple-200 p-8 rounded-2xl shadow-2xl text-center hover:scale-105 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-indigo-600 mb-4">{item.percentage}%</p>
                <h3 className="text-xl font-semibold text-gray-700">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Feature Details
const features = [
  {
    title: "AI Analysis",
    description: "Leverage AI models to deeply analyze school infrastructure, teacher-student ratios, and readiness for funding approvals.",
    icon: FaBrain,
  },
  {
    title: "View Map",
    description: "Interactive map to locate, filter, and monitor schools visually across different districts with color-coded statuses.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Classification Form",
    description: "Classify schools into categories (Fully Furnished, Needs Improvement, Odd Schools) by filling AI-driven smart forms.",
    icon: FaClipboardList,
  },
  {
    title: "Improvement Tracker",
    description: "Track real-time improvement metrics, renovation status, facility upgradations, and generate yearly progress reports.",
    icon: FaChartLine,
  },
  {
    title: "Contact Us",
    description: "Directly send queries, reports, or issue tickets to governing bodies, district officers, or school principals.",
    icon: FaPhoneAlt,
  },
];

// Analytics Details
const analytics = [
  { label: 'Fully Equipped Schools', percentage: 65 },
  { label: 'Schools Needing Attention', percentage: 25 },
  { label: 'Pending Inspections', percentage: 10 },
];

// Nav Item Component
const NavItem = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-2 hover:text-indigo-300 transition-colors cursor-pointer">
    <Icon className="text-xl" />
    <span>{label}</span>
  </div>
);

export default OfficerAdminDashboard;
