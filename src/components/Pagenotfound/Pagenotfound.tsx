import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center px-6">
      <h1 className="text-[120px] font-extrabold text-gray-800 leading-none">
        404
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-md">
        This page seems to have wandered off... but don’t worry, you can find your way back!
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Go Back Home
      </Link>

      <div className="mt-12">
        <div className="w-48 h-48 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="w-full h-full text-gray-700 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagenotfound;
