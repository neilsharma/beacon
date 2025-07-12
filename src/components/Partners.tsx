import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: "Department of Defense", logo: "/partners/DOD.png" },
    { name: "Veterans Affairs", logo: "/partners/VA.png" },
    { name: "U.S. Digital Service", logo: "/partners/USDS.png", needsBorder: true, borderColor: "#D4AF37", rounded: true },
    { name: "Homeland Security", logo: "/partners/DHS.png" },
    { name: "Health & Human Services", logo: "/partners/HHS.png" },
    { name: "AI Corps", logo: "/partners/AICorps.png" },
    { name: "Centers for Disease Control", logo: "/partners/CDC.png" },
    { name: "U.S. Air Force", logo: "/partners/AirForce.png" },
    { name: "Executive Office of the President", logo: "/partners/ExecutiveOfficeOfPresident.png" },
    { name: "State of Colorado", logo: "/partners/StateColorado.png" },
    { name: "Office of Personnel Management", logo: "/partners/OPM.png" },
  ];

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  // Calculate animation distance (width of one complete set)
  const itemWidth = 240; // Updated for larger logos + spacing
  const totalWidth = (partners.length * 240) + (partners.length - 1) * 16; // Account for item width and gaps

  return (
    <section id="results" className="py-20 bg-gray-100">
      <div>
        <div className="text-center mb-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Government Leaders
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've worked with federal and state government agencies and delivered to millions of citizens and internal employees.
            </p>
          </div>
        </div>

        {/* Infinite scrolling partners */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{
              x: [0, -totalWidth]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45, // Slower scroll speed
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${itemWidth - 36}px`, height: '240px' }} // Fixed container size
              >
              {partner.name === 'U.S. Digital Service' ? (
                  // Special handling for USDS logo to make it perfectly circular
                  <div
                    className="rounded-full bg-white flex items-center justify-center"
                    style={{
                      width: '200px',
                      height: '200px',
                      border: `3px solid ${partner.borderColor}`,
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-28 h-28" // Smaller logo inside the circle
                    />
                  </div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`object-contain h-60 w-60 ${partner.rounded ? 'rounded-2xl' : ''}`}
                    style={partner.needsBorder && partner.name !== 'U.S. Digital Service' ? {
                      border: `2px solid ${partner.borderColor}`,
                      borderRadius: partner.rounded ? '32px' : '32px',
                    } : {}}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Stats below the logos */}
        <div className="text-center mt-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                <span className="text-yellow-500 font-semibold">12</span> agencies engaged
                <span className="mx-2">|</span>
                <span className="text-yellow-500 font-semibold">10+</span> years with government
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;