
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] relative overflow-hidden bg-gradient-to-r from-[#034522] to-[#022a16]"
    >
      <img 
        src="/lovable-uploads/876b8281-bd43-42d7-930e-60652e79a35a.png"
        alt="$KATTY Banner"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      
      {/* Social Media Buttons */}
      <div className="absolute top-6 right-6 flex gap-4">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-white px-4 py-2 rounded-full border border-[#10B981]/50 backdrop-blur-sm transition-all"
        >
          <X className="w-5 h-5" />
          <span className="text-sm font-medium">X</span>
        </motion.a>
        
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-white px-4 py-2 rounded-full border border-[#10B981]/50 backdrop-blur-sm transition-all"
        >
          <Send className="w-5 h-5" />
          <span className="text-sm font-medium">Telegram</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Banner;
