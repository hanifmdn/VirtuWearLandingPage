const Hero = () => {
  
  return (
    <div className="h-screen px-6 w-full " >
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 gap-6 h-screen">
            {/* Main Hero Card */}
            <div className="md:col-span-8 md:row-span-4 glass bento-card rounded-3xl p-8 md:p-12 hero-gradient relative overflow-hidden fade-in">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Personal<br />
                  <span className="accent-gradient">AI Stylist</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Try any outfit instantly with AI-powered visualization. Never wonder "how would this look on me?" again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 pulse-slow">
                    Download VirtuWear Free
                  </button>
                  <button className="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white opacity-5 rounded-full floating"></div>
            </div>

            {/* Stats Card */}
            <div className="md:col-span-4 md:row-span-2 glass bento-card rounded-3xl p-6 fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-gray-400">Happy Users</div>
              </div>
            </div>

            {/* Quick Feature */}
            <div className="md:col-span-4 md:row-span-2 glass bento-card rounded-3xl p-6 fade-in">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">⚡ Instant Results</div>
                <div className="text-gray-400 text-sm">See yourself in any outfit within seconds</div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="md:col-span-6 md:row-span-2 glass bento-card rounded-3xl p-6 fade-in">
              <h3 className="text-xl font-semibold mb-3">Tired of Fashion Disappointments?</h3>
              <p className="text-gray-400 text-sm">Online shopping shouldn't be a gamble. Try before you buy with perfect AI visualization.</p>
            </div>

            {/* Solution */}
            <div className="md:col-span-6 md:row-span-2 glass bento-card rounded-3xl p-6 fade-in">
              <h3 className="text-xl font-semibold mb-3">Fashion Without Limits</h3>
              <p className="text-gray-400 text-sm">Access unlimited clothing options and discover your perfect style with AI assistance.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
