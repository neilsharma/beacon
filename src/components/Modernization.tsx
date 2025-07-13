import { motion } from 'framer-motion';
import { Users, Target, Cog, Cloud, BarChart3, Lightbulb } from 'lucide-react';
import { cn } from "@/lib/utils";
import { SectionBorder } from './ui/section-border';
import { SectionGlow } from './ui/section-glow';
import { BenefitCard } from './ui/benefit-card';
import { GridPattern } from './magicui/grid-pattern';

const Modernization = () => {
  const modernizationCards = [
    {
      icon: Users,
      title: "Human-Centered Design",
      subtitle: "Putting people at the center of every solution",
      description: "Create intuitive, accessible digital experiences through user research and prototyping, reducing friction for citizens."
    },
    {
      icon: Target,
      title: "Product Strategy",
      subtitle: "Digital transformation through agile execution",
      description: "Build strategic roadmaps that align stakeholder goals with technical delivery through agile practices."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      subtitle: "Evidence-based decision making",
      description: "Turn raw data into actionable insights through analytics and reporting that inform policy and improve service delivery."
    },
    {
      icon: Lightbulb,
      title: "Continuous Delivery",
      subtitle: "Cloud-native engineering at scale",
      description: "Deploy applications frequently and reliably through automated CI/CD pipelines to maintain velocity."
    },
    {
      icon: Cloud,
      title: "Cloud Modernization",
      subtitle: "Infrastructure for cost savings, and reliability",
      description: "Save money and improve performance by migrating legacy systems to cloud-native environments."
    },
    {
      icon: Cog,
      title: "DevSecOps",
      subtitle: "Security and delivery, with speed",
      description: "Accelerate deployment cycles while maintaining security through automated pipelines and continuous monitoring."
    }
  ];

  return (
    <section id="modernization" className="py-12 sm:py-20 bg-black relative overflow-hidden">
      <SectionBorder />
      <SectionGlow opacity="8%" position="top-[-300px]" />
      
      {/* Grid Pattern with Linear Gradient */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0",
          "[mask-image:radial-gradient(ellipse_at_center,white_25%,transparent_100%)]",
          "stroke-white/20 fill-white/2 opacity-40"
        )}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Modernizing Government
            <span className="block text-white">for the Digital Age</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforming how government operates through cutting-edge technology solutions that enhance efficiency, security, and citizen satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modernizationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BenefitCard 
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modernization;