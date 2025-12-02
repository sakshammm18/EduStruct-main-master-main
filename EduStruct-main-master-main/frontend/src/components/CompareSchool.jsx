
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, XCircle, School, Link2, MessageSquare, Star } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import getAllSchools from '../hooks/getAllSchools';


const CompareSchools = () => {
  const dispatch = useDispatch();

 getAllSchools();
  const { allSchools = [], loading = false } = useSelector((state) => state.school);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    library: false,
    playground: false,
    toilets: false,
    boundarywall: false,
  });

  const toggleSelect = (school) => {
    if (selected.find((s) => s._id === school._id)) {
      setSelected(selected.filter((s) => s._id !== school._id));
    } else if (selected.length < 2) {
      setSelected([...selected, school]);
    }
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const filteredSchools = allSchools
    .filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((school) => {
      return (
        (!filter.library || school.infrastructure?.library) &&
        (!filter.playground || school.infrastructure?.playground) &&
        (!filter.toilets || school.infrastructure?.toilets) &&
        (!filter.boundarywall || school.infrastructure?.boundarywall)
      );
    });

  return (
    <div>
       <Navbar />
   
       <div className=" bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen text-gray-800">
      

      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12 tracking-wide animate-fade-in-down">
          🎓 Compare Schools
        </h1>

        {/* Search and Filters */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in">
          <input
            type="text"
            placeholder="🔍 Search schools..."
            className="p-3 rounded-2xl border border-gray-300 w-full md:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="flex gap-3 flex-wrap">
            {['library', 'playground', 'toilets', 'boundarywall'].map((key) => (
              <label
                key={key}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-md transition text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={key}
                  checked={filter[key]}
                  onChange={handleFilterChange}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* School Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredSchools.map((school) => (
            <div
              key={school._id}
              onClick={() => toggleSelect(school)}
              className={`bg-white p-6 rounded-3xl border hover:shadow-2xl cursor-pointer transition duration-300 transform hover:scale-105 relative overflow-hidden ${
                selected.find((s) => s._id === school._id) ? 'border-indigo-500 border-4' : 'shadow-md'
              }`}
            >
              <div className="absolute right-3 top-3">
                {selected.find((s) => s._id === school._id) && (
                  <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full font-semibold">
                    Selected
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-700">
                  <School size={22} /> {school.name}
                </h2>
              </div>

              <p className={`text-sm font-semibold mb-1 ${
                school.status === 'Fully Furnished' ? 'text-green-600' :
                school.status === 'Partially Equipped' ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                {school.status}
              </p>
              <p className="text-gray-600 text-sm">🎯 Grades: {school.grades}</p>
              <p className="text-gray-600 text-sm">🏫 Classes: {school.classes}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {selected.length === 2 && (
          <div className="mt-16 border-t-2 border-gray-300 pt-10 animate-slide-in-up">
            <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-10">🔍 Detailed Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="font-bold text-indigo-500 text-lg">Feature</div>
              <div className="font-bold text-gray-800 text-lg">{selected[0].name}</div>
              <div className="font-bold text-gray-800 text-lg">{selected[1].name}</div>

              <div className="text-gray-700">Grades</div>
              <div className="text-gray-600">{selected[0].grades}</div>
              <div className="text-gray-600">{selected[1].grades}</div>

              <div className="text-gray-700">Classes</div>
              <div className="text-gray-600">{selected[0].classes}</div>
              <div className="text-gray-600">{selected[1].classes}</div>

              {['toilets', 'library', 'playground', 'boundarywall'].map((feature) => (
                <React.Fragment key={feature}>
                  <div className="capitalize text-gray-700">{feature}</div>
                  <div className="text-gray-600">
                    {selected[0].infrastructure?.[feature] ? (
                      <CheckCircle className="text-green-500 inline" />
                    ) : (
                      <XCircle className="text-red-500 inline" />
                    )}
                  </div>
                  <div className="text-gray-600">
                    {selected[1].infrastructure?.[feature] ? (
                      <CheckCircle className="text-green-500 inline" />
                    ) : (
                      <XCircle className="text-red-500 inline" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

     
    </div>

    <Footer />
    </div>
   
  );
};

export default CompareSchools;

// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// const CompareSchool = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className=" bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen text-gray-800">
//         <h1>Compare Schools</h1>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default CompareSchool
