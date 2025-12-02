
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getSuggestions } from "./getSugessation";

const ClassificationForm = ({ setStatus }) => {
  const [formData, setFormData] = useState({
    grades: "",
    classrooms: "",
    totalStudents: "",
    teacherStudentRatio: "",
    toilets: false,
    drinkingWater: false,
    electricity: false,
    boundaryWall: false,
  });

  const [result, setResult] = useState(null);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newForm = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(newForm);

    // Only update status for checkbox fields
    if (["toilets", "drinkingWater", "electricity", "boundaryWall"].includes(name)) {
      setStatus({
        toilets: newForm.toilets,
        drinkingWater: newForm.drinkingWater,
        electricity: newForm.electricity,
        boundaryWall: newForm.boundaryWall,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const norms = {
      grades: 5,
      totalStudents: 30,
      teacherStudentRatio: 30,
      classrooms: formData.grades,
      toilets: true,
      drinkingWater: true,
      electricity: true,
      boundaryWall: true,
    };
  
    const isValid = 
      parseInt(formData.grades) >= norms.grades &&
      parseInt(formData.totalStudents) >= norms.totalStudents &&
      parseInt(formData.teacherStudentRatio) <= norms.teacherStudentRatio &&
      parseInt(formData.classrooms) >= parseInt(formData.grades) &&
      formData.toilets &&
      formData.drinkingWater &&
      formData.electricity &&
      formData.boundaryWall;
  
    const classification = isValid ? "Fully Furnished School" : "Odd Structured School";
    setResult(classification);
  
    const recommendations = getSuggestions(formData);
  
    setStatus({ ...formData, recommendations });
  
    // ✅ Pass formData and recommendations as navigation state
    navigate('/officer-admin/improvement-tracker', {
      state: { status: { ...formData, recommendations } }
    });
  };

  const isFormValid = 
    formData.grades && formData.classrooms && formData.totalStudents && formData.teacherStudentRatio;

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 " id="classification">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-5 text-center text-indigo-700 animate-fade-in-up">Classify Your School</h2>

          <div className="grid gap-6">
            <input
              type="number"
              name="grades"
              placeholder="Number of Grades"
              className="p-4 border rounded-xl text-gray-700 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.grades}
              onChange={handleChange}
            />
            <input
              type="number"
              name="classrooms"
              placeholder="Number of Classrooms"
              className="p-4 border rounded-xl text-gray-700 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.classrooms}
              onChange={handleChange}
            />
            <input
              type="number"
              name="totalStudents"
              placeholder="Total Number of Students in a Class"
              className="p-4 border rounded-xl text-gray-700 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.totalStudents}
              onChange={handleChange}
            />
            <input
              type="number"
              name="teacherStudentRatio"
              placeholder="Teacher-Student Ratio (1:30)"
              className="p-4 border rounded-xl text-gray-700 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.teacherStudentRatio}
              onChange={handleChange}
            />

            {["toilets", "drinkingWater", "electricity", "boundaryWall"].map((field) => (
              <label className="flex items-center gap-3 text-gray-800 text-sm" key={field}>
                <input
                  type="checkbox"
                  name={field}
                  checked={formData[field]}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600"
                />
                <span>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}</span>
              </label>
            ))}

            <button
              onClick={handleSubmit}
              className={`${
                isFormValid ? "bg-indigo-600" : "bg-gray-400 cursor-not-allowed"
              } text-white px-8 py-3 mt-6 rounded-full transition duration-300 hover:bg-indigo-700 cursor-pointer`}
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Analyze School
            </button>

            {result && (
              <div className="mt-6 text-xl text-center font-bold text-indigo-800 animate-fade-in-up">
                Classification: {result}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClassificationForm;