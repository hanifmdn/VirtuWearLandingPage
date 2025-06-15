const Teams = () => {
  
  return (
    <div className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="glassmorphism rounded-3xl p-12 bento-card">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 gradient-text">Built by Tech Experts</h2>
                    <p className="text-xl text-gray-300">Industry-leading AI technology you can trust</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-xl mb-3">Chief Information Officer</div>
                        <div className="font-semibold mb-2 md:text-2xl">Azka Darajat</div>
                        <div className="text-sm text-gray-400">Front End Engineer + UI/UX Designer</div>
                    </div>
                    <div>
                        <div className="text-xl mb-3">Chief Executive Officer</div>
                        <div className="font-semibold mb-2 md:text-2xl">Hanif Ahmad Naufal</div>
                        <div className="text-sm text-gray-400">Full Stack Engineer + AI Engineer + Social Media Specialist</div>
                    </div>
                    <div>
                        <div className="text-xl mb-3">Chief Technology Officer</div>
                        <div className="font-semibold mb-2 md:text-2xl">Radja Restu Arsita</div>
                        <div className="text-sm text-gray-400">Full Stack Engineer + Senior Data Scientist + Digital Marketing</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Teams;
