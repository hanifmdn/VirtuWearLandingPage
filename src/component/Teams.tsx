const Teams = () => {
  
  return (
    <div className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="glassmorphism rounded-3xl p-12 bento-card">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 gradient-text">Built by Fashion Tech Experts</h2>
                    <p className="text-xl text-gray-300">Industry-leading AI technology you can trust</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl mb-3">🔒</div>
                        <div className="font-semibold mb-2">Privacy First</div>
                        <div className="text-sm text-gray-400">Your photos are never stored or shared</div>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">🏆</div>
                        <div className="font-semibold mb-2">Award Winning</div>
                        <div className="text-sm text-gray-400">CES Innovation Award 2024</div>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">🤝</div>
                        <div className="font-semibold mb-2">Brand Partners</div>
                        <div className="text-sm text-gray-400">Trusted by 1000+ fashion brands</div>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">⚡</div>
                        <div className="font-semibold mb-2">Lightning Fast</div>
                        <div className="text-sm text-gray-400">Results in under 3 seconds</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Teams;
