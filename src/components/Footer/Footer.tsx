import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8 flex items-center justify-center">
          <p className="text-sm text-gray-600 text-center">
            Copyright ©2025 All rights reserved
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 bottom-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600
          ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
        title="Back to top"
      >
        <span className="absolute inset-0 rounded-full bg-blue-600/95"></span>
        <svg
          className="relative w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default Footer;
