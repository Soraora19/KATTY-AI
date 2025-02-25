
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[300px] relative overflow-hidden bg-gradient-to-r from-[#034522] to-[#022a16]"
    >
      <img 
        src="/lovable-uploads/876b8281-bd43-42d7-930e-60652e79a35a.png"
        alt="$KATTY Banner"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
    </motion.div>
  );
};

export default Banner;
