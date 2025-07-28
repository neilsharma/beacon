import { motion } from 'framer-motion';
import { SectionBorder } from './ui/section-border';
import { SectionGlow } from './ui/section-glow';
import { Timeline } from './ui/timeline';
import RocketIcon from './icons/RocketIcon';
import GearIcon from './icons/GearIcon';
import DatabaseNewIcon from './icons/DatabaseNewIcon';
import HireIcon from './icons/HireIcon';

const Services = () => {
  const timelineData = [
    {
      title: "AI Strategy & Assessment",
      icon: RocketIcon,
      textContent: ({ icon: Icon }: { icon?: React.ComponentType<any> }) => (
        <div>
          <div className="flex items-center mb-4 md:block">
            {Icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              AI Strategy & Assessment
            </h3>
          </div>
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
            We identify where AI creates the biggest impact in your agency, conducting comprehensive readiness assessments and developing strategic roadmaps that align with your mission objectives.
          </p>
        </div>
      ),
      imageContent: (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl border border-white/20"></div>
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="AI Strategy & Assessment"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      ),
    },
    {
      title: "Workflow Automation",
      icon: GearIcon,
      textContent: ({ icon: Icon }: { icon?: React.ComponentType<any> }) => (
        <div>
          <div className="flex items-center mb-4 md:block">
            {Icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              Workflow Automation
            </h3>
          </div>
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
            Automate predefined government processes or create intelligent agentic workflows that adapt to dynamic tasks. We implement human-in-the-loop systems for critical decision points, ensuring accountability while maximizing efficiency.
          </p>
        </div>
      ),
      imageContent: (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl border border-white/20"></div>
          <img
            src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Workflow Automation"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      ),
    },
    {
      title: "Data Intelligence",
      icon: DatabaseNewIcon,
      textContent: ({ icon: Icon }: { icon?: React.ComponentType<any> }) => (
        <div>
          <div className="flex items-center mb-4 md:block">
            {Icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              Data Intelligence
            </h3>
          </div>
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
            Transform your agency's data into actionable intelligence with AI-powered analytics platforms that provide real-time insights for better decision-making and citizen services.
          </p>
        </div>
      ),
      imageContent: (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl border border-white/20"></div>
          <img
            src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Data Intelligence"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      ),
    },
    {
      title: "Team Capability Building",
      icon: HireIcon,
      textContent: ({ icon: Icon }: { icon?: React.ComponentType<any> }) => (
        <div>
          <div className="flex items-center mb-4 md:block">
            {Icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
              Team Capability Building
            </h3>
          </div>
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
            Build lasting AI expertise within your organization through comprehensive training programs, hands-on workshops, and ongoing mentorship that ensures long-term success.
          </p>
        </div>
      ),
      imageContent: (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl border border-white/20"></div>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Team Capability Building"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-black relative overflow-hidden">
      <SectionBorder />
      <SectionGlow opacity="8%" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Transforming Government
            </span>
            <span className="block text-white">Through Intelligent AI</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowering agencies to deliver exceptional citizen experiences while reducing costs, accelerating processes, and driving measurable outcomes.
          </motion.p>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Services;