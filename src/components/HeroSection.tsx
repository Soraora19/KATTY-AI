
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The Purr-fect AI Agent Memecoin 😺
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Meet $KATTY
            <span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Why did $KATTY become an AI agent? Because regular cats only have 9 lives, but AI cats have infinite potential! Join our community of tech-savvy feline enthusiasts.
          </p>
          <div className="text-sm text-gray-500 mb-8 italic">
            "In a world of doge coins, be a sophisticated cat" - $KATTY, probably
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Buy Meow 🐱
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors">
              Paw-ssibly Learn More
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src="/lovable-uploads/930ed471-5a75-43c8-9186-c34293780349.png"
            alt="$KATTY AI Agent"
            className="w-full max-w-[500px] mx-auto"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-0 right-0 bg-white rounded-full px-4 py-2 shadow-lg text-sm font-medium"
          >
            "AI + Cat = Purrfection" 🤖😺
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
