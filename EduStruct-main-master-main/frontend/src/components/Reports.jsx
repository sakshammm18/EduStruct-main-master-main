// import { DownloadIcon } from 'lucide-react';
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell, Legend as PieLegend } from 'recharts';
// import { BarChart, Bar } from 'recharts';
// import Navbar from './Navbar';  
// import Footer from './Footer';
// import { useSelector } from 'react-redux';
// import getAllSchools from '../hooks/getAllSchools';
// import getAllUsers from '../hooks/getAllUsers';
// // Sample data for charts

// const schoolApprovalData = [
//   { name: 'Jan', approval: 30 },
//   { name: 'Feb', approval: 50 },
//   { name: 'Mar', approval: 70 },
//   { name: 'Apr', approval: 90 },
// ];

// const schoolTypeData = [
//   { name: 'Government', value: 60 },
//   { name: 'Private', value: 40 },
// ];

// const districtData = [
//   { name: 'District 1', value: 10 },
//   { name: 'District 2', value: 20 },
//   { name: 'District 3', value: 30 },
//   { name: 'District 4', value: 40 },
// ];

// // AI Analysis Report Sample
// const urgentImprovement = 25;
// const missingFacilities = {
//   toilets: 10,
//   electricity: 15,
//   boundaryWalls: 20,
// };

// // Top Cards Data
// const statsData = [
//   { title: 'Total Schools', value: 200 },
//   { title: 'Approved Schools', value: 150 },
//   { title: 'Pending Approval Schools', value: 50 },
//   { title: 'Private vs Government Schools', value: '60% Government, 40% Private' },
//   { title: 'Total Users', value: 500 },
// ];

// // Download Report as CSV functionality
// const downloadCSV = () => {
//   const data = [
//     ['School Name', 'Status', 'District', 'Facilities'],
//     ['School A', 'Approved', 'District 1', 'Toilets, Electricity, Boundary Wall'],
//     ['School B', 'Pending', 'District 2', 'Electricity, Boundary Wall'],
//     ['School C', 'Approved', 'District 3', 'Toilets, Boundary Wall'],
//   ];

//   const csvContent = 'data:text/csv;charset=utf-8,' + data.map(row => row.join(',')).join('\n');

//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement('a');
//   link.setAttribute('href', encodedUri);
//   link.setAttribute('download', 'school_report.csv');
//   document.body.appendChild(link);
//   link.click();
// };

// const Reports = () => {

//   return (
//     <div>
//          <Navbar/>
// <div className="min-h-screen bg-gray-100 py-10 px-6">
       
//       <div className="container mx-auto">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Reports</h2>

//         {/* Top Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {statsData.map((stat, index) => (
//             <div key={index} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
//               <h3 className="text-2xl font-semibold text-white mb-2">{stat.title}</h3>
//               <p className="text-3xl font-bold text-white">{stat.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Graphs / Charts */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
//           {/* School Approval Progress */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">School Approval Progress</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={schoolApprovalData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="approval" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Schools by Type */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Schools by Type</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie data={schoolTypeData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8" label>
//                   {schoolTypeData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
//                   ))}
//                 </Pie>
//                 <PieLegend verticalAlign="top" align="center" />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Schools by District */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Schools by District</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={districtData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#8884d8" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* AI Analysis Report */}
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-12 hover:shadow-xl transition-shadow">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Analysis Report</h3>
//           <div className="text-sm mb-4">
//             <p>Schools needing urgent improvement: {urgentImprovement}</p>
//             <p>Facilities missing most:</p>
//             <ul className="list-disc pl-6">
//               <li>Toilets: {missingFacilities.toilets}</li>
//               <li>Electricity: {missingFacilities.electricity}</li>
//               <li>Boundary Walls: {missingFacilities.boundaryWalls}</li>
//             </ul>
//           </div>
//         </div>

//         {/* Downloadable Report */}
//         <div className="flex justify-end mb-12">
//           <button 
//             onClick={downloadCSV} 
//             className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center transition-all duration-300"
//           >
//             <DownloadIcon className="h-5 w-5 mr-2" />
//             Download Report
//           </button>
//         </div>

//         {/* Improvement Tracker Overview */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Improvement Tracker Overview</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-green-500 text-white p-6 rounded-lg text-center">
//               <h4 className="font-semibold">Fully Furnished</h4>
//               <p className="text-2xl">50</p>
//             </div>
//             <div className="bg-yellow-500 text-white p-6 rounded-lg text-center">
//               <h4 className="font-semibold">Partially Furnished</h4>
//               <p className="text-2xl">100</p>
//             </div>
//             <div className="bg-red-500 text-white p-6 rounded-lg text-center">
//               <h4 className="font-semibold">Urgent Attention Needed</h4>
//               <p className="text-2xl">50</p>
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </div>
//     <Footer/>
//     </div>
    
//   );
// };

// export default Reports;

import { DownloadIcon, FileDownIcon, PieChartIcon, BarChart3Icon, LineChartIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend as PieLegend } from 'recharts';
import { BarChart, Bar } from 'recharts';
import Navbar from './Navbar';  
import Footer from './Footer';
import { useSelector } from 'react-redux';

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    statusDistribution: [],
    facilitiesNeeded: {}
  });
  
  // Get data from Redux store
  const { allSchools = [] } = useSelector((state) => state.school);
  const { allUsers = [] } = useSelector((state) => state.auth);
  
  // Process data when Redux state changes
  useEffect(() => {
    if (allSchools.length > 0) {
      // Process data for charts
      processDataForCharts(allSchools);
      setLoading(false);
    }
  }, [allSchools]);
  
  // Process data for charts
  const processDataForCharts = (schoolsData) => {
    try {
      // Process school status distribution
      const statusData = processStatusData(schoolsData);
      
      // Process missing facilities data
      const facilitiesNeeded = processFacilitiesData(schoolsData);
      
      setChartData({
        statusDistribution: statusData,
        facilitiesNeeded
      });
    } catch (error) {
      console.error("Error processing chart data:", error);
      setLoading(false);
    }
  };
  
  // Helper function to process school status data
  const processStatusData = (allSchools) => {
    const statusCounts = {};
    
    allSchools.forEach(school => {
      const status = school.status || 'unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    
    return Object.keys(statusCounts).map(key => ({
      name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
      value: statusCounts[key]
    }));
  };
  
  // Helper function to process facilities data
  const processFacilitiesData = (schools) => {
    const facilitiesNeeded = {
      toilets: 0,
      library: 0,
      playground: 0,
      boundarywall: 0
    };
    
    allSchools.forEach(school => {
      if (school.infrastructure) {
        // Increment counters for missing facilities
        if (!school.infrastructure.toilets) facilitiesNeeded.toilets++;
        if (!school.infrastructure.library) facilitiesNeeded.library++;
        if (!school.infrastructure.playground) facilitiesNeeded.playground++;
        if (!school.infrastructure.boundarywall) facilitiesNeeded.boundarywall++;
      } else {
        // If facilities object doesn't exist, count all as missing
        facilitiesNeeded.toilets++;
        facilitiesNeeded.library++;
        facilitiesNeeded.playground++;
        facilitiesNeeded.boundarywall++;
      }
    });
    
    return facilitiesNeeded;
  };
  
  // Get basic stats for top cards
  const getBasicStats = () => {
    return [
      { 
        title: 'Total Schools', 
        value: allSchools.length, 
        icon: <PieChartIcon className="h-8 w-8 text-white" />,
        color: 'from-blue-500 to-blue-700'
      },
      { 
        title: 'Total Users', 
        value: allUsers.length, 
        icon: <BarChart3Icon className="h-8 w-8 text-white" />,
        color: 'from-purple-500 to-purple-700'
      }
    ];
  };
  
  // Get school status stats
  const getStatusStats = () => {
    const approvedSchools = allSchools.filter(school => school.status === 'Fully Furnished').length;
    const pendingSchools = allSchools.filter(school => school.status === 'Partially Furnished').length;
    const rejectedSchools = allSchools.filter(school => school.status === 'Needs Improvement').length;
    
    return [
      { 
        title: 'Fully Furnished', 
        value: approvedSchools, 
        icon: <LineChartIcon className="h-8 w-8 text-white" />,
        color: 'from-green-500 to-green-700'
      },
      { 
        title: 'Partially Furnished', 
        value: pendingSchools, 
        icon: <BarChart3Icon className="h-8 w-8 text-white" />,
        color: 'from-yellow-500 to-yellow-700'
      },
      { 
        title: 'Needs Improvement', 
        value: rejectedSchools, 
        icon: <LineChartIcon className="h-8 w-8 text-white" />,
        color: 'from-red-500 to-red-700'
      }
    ];
  };
  
  // Download CSV report
  const downloadCSV = () => {
    // Create CSV content from real data
    const headers = ['School Name', 'Status', 'Toilets', 'Library', 'Playground', 'Boundary Wall'];
    
    const rows = allSchools.map(school => [
      school.name || 'Unknown',
      school.status || 'Unknown',
      school.infrastructure?.toilets ? 'Yes' : 'No',
      school.infrastructure?.library ? 'Yes' : 'No',
      school.infrastructure?.playground ? 'Yes' : 'No',
      school.infrastructure?.boundarywall ? 'Yes' : 'No'
    ]);
    
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `school_report_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Get colors for charts
  const COLORS = ['#ffc107','#4caf50', '#f44336', '#2196f3', '#9c27b0', '#00bcd4'];
  
  // Get basic stats and status stats
  const basicStats = !loading ? getBasicStats() : [];
  const statusStats = !loading ? getStatusStats() : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading report data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-10 px-6">
        <div className="container mx-auto">
          {/* Title with nice border and shadow */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 inline-block pb-2 px-4 border-b-4 border-blue-500 shadow-sm">
              School Management Report
            </h2>
          </div>
          
          {/* Date and export controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600 font-medium">
              Report generated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <button 
              onClick={downloadCSV} 
              className="px-4 py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center transition-all duration-300 shadow-md"
            >
              <FileDownIcon className="h-5 w-5 mr-2" />
              Export Report
            </button>
          </div>

          {/* Basic Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {basicStats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${stat.color} p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* School Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {statusStats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${stat.color} p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/80 mt-1">
                      {Math.round((stat.value / allSchools.length) * 100)}% of total schools
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section with two charts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* School Status Distribution Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <PieChartIcon className="h-5 w-5 mr-2 text-blue-500" />
                School Status Distribution
              </h3>
              <p className="text-sm text-gray-600 mb-4">Overview of school approval statuses</p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.statusDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.statusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} schools`, 'Count']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Missing Facilities Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BarChart3Icon className="h-5 w-5 mr-2 text-blue-500" />
                Missing Facilities
              </h3>
              <p className="text-sm text-gray-600 mb-4">Schools lacking essential facilities</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart 
                  data={Object.entries(chartData.facilitiesNeeded).map(([key, value]) => ({
                    name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
                    value: value
                  }))}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value} schools`, 'Missing']} />
                  <Bar dataKey="value" fill="#8884d8">
                    {Object.entries(chartData.facilitiesNeeded).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Facilities Analysis */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-12 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Facilities Analysis</h3>
            
            <div className="space-y-6">
              {Object.entries(chartData.facilitiesNeeded).map(([facility, count], index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-lg font-semibold inline-block text-gray-700 capitalize">
                        {facility === 'boundaryWall' ? 'Boundary Wall' : facility}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-blue-600">
                        {count} schools lacking ({Math.round((count / allSchools.length) * 100)}%)
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-3 text-xs flex rounded bg-gray-200">
                    <div 
                      style={{ width: `${(count / allSchools.length) * 100}%` }} 
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${COLORS[index % COLORS.length].replace('#', 'bg-')}`}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {allSchools.length - count} schools ({Math.round(((allSchools.length - count) / allSchools.length) * 100)}%) have this facility
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This analysis shows the number of schools lacking each essential facility. 
                Schools with missing facilities may require immediate attention and resource allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;