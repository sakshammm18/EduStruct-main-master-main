
import React, { useState, useEffect } from 'react';
import { FaTrash, FaCheckCircle, FaEye, FaAward } from 'react-icons/fa';
import Navbar from './Navbar';
import { setAllSchools } from '../redux/school';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import getAllSchools from '../hooks/getAllSchools';
import axios from 'axios';
import { toast } from 'react-toastify';
const ManageSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();
  getAllSchools();
  const { allSchools = [] } = useSelector((state) => state.school);
  // Load Schools from LocalStorage (Badges saved)
  useEffect(() => {
  
      // Simulate fetching from server if not found in localStorage
      setTimeout(() => {
        // const fetchedSchools = [
        //   {
        //     id: 1,
        //     name: 'Green Valley School',
        //     grades: '1-8',
        //     classes: 12,
        //     status: 'Needs Improvement',
        //     badge: '',
        //     infrastructure: {
        //       toilets: true,
        //       library: true,
        //       playground: true,
        //       boundaryWall: true,
        //     },
        //   },
        //   {
        //     id: 2,
        //     name: 'Sunrise Public School',
        //     grades: '1-5',
        //     classes: 7,
        //     status: 'Fully Furnished',
        //     badge: '',
        //     infrastructure: {
        //       toilets: true,
        //       library: true,
        //       playground: false,
        //       boundaryWall: true,
        //     },
        //   },
        //   {
        //     id: 3,
        //     name: 'Mountain View Academy',
        //     grades: '6-12',
        //     classes: 15,
        //     status: 'Partially Equipped',
        //     badge: '',
        //     infrastructure: {
        //       toilets: true,
        //       library: false,
        //       playground: true,
        //       boundaryWall: false,
        //     },
        //   },
        // ];
        setSchools(allSchools); 
        setLoading(false);
        localStorage.setItem('schools', JSON.stringify(allSchools));
      }, 1000);
    
  }, []);

  // Save schools to localStorage whenever schools change
  useEffect(() => {
    if (allSchools.length > 0) {
      setSchools(allSchools);
      setLoading(false);
      localStorage.setItem('schools', JSON.stringify(allSchools));
    } else {
      const storedSchools = localStorage.getItem('schools');
      if (storedSchools) {
        setSchools(JSON.parse(storedSchools));
        setLoading(false);
      }
    }
  }, [allSchools]);
  

  const handleApprove = (schoolId) => {
    const updatedSchools = allSchools.map((school) =>
      school._id === schoolId
        ? { ...school, status: 'EduStruct Approved' }
        : school
    );
    setSchools(updatedSchools);
    localStorage.setItem('schools', JSON.stringify(updatedSchools));
  };
  
  const openDeleteModal = (school) => {
    setSelectedSchool(school);
    setDeleteModalOpen(true);
  };
  

const deleteSchool = async () => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/school/delete/${selectedSchool._id}`
);
      if (res.data.success) {
        const updatedSchools = allSchools.filter(sch => sch._id !== selectedSchool._id);
  
        // ✅ Update Redux and localStorage
        dispatch(setAllSchools(updatedSchools));
        localStorage.setItem('schools', JSON.stringify(updatedSchools));
        toast.success("School deleted successfully");
      }
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Failed to delete school:", error);
      toast.error("School deletion failed");
    }
  };
  
  
const handleViewDetails = (school) => {
    setSelectedSchool(school);

    setShowModal(true);
 };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSchool(null);
  };

//   const assignBadge = (schoolId) => {
//     const badgeName = prompt('Enter Badge name (e.g., "Top School", "EduStruct Approved")');
//     if (badgeName) {
//       const updatedSchools = allSchools.map((school) =>
//         school._id === schoolId
//           ? { ...school, badge: badgeName }
//           : school
//       );
//       setSchools(updatedSchools);
//       localStorage.setItem('schools', JSON.stringify(updatedSchools));
//     }
//   };
const assignBadge = (schoolId) => {
    const badgeName = prompt('Enter Badge name (e.g., "Top School", "EduStruct Approved")');
    if (badgeName) {
      const updatedSchools = allSchools.map((school) =>
        school._id === schoolId ? { ...school, badge: badgeName } : school
      );
  
      // ✅ Update Redux store
      dispatch(setAllSchools(updatedSchools));
  
      // ✅ Update local state
      setSchools(updatedSchools);
  
      // ✅ Update localStorage
      localStorage.setItem('schools', JSON.stringify(updatedSchools));
    }
  };
  
  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading Schools...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Manage Schools
          </h2>

          <div className="bg-white shadow-2xl rounded-xl overflow-x-auto p-6">
            <table className="w-full table-auto">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">School Name</th>
                  <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">Grades</th>
                  <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">Classes</th>
                  <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">Badge</th>
                  <th className="py-4 px-6 text-center text-sm uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allSchools.map((school) => (
                  <tr key={school._id} className="hover:bg-blue-50">
                    <td className="py-4 px-6 font-medium text-gray-700">{school.name}</td>
                    <td className="py-4 px-6">{school.grades}</td>
                    <td className="py-4 px-6">{school.classes}</td>
                    <td className="py-4 px-6">
                      {school.status === 'Pending' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      ) : school.status === 'Fully Furnished' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                          Fully Furnished
                        </span>
                      ) : school.status === 'Partially Equipped' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                          Partially Equipped
                        </span>
                      ) : school.status === 'Needs Improvement' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                          Needs Improvement
                        </span>
                      ) : school.status === 'EduStruct Approved' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                          ✅ EduStruct Approved
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          {school.status}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {school.badge ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                          {school.badge}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm italic">No Badge</span>
                      )}
                    </td>
                    <td className="py-4 px-6 flex items-center justify-center space-x-4">
                      <button
                        onClick={() => handleViewDetails(school)}
                        className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                        title="View Details"
                      >
                        <FaEye size={20} />
                      </button>
                      {school.status === 'Pending' && (
                        <button
                          onClick={() => handleApprove(school._id)}
                          className="text-green-600 hover:text-green-800 transition cursor-pointer"
                          title="Approve School"
                        >
                          <FaCheckCircle size={20} />
                        </button>
                      )}
                      <button
                        onClick={() => assignBadge(school._id)}
                        className="text-purple-600 hover:text-purple-800 transition cursor-pointer"
                        title="Assign Badge"
                      >
                        <FaAward size={20} />
                      </button>
                      <button
                   className="text-red-600 hover:text-red-800 transition cursor-pointer"
                      onClick={() => openDeleteModal(school)}
                    >
                      <FaTrash />
                    </button>
                    

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          {showModal && selectedSchool && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-2xl p-8 w-11/12 max-w-lg relative">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">{selectedSchool.name}</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Grades:</strong> {selectedSchool.grades}</p>
                  <p><strong>Classes:</strong> {selectedSchool.classes}</p>
                  <p><strong>Status:</strong> {selectedSchool.status}</p>
                  <p><strong>Badge:</strong> {selectedSchool.badge || 'No Badge Assigned'}</p>
                  <div>
                    <strong>Infrastructure:</strong>
                    <ul className="list-disc list-inside">
                      <li>Toilets: {selectedSchool.infrastructure.toilets ? '✅ Available' : '❌ Not Available'}</li>
                      <li>Library: {selectedSchool.infrastructure.library ? '✅ Available' : '❌ Not Available'}</li>
                      <li>Playground: {selectedSchool.infrastructure.playground ? '✅ Available' : '❌ Not Available'}</li>
                      <li>Boundary Wall: {selectedSchool.infrastructure.boundarywall ? '✅ Available' : '❌ Not Available'}</li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                >
                  ✖
                </button>
              </div>
            </div>
          )}

{deleteModalOpen && selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete <strong>{selectedSchool.name}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={deleteSchool}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ManageSchools;
