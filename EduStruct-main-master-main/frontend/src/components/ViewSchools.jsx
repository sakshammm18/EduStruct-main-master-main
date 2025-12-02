 import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import getAllSchools from '../hooks/getAllSchools';
import { useSelector } from 'react-redux';

const ViewSchools = () => {
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const { allSchools = [] } = useSelector((state) => state.school);
    getAllSchools();
  useEffect(() => {
    setTimeout(() => {
  
    //     {
    //       id: 1,
    //       name: 'Green Valley School',
    //     //  location: 'New York',
    //       grades: '1-8',
    //       classes: 12,
    //       status: 'Fully Furnished',
    //       infrastructure: {
    //         toilets: true,
    //         library: true,
    //         playground: true,
    //         boundaryWall: true,
    //       },
    //     },
    //     {
    //       id: 2,
    //       name: 'Sunrise Academy',
    //     //  location: 'California',
    //       grades: '1-5',
    //       classes: 6,
    //       status: 'Partially Equipped',
    //       infrastructure: {
    //         toilets: true,
    //         library: false,
    //         playground: true,
    //         boundaryWall: false,
    //       },
    //     },
    //     {
    //       id: 3,
    //       name: 'Riverdale Public School',
    //     //  location: 'Texas',
    //       grades: '1-12',
    //       classes: 15,
    //       status: 'Needs Improvement',
    //       infrastructure: {
    //         toilets: false,
    //         library: false,
    //         playground: false,
    //         boundaryWall: false,
    //       },
    //     },
    //     {
    //       id: 4,
    //       name: 'ABC International',
    //     //  location: 'Florida',
    //       grades: '6-12',
    //       classes: 10,
    //       status: 'Fully Furnished',
    //       infrastructure: {
    //         toilets: true,
    //         library: true,
    //         playground: true,
    //         boundaryWall: true,
    //       },
    //     },
    //   ];

      setSchools(allSchools);
      setFilteredSchools(allSchools);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = allSchools;

    if (searchTerm) {
      filtered = filtered.filter((school) =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSchools(filtered);
  }, [searchTerm, schools]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
        <div className="text-lg font-semibold text-indigo-800 animate-pulse">
          Loading Schools...
        </div>
      </div>
    );
  }

//   const uniqueLocations = [...new Set(schools.map((school) => school.location))];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Fully Furnished':
        return 'bg-green-500';
      case 'Partially Equipped':
        return 'bg-yellow-400';
      case 'Needs Improvement':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Schools Overview
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            <input
              type="text"
              placeholder="Search by school name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg shadow-md w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
        
          </div>

          {/* School Cards */}
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSchools.map((school) => (
                <div
                  key={school._id}
                  className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold text-green-700">{school.name}</h3>
                      <span className={`text-white text-sm px-3 py-1 rounded-full ${getStatusColor(school.status)}`}>
                        {school.status}
                      </span>
                    </div>
                    {/* <p className="text-gray-600 mb-2"><strong>Location:</strong> {school.location}</p> */}
                    <p className="text-gray-600 mb-2"><strong>Grades:</strong> {school.grades}</p>
                    <p className="text-gray-600 mb-2"><strong>Classes:</strong> {school.classes}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSchool(school)}
                    className="mt-6 bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 font-medium">
              No schools found matching your criteria.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 relative">
            <h2 className="text-2xl font-bold mb-4 text-green-700">{selectedSchool.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {selectedSchool.location}</p>
            <p className="text-gray-700 mb-2"><strong>Grades:</strong> {selectedSchool.grades}</p>
            <p className="text-gray-700 mb-2"><strong>Classes:</strong> {selectedSchool.classes}</p>
            <p className="text-gray-700 mb-2"><strong>Status:</strong> {selectedSchool.status}</p>
            <div className="text-gray-700 mb-4">
              <strong>Infrastructure:</strong>
              <ul className="list-disc list-inside mt-1">
                <li>Toilets: {selectedSchool.infrastructure.toilets ? '✅ Yes' : '❌ No'}</li>
                <li>Library: {selectedSchool.infrastructure.library ? '✅ Yes' : '❌ No'}</li>
                <li>Playground: {selectedSchool.infrastructure.playground ? '✅ Yes' : '❌ No'}</li>
                <li>Boundary Wall: {selectedSchool.infrastructure.boundarywall ? '✅ Yes' : '❌ No'}</li>
              </ul>
            </div>
            <button
              onClick={() => setSelectedSchool(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewSchools;
