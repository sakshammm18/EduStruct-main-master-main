// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// const PrivateSchoolAdminDashboard = () => {
//   return (
//     <div>
//         <Navbar/>
//     <div className="p-5">
//       <h1 className="text-3xl font-bold">Private School Admin Dashboard</h1>
//       <p className="mt-2 text-gray-600">Manage your school profile and update facilities.</p>
//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default PrivateSchoolAdminDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { View } from 'lucide-react';

const PrivateSchoolAdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Floating Shapes */}
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full opacity-20 top-[-100px] left-[-100px] blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-400 rounded-full opacity-20 bottom-[-100px] right-[-80px] blur-3xl animate-ping"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-20 px-8 text-center overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Private School Admin Dashboard</h1>
          <p className="text-xl mb-6">
  Add your school, review performance insights, and unlock badges for outstanding educational standards.
</p>

          {/* Hero Image */}
          <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg">
            <img src="/src/assets/image/private.webp" alt="School Hero" className="h-64 w-180 object-cover rounded-xl" />
          </div>
        </motion.div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Dashboard Sections
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Section 1 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaSchool className="text-6xl text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center mb-4">School Information</h3>
              <p className="text-gray-600 text-center mb-4">
                Add new schools, update existing details, or remove outdated records easily.
              </p>
              <Link to="/school-admin/school-information" className="block text-center mt-4 text-pink-600 font-bold hover:underline">
                Manage Schools
              </Link>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <View className="text-6xl text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center mb-4">View School</h3>
              <p className="text-gray-600 text-center mb-4">
                View all the schools added by the Private School Admin.
              </p>
              <Link to="/school-admin/view-school" className="block text-center mt-4 text-pink-600 font-bold hover:underline">
                View School
              </Link>
            </motion.div>
            {/* Section 2 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaClipboardList className="text-6xl text-indigo-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center mb-4">Review Classification</h3>
              <p className="text-gray-600 text-center mb-4">
                Check AI-based reviews about your school's infrastructure and readiness.
              </p>
              <Link to="/school-admin/review-classification" className="block text-center mt-4 text-indigo-600 font-bold hover:underline">
                View Reviews
              </Link>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-6xl text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center mb-4">Contact Us</h3>
              <p className="text-gray-600 text-center mb-4">
                Directly connect with the Super Admin for queries, escalations, or support.
              </p>
              <Link to="/school-admin/contact" className="block text-center mt-4 text-green-600 font-bold hover:underline">
                Contact Super Admin
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivateSchoolAdminDashboard;
