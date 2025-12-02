

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { School, XCircle, Star, MessageSquare, Link2 } from 'lucide-react';
import getAllSchools from '../hooks/getAllSchools';
import getReviewBySchool from '../hooks/getReviewBySchool';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewSchoolsGeneral = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [review, setReview] = useState('');
  const [reviewsMap, setReviewsMap] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const { allSchools = [] } = useSelector((state) => state.school);
  const { user } = useSelector((state) => state.auth);

  getAllSchools();

  const fetchAndSetReviews = async (schoolId) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/review/${schoolId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setReviewsMap((prev) => ({
          ...prev,
          [schoolId]: res.data.reviews,
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleReviewSubmit = async (schoolId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/review/create`,
        {
            userId: user._id,
          schoolId,
          fullname: user.fullname,
          review,
         
        
        },
        {
            headers: { 'Content-Type': "application/json" },
            withCredentials: true,
          }
      );
  
      if (res.data.success) {
        setReview('');
        fetchAndSetReviews(schoolId);
        toast.success("Review submitted successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Review submission failed");
    }
  };
  
  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
    fetchAndSetReviews(school._id); // Load reviews when modal opens
  };

  const filteredSchools = allSchools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div>
         <Navbar />
  <div className="min-h-screen bg-gradient-to-r  from-blue-50 via-purple-50 to-pink-50  px-6 py-10 transition-all duration-300 ease-in-out">
   
    <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10 animate-fade-in-up">
      🌟 Explore All Schools
    </h1>
  
    <div className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        placeholder="🔍 Search by school name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md transition duration-300"
      />
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredSchools.map((school) => (
        <div
          key={school._id}
          className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:scale-[1.02] hover:shadow-2xl transform transition-all duration-300 ease-in-out border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
              <School className="text-indigo-500" size={22} /> {school.name}
            </h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <Link2 size={20} />
            </a>
          </div>
  
          <p className="text-gray-700"><strong>Grades:</strong> {school.grades}</p>
          <p className="text-gray-700"><strong>Classes:</strong> {school.classes}</p>
          <p className="mt-2 mb-3">
            <span className={`text-xs px-3 py-1 rounded-full font-medium inline-block
              ${
                school.status === 'Fully Furnished'
                  ? 'bg-green-100 text-green-700'
                  : school.status === 'Partially Equipped'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
              {school.status}
            </span>
          </p>
  
          {/* Reviews preview */}
          {reviewsMap[school._id]?.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
                <MessageSquare size={16} /> User Reviews
              </div>
              <ul className="max-h-24 overflow-y-auto pr-2 text-sm text-gray-600 space-y-1">
                {reviewsMap[school._id]?.slice(0, 2).map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <Star size={14} className="text-yellow-500 mt-1" />
                    <span><strong>{r.fullname}:</strong> {r.review}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
  
          <button
            onClick={() => handleSchoolSelect(school)}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium shadow transition-all cursor-pointer"
          >
            View Full Details & Review
          </button>
        </div>
      ))}
    </div>
  
    {/* Modal with animation */}
    {selectedSchool && (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity animate-fade-in">
        <div className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl relative animate-slide-up">
          <button
            onClick={() => setSelectedSchool(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors cursor-pointer "
          >
            <XCircle size={24} />
          </button>
  
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">{selectedSchool.name}</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
            <p><strong>Grades:</strong> {selectedSchool.grades}</p>
            <p><strong>Classes:</strong> {selectedSchool.classes}</p>
            <p><strong>Status:</strong> {selectedSchool.status}</p>
            {['toilets', 'library', 'playground', 'boundarywall'].map((feature) => (
              <p key={feature}>
                <strong>{feature.charAt(0).toUpperCase() + feature.slice(1)}:</strong>{' '}
                {selectedSchool.infrastructure?.[feature] ? '✅ Yes' : '❌ No'}
              </p>
            ))}
          </div>
  
          {/* Add review */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Add Your Review</h3>
            {user ? (
              <>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
                  rows="3"
                  placeholder="Write your honest opinion..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <button
                  onClick={() => handleReviewSubmit(selectedSchool._id)}
                  className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition cursor-pointer"
                >
                  Submit Review
                </button>
              </>
            ) : (
              <div className="text-red-600 font-medium">
                To review this school, you need to be{' '}
                <Link to="/login" className="text-indigo-600 underline hover:text-indigo-800">
                  logged in
                </Link>
                .
              </div>
            )}
          </div>
  
          {/* User reviews */}
          {reviewsMap[selectedSchool._id]?.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">User Reviews</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 max-h-40 overflow-y-auto pr-2">
                {reviewsMap[selectedSchool._id]?.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <Star size={16} className="text-yellow-500 mt-1" />
                    <span><strong>{r.fullname}:</strong> {r.review}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )}
   
  </div>
  <Footer />
    </div>
  
  );

};

export default ViewSchoolsGeneral;

// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// const ViewSchoolsGeneral = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className=" bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen text-gray-800">
//         <h1>View Schools</h1>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default ViewSchoolsGeneral











