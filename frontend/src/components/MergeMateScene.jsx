import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const MergeMateScene = ({ activeFeature }) => {
  const groupRef = useRef()
  const textRef = useRef()

  const features = [
    ["Discover", "Find", "Collaborate"],
    ["Find", "Manage", "Grow"]
  ]

  useEffect(() => {
    if (textRef.current) {
      textRef.current.text = features[activeFeature][0]
    }
  }, [activeFeature])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(time / 2) * 0.3
    groupRef.current.position.y = Math.sin(time) * 0.2
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#4338ca" wireframe />
      </mesh>

      {/* Main Feature Text */}
      <Text
        ref={textRef}
        position={[0, 0, 1.5]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {features[activeFeature][0]}
      </Text>

      {/* Feature Items */}
      {features[activeFeature].map((feature, index) => (
        <Text
          key={index}
          position={[
            Math.cos((index / 3) * Math.PI * 2) * 2,
            Math.sin((index / 3) * Math.PI * 2) * 2,
            0
          ]}
          fontSize={0.3}
          color="#a5b4fc"
          anchorX="center"
          anchorY="middle"
        >
          {feature}
        </Text>
      ))}
    </group>
  )
}

export default MergeMateScene
