import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "MergeMate made contributing to open source easy and fun! Such a innovative platform",
    author: "Ahmed Sheikh, Software Developer",
  },
  {
    quote: "I found the perfect contributors for my project in just a day! It saves so much of my time",
    author: "Ali Ahmed, Project Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 bg-muted bg-gradient-to-b  from-zinc-300 to-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Users Are Saying
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg bg-white bg-opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-right font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
