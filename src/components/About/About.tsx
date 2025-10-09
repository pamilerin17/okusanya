import We from '../../assets/3d-removebg-preview.png'

const BioSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      {/* Left Image */}
      <div className="w-full flex justify-center">
        <img
          src={We}
          alt="Profile"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="relative">
        {/* Background dotted pattern */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[length:10px_10px] opacity-20"></div>

        <h2 className="text-4xl font-bold text-blue-500 mb-4">My Bio</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
        I’m a passionate Frontend Developer who enjoys turning ideas into engaging digital experiences. Whether working independently as a freelancer or collaborating within a team, I value clear communication, shared vision, and collective problem-solving. I take pride in designing clean and intuitive user interfaces while ensuring smooth performance across all devices. With tools like React, Next.js, and Tailwind CSS, I blend creativity with functionality—bringing both aesthetics and usability together. Every project I take on is an opportunity to grow, innovate, and deliver something meaningful.
        </p>
       

        {/* Progress Bars */}
        <div className="mb-8">
          {[
            { name: "HTML", level: "90%" },
            { name: "CSS", level: "85%" },
            { name: "JavaScript", level: "80%" },
            { name: "React", level: "80%" },
            { name: "Next.js", level: "75%" },
            { name: "Tailwind CSS", level: "85%" },
            { name: "TypeScript", level: "70%" },
            { name: "Git", level: "80%" },
          ].map((skill, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700 mb-1">{skill.name}</p>
              <div className=" bg-gray-200 h-1 rounded-full">
                <div className="bg-blue-600 h-1 " style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a href="https://drive.google.com/file/d/1fpRfHHIKRXNu2e9uIENwXqJCNKDIxxES/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Download CV
            </button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default BioSection;
