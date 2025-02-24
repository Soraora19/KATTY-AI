
import { motion } from "framer-motion";
import { DollarSign, Users, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Zero Tax",
    description: "No hidden fees or taxes on transactions. What you see is what you get.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governed by our passionate community of feline enthusiasts.",
  },
  {
    icon: Lock,
    title: "LP Locked",
    description: "Liquidity locked for 1 year, ensuring trading stability.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Lightning-fast transfers on the Ethereum network.",
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
            Why Choose KittyCoin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Built with style and security in mind, KittyCoin offers a unique blend of meme culture and serious tokenomics.
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
