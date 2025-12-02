
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Ruler, Fence, Landmark, Droplets, Flashlight, Users } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import jsPDF from 'jspdf';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const sectors = [
  { key: "toilets", label: "Separate Toilets", icon: <Ruler /> },
  { key: "drinkingWater", label: "Drinking Water", icon: <Droplets /> },
  { key: "electricity", label: "Electricity", icon: <Flashlight /> },
  { key: "boundaryWall", label: "Boundary Wall", icon: <Fence /> },
  { key: "teacherStudentRatio", label: "Teacher-Student Ratio", icon: <Users /> },
  { key: "playground", label: "Playground", icon: <Landmark /> }
];

const governmentNorms = {
  gradesOffered: { min: 5, max: 12 },
  totalStudents: 30,
  teacherStudentRatio: 30,
  toilets: true,
  drinkingWater: true,
  electricity: true,
  boundaryWall: true,
};

const ImprovementTracker = () => {
  const { state } = useLocation();
  
  // Make sure we're handling the data structure correctly
  // This ensures data is properly extracted from state regardless of its structure
  const formData = state?.status || state || {};
  
  // Debug logging to help diagnose issues
  console.log("Received form data:", formData);

  const compareWithNorms = (field, value) => {
    console.log(`Comparing ${field} with value:`, value);
    
    // Ensure value is treated as the right type
    let numericValue = field === "gradesOffered" || field === "totalStudents" || 
                        field === "teacherStudentRatio" || field === "classrooms" ? 
                        Number(value) : value;
    
    switch (field) {
      case "gradesOffered":
        return numericValue >= governmentNorms.gradesOffered.min && numericValue <= governmentNorms.gradesOffered.max;
      case "totalStudents":
        return numericValue >= governmentNorms.totalStudents;
      case "teacherStudentRatio":
        return numericValue <= governmentNorms.teacherStudentRatio;
      case "classrooms":
        // Make sure gradesOffered exists before comparing
        if (!formData.gradesOffered) return true; // Default to true if we can't compare
        const requiredClassrooms = Number(formData.gradesOffered);
        return !isNaN(requiredClassrooms) ? numericValue >= requiredClassrooms : true;
      case "toilets":
      case "drinkingWater":
      case "electricity":
      case "boundaryWall":
        // Convert string "true"/"false" to actual boolean if needed
        if (typeof value === "string") {
          const lowerValue = value.toLowerCase();
          if (lowerValue === "true") return true;
          if (lowerValue === "false") return false;
        }
        return value === governmentNorms[field];
      default:
        return false;
    }
  };

  const sectorStatus = {
    toilets: compareWithNorms("toilets", formData.toilets),
    drinkingWater: compareWithNorms("drinkingWater", formData.drinkingWater),
    electricity: compareWithNorms("electricity", formData.electricity),
    boundaryWall: compareWithNorms("boundaryWall", formData.boundaryWall),
    teacherStudentRatio: compareWithNorms("teacherStudentRatio", formData.teacherStudentRatio),
    playground: false,
  };

  const getTip = (key) => {
    const tips = {
      gradesOffered: "Adjust the grades offered to meet government norms (1-5).",
      totalStudents: "Ensure minimum student enrollment meets government requirements.",
      classrooms: "Provide at least one classroom for each grade offered.",
      toilets: "Ensure gender-separated toilet facilities are in place.",
      drinkingWater: "Install a clean drinking water source.",
      electricity: "Ensure consistent electricity supply.",
      boundaryWall: "Secure the premises with a boundary wall.",
      teacherStudentRatio: "Recruit additional teachers to maintain the 1:30 ratio.",
      playground: "Provide outdoor space for student recreation.",
    };
    return tips[key];
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.setTextColor(50, 50, 50);
    doc.text("📋 EduStruct School Report", 50, 20);
  
    doc.setDrawColor(0, 0, 0);
    doc.line(10, 30, 200, 30);
  
    let y = 40;
    doc.setFontSize(14);
    doc.setTextColor(30, 45, 255);
    doc.text("📊 School Status", 20, y);
    y += 10;
  
    // Make sure we're only processing fields that have values
    const fieldsToProcess = Object.entries(formData).filter(([_, value]) => value !== undefined);
    
    // Add specific logging to diagnose gradesOffered and classrooms
    console.log("Fields to process in PDF:", fieldsToProcess);
    
    fieldsToProcess.forEach(([key, value]) => {
      const isComplete = compareWithNorms(key, value);
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      const comparisonText = isComplete ? "✅ Meets Norm" : "❌ Needs Improvement";
      
      // Build a proper comparison detail string based on field type
      let comparisonDetail = '';
      if (!isComplete) {
        if (key === "gradesOffered") {
          comparisonDetail = `(Required: ${governmentNorms.gradesOffered.min}-${governmentNorms.gradesOffered.max})`;
        } else if (key === "teacherStudentRatio") {
          comparisonDetail = `(Required: <= ${governmentNorms.teacherStudentRatio})`;
        } else if (key === "classrooms") {
          const requiredValue = formData.gradesOffered ? formData.gradesOffered : "?";
          comparisonDetail = `(Required: >= ${requiredValue})`;
        } else if (typeof governmentNorms[key] === "boolean") {
          comparisonDetail = `(Required: Yes)`;
        } else if (governmentNorms[key]) {
          comparisonDetail = `(Required: ${governmentNorms[key]})`;
        }
      }
  
      doc.setFontSize(12);
      doc.setTextColor(isComplete ? 0 : 255, isComplete ? 153 : 0, 0);
      // Format the text carefully with proper spacing
      const statusText = `${label}: ${value}`;
      doc.text(statusText, 20, y);
      
      // Position the comparison text after the status text with proper spacing
      const textWidth = doc.getStringUnitWidth(statusText) * 12 / doc.internal.scaleFactor;
      doc.text(comparisonText, 20 + textWidth + 5, y);
      
      // Add the detail on the next line if needed
      if (comparisonDetail) {
        y += 8;
        doc.text(comparisonDetail, 30, y);
      }
      
      y += 10;
    });
  
    doc.setFontSize(14);
    doc.setTextColor(255, 69, 0);
    doc.text("🔧 Suggestions:", 20, y + 10);
    y += 20;
  
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Generate suggestions for fields that don't meet norms
    let suggestionCount = 0;
    fieldsToProcess.forEach(([key, value]) => {
      if (!compareWithNorms(key, value)) {
        const tip = getTip(key);
        if (tip) {
          doc.text(`• ${tip}`, 20, y);
          y += 8;
          suggestionCount++;
        }
      }
    });
    
    // Add a fallback message if no suggestions were generated
    if (suggestionCount === 0) {
      doc.text("• No specific suggestions available based on provided data.", 20, y);
    }
  
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const date = new Date().toLocaleDateString();
    doc.text(`Report generated on: ${date}`, 20, doc.internal.pageSize.height - 20);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 20);
  
    doc.rect(10, 30, 190, y - 40);
    doc.save("edustruct-school-report.pdf");
  
    toast.success("PDF report downloaded successfully");
  };
 
  return (
    <div>
      <Navbar />
      <section className="py-20 bg-gradient-to-br from-indigo-110 via-purple-100 to-pink-100 px-6" id="tracker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">📊 Improvement Tracker</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map(({ key, label, icon }) => {
              const isComplete = sectorStatus[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl shadow-md p-6 border-l-8 ${isComplete ? "border-green-500 bg-white" : "border-red-500 bg-red-50"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-700">{icon}</div>
                    <h3 className="text-xl font-semibold">{label}</h3>
                    <div className="ml-auto">
                      {isComplete ? <CheckCircle className="text-green-600" /> : <AlertTriangle className="text-red-600" />}
                    </div>
                  </div>

                  <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
                    <motion.div
                      className={`h-3 rounded-full ${isComplete ? "bg-green-500 w-full" : "bg-red-500 w-2/5"}`}
                      initial={{ width: 0 }}
                      animate={{ width: isComplete ? "100%" : "40%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                  {!isComplete && <p className="text-sm text-gray-700">{getTip(key)}</p>}
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">School Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                value !== undefined && (
                  <div key={key} className="mb-2">
                    <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: </span>
                    <span>{value.toString()}</span>
                  </div>
                )
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button
              onClick={generatePDF}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md cursor-pointer"
            >
              📅 Download PDF Report
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ImprovementTracker;
