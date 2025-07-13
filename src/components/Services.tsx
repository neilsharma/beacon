import { motion } from 'framer-motion';
import { SectionBorder } from './ui/section-border';
import { SectionGlow } from './ui/section-glow';
import BrainIcon from './icons/BrainIcon';
import ShieldIcon from './icons/ShieldIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import ZapIcon from './icons/ZapIcon';

const Services = () => {
  const services = [
    {
      icon: BrainIcon,
      title: "AI Strategy & Assessment",
      description: "We identify where AI creates the biggest impact in your agency, conducting comprehensive readiness assessments and developing strategic roadmaps that align with your mission objectives.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: ShieldIcon,
      title: "Secure Implementation",
      description: "Deploy AI solutions that meet government security standards, ensuring compliance with FedRAMP, FISMA, and other critical requirements while maintaining operational excellence.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: DatabaseIcon,
      title: "Data Intelligence",
      description: "Transform your agency's data into actionable intelligence with AI-powered analytics platforms that provide real-time insights for better decision-making and citizen services.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: ZapIcon,
      title: "Team Capability Building",
      description: "Build lasting AI expertise within your organization through comprehensive training programs, hands-on workshops, and ongoing mentorship that ensures long-term success.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
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

        <div className="space-y-16 sm:space-y-24 text-white">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Service border */}
              {index > 0 && (
                <SectionBorder />
              )}
              
              <motion.div
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } pt-16 sm:pt-24`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                      <service.icon 
                        className="h-8 sm:h-10 w-8 sm:w-10" 
                        primaryColor="#FFFFFF" 
                        secondaryColor="rgba(255, 255, 255, 0.4)" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl border border-white/20"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;