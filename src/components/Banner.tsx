
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] relative overflow-hidden"
    >
      <img 
        src="/lovable-uploads/876b8281-bd43-42d7-930e-60652e79a35a.png"
        alt="$KATTY Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
    </motion.div>
  );
};

export default Banner;
