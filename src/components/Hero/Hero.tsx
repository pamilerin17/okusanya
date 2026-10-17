import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/e-removebg-preview.png'
import Me from '../../assets/IMG-20250625-WA0035.jpg'

const socials = [
  { label: "Twitter", href: "https://twitter.com/datbossbaby", Icon: FaTwitter },
  { label: "GitHub", href: "https://github.com/pamilerin17", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/okusanya-jude-8705582b8/", Icon: FaLinkedin },
  { label: "WhatsApp", href: "https://wa.me/+447344393884", Icon: FaWhatsapp },
];

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    // overflow-x-clip stops the sideways slides from causing a horizontal scrollbar
    <section className="container mx-auto flex flex-col items-center gap-12 overflow-x-clip px-6 py-16 md:flex-row">
      {/* Gentle float for the photo (switched off for reduced-motion users) */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-float { animation: none; }
        }
      `}</style>

      {/* Left content: slides in from the left, piece by piece */}
      <div className="flex-1">
        <div data-aos="fade-down">
          <img
            src={Logo}
            alt="Logo"
            className="mb-6 h-20 w-20 rounded-full object-cover"
          />
        </div>

        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl"
        >
          Frontend{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="mt-6 text-lg leading-relaxed text-gray-600"
        >
          I get genuinely excited about turning ideas into real, user-ready products from scratch there’s something special about watching concepts come to life. 🔧 But I’m just as comfortable jumping into an existing codebase and making it even better. Whether it’s fixing bugs, refactoring messy bits, or shipping new features, I’m all in for the challenge. 🚀
        </p>

        {/* Call to action: rises from the bottom */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-8">
          <a
            href="#portfolio"
            className="inline-block rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            View my work
          </a>
        </div>

        {/* Social icons: pop up one after another */}
        <div className="mt-8 flex gap-6">
          {socials.map(({ label, href, Icon }, i) => (
            <div key={label} data-aos="zoom-in" data-aos-delay={400 + i * 100}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-block text-2xl text-gray-700 transition hover:-translate-y-1 hover:text-blue-600"
              >
                <Icon />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Right image: slides in from the right, then floats */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="flex flex-1 justify-center"
      >
        <div className="hero-float relative isolate">
          {/* soft glow behind the photo */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 blur-2xl" />
          <img
            src={Me}
            alt="Portrait"
            className="w-full max-w-md rotate-2 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;