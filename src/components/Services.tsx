import { motion } from 'framer-motion';
import { SectionBorder } from './ui/section-border';
import { SectionGlow } from './ui/section-glow';
import { Timeline } from './ui/timeline';
import RocketIcon from './icons/RocketIcon';
import GearIcon from './icons/GearIcon';
import DatabaseNewIcon from './icons/DatabaseNewIcon';
import HireIcon from './icons/HireIcon';
import { Target, Zap, BarChart3, Users } from 'lucide-react';

const Services = () => {
  const timelineData = [
    {
      title: "AI Strategy & Assessment",
      icon: RocketIcon,
      textContent: ({ icon: Icon }: { icon?: React.ComponentType<any> }) => (
        <div>
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-bold tracking-wide uppercase">
                AI Strategy & Assessment
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Strategic AI Roadmaps at Your Fingertips
              </h3>
            </div>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
            Identify where AI creates the biggest impact in your agency, conducting comprehensive readiness assessments and developing strategic roadmaps that align with your mission objectives.
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
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-bold tracking-wide uppercase">
                Workflow Automation
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Intelligent Process Automation at Scale
              </h3>
            </div>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
            Automate predefined government processes or create intelligent agentic workflows that adapt to dynamic tasks. Implement human-in-the-loop systems for critical decision points, ensuring accountability while maximizing efficiency.
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
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-bold tracking-wide uppercase">
                Data Intelligence
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Data Insights at Your Fingertips
              </h3>
            </div>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
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
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-bold tracking-wide uppercase">
                Team Capability Building
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Build AI Expertise That Lasts
              </h3>
            </div>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
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
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-500 text-sm font-bold tracking-wide uppercase">
              Government AI Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
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