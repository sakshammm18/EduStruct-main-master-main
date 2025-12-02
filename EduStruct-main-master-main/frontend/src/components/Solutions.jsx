import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Users, Ruler, Droplets, Flashlight, Library, Landmark, Fence } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const solutions = {
  toilets: [
    "Ensure gender-separate toilets are provided in every school.",
    "Provide enough toilet facilities for both boys and girls, in accordance with student population.",
    "Ensure that toilets are regularly cleaned and well-maintained."
  ],
  drinkingWater: [
    "Install clean drinking water facilities at multiple points in the school.",
    "Provide access to water dispensers, cups, or water coolers in classrooms.",
    "Ensure regular checks on water quality and cleanliness."
  ],
  electricity: [
    "Install reliable electrical systems and make sure all classrooms are well-lit.",
    "Provide backup electricity systems (solar power or generators) to avoid disruptions.",
    "Ensure safety measures like proper wiring and switches."
  ],
  library: [
    "Establish a library with a wide range of books for various age groups.",
    "Ensure the library is well-stocked and updated regularly.",
    "Provide a quiet and conducive space for reading and studying."
  ],
  playground: [
    "Design a safe and spacious playground where students can engage in physical activities.",
    "Ensure the playground is equipped with sports equipment and is regularly maintained.",
    "Create designated zones for different types of games (e.g., football, basketball)."
  ],
  boundaryWall: [
    "Ensure the school has a strong and secure boundary wall to prevent unauthorized access.",
    "The boundary wall should be high enough to avoid security risks.",
    "Inspect and maintain the boundary wall regularly to ensure it's in good condition."
  ],
  teacherStudentRatio: [
    "Hire additional teachers to maintain the teacher-student ratio of 1:30.",
    "Utilize teaching assistants to support the primary teacher in managing the classroom.",
    "In areas with teacher shortages, consider digital learning tools."
  ],
  teacherTraining: [
    "Ensure that teachers receive regular professional development training.",
    "Offer workshops on classroom management, new teaching methods, and student engagement techniques.",
    "Provide teachers with updated educational resources and teaching aids."
  ],
  studentEngagement: [
    "Incorporate interactive learning methods, including group projects and hands-on activities.",
    "Create a student feedback system to gauge their interest and participation.",
    "Introduce extracurricular activities such as sports, clubs, and arts programs."
  ],
  classroomManagement: [
    "Train teachers on maintaining discipline while promoting a positive and engaging classroom environment.",
    "Implement strategies to reduce classroom distractions and maintain a structured learning environment.",
    "Use seating arrangements and classroom activities to ensure active student participation."
  ]
};

const Solutions = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpansion = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <div>
      <Navbar />
      <section className="py-20 bg-gradient-to-r from-indigo-100 to-blue-200 px-6" id="suggestions">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">🔧 Suggested Solutions</h2>
          <div className="space-y-8">
            {Object.entries(solutions).map(([key, solutionList]) => (
              <div
                key={key}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-indigo-600 text-3xl mr-4">
                    {key === "toilets" ? <Ruler /> : key === "drinkingWater" ? <Droplets /> : key === "electricity" ? <Flashlight /> : key === "library" ? <Library /> : key === "playground" ? <Landmark /> : key === "boundaryWall" ? <Fence /> : key === "teacherStudentRatio" || key === "teacherTraining" || key === "studentEngagement" || key === "classroomManagement" ? <Users /> : <Users />}
                  </div>
                  <h3 className="text-2xl font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
                  <motion.button
                    onClick={() => toggleExpansion(key)}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto cursor-pointer focus:outline-none bg-gradient-to-r from-[#101c2c] to-[#1b3a5c] text-white px-4 py-2 rounded-md"
                  >
                    {expanded === key ? "Hide Solutions" : "View Solutions"}
                  </motion.button>
                </div>

                {expanded === key && (
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    {solutionList.map((solution, index) => (
                      <li key={index} className="text-lg">
                        <div className="flex items-start">
                          <motion.div
                            className="w-2.5 h-2.5 bg-indigo-600 rounded-full mt-1 mr-3"
                            whileHover={{ scale: 1.2 }}
                          />
                          <p>{solution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;
