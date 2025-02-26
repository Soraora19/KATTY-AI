
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink } from "lucide-react";

const sampleData = [
  { time: '1', value: 30 },
  { time: '2', value: 35 },
  { time: '3', value: 45 },
  { time: '4', value: 40 },
  { time: '5', value: 50 },
  { time: '6', value: 55 },
  { time: '7', value: 65 },
];

const ChartTracker = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-[#022a16] to-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#10B981] mb-4">
            $KATTY Price Chart
          </h2>
          <a
            href="https://t.me/KATTY_O_SOL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#10B981] hover:text-[#10B981]/80 transition-colors"
          >
            <span>Track on Telegram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <div className="w-full h-[400px] bg-black/20 rounded-xl p-4 border border-[#10B981]/20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <XAxis 
                dataKey="time" 
                stroke="#4B5563"
                tickLine={false}
              />
              <YAxis 
                stroke="#4B5563"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  background: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#10B981'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
};

export default ChartTracker;
