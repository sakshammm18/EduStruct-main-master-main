// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import Navbar from './Navbar';
// import Footer from './Footer';
// const SchoolInformation = () => {
//   const [school, setSchool] = useState({
//     name: '',
//     grades: '',
//     classes: '',
//     status: '',
//     infrastructure: {
//       toilets: false,
//       library: false,
//       playground: false,
//       boundaryWall: false,
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSchool({ ...school, [name]: value });
//   };

//   const handleInfraChange = (e) => {
//     const { name, checked } = e.target;
//     setSchool({
//       ...school,
//       infrastructure: { ...school.infrastructure, [name]: checked },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('School data to submit:', school);
//     // Connect to backend API later here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         <Navbar />
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
//           <FaPlus className="mr-2" /> Add New School
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">School Name</label>
//             <input
//               type="text"
//               name="name"
//               value={school.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Grades Offered</label>
//             <input
//               type="text"
//               name="grades"
//               value={school.grades}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Number of Classes</label>
//             <input
//               type="number"
//               name="classes"
//               value={school.classes}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Status</label>
//             <select
//               name="status"
//               value={school.status}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-white focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="">Select status</option>
//               <option value="Fully Furnished">Fully Furnished</option>
//               <option value="Partially Furnished">Partially Furnished</option>
//               <option value="Needs Improvement">Needs Improvement</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Infrastructure</label>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.keys(school.infrastructure).map((item) => (
//                 <label key={item} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name={item}
//                     checked={school.infrastructure[item]}
//                     onChange={handleInfraChange}
//                     className="mr-2"
//                   />
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit School
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SchoolInformation;
import React, { useState } from 'react';
import { FaPlus, FaSchool, FaChalkboardTeacher, FaClipboardCheck, FaCogs } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { setLoading, setSchools } from '../redux/school';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
    const SchoolInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [school, setSchool] = useState({
    name: '',
    grades: '',
    classes: '',
    status: '',
    infrastructure: {
      toilets: false,
      library: false,
      playground: false,
      boundarywall: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  };

  const handleInfraChange = (e) => {
    const { name, checked } = e.target;
    setSchool({
      ...school,
      infrastructure: { ...school.infrastructure, [name]: checked },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log('School data to submit:', school);
    try {
        dispatch(setLoading(true));
        const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/school/create`,
  school,
  {
    headers: { 'Content-Type': "application/json" },
    withCredentials: true,
  }
);

        console.log(res);
        if (res.data.success) {
            dispatch(setSchools(res.data.school));
          navigate("/school-admin/view-school");
          toast.success("School added successfully");
        }
      } catch (error) {
        console.log(error);
        toast.error("School addition failed");
      }
      dispatch(setLoading(false));
    // Connect to backend API later here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute w-72 h-72 bg-indigo-300 rounded-full top-[-60px] left-[-60px] blur-3xl opacity-20 animate-ping"></div>
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full bottom-[-80px] right-[-80px] blur-3xl opacity-20 animate-pulse"></div>

      <Navbar />

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 mt-10 mb-20 rounded-3xl shadow-2xl relative z-10">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 flex items-center">
          <FaPlus className="mr-3 text-indigo-500 text-4xl" /> Add New School Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
          {/* School Name */}
          <div>
            <label className="block text-base font-medium mb-1 flex items-center">
              <FaSchool className="mr-2 text-indigo-500" /> School Name
            </label>
            <input
              type="text"
              name="name"
              value={school.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Delhi Public School, R.K. Puram"
            />
          </div>

          {/* Grades Offered */}
          <div>
            <label className="block text-base font-medium mb-1 flex items-center">
              <FaChalkboardTeacher className="mr-2 text-indigo-500" /> Grades Offered
            </label>
            <input
              type="text"
              name="grades"
              value={school.grades}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 1–12"
            />
          </div>

          {/* Number of Classes */}
          <div>
            <label className="block text-base font-medium mb-1 flex items-center">
              <FaClipboardCheck className="mr-2 text-indigo-500" /> Number of Classes
            </label>
            <input
              type="number"
              name="classes"
              value={school.classes}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 20"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-base font-medium mb-1 flex items-center">
              <FaCogs className="mr-2 text-indigo-500" /> Status
            </label>
            <select
              name="status"
              value={school.status}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select status</option>
              <option value="Fully Furnished">Fully Furnished</option>
              <option value="Partially Furnished">Partially Furnished</option>
              <option value="Needs Improvement">Needs Improvement</option>
            </select>
          </div>

          {/* Infrastructure Checkboxes */}
          <div>
            <label className="block text-base font-medium mb-2 text-indigo-700">Infrastructure Provided</label>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(school.infrastructure).map((item) => (
                <label key={item} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    name={item}
                    checked={school.infrastructure[item]}
                    onChange={handleInfraChange}
                    className="mr-2 accent-indigo-600"
                  />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 transition duration-300 font-semibold shadow-lg hover:scale-105 cursor-pointer"
            >
              Submit School
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SchoolInformation;
