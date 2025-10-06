import P1 from '../../assets/Screenshot 2025-04-28 191658.png'
import P2 from '../../assets/Screenshot 2025-04-28 191728.png'
import P3 from '../../assets/Screenshot 2025-04-28 191838.png'
import P4 from '../../assets/Screenshot 2025-04-28 191903.png'
import P5 from '../../assets/Screenshot 2025-04-28 192024.png'
import P6 from '../../assets/Screenshot 2025-04-28 192102.png'
import P7 from '../../assets/Screenshot 2025-06-13 214900.png'
import P8 from '../../assets/Screenshot 2025-04-28 192132.png'
import P9 from '../../assets/last.png'
const projects = [
 {
  title:'Furniture Website',
   imageSrc: P1,  
   tech: ["React", "Firebase", "Tailwind CSS", "Typescript"],
   demoLink: "https://myfurniture-pi.vercel.app/",
   
 },
 {
   title: "Real-estate Website",
   imageSrc: P2,
   tech: ["React", "Tailwind CSS", "Typescript"],
   demoLink: "https://my-estate-b6cu.vercel.app/",
 },
 {
  title: "Restaurant Website",
  imageSrc: P3,
  tech: ["React", "Tailwind CSS", "Typescript"],
  demoLink: "https://dboss-alpha.vercel.app/",
}, 
{
 title: "Laundry Website",
 imageSrc: P4,
 tech: ["React", "Tailwind CSS", "Typescript"],
 demoLink: "https://mylaundry-one.vercel.app/",
},
{
 title: "Lawfirm Website",
 imageSrc: P5,
 tech: ["React", "Tailwind CSS", "Typescript"], 
 demoLink: "https://okusanya-lawfirm.vercel.app/",
},
{
 title: "Ticket Generator",
 imageSrc: P6,
 tech: ["HTML", "CSS", "JavaScript"], 
 demoLink: "https://conference-ticket-kappa.vercel.app/",
},
{
 title: "Photogallery",
 imageSrc: P7,
 tech: ["React", "Tailwind CSS", "Typescript", "Firebase"], 
 demoLink: "https://erinayo.vercel.app/",
},
{
 title: "My First Portfolio",
 imageSrc: P8,
 tech: ["HTML", " CSS", "Typescript"], 
 demoLink: "https://erinayo.vercel.app/",
},
{
 title: "My Second Portfolio",
 imageSrc: P9,
 tech: ["React", "Tailwind CSS", "Typescript"], 
 demoLink: "https://okusanya.vercel.app/",
},
];

const PortfolioSection = () => {
 return (
   <section id="portfolio" className="container mx-auto px-6 py-16">
     <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">My Portfolio</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {projects.map((proj, idx) => (
         <div
           key={idx}
           className="group relative overflow-hidden rounded-lg shadow-lg"
         >
           <img
             src={proj.imageSrc}
            
             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
           />
           {/* Overlay for hover */}
           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
             <h3 className="text-white text-xl font-semibold mb-2">{proj.title}</h3>
             <div className="flex flex-wrap gap-2 mb-4">
               {proj.tech.map((t, i) => (
                 <span
                   key={i}
                   className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                 >
                   {t}
                 </span>
               ))}
             </div>
             <div className="flex gap-4">
               <a
                 href={proj.demoLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white text-blue-600 px-4 py-2 rounded-full"
               >
                 Demo
               </a>
               
             </div>
           </div>
         </div>
       ))}
     </div>
   </section>
 );
};

export default PortfolioSection;
