import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import getAllUsers from '../hooks/getAllUsers';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllUsers } from '../redux/authSlice';
import { toast } from 'react-toastify';

const ManageUsers = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const dispatch = useDispatch();
  const { allUsers = [] } = useSelector((state) => state.auth);
  getAllUsers();
  console.log(allUsers);
  useEffect(() => {
    setTimeout(() => {
  
    //     { id: 1, name: 'Alice', role: 'SuperAdmin', email: 'alice@admin.com' },
    //     { id: 2, name: 'Bob', role: 'OfficerAdmin', email: 'bob@district.com' },
    //     { id: 3, name: 'Charlie', role: 'PrivateSchoolAdmin', email: 'charlie@school.com' },
    //     { id: 4, name: 'David', role: 'GeneralPublic', email: 'david@gmail.com' },
    //     { id: 5, name: 'Eva', role: 'OfficerAdmin', email: 'eva@district.com' },
    //     { id: 6, name: 'Frank', role: 'PrivateSchoolAdmin', email: 'frank@school.com' },
    //   ]; 
      setUser(allUsers);
      setLoading(false);
      localStorage.setItem('users', JSON.stringify(allUsers));
    }, 1000);
  }, []);
  useEffect(() => {
    if (allUsers.length > 0) {
      setUser(allUsers);
      setLoading(false);
      localStorage.setItem('users', JSON.stringify(allUsers));
    } else {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        setUser(JSON.parse(storedUsers));
        setLoading(false);
      }
    }
  }, [allUsers]);
  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const groupedUsers = filteredUsers.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
  }, {});


  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/deleteUser/${userToDelete._id}`);
    if(res.data.success){
        const updatedUsers = allUsers.filter(user => user._id !== userToDelete._id);    
      dispatch(setAllUsers(updatedUsers));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      toast.success("User deleted successfully");
    }
      setShowModal(false);
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("User deletion failed");
    }
  };

  const closeModal = () => {
    setUserToDelete(null);
    setShowModal(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
        <div className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading Users...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-green-100">

      {/* Navbar */}
     <Navbar/>
      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Users Management
          </h2>

          {/* Search and Filter Inputs */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 mb-8">
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="SuperAdmin">Super Admin</option>
              <option value="OfficerAdmin">Officer Admin</option>
              <option value="PrivateSchoolAdmin">Private School Admin</option>
              <option value="GeneralPublic">General Public</option>
            </select>
          </div>

          {/* Users List */}
          {Object.keys(groupedUsers).length === 0 ? (
            <p className="text-center text-gray-500">No users found.</p>
          ) : (
            Object.keys(groupedUsers).map((role, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-semibold text-green-700 mb-4 capitalize">
                  {role.replace(/([A-Z])/g, ' $1').trim()}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groupedUsers[role].map((user) => (
                    <div
                      key={user.id}
                      className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative"
                    >
                      <div>
                        <h4 className="text-xl font-semibold text-green-600">{user.fullname}</h4>
                        <p className="text-gray-700 mt-2"><strong>Email:</strong> {user.email}</p>
                        <p className="text-gray-500 mt-1 text-sm"><strong>Role:</strong> {role}</p>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => openDeleteModal(user)}
                        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-300 cursor-pointer"
                        title="Delete User"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{userToDelete?.fullname}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
    <Footer/>

    </div>
  );
};

export default ManageUsers;
