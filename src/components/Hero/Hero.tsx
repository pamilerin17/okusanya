import { useEffect } from "react";
import AOS from "aos";
import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; 
import Logo from '../../assets/e-removebg-preview.png'
import Me from '../../assets/IMG-20250625-WA0035.jpg'

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section 
      className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12"
      data-aos="fade-down"
    >
      {/* Left Content */}
      <div className="flex-1">
        <img 
          src={Logo}
          className="w-20 h-20 object-cover rounded-full mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Frontend Engineer
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          I get genuinely excited about turning ideas into real, user-ready products from scratch — there’s something special about watching concepts come to life. 🔧 But I’m just as comfortable jumping into an existing codebase and making it even better. Whether it’s fixing bugs, refactoring messy bits, or shipping new features, I’m all in for the challenge. 🚀
        </p>

        
        <div className="flex gap-6 mt-8 ">
          <a href="https://twitter.com/datbossbaby" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl transition">
            <FaTwitter />
          </a>
          <a href="https://github.com/pamilerin17" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl transition">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/pamilerin-erinayo-8705582b8" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl transition">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+2348123903283" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img 
          src={Me}
          alt=""
          className="w-full max-w-md rounded-2xl shadow-lg transform rotate-2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
