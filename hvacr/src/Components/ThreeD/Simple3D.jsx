import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

// Simple rotating cube for icons
function RotatingCube({ color = "#4A90E2", size = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  )
}

// Simple floating sphere
function FloatingSphere({ color = "#10B981", size = 0.8 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

// Simple 3D Icon Component (Easy to use)
export const Simple3DIcon = ({ 
  type = "cube", 
  color = "#4A90E2", 
  size = 60, 
  className = "" 
}) => {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        {type === "cube" && <RotatingCube color={color} size={0.8} />}
        {type === "sphere" && <FloatingSphere color={color} size={0.6} />}
      </Canvas>
    </div>
  )
}

// Background 3D Elements (for hero sections)
export const Background3D = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 opacity-20 ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        
        {/* Multiple floating elements */}
        <group position={[-4, 2, -2]}>
          <RotatingCube color="#4A90E2" size={0.8} />
        </group>
        
        <group position={[4, -2, -3]}>
          <FloatingSphere color="#10B981" size={0.6} />
        </group>
        
        <group position={[0, 0, -5]}>
          <RotatingCube color="#8B5CF6" size={1.2} />
        </group>
        
        <group position={[-2, -3, -1]}>
          <FloatingSphere color="#F59E0B" size={0.4} />
        </group>
      </Canvas>
    </div>
  )
}

export default Simple3DIcon