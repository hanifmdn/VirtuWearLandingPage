const Hero = () => {
  const smoothScroll = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 w-full">
      <div className="container mx-auto py-6 sm:py-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-6">
          {/* Main Hero Card */}
          <div className="md:col-span-8 md:row-span-4 glass bento-card rounded-3xl p-6 sm:p-8 md:p-12 hero-gradient relative overflow-hidden fade-in">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Your Personal<br />
                <span className="accent-gradient">AI Stylist</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-full sm:max-w-2xl">
                Try any outfit instantly with AI-powered visualization. Never wonder "how would this look on me?" again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => smoothScroll('#download')}
                  className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all transform hover:scale-105 pulse-slow"
                >
                  Download VirtuWear Free
                </button>
                <button className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:bg-opacity-10 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="md:col-span-4 md:row-span-2 glass bento-card rounded-3xl p-4 sm:p-6 fade-in text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">Free Trials</div>
            <div className="text-gray-400 text-sm sm:text-base">No need to pay anything</div>
          </div>

          {/* Quick Feature */}
          <div className="md:col-span-4 md:row-span-2 glass bento-card rounded-3xl p-4 sm:p-6 fade-in text-center">
            <div className="text-lg sm:text-2xl font-semibold mb-2">Instant Results</div>
            <div className="text-gray-400 text-sm">See yourself in any outfit within seconds</div>
          </div>

          {/* Problem Statement */}
          <div className="md:col-span-6 md:row-span-2 glass bento-card rounded-3xl p-4 sm:p-6 fade-in">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Tired of Fashion Disappointments?</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Online shopping shouldn't be a gamble. Try before you buy with perfect AI visualization.
            </p>
          </div>

          {/* Solution */}
          <div className="md:col-span-6 md:row-span-2 glass bento-card rounded-3xl p-4 sm:p-6 fade-in">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fashion Without Limits</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Access unlimited clothing options and discover your perfect style with AI assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
