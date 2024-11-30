import React from 'react';
import { motion } from 'framer-motion';
import { Github, UserCircle, Search, Trello } from 'lucide-react';

const steps = [
  {
    title: "Sign in with GitHub",
    description: "Log in securely with GitHub and fetch your repositories in seconds.",
    icon: Github,
  },
  {
    title: "Customize Your Profile",
    description: "Add your expertise, tech stack, and experience level to get personalized recommendations.",
    icon: UserCircle,
  },
  {
    title: "Discover Projects or Add Your Own",
    description: "Swipe through open-source projects that match your skills or add your own repository to find contributors.",
    icon: Search,
  },
  {
    title: "Collaborate and Manage",
    description: "Use our Trello-like task board to collaborate with your team and track progress.",
    icon: Trello,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-20 bg-muted bg-gradient-to-b from-white to-zinc-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How MergeMate Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="cursor-default bg-card rounded-lg p-6 shadow-lg flex flex-col items-center text-center bg-slate-50  "
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Step {index + 1}</h3>
                <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
