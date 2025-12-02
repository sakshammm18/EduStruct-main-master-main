// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white text-center py-6">
//       <p>&copy; Made with ❤️ by Team EduStruct</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center text-base">
          &copy; Made with <Heart className="mx-2 text-red-500" size={16} fill="currentColor" /> by Team EduStruct
        </p>
      </div>
    </footer>
  );
};

export default Footer;