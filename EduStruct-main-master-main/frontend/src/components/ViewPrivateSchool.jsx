
import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaSchool } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import getAllSchoolByUser from '../hooks/getAllSchoolByUser';    
import axios from 'axios';
import { setSchools, updateSchool } from '../redux/school';
import { toast } from 'react-toastify';
const ViewPrivateSchool = () => {
  const dispatch = useDispatch();

  getAllSchoolByUser(); // fetch data into Redux

  const { schools = [], loading = false } = useSelector((state) => state.school); // safer defaults

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);



  const openEditModal = (school) => {
    setSelectedSchool({ ...school });
    setEditModalOpen(true);
  };

  const openDeleteModal = (school) => {
    setSelectedSchool(school);
    setDeleteModalOpen(true);
  };

const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedSchool((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleInfraChange = (e) => {
    const { name, checked } = e.target;
    setSelectedSchool((prev) => ({
      ...prev,
      infrastructure: {
        ...prev.infrastructure,
        [name]: checked,
      },
    }));
  };
  

console.log(selectedSchool);
 // adjust path

const saveChanges = async () => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/school/update/${selectedSchool._id}`,
      selectedSchool,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (res.data.success) {
      dispatch(updateSchool(res.data.updatedSchool)); // dispatch the single updated school
      setEditModalOpen(false);
      toast.success("School updated successfully");
    }
  } catch (error) {
    console.error("Failed to update school", error);
    toast.error("School update failed");
  }
};

  

  const deleteSchool = async () => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/school/delete/${selectedSchool._id}`);
  
      if (res.data.success) {
        // Remove the deleted school from Redux state directly
        dispatch(setSchools(schools.filter((sch) => sch._id !== selectedSchool._id)));
        toast.success("School deleted successfully");
      }
  
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Failed to delete school:", error);
      toast.error("School deletion failed");
    }
  };
  
 
  return (
    <div className="bg-gradient-to-tr from-purple-100 to-blue-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10 flex justify-center items-center gap-3">
          <FaSchool className="text-indigo-600" /> Your Added Schools
        </h2>

        {loading ? (
          <div className="text-center text-indigo-600 text-lg">Loading schools...</div>
        ) : schools.length === 0 ? (
          <div className="text-center text-gray-600">No schools found.</div>
        ) : (
            <div className="grid grid-cols-1 gap-10">
            {Array.isArray(schools) &&
            
            schools.map((school) => (
              <div
                key={school._id}
                className="bg-white shadow-2xl rounded-3xl p-8 border-l-8 border-indigo-600 transition-all hover:scale-[1.01] hover:shadow-3xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-extrabold text-indigo-800 flex items-center gap-3">
                    <FaSchool className="text-indigo-600" /> {school.name}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      className="px-5 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 cursor-pointer"
                      onClick={() => openEditModal(school)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 cursor-pointer"
                      onClick={() => openDeleteModal(school)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
          
                <div className="text-lg text-gray-700 space-y-3">
                  <p>
                    <strong className="text-gray-900">Grades:</strong> {school.grades}
                  </p>
                  <p>
                    <strong className="text-gray-900">Classes:</strong> {school.classes}
                  </p>
                  <p>
                    <strong className="text-gray-900">Status:</strong>{" "}
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        school.status === "Fully Furnished"
                          ? "bg-green-500"
                          : school.status === "Partially Furnished"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {school.status}
                    </span>
                  </p>
                  <p>
                    <strong className="text-gray-900">Infrastructure:</strong>{" "}
                    <span className="italic text-gray-600">
                      {Object.entries(school.infrastructure || {})
                        .filter(([_, value]) => value)
                        .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
                        .join(", ") || "None"}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        )}
      </div>

      {/* Edit Modal */}
      {editModalOpen && selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Edit School</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={selectedSchool.name}
                onChange={handleEditChange}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="School Name"
              />
              <input
                type="text"
                name="grades"
                value={selectedSchool.grades}
                onChange={handleEditChange}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Grades"
              />
              <input
                type="number"
                name="classes"
                value={selectedSchool.classes}
                onChange={handleEditChange}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Classes"
              />
              <select
                name="status"
                value={selectedSchool.status}
                onChange={handleEditChange}
                className="w-full border px-4 py-2 rounded-md"
              >
                <option value="Fully Furnished">Fully Furnished</option>
                <option value="Partially Furnished">Partially Furnished</option>
                <option value="Needs Improvement">Needs Improvement</option>
              </select>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {Object.keys(selectedSchool.infrastructure || {}).map((item) => (
                  <label key={item} className="flex items-center">
                    <input
                      type="checkbox"
                      name={item}
                      checked={selectedSchool.infrastructure[item]}
                      onChange={handleInfraChange}
                      className="mr-2"
                    />
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                ))}
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={saveChanges}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
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

      <Footer />
    </div>
  );
};

export default ViewPrivateSchool;
