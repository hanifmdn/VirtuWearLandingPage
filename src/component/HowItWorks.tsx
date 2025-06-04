const HowItWorks = () => {
  
  return (
      <div id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to your perfect outfit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass bento-card rounded-3xl p-8 text-center">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-bold mb-4">1. Upload Photo</h3>
              <p className="text-gray-400">Take or upload a photo of yourself in well-lit conditions</p>
            </div>
            
            <div className="glass bento-card rounded-3xl p-8 text-center">
              <div className="text-5xl mb-6">👕</div>
              <h3 className="text-2xl font-bold mb-4">2. Choose Outfit</h3>
              <p className="text-gray-400">Browse thousands of clothing items from your favorite brands</p>
            </div>
            
            <div className="glass bento-card rounded-3xl p-8 text-center">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4">3. See Magic</h3>
              <p className="text-gray-400">Get photorealistic results in seconds with AI visualization</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HowItWorks;
