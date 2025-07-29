import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { cn } from "@/lib/utils";
import { DotPattern } from './magicui/dot-pattern';

const Team = () => {
  const founders = [
    {
      name: "Randall Weidberg",
      role: "Co-Founder & CEO",
      bio: "Digital transformation leader with 15+ years across government, startups, and Fortune 500s. Randall led initiatives at DoD, DHS, VA, and the White House USDS, improving services for millions of Americans. With successful exits, he drives AI-powered, human-centered solutions to modernize government and strengthen national defense.",
      image: "/randall-profile-realistic.png"
    },
    {
      name: "Neil Sharma",
      role: "Co-Founder & CTO",
      bio: "Technology leader who delivered AI solutions at DHS AI Corps, Office of Personnel Management, CDC, Medicare and Medicaid, and the White House. Neil launched products that streamlined services for hundreds of thousands and modernized legacy processes. Led engineering at startups and top Silicon Valley companies. UC Berkeley engineer.",
      image: "/neil-profile-realistic.png"
    }
  ];

  return (
    <section id="team" className="pt-12 sm:pt-20 pb-12 sm:pb-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Team
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 sm:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.15 }}
              className="group rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 hover:border-gray-600 transition-all duration-300 overflow-hidden relative max-w-md"
              style={{ 
                backgroundColor: 'rgb(11,11,11)', 
                border: '1px solid rgb(43,43,43)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.05)';
              }}
            >
                
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
                    "fill-white/5",
                  )}
                />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="relative mb-4 sm:mb-6">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-32 sm:w-48 h-32 sm:h-48 rounded-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {founder.name}
                    </h3>
                    
                    <p className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {founder.role}
                    </p>
                    
                    <p className="text-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {founder.bio}
                    </p>
                    
                    <div className="flex space-x-4">
                      <a
                        href={founder.name === "Randall Weidberg" ? "https://www.linkedin.com/in/randallweidberg/" : "https://www.linkedin.com/in/neilshar/"}
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${founder.name === "Randall Weidberg" ? "randall@teambeacon.ai" : "neil@teambeacon.ai"}`}
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;