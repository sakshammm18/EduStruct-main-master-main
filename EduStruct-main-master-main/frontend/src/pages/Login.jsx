
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading, setUser } from '../redux/authSlice'
// import { FaChevronDown } from 'react-icons/fa'

// const Login = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     role: "", // added role
//   });

//   const user = useSelector((state) => state.auth.user);

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post("http://localhost:8000/api/user/login", input, {
//         headers: { 'Content-Type': "application/json" },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(res.data.user));

//         // Navigate based on selected role
//         const role = res.data.user.role;
//         if (role === 'SuperAdmin') {
//           navigate("/super-admin-dashboard");
//         } else if (role === 'OfficerAdmin') {
//           navigate("/officer-dashboard");
//         } else if (role === 'PrivateSchoolAdmin') {
//           navigate("/private-school-dashboard");
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     dispatch(setLoading(false));
//   }

//   useEffect(() => {
//     if (user) {
//       if (user.role === "SuperAdmin") {
//         navigate("/super-admin/dashboard");
//       } else if (user.role === "OfficerAdmin") {
//         navigate("/officer-admin/dashboard");
//       } else if (user.role === "PrivateSchoolAdmin") {
//         navigate("/school-admin/dashboard");
//       } else if (user.role === "GeneralPublic") {
//         navigate("/");
//       }
//     }
//   }, [user, navigate]);
  

//   return (
//     <div>
//       <Navbar />

//       <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login to your account</h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" onSubmit={handleSubmit}>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address:</label>
//               <div className="mt-2">
//                 <input
//                   type="email"
//                   name="email"
//                   value={input.email}
//                   onChange={handleChange}
//                   id="email"
//                   placeholder="xyz@gmail.com"
//                   required
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   type="password"
//                   name="password"
//                   value={input.password}
//                   onChange={handleChange}
//                   id="password"
//                   placeholder="****"
//                   required
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             {/* Role Select Field */}
//             <div className="w-full">
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
// <div  className='mt-2'>
// <Link to="/signup">
//     <p className="text-center text-sm text-gray-500">Don't have an account? <span className="text-indigo-600 hover:text-indigo-500">Register</span></p>
// </Link>
// </div>
     
//             {/* Submit Button */}
//             <div>
//               <button type="submit" className="flex w-full justify-center rounded-md cursor-pointer bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Login
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/authSlice';
import { FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });

  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`, input, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(`Welcome ${res.data.user.fullname}`);
        dispatch(setUser(res.data.user));

        const role = res.data.user.role;
        if (role === 'SuperAdmin') {
          navigate('/super-admin-dashboard');
        } else if (role === 'OfficerAdmin') {
          navigate('/officer-dashboard');
        } else if (role === 'PrivateSchoolAdmin') {
          navigate('/private-school-dashboard');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (user) {
      const routes = {
        SuperAdmin: '/super-admin/dashboard',
        OfficerAdmin: '/officer-admin/dashboard',
        PrivateSchoolAdmin: '/school-admin/dashboard',
        GeneralPublic: '/',
      };
      navigate(routes[user.role] || '/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/40">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to your account</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
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
                id="email"
                placeholder="you@example.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                id="password"
                placeholder=""
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Select Role
              </label>
              <div className="relative">
                <select
                  name="role"
                  id="role"
                  value={input.role}
                  onChange={handleChange}
                  required
                  className="appearance-none w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
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
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-500 transition-all focus:ring-2 focus:ring-indigo-300 focus:outline-none cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;