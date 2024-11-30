import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="w-full py-20 bg-primary text-primary-foreground bg-zinc-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Join MergeMate Today
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're looking to contribute or seeking collaborators, MergeMate is here to simplify your journey in open source.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
         
          <button className="px-6 py-3 flex justify-center shadow-xl bg-zinc-800 text-white text-center border-2 border-primary-foreground text-primary-foreground rounded-lg text-lg hover:bg-white hover:text-black">
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
