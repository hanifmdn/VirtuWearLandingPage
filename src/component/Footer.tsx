const Footer = () => {
  
  return (
    <div className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold accent-gradient mb-4 md:mb-0">VirtuWear</div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
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
