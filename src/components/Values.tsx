import { Award, Lock, Lightbulb, Handshake, Users, Zap } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Lock,
      title: "Security First",
      description: "Government-grade security and compliance built from the ground up for mission-critical operations and data protection."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Cutting-edge AI technologies designed to solve the most complex government challenges with innovative solutions and approaches."
    },
    {
      icon: Handshake,
      title: "Partnership Focused",
      description: "Close collaboration with government teams ensuring seamless integration and lasting partnerships that drive mutual success."
    },
    {
      icon: Award,
      title: "Excellence Delivered",
      description: "Unwavering quality commitment that consistently meets the highest government service standards and exceeds expectations."
    },
    {
      icon: Users,
      title: "Citizen Centered",
      description: "Every AI solution thoughtfully designed to improve citizen experiences and deliver measurable outcomes for public benefit."
    },
    {
      icon: Zap,
      title: "Results Focused",
      description: "Measurable impact and ROI that demonstrates clear, tangible value to taxpayers and government agencies nationwide."
    }
  ];

  return (
    <section id="values" className="pb-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Values Section */}
        <div className="relative">
          {/* Border above Core Values */}
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-px bg-gradient-to-r from-black from-35% via-white/20 to-black to-65%"></div>
          
          <div className="text-center mb-16 pt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
              Our Values
            </h2>
            <p className="text-xl text-subtitle max-w-3xl mx-auto">
              Principles we operate on to ensure the public good
            </p>
          </div>
        </div>

        {/* Values List */}
        <div className="mt-16 max-w-7xl xl:max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto justify-items-center">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <value.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-subtitle font-bold mb-1 text-lg">{value.title}</div>
                  <div className="text-description text-base leading-relaxed max-w-md">{value.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;