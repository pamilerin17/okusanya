import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "About", "Projects", "Services", "Contact"];

  const handleScroll = (item: string) => {
    setActive(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex justify-center fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md py-4">
      <div className="flex space-x-8 shadow-md rounded-full px-8 py-3">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item)}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              active === item
                ? "text-blue-500"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
