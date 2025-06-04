const Testimonial = () => {
  
  return (
      <div id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by Fashion Enthusiasts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass bento-card rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-gray-400 text-sm">Fashion Blogger</div>
                </div>
              </div>
              <p className="text-gray-300">"VirtuWear completely changed how I shop online. No more returns or disappointments!"</p>
              <div className="flex mt-4 text-yellow-400">★★★★★</div>
            </div>
            
            <div className="glass bento-card rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Alex K.</div>
                  <div className="text-gray-400 text-sm">Style Influencer</div>
                </div>
              </div>
              <p className="text-gray-300">"The AI is incredibly accurate. It's like having a personal stylist in my pocket."</p>
              <div className="flex mt-4 text-yellow-400">★★★★★</div>
            </div>
            
            <div className="glass bento-card rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Maya L.</div>
                  <div className="text-gray-400 text-sm">Fashion Designer</div>
                </div>
              </div>
              <p className="text-gray-300">"Finally, a tool that bridges the gap between imagination and reality in fashion."</p>
              <div className="flex mt-4 text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimonial;
