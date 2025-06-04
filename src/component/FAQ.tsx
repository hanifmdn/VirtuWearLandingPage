import { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    const faqButtons = document.querySelectorAll('#faq button');
    const handleClick = function (this: HTMLButtonElement) {
      const answer = this.nextElementSibling as HTMLElement;
      const icon = this.querySelector('i') as HTMLElement;

      if (answer) answer.classList.toggle('hidden');
      if (icon) icon.classList.toggle('rotate-180');
    };

    faqButtons.forEach(button => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      faqButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true)); // bersihkan listener saat unmount
      });
    };
  }, []);

  return (
    <div id="faq" className="py-20 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white playfair">
            Frequently Asked <span className="text-white">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Everything you need to know about VirtuWear. Can't find an answer? Contact us.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {faqList.map((item, idx) => (
            <div key={idx} className={`bg-zinc-900 rounded-xl overflow-hidden fade-in delay-${idx * 100}`}>
              <button className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center">
                <span className="text-lg font-medium text-white">{item.question}</span>
                <i className="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
              </button>
              <div className="px-6 pb-4 hidden">
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}

          <div className="mt-12 text-center fade-in delay-700">
            <p className="text-gray-300">Still have questions?</p>
            <a
              href="#"
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Contact Our Support Team
              <i className="fas fa-envelope ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data pertanyaan untuk dirender
const faqList = [
  {
    question: 'How accurate are the virtual try-ons?',
    answer:
      'Our technology is 92% accurate compared to physical try-ons based on independent studies. Accuracy depends on having a clear, well-lit full-body photo in fitted clothing. We\'re constantly improving our algorithms through machine learning.',
  },
  {
    question: 'Is my personal data secure?',
    answer:
      'Absolutely. We process all images locally on your device and never store your photos on our servers. Our app uses end-to-end encryption and complies with all major privacy regulations including GDPR and CCPA.',
  },
  {
    question: 'Which clothing brands work with VirtuWear?',
    answer:
      'We partner with over 200 major brands including Nordstrom, ASOS, Nike, and Levi\'s. You can also upload images of clothing from any brand - our AI will create a 3D model to visualize how it fits.',
  },
  {
    question: 'What\'s included in the free trial?',
    answer:
      'The free trial gives you unlimited virtual try-ons for 7 days with access to all features. After the trial, you can choose between our monthly subscription or pay-per-use credits. No credit card is required to start the trial.',
  },
  {
    question: 'Can I use VirtuWear for plus-size clothing?',
    answer:
      'Yes! VirtuWear was specifically designed to be inclusive of all body types. Our technology accurately simulates how clothes fit and drape on plus-size bodies, helping you find styles that work for your shape.',
  },
];

export default FAQ;
