
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaStar, FaExclamationCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const SuperAdminDashboard = () => {
    const { allSchools  } = useSelector((state) => state.school);
    const { allUsers  } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 top-[-50px] left-[-100px] blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full opacity-20 bottom-[-100px] right-[-80px] blur-3xl animate-ping"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-22 px-10 text-center overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Super Admin Dashboard</h1>
          <p className="text-xl">Monitor, Analyze, and Improve the Education System Effectively.</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto p-8">

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Each Stat Card */}
          {[
            { title: 'Total Schools', value: allSchools.length, color: 'text-blue-600' },
            { title: 'Total Users', value: allUsers.length, color: 'text-green-600' },
           // { title: 'Reports Generated', value: '56', color: 'text-orange-500' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center cursor-pointer"
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold text-gray-700">{stat.title}</h3>
              <p className={`text-4xl font-bold mt-4 ${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* New Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* AI Analysis Summary */}
          <motion.div 
            className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <FaChartPie className="text-3xl text-indigo-600 mr-3" />
              <h4 className="text-2xl font-semibold text-gray-800">AI Analysis Summary</h4>
            </div>
            <p className="text-gray-600 mt-2">✔ 70% Fully Equipped Schools</p>
            <p className="text-gray-600 mt-1">⚠ 30% Schools Need Improvement</p>
          </motion.div>

          {/* Top Performing Schools */}
          <motion.div 
            className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#fef9c3" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <FaStar className="text-3xl text-yellow-500 mr-3" />
              <h4 className="text-2xl font-semibold text-gray-800">Top Performing Schools</h4>
            </div>
            <ul className="text-gray-600 mt-2 space-y-2">
                {allSchools.map((school, index) => (
                    index < 4 && (
                    <li key={index}>🏫 {school.name}</li>
                    )
                ))}
             
            </ul>
          </motion.div>

          {/* Important Updates */}
          <motion.div 
            className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#fee2e2" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <FaExclamationCircle className="text-3xl text-red-500 mr-3" />
              <h4 className="text-2xl font-semibold text-gray-800">Important Updates</h4>
            </div>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>📢 New Education Policy 2025 Released</li>
              <li>📢 Funding Round Q3 Now Open</li>
              <li>📢 Training Webinar: 2nd May 2025</li>
            </ul>
          </motion.div>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuperAdminDashboard;
