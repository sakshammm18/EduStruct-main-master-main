
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import {  NavLink } from 'react-router-dom';
// import { FaSchool, FaUsers, FaChartLine, FaFileAlt, FaSearch, FaMapMarkedAlt, FaEnvelope, FaMoneyBill, FaInfo, FaUserTie, FaChartPie, FaStar } from 'react-icons/fa';
// import { setUser } from "../redux/authSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // Add state to track mobile menu visibility
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const activeStyle = "bg-gray-700 text-white";
//   const inactiveStyle = "text-gray-300 hover:bg-gray-700 hover:text-white";

//   // Function to check if a link is active
//   const isActive = (path) => {
//     return location.pathname === path;
//   };
//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/user/logout", {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         toast.success("Logout successful");
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Logout failed");
//     }
//   };

//   const user = useSelector((state) => state.auth.user);

//   return (
//     <nav className="bg-gray-800 sticky top-0 z-50">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               {/* Show different icons based on menu state */}
//               <svg
//                 className={`${isMobileMenuOpen ? 'hidden' : 'block'} size-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//                 data-slot="icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <svg
//                 className={`${isMobileMenuOpen ? 'block' : 'hidden'} size-6`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//                 data-slot="icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18 18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               {
//                 user ? (
//                   user.role === "SuperAdmin" ? (
//                     <div className="flex items-center">
//                     <Link to="/super-admin/dashboard" className="text-1.5xl font-bold">
//                       <span className="text-yellow-500">EduStruct</span> <span className="text-white">Admin</span>
//                     </Link>
//                   </div>
//                   ) : user.role === "OfficerAdmin" ?   (
//                     <Link to="/officer-admin/dashboard" className="text-1.5xl font-bold">
//                       <span className="text-yellow-500">EduStruct</span> <span className="text-white">Officer Admin</span>
//                     </Link>
//                   ) : user.role === "PrivateSchoolAdmin" ? (
//                     <Link to="/school-admin/dashboard" className="text-1.5xl font-bold">
//                       <span className="text-yellow-500">EduStruct</span> <span className="text-white">School Admin</span>
//                     </Link>
//                   ) : (
//                     <Link to="/">
//                       <h1 className="text-2xl font-bold text-white">EduStruct</h1>
//                     </Link>
//                   )
//                 ):
//                 (
//                   <Link to="/">
//                     <h1 className="text-2xl font-bold text-white">EduStruct</h1>
//                   </Link>
//                 )
//               }
             
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {/* Navbar links based on user role */}
//                 {user ? (
//                   <>
//                     {/* Common Links */}
                   

//                     {/* Role-Based Links */}
//                     {user.role === "SuperAdmin" && (
//                       <>
                       
//                        <div className="flex space-x-6">
//             <NavLink 
        
//               to="/super-admin/schools"
//               activeClassName="bg-gray-700"
//               className={({ isActive }) =>
//                 `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                   isActive
//                     ? "bg-gray-700 text-white scale-105"  // Active styles
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//                 }`
//               }
//             //  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               <FaSchool className="inline-block mr-2" /> Manage Schools
//             </NavLink>

//             <NavLink
//               to="/super-admin/view-schools"
//               activeClassName="bg-gray-700"
//               className={({ isActive }) =>
//                 `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                   isActive
//                     ? "bg-gray-700 text-white scale-105"  // Active styles
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//                 }`
//               }
//              // className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               <FaFileAlt className="inline-block mr-2" /> View Schools
//             </NavLink>
//             <NavLink
//               to="/super-admin/users"
//               activeClassName="bg-gray-700"
//               className={({ isActive }) =>
//                 `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                   isActive
//                     ? "bg-gray-700 text-white scale-105"  // Active styles
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//                 }`
//               }
//               //className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               <FaUsers className="inline-block mr-2" /> Manage Users
//             </NavLink>
//             <NavLink
//                  to="/super-admin/reviews"
//                  className={({ isActive }) =>
//                   `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                     isActive
//                       ? "bg-gray-700 text-white scale-105"  // Active styles
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//                   }`
//                 }
//                 // className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300"
//                >
//                  <FaStar className="inline-block mr-2 mb-1" />
//                   Manage Reviews
//                </NavLink>
//             <NavLink
//               to="/super-admin/reports"
//               activeClassName="bg-gray-700"
//               className={({ isActive }) =>
//                 `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//                   isActive
//                     ? "bg-gray-700 text-white scale-105"  // Active styles
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//                 }`
//               }
//              // className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               <FaChartLine className="inline-block mr-2" /> Reports
//             </NavLink>

//           </div>
                       
//                       </>
//                     )}

//                     {user.role === "OfficerAdmin" && (
//                       <>
                       
//                        <NavLink
//                           to="/officer-admin/classification-form"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaFileAlt className="inline-block mr-2" />
//                           Classification Form
//                         </NavLink>
//                         <NavLink
//                           to="/officer-admin/improvement-tracker"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaChartLine className="inline-block mr-2" />
//                           Improvement Tracker
//                         </NavLink>
//                         <NavLink
//                           to="/officer-admin/ai-analysis"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaChartLine className="inline-block mr-2" />
//                           Ai Analysis
//                         </NavLink>
//                         <NavLink
//                           to="/officer-admin/schools-map"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaMapMarkedAlt className="inline-block mr-2" />
//                           View Map
//                         </NavLink>
//                         <NavLink
//                           to="/officer-admin/contact"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaEnvelope className="inline-block mr-2" />
//                           Contact Us
//                         </NavLink>
                       
                       
//                       </>
//                     )}

//                     {user.role === "PrivateSchoolAdmin" && (
//                       <>
                      
//                         <NavLink
//                           to="/school-admin/school-information"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaSchool className="inline-block mr-2" />
//                           School Information
//                         </NavLink>
//                         <NavLink
//                           to="/school-admin/view-school"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaSchool className="inline-block mr-2" />
//                           View School
//                         </NavLink>
//                         <NavLink
//                           to="/school-admin/review-classification"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaFileAlt className="inline-block mr-2" />
//                           Review Classification
//                         </NavLink>
//                         <NavLink
//                           to="/school-admin/contact"
//                           className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                         >
//                           <FaEnvelope className="inline-block mr-2" />
//                           Contact Us
//                         </NavLink>
//                       </>
//                     )}

//                     {user.role === "GeneralPublic" && (
//                       <>
//                     <NavLink
//                       to="/compare"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
                      

//                    //   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300"
//                     >
//                       <FaChartLine className="inline-block mr-2" />
//                       Compare Schools
//                     </NavLink>
//                     <NavLink
//                       to="/view-schools"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                     >
//                       <FaSchool className="inline-block mr-2" />
//                       View Schools
//                     </NavLink>
//                     <NavLink
//               to="/solution"
//               className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//             >
//               <FaChartLine className="inline-block mr-2" />
//               Solution
//             </NavLink>
//                     <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//             >
//               <FaEnvelope className="inline-block mr-2" />
//               Contact Us
//             </NavLink>
           
       
//                       </>
//                     )}
//                   </>
//                 ) : (
//                   <>
//                     {/* Links for non-logged-in users */}
//                     <NavLink
//                       to="/impact"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                     >
//                       <FaInfo className="inline-block mb-1 mr-1" />
//                       About Us
//                     </NavLink>
                   
//                     <NavLink
//                       to="/compare"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                     >
//                       <FaChartLine className="inline-block mr-2" />
//                       Compare Schools
//                     </NavLink>
//                     <NavLink
//                       to="/view-schools"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                     >
//                       <FaSchool className="inline-block mr-2" />
//                       View Schools
//                     </NavLink>
                   
//                     <NavLink
//                       to="/solution"
//                       className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//               }
//                     >
//                       <FaChartLine className="inline-block mr-2" />
//                       Solution
//                     </NavLink>
                 
//                     <NavLink
//   to="/contact"
//   className={({ isActive }) =>
//     `rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
//       isActive
//         ? "bg-gray-700 text-white scale-105"  // Active styles
//         : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
//     }`
//   }
// >
//   <FaEnvelope className="inline-block mr-2" />
//   Contact Us
// </NavLink>
                    
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             {user ? (
//               <div className="flex items-center justify-center gap-2">
//                 <p className="text-red-500 font-bold">👋 {user.fullname}</p>
//                 <button className="border-2 border-red-500 rounded-full p-1 text-xl">
//                   <FiLogOut
//                     className="text-white cursor-pointer"
//                     onClick={logoutHandler}
//                   />
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <a href="/login">
//                   <button
//                     variant="outline"
//                     className="hover:text-[#a63030] text-white cursor-pointer border-1 border-white px-2 py-1 bg-transparent rounded-md hover:scale-105 transition-all duration-300"
//                   >
//                     Login
//                   </button>
//                 </a>
//                 <a href="/signup">
//                   <button className="hover:text-[#a63030] text-white cursor-pointer border-1 border-white py-1 px-1 rounded-md bg-transparent hover:scale-105 transition-all duration-300">
//                     Signup
//                   </button>
//                 </a>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu - Display based on state */}
//       <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {user ? (
//             <>
//               {/* Role-Based Links for Mobile */}
//               {user.role === "SuperAdmin" && (
//                <>
//                  <Link
//                    to="/super-admin/schools"
//                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                    onClick={toggleMobileMenu}
//                  >
//                    <FaSchool className="inline-block mr-2" />
//                    Manage Schools
//                  </Link>
//                  <Link
//                    to="/super-admin/view-schools"
//                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                    onClick={toggleMobileMenu}
//                  >
//                    <FaFileAlt className="inline-block mr-2" />
//                    View Schools
//                  </Link>
//                  <Link
//                    to="/super-admin/users"
//                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                    onClick={toggleMobileMenu}
//                  >
//                    <FaUsers className="inline-block mr-2" />
//                     Manage Users
//                  </Link>
//                  <Link
//                    to="/super-admin/reviews"
//                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                    onClick={toggleMobileMenu}
//                  >
//                    <FaStar className="inline-block mr-2" />
//                     Manage Reviews
//                  </Link>
//                  <Link
//                    to="/super-admin/reports"
//                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                    onClick={toggleMobileMenu}
//                  >
//                    <FaChartLine className="inline-block mr-2" />
//                     Reports
//                  </Link>
//                </>
//               )}

//               {user.role === "OfficerAdmin" && (
//                 <>
//                   <Link
//                     to="/officer-admin/classification-form"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaFileAlt className="inline-block mr-2" />
//                     Classification Form
//                   </Link>
//                   <Link
//                     to="/officer-admin/improvement-tracker"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaChartLine className="inline-block mr-2" />
//                     Improvement Tracker
//                   </Link>
//                   <Link
//                     to="/officer-admin/ai-analysis"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaChartLine className="inline-block mr-2" />
//                     Ai Analysis
//                   </Link>
//                   <Link
//                     to="/officer-admin/schools-map"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaMapMarkedAlt className="inline-block mr-2" />
//                     View Map
//                   </Link>
//                   <Link
//                     to="/officer-admin/contact"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaEnvelope className="inline-block mr-2" />
//                     Contact Us
//                   </Link>
//                 </>
//               )}

//               {user.role === "PrivateSchoolAdmin" && (
//                 <>
//                   <Link
//                     to="/school-admin/school-information"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaSchool className="inline-block mr-2" />
//                     School Information
//                   </Link>
//                   <Link
//                     to="/school-admin/view-school"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaSchool className="inline-block mr-2" />
//                     View School
//                   </Link>
//                   <Link
//                     to="/school-admin/review-classification"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaFileAlt className="inline-block mr-2" />
//                     Review Classification
//                   </Link>
//                   <Link
//                     to="/school-admin/contact"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaEnvelope className="inline-block mr-2" />
//                     Contact Us
//                   </Link>
//                 </>
//               )}

//               {user.role === "GeneralPublic" && (
//                 <>
//                   <Link
//                     to="/compare"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaChartLine className="inline-block mr-2" />
//                     Compare Schools
//                   </Link>
//                   <Link
//                     to="/view-schools"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaSchool className="inline-block mr-2" />
//                     View Schools
//                   </Link>
//                   <Link
//                     to="/solution"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaChartLine className="inline-block mr-2" />
//                     Solution
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FaEnvelope className="inline-block mr-2" />
//                     Contact Us
//                   </Link>
                 
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               {/* Links for non-logged-in users */}
//               <Link
//                 to="/impact"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 onClick={toggleMobileMenu}
//               >
//                 <FaInfo className="inline-block mr-1" />
//                 About Us
//               </Link>
//               <Link
//                 to="/compare"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 onClick={toggleMobileMenu}
//               >
//                 <FaChartLine className="inline-block mr-2" />
//                 Compare Schools
//               </Link>
//               <Link
//                 to="/view-schools"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 onClick={toggleMobileMenu}
//               >
//                 <FaSchool className="inline-block mr-2" />
//                 View Schools
//               </Link>
//               <Link
//                 to="/solution"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 onClick={toggleMobileMenu}
//               >
//                 <FaChartLine className="inline-block mr-2" />
//                 Solution
//               </Link>
//               <Link
//                 to="/contact"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                 onClick={toggleMobileMenu}
//               >
//                 <FaEnvelope className="inline-block mr-2" />
//                 Contact Us
//               </Link>
            
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { setUser } from "../redux/authSlice";
// import { toast } from "react-toastify";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaSchool, 
//   FaUsers, 
//   FaChartLine, 
//   FaFileAlt, 
//   FaSearch, 
//   FaMapMarkedAlt, 
//   FaEnvelope, 
//   FaInfo, 
//   FaUserTie, 
//   FaStar,
//   FaLightbulb,
//   FaUserShield,
//   FaChalkboardTeacher
// } from 'react-icons/fa';
// import { 
//   FiLogOut, 
//   FiMenu, 
//   FiX,
//   FiChevronDown
// } from "react-icons/fi";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = useSelector((state) => state.auth.user);
  
//   // States
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
//  // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//    const isActive = (path) => {
//     return location.pathname === path;
//   };
//   // Close mobile menu when location changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setProfileMenuOpen(false);
//   }, [location]);

//   // Toggle functions
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

//   // Logout handler
//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/user/logout", {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         toast.success("Logout successful");
//         navigate("/");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Logout failed");
//     }
//   };

//   // Animation variants - removed the y-axis animation
//   const navbarVariants = {
//     initial: { opacity: 1 },
//     animate: { 
//       opacity: 1,
//       transition: { duration: 0.4 }
//     }
//   };
  
//   const menuItemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: i => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.05,
//         duration: 0.3
//       }
//     })
//   };
  
//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { 
//         type: "spring", 
//         stiffness: 300,
//         damping: 20
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: -10, 
//       scale: 0.95,
//       transition: { duration: 0.2 }
//     }
//   };

//   // Get role specific navigation links
//   const getRoleLinks = () => {
//     if (!user) return null;

//     switch (user.role) {
//       case "SuperAdmin":
//         return (
//           <div className="flex space-x-1 md:space-x-2">
//             <NavLinkWithAnimation
//               to="/super-admin/schools" 
//               icon={<FaSchool />}
//               text="Manage Schools"
//               index={1}
//             />
//             <NavLinkWithAnimation 
//               to="/super-admin/view-schools" 
//               icon={<FaFileAlt />}
//               text="View Schools"
//               index={2}
//             />
//             <NavLinkWithAnimation 
//               to="/super-admin/users" 
//               icon={<FaUsers />}
//               text="Manage Users"
//               index={3}
//             />
//             <NavLinkWithAnimation 
//               to="/super-admin/reviews" 
//               icon={<FaStar />}
//               text="Reviews"
//               index={4}
//             />
//             <NavLinkWithAnimation 
//               to="/super-admin/reports" 
//               icon={<FaChartLine />}
//               text="Reports"
//               index={5}
//             />
//           </div>
//         );
//       case "OfficerAdmin":
//         return (
//           <div className="flex space-x-1 md:space-x-2">
//             <NavLinkWithAnimation 
//               to="/officer-admin/classification-form" 
//               icon={<FaFileAlt />}
//               text="Classification"
//               index={1}
//             />
//             <NavLinkWithAnimation 
//               to="/officer-admin/improvement-tracker" 
//               icon={<FaChartLine />}
//               text="Improvement"
//               index={2}
//             />
//             <NavLinkWithAnimation 
//               to="/officer-admin/ai-analysis" 
//               icon={<FaLightbulb />}
//               text="AI Analysis"
//               index={3}
//             />
//             <NavLinkWithAnimation 
//               to="/officer-admin/schools-map" 
//               icon={<FaMapMarkedAlt />}
//               text="View Map"
//               index={4}
//             />
//             <NavLinkWithAnimation 
//               to="/officer-admin/contact" 
//               icon={<FaEnvelope />}
//               text="Contact"
//               index={5}
//             />
//           </div>
//         );
//       case "PrivateSchoolAdmin":
//         return (
//           <div className="flex space-x-1 md:space-x-2">
//             <NavLinkWithAnimation 
//               to="/school-admin/school-information" 
//               icon={<FaSchool />}
//               text="School Info"
//               index={1}
//             />
//             <NavLinkWithAnimation 
//               to="/school-admin/view-school" 
//               icon={<FaFileAlt />}
//               text="View School"
//               index={2}
//             />
//             <NavLinkWithAnimation 
//               to="/school-admin/review-classification" 
//               icon={<FaChartLine />}
//               text="Review"
//               index={3}
//             />
//             <NavLinkWithAnimation 
//               to="/school-admin/contact" 
//               icon={<FaEnvelope />}
//               text="Contact"
//               index={4}
//             />
//           </div>
//         );
//       case "GeneralPublic":
//         return (
//           <div className="flex space-x-1 md:space-x-2">
//             <NavLinkWithAnimation 
//               to="/compare" 
//               icon={<FaChartLine />}
//               text="Compare"
//               index={1}
//             />
//             <NavLinkWithAnimation 
//               to="/view-schools" 
//               icon={<FaSchool />}
//               text="Schools"
//               index={2}
//             />
//             <NavLinkWithAnimation 
//               to="/solution" 
//               icon={<FaLightbulb />}
//               text="Solution"
//               index={3}
//             />
//             <NavLinkWithAnimation 
//               to="/contact" 
//               icon={<FaEnvelope />}
//               text="Contact"
//               index={4}
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   // Get links for non-logged in users
//   const getPublicLinks = () => (
//     <div className="flex space-x-1 md:space-x-2">
//       <NavLinkWithAnimation 
//         to="/impact" 
//         icon={<FaInfo />}
//         text="About Us"
//         index={1}
//       />
//       <NavLinkWithAnimation 
//         to="/compare" 
//         icon={<FaChartLine />}
//         text="Compare"
//         index={2}
//       />
//       <NavLinkWithAnimation 
//         to="/view-schools" 
//         icon={<FaSchool />}
//         text="Schools"
//         index={3}
//       />
//       <NavLinkWithAnimation 
//         to="/solution" 
//         icon={<FaLightbulb />}
//         text="Solution"
//         index={4}
//       />
//       <NavLinkWithAnimation 
//         to="/contact" 
//         icon={<FaEnvelope />}
//         text="Contact"
//         index={5}
//       />
//     </div>
//   );

//   // Get mobile menu links
//   const getMobileMenuLinks = () => {
//     if (user) {
//       switch (user.role) {
//         case "SuperAdmin":
//           return (
//             <>
//               <MobileLink to="/super-admin/schools" icon={<FaSchool />} text="Manage Schools" index={1} />
//               <MobileLink to="/super-admin/view-schools" icon={<FaFileAlt />} text="View Schools" index={2} />
//               <MobileLink to="/super-admin/users" icon={<FaUsers />} text="Manage Users" index={3} />
//               <MobileLink to="/super-admin/reviews" icon={<FaStar />} text="Manage Reviews" index={4} />
//               <MobileLink to="/super-admin/reports" icon={<FaChartLine />} text="Reports" index={5} />
//             </>
//           );
//         case "OfficerAdmin":
//           return (
//             <>
//               <MobileLink to="/officer-admin/classification-form" icon={<FaFileAlt />} text="Classification Form" index={1} />
//               <MobileLink to="/officer-admin/improvement-tracker" icon={<FaChartLine />} text="Improvement Tracker" index={2} />
//               <MobileLink to="/officer-admin/ai-analysis" icon={<FaLightbulb />} text="AI Analysis" index={3} />
//               <MobileLink to="/officer-admin/schools-map" icon={<FaMapMarkedAlt />} text="View Map" index={4} />
//               <MobileLink to="/officer-admin/contact" icon={<FaEnvelope />} text="Contact Us" index={5} />
//             </>
//           );
//         case "PrivateSchoolAdmin":
//           return (
//             <>
//               <MobileLink to="/school-admin/school-information" icon={<FaSchool />} text="School Information" index={1} />
//               <MobileLink to="/school-admin/view-school" icon={<FaFileAlt />} text="View School" index={2} />
//               <MobileLink to="/school-admin/review-classification" icon={<FaChartLine />} text="Review Classification" index={3} />
//               <MobileLink to="/school-admin/contact" icon={<FaEnvelope />} text="Contact Us" index={4} />
//             </>
//           );
//         case "GeneralPublic":
//           return (
//             <>
//               <MobileLink to="/compare" icon={<FaChartLine />} text="Compare Schools" index={1} />
//               <MobileLink to="/view-schools" icon={<FaSchool />} text="View Schools" index={2} />
//               <MobileLink to="/solution" icon={<FaLightbulb />} text="Solution" index={3} />
//               <MobileLink to="/contact" icon={<FaEnvelope />} text="Contact Us" index={4} />
//             </>
//           );
//         default:
//           return null;
//       }
//     } else {
//       return (
//         <>
//           <MobileLink to="/impact" icon={<FaInfo />} text="About Us" index={1} />
//           <MobileLink to="/compare" icon={<FaChartLine />} text="Compare Schools" index={2} />
//           <MobileLink to="/view-schools" icon={<FaSchool />} text="View Schools" index={3} />
//           <MobileLink to="/solution" icon={<FaLightbulb />} text="Solution" index={4} />
//           <MobileLink to="/contact" icon={<FaEnvelope />} text="Contact Us" index={5} />
//         </>
//       );
//     }
//   };

//   // NavLink with animation component
//   const NavLinkWithAnimation = ({ to, icon, text, index }) => (
//     <motion.div
//       custom={index}
//       initial="hidden"
//       animate="visible"
//       variants={menuItemVariants}
//     >
//       <NavLink
//         to={to}
//         className={({ isActive }) =>
//           `group relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${
//             isActive
//               ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
//               : "text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 hover:text-white"
//           }`
//         }
//       >
//         <span className="flex items-center">
//           <span className={`mr-2 text-lg transition-transform group-hover:scale-110 ${isActive ? "animate-pulse" : ""}`}>
//             {icon}
//           </span>
//           <span className="hidden md:block">{text}</span>
//         </span>
//         <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></span>
//       </NavLink>
//     </motion.div>
//   );

//   // Mobile Link component
//   const MobileLink = ({ to, icon, text, index }) => (
//     <motion.div
//       custom={index}
//       initial="hidden"
//       animate="visible"
//       variants={menuItemVariants}
//       className="w-full"
//     >
//       <Link
//         to={to}
//         className="flex items-center gap-4 w-full px-4 py-3 text-base font-medium text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 hover:text-white rounded-lg transition-all duration-300"
//         onClick={toggleMobileMenu}
//       >
//         <span className="text-lg">{icon}</span>
//         <span>{text}</span>
//       </Link>
//     </motion.div>
//   );

//   return (
//     <nav 
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-gray-800'
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Mobile menu button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <motion.button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//               whileTap={{ scale: 0.9 }}
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <AnimatePresence mode="wait" initial={false}>
//                 {isMobileMenuOpen ? (
//                   <motion.span
//                     key="close"
//                     initial={{ opacity: 0, rotate: -90 }}
//                     animate={{ opacity: 1, rotate: 0 }}
//                     exit={{ opacity: 0, rotate: 90 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <FiX className="size-6" />
//                   </motion.span>
//                 ) : (
//                   <motion.span
//                     key="menu"
//                     initial={{ opacity: 0, rotate: 90 }}
//                     animate={{ opacity: 1, rotate: 0 }}
//                     exit={{ opacity: 0, rotate: -90 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <FiMenu className="size-6" />
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
          
//           {/* Logo and navigation */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <motion.div 
//               className="flex flex-shrink-0 items-center"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               {/* Logo Section */}
//               {user ? (
//                 user.role === "SuperAdmin" ? (
//                   <Link to="/super-admin/dashboard" className="flex items-center gap-2">
//                     <FaUserShield className="h-8 w-8 text-yellow-500" />
//                     <div>
//                       <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">EduStruct</span>
//                       <span className="text-white text-sm ml-1">Admin</span>
//                     </div>
//                   </Link>
//                 ) : user.role === "OfficerAdmin" ? (
//                   <Link to="/officer-admin/dashboard" className="flex items-center gap-2">
//                     <FaUserTie className="h-8 w-8 text-blue-500" />
//                     <div>
//                       <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">EduStruct</span>
//                       <span className="text-white text-sm ml-1">Officer</span>
//                     </div>
//                   </Link>
//                 ) : user.role === "PrivateSchoolAdmin" ? (
//                   <Link to="/school-admin/dashboard" className="flex items-center gap-2">
//                     <FaChalkboardTeacher className="h-8 w-8 text-green-500" />
//                     <div>
//                       <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">EduStruct</span>
//                       <span className="text-white text-sm ml-1">School</span>
//                     </div>
//                   </Link>
//                 ) : (
//                   <Link to="/" className="flex items-center gap-2">
//                     <FaSchool className="h-8 w-8 text-purple-500" />
//                     <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">EduStruct</span>
//                   </Link>
//                 )
//               ) : (
//                 <Link to="/" className="flex items-center gap-2">
//                   <FaSchool className="h-8 w-8 text-purple-500" />
//                   <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">EduStruct</span>
//                 </Link>
//               )}
//             </motion.div>
            
//             {/* Desktop navigation */}
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {user ? getRoleLinks() : getPublicLinks()}
//               </div>
//             </div>
//           </div>
          
//           {/* Right section - auth buttons or user profile */}
//           <div className="flex items-center gap-4">
//             {user ? (
//               <div className="relative">
//                 <motion.div 
//                   className="flex items-center gap-2 cursor-pointer"
//                   onClick={toggleProfileMenu}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <div className="hidden md:flex flex-col items-end">
//                     <p className="text-sm font-medium text-purple-300">👋 {user.fullname}</p>
//                     <p className="text-xs text-gray-400">{user.role}</p>
//                   </div>
//                   <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold">
//                       {user.fullname.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                   <FiChevronDown className={`text-gray-400 transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''}`} />
//                 </motion.div>
                
//                 {/* Profile dropdown */}
//                 <AnimatePresence>
//                   {profileMenuOpen && (
//                     <motion.div 
//                       className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
//                       variants={dropdownVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                     >
//                       <div className="px-4 py-3">
//                         <p className="text-sm text-white">{user.fullname}</p>
//                         <p className="text-xs text-gray-400 truncate">{user.email}</p>
//                       </div>
//                       <div className="border-t border-gray-700"></div>
//                       <Link 
//                         to="/profile" 
//                         className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//                         onClick={() => setProfileMenuOpen(false)}
//                       >
//                         Profile
//                       </Link>
//                       <Link 
//                         to="/settings" 
//                         className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
//                         onClick={() => setProfileMenuOpen(false)}
//                       >
//                         Settings
//                       </Link>
//                       <button 
//                         onClick={logoutHandler} 
//                         className="w-full text-left px-4 py-2 text-sm cursor-pointer text-red-400 hover:bg-gray-700 hover:text-red-300 flex items-center"
//                       >
//                         <FiLogOut className="mr-2" /> 
//                         Sign out
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link to="/login">
//                     <button className="px-4 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg">
//                       Login
//                     </button>
//                   </Link>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link to="/signup">
//                     <button className="px-4 py-1.5 text-sm font-medium border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300">
//                       Sign Up
//                     </button>
//                   </Link>
//                 </motion.div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div 
//             id="mobile-menu"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden bg-gray-900/95 backdrop-blur-md shadow-lg"
//           >
//             <div className="space-y-1 px-3 pt-2 pb-3 flex flex-col">
//               {getMobileMenuLinks()}
              
//               {/* Mobile user info */}
//               {user && (
//                 <div className="mt-4 pt-4 border-t border-gray-700">
//                   <div className="flex items-center px-4 py-2">
//                     <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-3">
//                       <span className="text-white font-bold">
//                         {user.fullname.charAt(0).toUpperCase()}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-white">{user.fullname}</p>
//                       <p className="text-xs text-gray-400">{user.email}</p>
//                     </div>
//                   </div>
//                   <motion.button
//                     onClick={logoutHandler}
//                     className="w-full mt-2 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-colors duration-300"
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FiLogOut className="mr-2" />
//                     Sign Out
//                   </motion.button>
//                 </div>
//               )}
              
//               {/* Mobile auth buttons */}
//               {!user && (
//                 <div className="mt-4 pt-4 border-t border-gray-700 grid grid-cols-2 gap-2 px-4">
//                   <Link 
//                     to="/login"
//                     onClick={toggleMobileMenu}
//                     className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
//                   >
//                     Login
//                   </Link>
//                   <Link 
//                     to="/signup"
//                     onClick={toggleMobileMenu}
//                     className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-purple-500 text-purple-400 rounded-lg"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//       {/* Mobile menu overlay backdrop */}
//       {isMobileMenuOpen && (
//         <motion.div 
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 sm:hidden"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={toggleMobileMenu}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FaSchool, 
  FaUsers, 
  FaChartLine, 
  FaFileAlt, 
  FaSearch, 
  FaMapMarkedAlt, 
  FaEnvelope, 
  FaInfo, 
  FaUserTie, 
  FaStar,
  FaLightbulb,
  FaUserShield,
  FaChalkboardTeacher
} from 'react-icons/fa';
import { 
  FiLogOut, 
  FiMenu, 
  FiX,
  FiChevronDown
} from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  
  // States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setProfileMenuOpen(false);
  }, [location]);

  // Toggle functions
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  // Logout handler
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/logout`, {
  withCredentials: true,
});

      if (res.data.success) {
        dispatch(setUser(null));
        toast.success("Logout successful");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };
  
  // Animation variants for dropdowns only
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  // Get role specific navigation links
  const getRoleLinks = () => {
    if (!user) return null;

    switch (user.role) {
      case "SuperAdmin":
        return (
          <div className="flex space-x-1 md:space-x-2">
            <NavLinkWithoutAnimation
              to="/super-admin/schools" 
              icon={<FaSchool />}
              text="Manage Schools"
            />
            <NavLinkWithoutAnimation 
              to="/super-admin/view-schools" 
              icon={<FaFileAlt />}
              text="View Schools"
            />
            <NavLinkWithoutAnimation 
              to="/super-admin/users" 
              icon={<FaUsers />}
              text="Manage Users"
            />
            <NavLinkWithoutAnimation 
              to="/super-admin/reviews" 
              icon={<FaStar />}
              text="Reviews"
            />
            <NavLinkWithoutAnimation 
              to="/super-admin/reports" 
              icon={<FaChartLine />}
              text="Reports"
            />
          </div>
        );
      case "OfficerAdmin":
        return (
          <div className="flex space-x-1 md:space-x-2">
            <NavLinkWithoutAnimation 
              to="/officer-admin/classification-form" 
              icon={<FaFileAlt />}
              text="Classification"
            />
            <NavLinkWithoutAnimation 
              to="/officer-admin/improvement-tracker" 
              icon={<FaChartLine />}
              text="Improvement"
            />
            <NavLinkWithoutAnimation 
              to="/officer-admin/ai-analysis" 
              icon={<FaLightbulb />}
              text="AI Analysis"
            />
            <NavLinkWithoutAnimation 
              to="/officer-admin/schools-map" 
              icon={<FaMapMarkedAlt />}
              text="View Map"
            />
            <NavLinkWithoutAnimation 
              to="/officer-admin/contact" 
              icon={<FaEnvelope />}
              text="Contact"
            />
          </div>
        );
      case "PrivateSchoolAdmin":
        return (
          <div className="flex space-x-1 md:space-x-2">
            <NavLinkWithoutAnimation 
              to="/school-admin/school-information" 
              icon={<FaSchool />}
              text="School Info"
            />
            <NavLinkWithoutAnimation 
              to="/school-admin/view-school" 
              icon={<FaFileAlt />}
              text="View School"
            />
            <NavLinkWithoutAnimation 
              to="/school-admin/review-classification" 
              icon={<FaChartLine />}
              text="Review"
            />
            <NavLinkWithoutAnimation 
              to="/school-admin/contact" 
              icon={<FaEnvelope />}
              text="Contact"
            />
          </div>
        );
      case "GeneralPublic":
        return (
          <div className="flex space-x-1 md:space-x-2">
            <NavLinkWithoutAnimation 
              to="/compare" 
              icon={<FaChartLine />}
              text="Compare"
            />
            <NavLinkWithoutAnimation 
              to="/view-schools" 
              icon={<FaSchool />}
              text="Schools"
            />
            <NavLinkWithoutAnimation 
              to="/solution" 
              icon={<FaLightbulb />}
              text="Solution"
            />
            <NavLinkWithoutAnimation 
              to="/contact" 
              icon={<FaEnvelope />}
              text="Contact"
            />
          </div>
        );
      default:
        return null;
    }
  };

  // Get links for non-logged in users
  const getPublicLinks = () => (
    <div className="flex space-x-1 md:space-x-2">
      <NavLinkWithoutAnimation 
        to="/impact" 
        icon={<FaInfo />}
        text="About Us"
      />
      <NavLinkWithoutAnimation 
        to="/compare" 
        icon={<FaChartLine />}
        text="Compare"
      />
      <NavLinkWithoutAnimation 
        to="/view-schools" 
        icon={<FaSchool />}
        text="Schools"
      />
      <NavLinkWithoutAnimation 
        to="/solution" 
        icon={<FaLightbulb />}
        text="Solution"
      />
      <NavLinkWithoutAnimation 
        to="/contact" 
        icon={<FaEnvelope />}
        text="Contact"
      />
    </div>
  );

  // Get mobile menu links
  const getMobileMenuLinks = () => {
    if (user) {
      switch (user.role) {
        case "SuperAdmin":
          return (
            <>
              <MobileLink to="/super-admin/schools" icon={<FaSchool />} text="Manage Schools" />
              <MobileLink to="/super-admin/view-schools" icon={<FaFileAlt />} text="View Schools" />
              <MobileLink to="/super-admin/users" icon={<FaUsers />} text="Manage Users" />
              <MobileLink to="/super-admin/reviews" icon={<FaStar />} text="Manage Reviews" />
              <MobileLink to="/super-admin/reports" icon={<FaChartLine />} text="Reports" />
            </>
          );
        case "OfficerAdmin":
          return (
            <>
              <MobileLink to="/officer-admin/classification-form" icon={<FaFileAlt />} text="Classification Form" />
              <MobileLink to="/officer-admin/improvement-tracker" icon={<FaChartLine />} text="Improvement Tracker" />
              <MobileLink to="/officer-admin/ai-analysis" icon={<FaLightbulb />} text="AI Analysis" />
              <MobileLink to="/officer-admin/schools-map" icon={<FaMapMarkedAlt />} text="View Map" />
              <MobileLink to="/officer-admin/contact" icon={<FaEnvelope />} text="Contact Us" />
            </>
          );
        case "PrivateSchoolAdmin":
          return (
            <>
              <MobileLink to="/school-admin/school-information" icon={<FaSchool />} text="School Information" />
              <MobileLink to="/school-admin/view-school" icon={<FaFileAlt />} text="View School" />
              <MobileLink to="/school-admin/review-classification" icon={<FaChartLine />} text="Review Classification" />
              <MobileLink to="/school-admin/contact" icon={<FaEnvelope />} text="Contact Us" />
            </>
          );
        case "GeneralPublic":
          return (
            <>
              <MobileLink to="/compare" icon={<FaChartLine />} text="Compare Schools" />
              <MobileLink to="/view-schools" icon={<FaSchool />} text="View Schools" />
              <MobileLink to="/solution" icon={<FaLightbulb />} text="Solution" />
              <MobileLink to="/contact" icon={<FaEnvelope />} text="Contact Us" />
            </>
          );
        default:
          return null;
      }
    } else {
      return (
        <>
          <MobileLink to="/impact" icon={<FaInfo />} text="About Us" />
          <MobileLink to="/compare" icon={<FaChartLine />} text="Compare Schools" />
          <MobileLink to="/view-schools" icon={<FaSchool />} text="View Schools" />
          <MobileLink to="/solution" icon={<FaLightbulb />} text="Solution" />
          <MobileLink to="/contact" icon={<FaEnvelope />} text="Contact Us" />
        </>
      );
    }
  };

  // NavLink without animation component
  const NavLinkWithoutAnimation = ({ to, icon, text }) => (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${
            isActive
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
              : "text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 hover:text-white"
          }`
        }
      >
        <span className="flex items-center">
          <span className={`mr-2 text-lg ${isActive ? "animate-pulse" : ""}`}>
            {icon}
          </span>
          <span className="hidden md:block">{text}</span>
        </span>
        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></span>
      </NavLink>
    </div>
  );

  // Mobile Link component without animations
  const MobileLink = ({ to, icon, text }) => (
    <div className="w-full">
      <Link
        to={to}
        className="flex items-center gap-4 w-full px-4 py-3 text-base font-medium text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 hover:text-white rounded-lg transition-all duration-300"
        onClick={toggleMobileMenu}
      >
        <span className="text-lg">{icon}</span>
        <span>{text}</span>
      </Link>
    </div>
  );

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-gray-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
            </button>
          </div>
          
          {/* Logo and navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* Logo Section */}
              {user ? (
                user.role === "SuperAdmin" ? (
                  <Link to="/super-admin/dashboard" className="flex items-center gap-2">
                    <FaUserShield className="h-8 w-8 text-yellow-500" />
                    <div>
                      <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">EduStruct</span>
                      <span className="text-white text-sm ml-1">Admin</span>
                    </div>
                  </Link>
                ) : user.role === "OfficerAdmin" ? (
                  <Link to="/officer-admin/dashboard" className="flex items-center gap-2">
                    <FaUserTie className="h-8 w-8 text-blue-500" />
                    <div>
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">EduStruct</span>
                      <span className="text-white text-sm ml-1">Officer</span>
                    </div>
                  </Link>
                ) : user.role === "PrivateSchoolAdmin" ? (
                  <Link to="/school-admin/dashboard" className="flex items-center gap-2">
                    <FaChalkboardTeacher className="h-8 w-8 text-green-500" />
                    <div>
                      <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">EduStruct</span>
                      <span className="text-white text-sm ml-1">School</span>
                    </div>
                  </Link>
                ) : (
                  <Link to="/" className="flex items-center gap-2">
                    <FaSchool className="h-8 w-8 text-purple-500" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">EduStruct</span>
                  </Link>
                )
              ) : (
                <Link to="/" className="flex items-center gap-2">
                  <FaSchool className="h-8 w-8 text-purple-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">EduStruct</span>
                </Link>
              )}
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {user ? getRoleLinks() : getPublicLinks()}
              </div>
            </div>
          </div>
          
          {/* Right section - auth buttons or user profile */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <div 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleProfileMenu}
                >
                  <div className="hidden md:flex flex-col items-end">
                    <p className="text-sm font-medium text-purple-300">👋 {user.fullname}</p>
                    <p className="text-xs text-gray-400">{user.role}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">
                      {user.fullname.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <FiChevronDown className={`text-gray-400 transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Profile dropdown */}
                <AnimatePresence>
                  {profileMenuOpen && (
                    <motion.div 
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm text-white">{user.fullname}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                      <div className="border-t border-gray-700"></div>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link 
                        to="/settings" 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <button 
                        onClick={logoutHandler} 
                        className="w-full text-left px-4 py-2 text-sm cursor-pointer text-red-400 hover:bg-gray-700 hover:text-red-300 flex items-center"
                      >
                        <FiLogOut className="mr-2" /> 
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <button className="px-4 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-4 py-1.5 text-sm font-medium border border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu - Fixed visibility issues */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="sm:hidden bg-gray-900 shadow-lg overflow-y-auto max-h-[80vh]"
        >
          <div className="space-y-1 px-3 pt-2 pb-3 flex flex-col">
            {getMobileMenuLinks()}
            
            {/* Mobile user info */}
            {user && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center px-4 py-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">
                      {user.fullname.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{user.fullname}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={logoutHandler}
                  className="w-full mt-2 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-colors duration-300"
                >
                  <FiLogOut className="mr-2" />
                  Sign Out
                </button>
              </div>
            )}
            
            {/* Mobile auth buttons */}
            {!user && (
              <div className="mt-4 pt-4 border-t border-gray-700 grid grid-cols-2 gap-2 px-4">
                <Link 
                  to="/login"
                  onClick={toggleMobileMenu}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  onClick={toggleMobileMenu}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-purple-500 text-purple-400 rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Mobile menu overlay backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 sm:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;