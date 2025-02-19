import React, { useRef, useState, useCallback, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float, SoftShadows } from "@react-three/drei";
// import { Rocket, Target, Lightbulb, TrendingUp, Users, Globe } from "lucide-react";

const FloatingText = React.memo(function FloatingText({ text, position }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Html position={position} center>
        <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full">
          <p className="text-white font-bold text-sm whitespace-nowrap">{text}</p>
        </div>
      </Html>
    </Float>
  );
});

function RubikCube() {
  const cubeRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0.01, y: 0.005 });

  useFrame(() => {
    cubeRef.current.rotation.y += rotationSpeed.y;
    cubeRef.current.rotation.x += rotationSpeed.x;
  });

  const handlePointerDown = useCallback((event) => {
    event.stopPropagation();
    setRotationSpeed((prev) => ({ x: prev.x * -1, y: prev.y * -1 }));
  }, []);

  const pieceSize = 0.5;
  const gap = 0.02;
  const positions = useMemo(() => [-1, 0, 1], []);

  return (
    <group ref={cubeRef} onPointerDown={handlePointerDown}>
      {positions.map((x) =>
        positions.map((y) =>
          positions.map((z) => (
            <mesh
              key={`${x}-${y}-${z}`}
              position={[x * (pieceSize + gap), y * (pieceSize + gap), z * (pieceSize + gap)]}
            >
              <boxGeometry args={[pieceSize, pieceSize, pieceSize]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                emissive="#3a3a3a" 
                roughness={0.3} 
                metalness={0.7}
              />
            </mesh>
          ))
        )
      )}
    </group>
  );
}

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/12 flex flex-col justify-center p-8 lg:p-16 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Digital <span className="text-blue-400">Presence</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Think Grow Media helps brands scale through innovative marketing strategies and creative solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-colors">
              Our Services
            </button>
          </div>
        </div>

        <div className="w-full lg:w-7/12 h-[50vh] lg:h-screen order-1 lg:order-2">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }} shadows>
            <SoftShadows size={10} samples={16} focus={0.5} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 5, 2]} intensity={1.5} castShadow />
            <RubikCube />
            <OrbitControls enableZoom={false} />
            <FloatingText text="Digital Innovation" position={[0.5, 1.2, 0]} />
            <FloatingText text="Growth Strategy" position={[-0.8, 0.5, 0]} />
            <FloatingText text="Brand Excellence" position={[0.8, -0.5, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
