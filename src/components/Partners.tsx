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
  // Use desktop size for calculation (mobile will scale proportionally)
  const itemWidth = 204;
  const gapWidth = 16; // space-x-4 gap
  const totalWidth = partners.length * (itemWidth + gapWidth); // Actual rendered width per set

  return (
    <section id="results" className="py-12 sm:py-20 bg-gray-100">
      <div>
        <div className="text-center mb-12 sm:mb-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Government Leaders
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0">
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
                className="flex-shrink-0 flex items-center justify-center w-24 sm:w-52 h-24 sm:h-60"
              >
              {partner.name === 'U.S. Digital Service' ? (
                  // Special handling for USDS logo to make it perfectly circular
                  <div
                    className="w-20 sm:w-48 h-20 sm:h-48 rounded-full bg-white flex items-center justify-center"
                    style={{
                      border: `3px solid ${partner.borderColor}`,
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-10 sm:w-28 h-10 sm:h-28" // Responsive logo inside the circle
                    />
                  </div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`object-contain h-20 sm:h-60 w-20 sm:w-60 ${partner.rounded ? 'rounded-2xl' : ''}`}
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
        <div className="text-center mt-12 sm:mt-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-300">
                <div className="text-center px-4">
                  <div className="text-yellow-500 font-bold text-2xl sm:text-3xl">1M+</div>
                  <div className="text-gray-700 text-base sm:text-lg font-semibold mt-2">Citizens impacted through digital service delivery</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-yellow-500 font-bold text-2xl sm:text-3xl">100s</div>
                  <div className="text-gray-700 text-base sm:text-lg font-semibold mt-2">Years of manual work saved through automation</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-yellow-500 font-bold text-2xl sm:text-3xl">10+</div>
                  <div className="text-gray-700 text-base sm:text-lg font-semibold mt-2">Years with government experience</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-yellow-500 font-bold text-2xl sm:text-3xl">100%</div>
                  <div className="text-gray-700 text-base sm:text-lg font-semibold mt-2">Repeat engagement with government clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;