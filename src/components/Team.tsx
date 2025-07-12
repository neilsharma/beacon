import { Linkedin, Mail } from 'lucide-react';
import { cn } from "@/lib/utils";
import { DotPattern } from './magicui/dot-pattern';

const Team = () => {
  const founders = [
    {
      name: "Randall Weidberg",
      role: "Co-Founder & CEO",
      bio: "Former AI Director at the Department of Defense with 15+ years in government technology. PhD in Computer Science from Stanford, specializing in machine learning for public sector applications.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      name: "Neil Sharma",
      role: "Co-Founder & CTO",
      bio: "Former Chief Technology Officer at Federal IT Services with expertise in secure AI deployment. Master's in Cybersecurity from MIT, leading government AI initiatives for over a decade.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    }
  ];

  return (
    <section id="team" className="pt-20 pb-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Team
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
                className="group rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 hover:border-gray-600 transition-all duration-300 overflow-hidden relative max-w-md"
                style={{ 
                  backgroundColor: 'rgb(11,11,11)', 
                  border: '1px solid rgb(43,43,43)' 
                }}
              >
                {/* Individual card glow - positioned at center of each card */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white opacity-[3%] group-hover:opacity-[6%] rounded-full blur-[60px] pointer-events-none transition-opacity duration-300"></div>
                
                {/* Dot Pattern Background for each card */}
                <DotPattern
                  width={20}
                  height={20}
                  cx={1}
                  cy={1}
                  cr={1}
                  className={cn(
                    "absolute inset-0",
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    "fill-white/10",
                  )}
                />
                <div className="p-8">
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="relative mb-6">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-48 h-48 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {founder.name}
                    </h3>
                    
                    <p className="text-white font-semibold mb-4">
                      {founder.role}
                    </p>
                    
                    <p className="text-white leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;