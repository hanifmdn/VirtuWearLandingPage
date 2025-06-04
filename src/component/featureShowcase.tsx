const FeatureShowcase = () => {
  return (
    <div id="features" className="pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of fashion with cutting-edge AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Body Mapping */}
          <div className="glass bento-card rounded-3xl p-10 flex flex-col items-center text-center h-full">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">AI Body Mapping</h3>
            <p className="text-gray-400">
              Advanced algorithms create precise body measurements for perfect fit prediction.
            </p>
          </div>
          {/* Photorealistic Results */}
          <div className="glass bento-card rounded-3xl p-10 flex flex-col items-center text-center h-full">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-3">Photorealistic Results</h3>
            <p className="text-gray-400">
              Experience lifelike textures, lighting, and shadows in every virtual try-on.
            </p>
          </div>
          {/* Privacy */}
          <div className="glass bento-card rounded-3xl p-10 flex flex-col items-center text-center h-full">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-3">100% Private & Secure</h3>
            <p className="text-gray-400">
              Your data is always protected and never shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
