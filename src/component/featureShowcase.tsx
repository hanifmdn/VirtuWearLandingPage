import { FiCpu } from "react-icons/fi";
import { FaPhotoVideo } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const FeatureShowcase = () => {
  return (
    <div id="features" className="py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of fashion with cutting-edge AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
          {/* AI Body Mapping */}
          <div className="md:col-span-3 glass bento-card rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
            <div>
              <div className="text-4xl mb-4 flex justify-center"><FiCpu className="mx-auto" /></div>
              <h3 className="text-2xl font-bold mb-3">AI Body Mapping</h3>
              <p className="text-gray-400">
                Advanced algorithms create precise body measurements for perfect fit prediction.
              </p>
            </div>
          </div>

          {/* Realistic Rendering */}
          <div className="md:col-span-3 glass bento-card rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
            <div>
              <div className="text-4xl mb-4 flex justify-center"><FaPhotoVideo className="mx-auto" /></div>
              <h3 className="text-2xl font-bold mb-3">Photorealistic Results</h3>
              <p className="text-gray-400">
                Experience lifelike textures, lighting, and shadows in every virtual try-on.
              </p>
            </div>
          </div>

          {/* Brand Database */}
          <div className="md:col-span-2 glass bento-card rounded-3xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2 flex justify-center"><FaDatabase className="mx-auto" /></div>
            <h3 className="text-xl font-semibold mb-2">Vast Brand Database</h3>
            <p className="text-gray-400">
              Access an extensive range of brands and products at your fingertips.
            </p>
          </div>

          {/* Speed */}
          <div className="md:col-span-2 glass bento-card rounded-3xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2 flex justify-center"><FaBolt className="mx-auto" /></div>
            <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
            <p className="text-gray-400">
              Enjoy instant loading times and seamless browsing.
            </p>
          </div>

          {/* Privacy */}
          <div className="md:col-span-2 glass bento-card rounded-3xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl mb-2 flex justify-center"><FaLock className="mx-auto" /></div>
            <h3 className="text-xl font-semibold mb-2">100% Private & Secure</h3>
            <p className="text-gray-400">
              Your data is always protected with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
