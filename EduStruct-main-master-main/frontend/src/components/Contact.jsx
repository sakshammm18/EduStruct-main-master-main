
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_71n7p1f",     
//       "template_fexaucs",    
//       form.current,
//       "46QbDP4d8fZhoY_Tq"      
//     )
//     .then(
//       (result) => {
//         alert("Message sent successfully!");
//         form.current.reset(); 
//       },
//       (error) => {
//         alert("Something went wrong. Please try again.");
//         console.error(error.text);
//       }
//     );
//   };

//   return (
//     <div className="bg-gray-100">
//       <Navbar/>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6 items-center justify-center">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
//         </div>

//         <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label className="block text-sm font-semibold text-gray-900">First name</label>
//               <input type="text" name="first_name" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-900">Last name</label>
//               <input type="text" name="last_name" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="block text-sm font-semibold text-gray-900">Email</label>
//               <input type="email" name="user_email" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="block text-sm font-semibold text-gray-900">Phone</label>
//               <input type="text" name="phone" required className="mt-2.5 block w-full rounded-md px-3 py-1.5 border text-gray-900 focus:outline-indigo-600" />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="block text-sm font-semibold text-gray-900">Message</label>
//               <textarea name="message" rows="4" required className="mt-2.5 block w-full rounded-md px-3 py-2 border text-gray-900 focus:outline-indigo-600"></textarea>
//             </div>
//           </div>
//           <div className="mt-10">
//             <button type="submit" className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white font-semibold shadow hover:bg-indigo-500 cursor-pointer ">Let's talk</button>
//           </div>
//         </form>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_71n7p1f",
      "template_fexaucs",
      form.current,
      "46QbDP4d8fZhoY_Tq"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#f9f9f9]">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-800 drop-shadow-md">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-3xl bg-white/40 backdrop-blur-lg shadow-2xl rounded-2xl px-10 py-12 border border-white/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full rounded-lg px-4 py-2 bg-white/90 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full rounded-lg px-4 py-2 bg-white/90 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full rounded-lg px-4 py-2 bg-white/90 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-800 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                required
                className="w-full rounded-lg px-4 py-2 bg-white/90 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full rounded-lg px-4 py-3 bg-white/90 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
            >
              Let’s Talk
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;