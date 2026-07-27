import { useEffect, useRef, useState } from "react";
import We from "../../assets/3d-removebg-preview.png";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Git", level: 85 },
  {name: "Firebase", level: 83},
  {name: "Vuejs", level: 70},
];

type SkillRingProps = {
  name: string;
  level: number;
  delay: number;
};

const SkillRing = ({ name, level, delay }: SkillRingProps) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(Math.round(eased * level));
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [visible, level, delay]);

  const size = 88;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-blue-600 transition-[stroke-dashoffset] duration-100 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-800">{progress}%</span>
        </div>
      </div>
      <p className="text-gray-700 text-xs font-medium text-center">{name}</p>
    </div>
  );
};

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
          I'm a passionate Frontend Developer who enjoys turning ideas into
          engaging digital experiences. Whether working independently as a
          freelancer or collaborating within a team, I value clear
          communication, shared vision, and collective problem-solving. I
          take pride in designing clean and intuitive user interfaces while
          ensuring smooth performance across all devices. With tools like
          React, Next.js, and Tailwind CSS, I blend creativity with
          functionality bringing both aesthetics and usability together.
          Every project I take on is an opportunity to grow, innovate, and
          deliver something meaningful.
        </p>

        {/* Skill Rings */}
        <div className="mb-8 grid grid-cols-4 gap-y-6 gap-x-2">
          {skills.map((skill, index) => (
            <SkillRing
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/17HrzODeel-YkE9POYdwcmyx7xZDBy7ot/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
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