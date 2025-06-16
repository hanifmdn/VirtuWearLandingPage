import { useState } from 'react';

const Header = () => {
  const [headerBg] = useState('rgba(0, 0, 0, 0.3)');

  const smoothScroll = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      className="fixed top-0 w-full z-50 glass-dark"
      style={{ background: headerBg }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold accent-gradient">VirtuWear</div>
        <div className="hidden md:flex space-x-8">
          <a 
            href="#features" 
            className="hover:text-gray-300 transition-colors"
            onClick={(e) => { e.preventDefault(); smoothScroll('#features'); }}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="hover:text-gray-300 transition-colors"
            onClick={(e) => { e.preventDefault(); smoothScroll('#how-it-works'); }}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="hover:text-gray-300 transition-colors"
            onClick={(e) => { e.preventDefault(); smoothScroll('#testimonials'); }}
          >
            Reviews
          </a>
          <a 
            href="#faq" 
            className="hover:text-gray-300 transition-colors"
            onClick={(e) => { e.preventDefault(); smoothScroll('#faq'); }}
          >
            FAQ
          </a>
        </div>
        <button 
          onClick={() => smoothScroll('#download')}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
        >
          Download Free
        </button>
      </nav>
    </div>
  );
};


export default Header;
