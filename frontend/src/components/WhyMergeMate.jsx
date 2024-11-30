import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Code, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import MergeMateScene from './MergeMateScene'

const features = [
  {
    title: "For Contributors",
    items: [
      "Discover projects tailored to your skills and interests.",
      "Swipe, match, and start collaborating effortlessly.",
      "Showcase your expertise and grow your open-source portfolio.",
      "Contribute to meaningful projects that make an impact.",
      "Gain recognition and network with top project owners.",
      "Improve your coding skills while working on real-world projects."
    ],
    icon: Code
  },
  {
    title: "For Project Owners",
    items: [
      "Find passionate contributors for your open-source repositories.",
      "Manage tasks seamlessly with a Trello-like board.",
      "Collaborate with the community and grow your project.",
      "Track the progress of contributors and assign tasks easily.",
      "Build a team of developers to work on your project efficiently.",
      "Increase visibility and attract more contributors to your project."
    ],
    icon: Users
  }
]

const WhyMergeMate = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="why-mergemate" className="w-full py-20 bg-gradient-to-br from-white to-zinc-300 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose MergeMate?
        </motion.h2>
        
        {/* Use a grid with three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:-mt-14 ">
          
          {/* Card on the left */}
          <div className="md:col-span-1 flex justify-center hover:scale-105 hover:shadow-lg transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">For Contributors</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {features[0].items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 3D Scene in the middle */}
          <div className="md:col-span-1 flex justify-center hover:scale-105  transition-all duration-300">
            <div className="h-[400px] md:h-[600px] w-[900px]  rounded-lg overflow-hidden">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Environment preset="sunset" />
                <MergeMateScene activeFeature={activeFeature} />
              </Canvas>
            </div>
          </div>

          {/* Card on the right */}
          <div className=" bg-slate-50 bg-opacity-25 md:col-span-1 flex justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">For Project Owners</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {features[1].items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMergeMate
