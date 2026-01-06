import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center, Float } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Simple HVAC Unit 3D Model
function HVACUnit({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Main Unit Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#4A90E2" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Fan Grille */}
      <mesh position={[0, 0, 0.51]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#2C3E50" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Fan Blades */}
      <group position={[0, 0, 0.55]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (Math.PI / 2) * i]} position={[0.2, 0, 0]}>
            <boxGeometry args={[0.3, 0.05, 0.02]} />
            <meshStandardMaterial color="#34495E" />
          </mesh>
        ))}
      </group>
      
      {/* Side Vents */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.8]} />
          <meshStandardMaterial color="#7F8C8D" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Control Panel */}
      <mesh position={[0, -0.3, 0.51]}>
        <boxGeometry args={[0.4, 0.2, 0.05]} />
        <meshStandardMaterial color="#E74C3C" emissive="#E74C3C" emissiveIntensity={0.2} />
      </mesh>
    </group>
  )
}

// Floating HVAC Icon Component
export const HVACIcon3D = ({ width = 200, height = 200, className = "" }) => {
  return (
    <div className={`${className}`} style={{ width, height }}>
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#4A90E2" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <HVACUnit scale={0.8} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}

// Hero Section 3D Background
export const HVACHero3D = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4A90E2" />
        
        {/* Multiple HVAC Units */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <HVACUnit position={[-3, 1, -2]} scale={0.5} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <HVACUnit position={[3, -1, -3]} scale={0.6} />
        </Float>
        
        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
          <HVACUnit position={[0, 2, -4]} scale={0.4} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

// Simple 3D Text Component
export const HVAC3DText = ({ text = "HVACR", className = "" }) => {
  return (
    <div className={`${className}`} style={{ width: '100%', height: '200px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <Center>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.8}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {text}
              <meshStandardMaterial 
                color="#4A90E2" 
                metalness={0.5} 
                roughness={0.3}
                emissive="#1E3A8A"
                emissiveIntensity={0.1}
              />
            </Text3D>
          </Float>
        </Center>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  )
}

export default HVACIcon3D