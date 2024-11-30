import React from 'react';
import { motion } from 'framer-motion';
import { Github, Zap, Shuffle, Trello, Bell, Laptop } from 'lucide-react';

const features = [
  {
    title: "GitHub Integration",
    description: "Log in and fetch your profile and repositories effortlessly.",
    icon: Github,
  },
  {
    title: "Personalized Feed",
    description: "Projects tailored to your skills and interests.",
    icon: Zap,
  },
  {
    title: "Interactive Swiping",
    description: "Swipe to match with projects that excite you.",
    icon: Shuffle,
  },
  {
    title: "Task Management",
    description: "Trello-like boards for seamless collaboration.",
    icon: Trello,
  },
  {
    title: "Notifications",
    description: "Stay updated on project and task changes in real time.",
    icon: Bell,
  },
  // New feature added
  {
    title: "Cross-Platform Support",
    description: "Work seamlessly across all your devices with MergeMate's web and mobile versions.",
    icon: Laptop,
  },
];

const KeyFeatures = () => {
  return (
    <section id="features" className="w-full py-20 bg-gradient-to-t from-zinc-300 to-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Makes MergeMate Unique?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className=" cursor-default bg-card rounded-lg p-6 shadow-lg bg-slate-50 hover:scale-95 hover:transition-colors hover:bg-zinc-600 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                wwhileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
