'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating wireframe geometric shape
function FloatingShape({
  position,
  geometry,
  color,
  speed,
  rotationIntensity,
  floatIntensity,
  scale
}: {
  position: [number, number, number]
  geometry: 'icosahedron' | 'octahedron' | 'torus' | 'torusKnot' | 'dodecahedron'
  color: string
  speed: number
  rotationIntensity: number
  floatIntensity: number
  scale: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed
      meshRef.current.rotation.y += 0.002 * speed
    }
  })

  const getGeometry = () => {
    switch (geometry) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />
    }
  }

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </Float>
  )
}

// Glowing sphere with distortion
function GlowingSphere({
  position,
  scale,
  color,
  speed,
  distort
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed: number
  distort: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3
    }
  })

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.18}
          distort={distort}
          speed={speed}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

// Orbiting ring particles
function OrbitalRing({
  radius,
  count,
  color,
  speed
}: {
  radius: number
  count: number
  color: string
  speed: number
}) {
  const pointsRef = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5
      pos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.3
    }
    return pos
  }, [count, radius])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005 * speed
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

// Ambient floating particles
function AmbientParticles({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      vel[i * 3] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002
    }
    return { positions: pos, velocities: vel }
  }, [count])

  useFrame(() => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position
      const posArr = posAttr.array as Float32Array
      for (let i = 0; i < count; i++) {
        posArr[i * 3] += velocities[i * 3]
        posArr[i * 3 + 1] += velocities[i * 3 + 1]
        posArr[i * 3 + 2] += velocities[i * 3 + 2]

        // Wrap around boundaries
        for (let j = 0; j < 3; j++) {
          if (posArr[i * 3 + j] > 10) posArr[i * 3 + j] = -10
          if (posArr[i * 3 + j] < -10) posArr[i * 3 + j] = 10
        }
      }
      posAttr.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#696f64"
        size={0.015}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  )
}

// Main scene
function Scene({ particleCount, starsCount }: { particleCount: number; starsCount: number }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#696f64" />
      <pointLight position={[-10, -5, -10]} intensity={0.15} color="#4a5568" />

      {/* Star field background */}
      <Stars
        radius={50}
        depth={80}
        count={starsCount}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Floating geometric wireframes */}
      <FloatingShape
        position={[-4, 2, -5]}
        geometry="icosahedron"
        color="#696f64"
        speed={1.2}
        rotationIntensity={0.5}
        floatIntensity={1}
        scale={1.5}
      />
      <FloatingShape
        position={[5, -1.5, -8]}
        geometry="octahedron"
        color="#8b9580"
        speed={0.8}
        rotationIntensity={0.4}
        floatIntensity={0.8}
        scale={2}
      />
      <FloatingShape
        position={[-2, -3, -6]}
        geometry="torus"
        color="#555b4f"
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={1.2}
        scale={1.2}
      />
      <FloatingShape
        position={[3, 3, -10]}
        geometry="torusKnot"
        color="#696f64"
        speed={0.6}
        rotationIntensity={0.3}
        floatIntensity={0.6}
        scale={1}
      />
      <FloatingShape
        position={[6, 1, -4]}
        geometry="dodecahedron"
        color="#7a8270"
        speed={0.9}
        rotationIntensity={0.5}
        floatIntensity={0.9}
        scale={0.8}
      />
      <FloatingShape
        position={[-5, -2, -12]}
        geometry="icosahedron"
        color="#4a5568"
        speed={0.5}
        rotationIntensity={0.2}
        floatIntensity={0.4}
        scale={2.5}
      />

      {/* Glowing distorted spheres */}
      <GlowingSphere
        position={[-3, 0, -4]}
        scale={2.5}
        color="#696f64"
        speed={1.5}
        distort={0.4}
      />
      <GlowingSphere
        position={[4, 2, -7]}
        scale={3}
        color="#555b4f"
        speed={1}
        distort={0.3}
      />

      {/* Orbital particle rings */}
      <OrbitalRing radius={5} count={200} color="#696f64" speed={1} />
      <OrbitalRing radius={8} count={150} color="#8b9580" speed={0.7} />

      {/* Ambient particles */}
      <AmbientParticles count={particleCount} />
    </>
  )
}

export default function AnimatedBackground() {
  const [enabled, setEnabled] = useState(true)
  const [particleCount, setParticleCount] = useState(80)
  const [starsCount, setStarsCount] = useState(1500)

  useEffect(() => {
    // Respect users who prefer reduced motion unless developer override is set
    const force = typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_FORCE_ANIM === '1'
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced && !force) {
      console.log('[AnimatedBackground] disabled due to prefers-reduced-motion')
      setEnabled(false)
      return
    }

    // Adjust particle and star counts for smaller screens
    const isSmall = window.innerWidth < 768
    if (isSmall) {
      setParticleCount(40)
      setStarsCount(600)
    }
  }, [])

  if (!enabled) {
    // Show a small debug badge in case animations are disabled
    return (
      <div className="fixed top-4 right-4 z-50 pointer-events-auto">
        <div className="bg-[#111] text-xs text-gray-300 px-3 py-1 rounded-md border border-white/10">Animations disabled</div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="fixed top-4 left-4 z-50 pointer-events-auto">
        <div className="bg-[#111] text-xs text-gray-300 px-2 py-1 rounded-md border border-white/10">Canvas: active</div>
      </div>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'rgba(255,0,0,0.04)' }}
      >
        <Scene particleCount={particleCount} starsCount={starsCount} />
      </Canvas>
    </div>
  )
}
