import { motion } from 'framer-motion';
import { SectionBorder } from './ui/section-border';
import { SectionGlow } from './ui/section-glow';
import { Timeline } from './ui/timeline';
import { Sparkles } from './ui/sparkles';
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
              <Target className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
                AI Strategy & Assessment
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Strategic AI Roadmaps That Actually Work
              </h3>
            </div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
            We help you identify where AI creates the biggest impact in your agency. Our team conducts comprehensive readiness assessments and develops strategic roadmaps that align with your mission objectives—not just technology for technology's sake.
          </p>
        </div>
      ),
      imageContent: (
        <div className="flex items-center justify-center relative w-full h-64 md:h-80">
          <Sparkles 
            className="absolute inset-0 -inset-y-8" 
            density={25} 
            color="#3b82f6" 
            size={3}
            speed={3}
          />
          <img
            src="/strategy-abstract.png"
            alt="AI Strategy & Assessment"
            className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
          />
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
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
                Workflow Automation
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Intelligent Process Automation That Delivers
              </h3>
            </div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
            We automate predefined government processes and create intelligent agentic workflows that adapt to dynamic tasks. Our solutions implement human-in-the-loop systems for critical decision points, ensuring accountability while maximizing efficiency.
          </p>
        </div>
      ),
      imageContent: (
        <div className="flex items-center justify-center relative w-full h-64 md:h-80">
          <Sparkles 
            className="absolute inset-0 -inset-y-8" 
            density={25} 
            color="#3b82f6" 
            size={3}
            speed={3}
          />
          <img
            src="/automation-abstract.png"
            alt="Workflow Automation"
            className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
          />
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
              <BarChart3 className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
                Data Intelligence
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Data Insights When You Need Them
              </h3>
            </div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
            We transform your agency's data into actionable intelligence with AI-powered analytics platforms that provide real-time insights for better decision-making and citizen services—no data science PhD required.
          </p>
        </div>
      ),
      imageContent: (
        <div className="flex items-center justify-center relative w-full h-64 md:h-80">
          <Sparkles 
            className="absolute inset-0 -inset-y-8" 
            density={25} 
            color="#3b82f6" 
            size={3}
            speed={3}
          />
          <img
            src="/data-abstract.png"
            alt="Data Intelligence"
            className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
          />
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
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
                Team Capability Building
              </span>
            </div>
            <div className="flex items-center mb-6 md:block">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mr-4 md:hidden border-6 border-black" style={{ backgroundColor: 'rgba(30,30,30,1)' }}>
                  <Icon className="h-6 w-6" primaryColor="#FFFFFF" secondaryColor="rgba(255, 255, 255, 0.4)" />
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Build AI Expertise That Lasts
              </h3>
            </div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
            We build lasting AI expertise within your organization through comprehensive training programs, hands-on workshops, and ongoing mentorship. Because the best AI implementations succeed when your people understand and trust the technology.
          </p>
        </div>
      ),
      imageContent: (
        <div className="flex items-center justify-center relative w-full h-64 md:h-80">
          <Sparkles 
            className="absolute inset-0 -inset-y-8" 
            density={25} 
            color="#3b82f6" 
            size={3}
            speed={3}
          />
          <img
            src="/hiring-abstract.png"
            alt="Team Capability Building"
            className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
          />
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">
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