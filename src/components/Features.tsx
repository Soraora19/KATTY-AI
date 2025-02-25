
import { motion } from "framer-motion";
import { DollarSign, Users, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "AI-Powered Mechanics",
    description: "What do you get when you combine AI with a cat? A trading platform that always lands on its feet! 😺",
  },
  {
    icon: Users,
    title: "Tech-Savvy Community",
    description: "Join a community where 'catching the red dot' means spotting the next big crypto trend! 🔴",
  },
  {
    icon: Lock,
    title: "Secure & Transparent",
    description: "More secure than a cat guarding its favorite box. Smart contract audited and liquidity locked! 📦",
  },
  {
    icon: Zap,
    title: "Future-Ready",
    description: "While other coins chase their tails, $KATTY is coding the future. Meow-velous, right? ⚡",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#034522]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#10B981]"
          >
            Why Choose $KATTY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Because we're not just another copy cat! $KATTY combines artificial intelligence with feline finesse to create the purr-fect investment opportunity.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#10B981]">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
