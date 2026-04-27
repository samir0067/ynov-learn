import React, { useRef, useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas, useFrame } from '@react-three/fiber/native';

function Particles() {
  const count = 150;
  // On génère des positions aléatoires pour 150 particules
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15; // Éparpillées sur 15 unités
    }
    return pos;
  }, []);

  const pointsRef = useRef<any>(null);
  
  // Fait tourner lentement tout le groupe de particules
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#ffffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

function MovingCube() {
  const meshRef = useRef<any>(null);
  // État pour savoir si le cube a été touché
  const [active, setActive] = useState(false);

  // Fait tourner et déplace l'élément de manière fluide
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation (tourne beaucoup plus vite si cliqué)
      meshRef.current.rotation.x += delta * (active ? 2.5 : 0.4);
      meshRef.current.rotation.y += delta * (active ? 3.0 : 0.5);
      
      // Déplacement (mouvement sinusoïdal pour un effet de flottaison)
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 1.2;
      meshRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.8) * 1.2;
      
      // Effet d'agrandissement doux quand on le touche
      const targetScale = active ? 1.5 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} onPointerDown={() => setActive(!active)}>
      <boxGeometry args={[3, 3, 3]} />
      {/* Matériau : Blanc par défaut, sombre au toucher */}
      <meshStandardMaterial color={active ? "#222222" : "#FFFFFF"} roughness={0.1} metalness={0.8} />
    </mesh>
  );
}

export default function Model3D() {
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#000000' }]}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        {/* Fond du canvas noir */}
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#aaaaaa" />
        <Particles />
        <MovingCube />
      </Canvas>
    </View>
  );
}