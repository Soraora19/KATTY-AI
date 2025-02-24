
import { motion } from "framer-motion";
import { DollarSign, Users, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "AI-Powered Mechanics",
    description: "$KATTY leverages artificial intelligence to create unique trading opportunities.",
  },
  {
    icon: Users,
    title: "Tech-Savvy Community",
    description: "Join a community that understands both crypto and artificial intelligence.",
  },
  {
    icon: Lock,
    title: "Secure & Transparent",
    description: "Smart contract audited and liquidity locked for maximum security.",
  },
  {
    icon: Zap,
    title: "Future-Ready",
    description: "Built with AI integration capabilities for future developments.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Why Choose $KATTY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            The perfect blend of artificial intelligence and meme culture, $KATTY is leading the next generation of cryptocurrency innovation.
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
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
