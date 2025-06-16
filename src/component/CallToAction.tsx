const CallToAction = () => {
  return (
    <div id="download" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass bento-card rounded-3xl p-12 md:p-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Style?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join hundreds of thousands who've discovered their perfect look with VirtuWear</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-white text-black px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-200 transition-all transform hover:scale-105 pulse-slow">
                Download Free Now
              </button>
              <div className="text-gray-400">
                <div className="text-sm">✓ Free Premium Trial</div>
                <div className="text-sm">✓ No Credit Card Required</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-8 text-gray-500">
              <span>Available on Android</span>
              <span>•</span>
              <span>Limited Beta Access</span>
            </div>
          </div>
        </div>
    </div>

  );
};

export default CallToAction;
