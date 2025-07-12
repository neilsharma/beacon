import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* First pulse circle effect */}
      <motion.div
        className="absolute inset-0 rounded-full border border-yellow-400"
        animate={{
          scale: [0, 1.2, 1.2, 0],
          opacity: [0, 0.6, 0, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut",
          times: [0, 0.5, 0.75, 1]
        }}
      />
      
      {/* Second pulse circle effect - slower movement, same timing */}
      <motion.div
        className="absolute inset-0 rounded-full border border-yellow-400"
        animate={{
          scale: [0, 1.0, 1.0, 0],
          opacity: [0, 0.4, 0, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.6, 0.8, 1]
        }}
      />
      
      <motion.svg
        className="relative z-10"
        width="32"
        height="32"
        viewBox="0 0 375 375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Beacon logo from beacon-logo.svg */}
        <motion.path
          d="M 325.347656 187.359375 C 221.855469 206.410156 206.410156 221.855469 187.359375 325.347656 C 168.304688 221.855469 152.859375 206.410156 49.367188 187.359375 C 152.859375 168.304688 168.304688 152.859375 187.359375 49.367188 C 206.410156 152.859375 221.855469 168.304688 325.347656 187.359375 Z"
          fill="#eab308"
          stroke="none"
          animate={{ 
            scale: [0.9, 1.1, 0.9],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Logo;