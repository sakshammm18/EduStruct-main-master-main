
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '../redux/authSlice';
// import axios from 'axios';
// import { FaChevronDown } from 'react-icons/fa';

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [input, setInput] = useState({
//     fullname: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
//     role: ""  // Added role field
//   });

//   const user = useSelector((state) => state.auth.user);

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post('http://localhost:8000/api/user/register', input, {
//         headers: { 'Content-Type': "application/json" },
//         withCredentials: true,
//       });
//       console.log(res);
//       if (res.data.success) {
//         navigate("/login");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     dispatch(setLoading(false));
//   }

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
//             Sign up to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" onSubmit={handleSubmit}>

//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullname" className="block text-sm font-medium text-gray-900">Full Name:</label>
//               <div className="mt-2">
//                 <input type="text" name="fullname" value={input.fullname} onChange={handleChange} placeholder="xyz" required className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
//               </div>
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">Phone Number:</label>
//               <div className="mt-2">
//                 <input type="text" name="phoneNumber" value={input.phoneNumber} onChange={handleChange} placeholder="9876543210" required className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email Address:</label>
//               <div className="mt-2">
//                 <input type="email" name="email" value={input.email} onChange={handleChange} placeholder="xyz@gmail.com" required className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password:</label>
//               </div>
//               <div className="mt-2">
//                 <input type="password" name="password" value={input.password} onChange={handleChange} placeholder="****" required className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
//               </div>
//             </div>

//             {/* Role Selection */}
        
// <div className="w-full">
//   <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
//     Select Role:
//   </label>
//   <div className="relative">
//     <select
//       name="role"
//       value={input.role}
//       onChange={handleChange}
//       id="role"
//       required
//       className="appearance-none w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-base text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all"
//     >
//       <option value="">Select your role</option>
//       <option value="SuperAdmin">Super Admin</option>
//       <option value="OfficerAdmin">Officer Admin</option>
//       <option value="PrivateSchoolAdmin">Private School Admin</option>
//       <option value="GeneralPublic">General Public</option>
//     </select>
//     {/* Dropdown Icon */}
//     <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
//       <FaChevronDown className="h-4 w-4" />
//     </div>
//   </div>
// </div>

//             {/* Submit */}
//             <div>
//               <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-indigo-600 cursor-pointer">
//                 Signup
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Signup;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/authSlice';
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [input, setInput] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`, input, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(`You registered successfully`);
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");

    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white/80 shadow-xl p-8 backdrop-blur-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create your account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleChange}
                required
                placeholder="9876543210"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                required
                placeholder=""
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="relative mt-1">
                <select
                  name="role"
                  value={input.role}
                  onChange={handleChange}
                  required
                  className="appearance-none w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option value="">Select your role</option>
                  <option value="SuperAdmin">Super Admin</option>
                  <option value="OfficerAdmin">Officer Admin</option>
                  <option value="PrivateSchoolAdmin">Private School Admin</option>
                  <option value="GeneralPublic">General Public</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <FaChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold shadow-md transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
