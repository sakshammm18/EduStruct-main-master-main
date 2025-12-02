
import React, { useEffect } from 'react';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import getAllReviews from '../hooks/getAllReviews';
import { useSelector, useDispatch } from 'react-redux';

const SuperReview = () => {
  const dispatch = useDispatch();
  const { allReviews = [] } = useSelector((state) => state.review);

  getAllReviews();

  return (
    <div>
        <Navbar />
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100">
      

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-4">
          School Review Classification
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          See how the public has rated schools performance and infrastructure.
        </p>

        {allReviews.length === 0 ? (
          <p className="text-center text-gray-500 text-xl animate-pulse">
            No reviews available.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review) => (
              <div
                key={review._id || review.id}
                className="relative p-6 rounded-3xl bg-gradient-to-r from-purple-100 via-white to-indigo-100 shadow-xl border border-indigo-200 transition-transform duration-300 hover:scale-105"
              >
                <FaQuoteLeft className="absolute top-4 left-4 text-indigo-300 text-4xl opacity-20" />
                <div className="flex items-center gap-3 mb-4">
                  <FaUserCircle className="text-indigo-600 text-3xl" />
                  <div>
                    <h4 className="text-lg font-bold text-indigo-700">
                      {review.fullname}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <h5 className="text-md font-semibold text-purple-700 mb-2">
                  🏫 School: <span className="text-indigo-800">{review.schoolId.name}</span>
                </h5>
                <p className="italic text-gray-800 text-lg leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
    <Footer />
    </div>
  
  );
};

export default SuperReview;
