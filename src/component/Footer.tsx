import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold accent-gradient mb-4 md:mb-0">VirtuWear</div>
            <div className="flex space-x-8 text-gray-400 items-center">
              <a 
                href="https://www.instagram.com/virtuwears/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <FaInstagram className="text-xl" />
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2025 VirtuWear. All rights reserved. Transforming fashion with AI.
          </div>
        </div>
    </div>
  );
};

export default Footer;
