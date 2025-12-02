

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaChartPie } from "react-icons/fa";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const stateData = {
//   Lucknow: {
//     image: "/src/assets/image/lucknow.jpg",
//     summary: {
//       fullyFurnished: 60.79,
//       partiallyEquipped: 13.08,
//       needsImprovement: 26.14,
//     },
//   },
//   Gorakhpur: {
//     image: "/src/assets/image/gorakhpur.jpg",
//     summary: {
//       fullyFurnished: 14.55,
//       partiallyEquipped: 28.47,
//       needsImprovement: 56.98,
//     },
    
//   },
//   Kheri: {
//     image: "/src/assets/image/kheri.jpg",
//     summary: {
//       fullyFurnished: 37.04,
//       partiallyEquipped: 20.99,
//       needsImprovement: 41.97,
//     },
//   },
//   SouthGoa: {
//     image: "/src/assets/image/goa.jpg",
//     summary: {
//       fullyFurnished: 48.20,
//       partiallyEquipped: 17.20,
//       needsImprovement: 34.60,
//     },
//   },
//   Koraput: {
//     image: "/src/assets/image/koraput.jpg",
//     summary: {
//       fullyFurnished: 60.50,
//       partiallyEquipped: 13.15,
//       needsImprovement: 26.35,
//     },
//   },
// };

// export default function AiAnalysis() {
//   const [selectedState, setSelectedState] = useState(null);
//   const currentData = selectedState ? stateData[selectedState] : null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans">
//       <Navbar />

//       <main className="p-6 max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-[#101c2c] rounded-3xl shadow-2xl p-8"
//         >
//           <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400 drop-shadow">
//             <FaChartPie className="inline mr-2" />
//             AI-Based State Infrastructure Insights
//           </h2>

//           {/* Dropdown */}
//           <div className="mb-6">
//             <label className="block text-white mb-3 text-lg font-medium">
//               <FaMapMarkerAlt className="inline mr-2 text-cyan-400" /> Choose District:
//             </label>
//             <motion.select
//               whileHover={{ scale: 1.03 }}
//               className="w-full p-3 rounded-lg bg-[#15273f] border border-cyan-600 shadow focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-white"
//               value={selectedState || ""}
//               onChange={(e) =>
//                 setSelectedState(e.target.value === "" ? null : e.target.value)
//               }
//             >
//               <option value="" disabled>
//                 -- Select a District --
//               </option>
//               {Object.keys(stateData).map((state) => (
//                 <option key={state} value={state} className="text-black">
//                   {state}
//                 </option>
//               ))}
//             </motion.select>
//           </div>

//           {/* Conditional Chart and Summary */}
//           {currentData && (
//             <div className="flex flex-col items-center space-y-8 mt-4">
//               <motion.img
//                 src={currentData.image}
//                 alt={`Pie chart for ${selectedState}`}
//                 className="w-80 rounded-xl border-2 border-cyan-400 shadow-xl hover:scale-105 transition-transform duration-500"
//                 whileHover={{ rotate: [0, 1, -1, 0] }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               />

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="bg-gradient-to-r from-[#132b45] to-[#1b3a5c] p-5 rounded-xl w-full text-center shadow-lg"
//               >
//                 <h3 className="text-2xl font-semibold mb-3 text-cyan-300 tracking-wide">
//                   {selectedState} Summary Report
//                 </h3>
//                 <p className="text-lg mb-1">
//                   ✅ <span className="font-bold text-green-400">Fully Furnished:</span>{" "}
//                   {currentData.summary.fullyFurnished}%
//                 </p>
//                 <p className="text-lg mb-1">
//                   ⚠️ <span className="font-bold text-yellow-400">Partially Equipped:</span>{" "}
//                   {currentData.summary.partiallyEquipped}%
//                 </p>
//                 <p className="text-lg">
//                   ❌ <span className="font-bold text-red-400">Needs Improvement:</span>{" "}
//                   {currentData.summary.needsImprovement}%
//                 </p>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChartPie, FaInfoCircle, FaDownload, FaPrint } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const stateData = {
  Lucknow: {
    image: "/src/assets/image/lucknow.jpg",
    summary: {
      fullyFurnished: 60.79,
      partiallyEquipped: 13.08,
      needsImprovement: 26.14,
    },
    recommendations: [
      "Focus maintenance efforts on the 26.14% schools that need improvement",
      "Implement standardized equipment protocols across all schools",
      "Conduct quarterly infrastructure audits in high-need areas"
    ]
  },
  Gorakhpur: {
    image: "/src/assets/image/gorakhpur.jpg",
    summary: {
      fullyFurnished: 14.55,
      partiallyEquipped: 28.47,
      needsImprovement: 56.98,
    },
    recommendations: [
      "Prioritize immediate renovation for schools in critical condition",
      "Develop a phased improvement plan for the 56.98% schools needing upgrades",
      "Allocate emergency infrastructure funds to address safety concerns"
    ]
  },
  Kheri: {
    image: "/src/assets/image/kheri.jpg",
    summary: {
      fullyFurnished: 37.04,
      partiallyEquipped: 20.99,
      needsImprovement: 41.97,
    },
    recommendations: [
      "Create balanced improvement schedule addressing the 41.97% schools needing upgrades",
      "Focus on transitioning partially equipped schools to fully furnished status",
      "Implement rural school improvement initiative for remote areas"
    ]
  },
  SouthGoa: {
    image: "/src/assets/image/goa.jpg",
    summary: {
      fullyFurnished: 48.20,
      partiallyEquipped: 17.20,
      needsImprovement: 34.60,
    },
    recommendations: [
      "Develop tourism-education partnership programs to improve infrastructure",
      "Target coastal schools for weather-resistant infrastructure upgrades",
      "Implement specialized equipment upgrades for regional vocational programs"
    ]
  },
  Koraput: {
    image: "/src/assets/image/koraput.jpg",
    summary: {
      fullyFurnished: 60.50,
      partiallyEquipped: 13.15,
      needsImprovement: 26.35,
    },
    recommendations: [
      "Extend successful infrastructure models from fully furnished schools",
      "Address tribal area schools with culturally appropriate improvements",
      "Develop mobile resource facilities for remote educational centers"
    ]
  },
};

export default function AiAnalysis() {
  const [selectedState, setSelectedState] = useState(null);
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const currentData = selectedState ? stateData[selectedState] : null;

  useEffect(() => {
    // Format the current date in a professional manner
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(now.toLocaleDateString('en-IN', options));
  }, []);

  // Reset report generated state when district changes
  useEffect(() => {
    setIsReportGenerated(false);
  }, [selectedState]);

  const calculateColorClass = (percentage) => {
    if (percentage >= 50) return "text-green-700";
    if (percentage >= 25) return "text-amber-600";
    return "text-red-700";
  };

  const handleGenerateReport = () => {
    setIsReportGenerated(true);
    // In a real application, this could trigger analytics processing or report generation
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulate download functionality
    alert("Report download started");
    // In a real app, this would generate and download a PDF/Excel report
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100  text-gray-800 font-sans print:bg-white">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Educational Infrastructure Analysis
              </h1>
              <p className="text-gray-600 mt-1">
                AI-Powered Insights for Educational Infrastructure Management
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/src/assets/image/emblem.png" 
                alt="Government Emblem" 
                className="h-16"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel - Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-700" />
                District Selection
              </h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Select District for Analysis:
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  value={selectedState || ""}
                  onChange={(e) =>
                    setSelectedState(e.target.value === "" ? null : e.target.value)
                  }
                >
                  <option value="" disabled>
                    -- Select a District --
                  </option>
                  {Object.keys(stateData).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {selectedState && (
                <div className="space-y-4">
                  <button
                    onClick={handleGenerateReport}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded font-medium transition duration-200 flex items-center justify-center"
                  >
                    <FaChartPie className="mr-2" />
                    Generate Analysis Report
                  </button>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-2">Report Options:</h3>
                    <div className="space-y-2">
                      <button 
                        onClick={handlePrint}
                        disabled={!isReportGenerated}
                        className={`w-full py-2 px-4 rounded font-medium transition flex items-center justify-center ${isReportGenerated ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                      >
                        <FaPrint className="mr-2" />
                        Print Report
                      </button>
                      
                      <button 
                        onClick={handleDownload}
                        disabled={!isReportGenerated}
                        className={`w-full py-2 px-4 rounded font-medium transition flex items-center justify-center ${isReportGenerated ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                      >
                        <FaDownload className="mr-2" />
                        Download Report
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-200 text-gray-600 text-sm">
                <p className="flex items-start">
                  <FaInfoCircle className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  This system provides AI-assisted analysis of educational infrastructure across various districts.
                </p>
              </div>
            </div>
          </div>

          {/* Right panel - Analysis Results */}
          <div className="lg:col-span-2">
            {currentData && isReportGenerated ? (
              <div className="bg-white rounded-lg shadow-md border border-gray-200">
                {/* Report Header */}
                <div className="border-b border-gray-200 bg-gray-50 p-6 rounded-t-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedState} District Analysis
                      </h2>
                      <p className="text-gray-600 mt-1">Report generated on {currentDate}</p>
                    </div>
                    <div className="mt-2 md:mt-0 py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Official Report
                    </div>
                  </div>
                </div>
                
                {/* Report Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* District Image */}
                    <div className="order-2 md:order-1">
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={currentData.image}
                          alt={`${selectedState} District`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
                          Geographic view of {selectedState} district
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Summary */}
                    <div className="order-1 md:order-2">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 pb-2 border-b border-gray-200">
                          Infrastructure Status Summary
                        </h3>
                        
                        <div className="space-y-4 pt-2">
                          {/* Fully Furnished */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-sm text-gray-700">Fully Furnished</span>
                              <span className={`font-semibold text-sm ${calculateColorClass(currentData.summary.fullyFurnished)}`}>
                                {currentData.summary.fullyFurnished}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-green-600 h-2.5 rounded-full" 
                                style={{ width: `${currentData.summary.fullyFurnished}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Partially Equipped */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-sm text-gray-700">Partially Equipped</span>
                              <span className={`font-semibold text-sm ${calculateColorClass(currentData.summary.partiallyEquipped)}`}>
                                {currentData.summary.partiallyEquipped}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-amber-500 h-2.5 rounded-full" 
                                style={{ width: `${currentData.summary.partiallyEquipped}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Needs Improvement */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-sm text-gray-700">Needs Improvement</span>
                              <span className={`font-semibold text-sm ${calculateColorClass(currentData.summary.needsImprovement)}`}>
                                {currentData.summary.needsImprovement}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-red-600 h-2.5 rounded-full" 
                                style={{ width: `${currentData.summary.needsImprovement}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Overall Status:</span>
                            <span className={`py-1 px-3 rounded-full text-xs font-medium ${
                              currentData.summary.fullyFurnished > 50 
                                ? "bg-green-100 text-green-800"
                                : currentData.summary.needsImprovement > 40
                                ? "bg-red-100 text-red-800"
                                : "bg-amber-100 text-amber-800"
                            }`}>
                              {currentData.summary.fullyFurnished > 50 
                                ? "Good" 
                                : currentData.summary.needsImprovement > 40
                                ? "Critical"
                                : "Needs Attention"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recommendations */}
                  <div className="mt-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="bg-gray-50 p-4 border-b border-gray-200 rounded-t-lg">
                      <h3 className="text-lg font-semibold text-gray-800">
                        AI-Generated Recommendations
                      </h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {currentData.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Additional Notes */}
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
                    <p className="text-sm">
                      <strong>Note:</strong> This analysis is generated using AI algorithms based on infrastructure data collected from field surveys and official records. For detailed school-wise breakdown, please refer to the downloadable report.
                    </p>
                  </div>
                </div>
                
                {/* Report Footer */}
                <div className="border-t border-gray-200 p-4 text-sm text-gray-500 flex justify-between items-center bg-gray-50 rounded-b-lg">
                  <div>
                    Report ID: AI-{selectedState.substring(0, 3).toUpperCase()}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                  </div>
                  <div>
                    Educational Infrastructure Management System
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center h-full border border-gray-200">
                <img 
                  src="/src/assets/image/analysis.png" 
                  alt="Analysis" 
                  className="w-32 h-32 opacity-50 mb-4"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23CBD5E0' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'%3E%3C/path%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'%3E%3C/line%3E%3C/svg%3E";
                  }}
                />
                {selectedState ? (
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to Generate Analysis</h3>
                    <p className="text-gray-600 mb-4">
                      {selectedState} district selected. Click the "Generate Analysis Report" button to view the infrastructure analysis.
                    </p>
                    <button
                      onClick={handleGenerateReport}
                      className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded font-medium transition duration-200"
                    >
                      Generate Report
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No District Selected</h3>
                    <p className="text-gray-600">
                      Please select a district from the dropdown menu to view infrastructure analysis.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* Print-specific styles */}
      <style jsx>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}