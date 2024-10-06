import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const Atom = ({ position, color, label }) => {
  return (
    <group position={position}>
      <Sphere args={[0.2, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
      <Html distanceFactor={10}>
        <div className="px-1 rounded bg-gray-800 text-white text-xs">{label}</div>
      </Html>
    </group>
  );
};

const Bond = ({ start, end, double = false }) => {
  const midPoint = new THREE.Vector3().addVectors(new THREE.Vector3(...start), new THREE.Vector3(...end)).multiplyScalar(0.5);
  const direction = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start)).normalize();
  const perpendicular = new THREE.Vector3(-direction.y, direction.x, direction.z).multiplyScalar(0.05);

  if (double) {
    return (
      <>
        <Line points={[start, end]} color="white" lineWidth={2} />
        <Line points={[
          midPoint.clone().add(perpendicular).toArray(),
          midPoint.clone().sub(perpendicular).toArray()
        ]} color="white" lineWidth={2} />
      </>
    );
  }
  return <Line points={[start, end]} color="white" lineWidth={3} />;
};

const Caffeine = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  // Caffeine structure (simplified)
  const atoms = [
    { position: [0, 0, 0], color: "gray", label: "C" },
    { position: [1, 0, 0], color: "gray", label: "C" },
    { position: [1.5, 1, 0], color: "gray", label: "C" },
    { position: [0.5, 2, 0], color: "gray", label: "C" },
    { position: [-0.5, 1, 0], color: "blue", label: "N" },
    { position: [-1, 0, 1], color: "gray", label: "C" },
    { position: [0, -1, 0], color: "red", label: "O" },
    { position: [2, -0.5, 0], color: "blue", label: "N" },
    { position: [2.5, 1, 0], color: "red", label: "O" },
    { position: [0.5, 3, 0], color: "blue", label: "N" },
    { position: [-1.5, 1, 0], color: "gray", label: "C" },
    { position: [-2, 0, 1], color: "gray", label: "C" },
    { position: [3, -1, 0], color: "gray", label: "C" },
    { position: [1, 4, 0], color: "gray", label: "C" },
  ];

  const bonds = [
    { start: [0, 0, 0], end: [1, 0, 0], double: true },
    { start: [1, 0, 0], end: [1.5, 1, 0] },
    { start: [1.5, 1, 0], end: [0.5, 2, 0], double: true },
    { start: [0.5, 2, 0], end: [-0.5, 1, 0] },
    { start: [-0.5, 1, 0], end: [0, 0, 0] },
    { start: [-0.5, 1, 0], end: [-1, 0, 1] },
    { start: [0, 0, 0], end: [0, -1, 0], double: true },
    { start: [1, 0, 0], end: [2, -0.5, 0] },
    { start: [1.5, 1, 0], end: [2.5, 1, 0], double: true },
    { start: [0.5, 2, 0], end: [0.5, 3, 0] },
    { start: [-0.5, 1, 0], end: [-1.5, 1, 0] },
    { start: [-1, 0, 1], end: [-2, 0, 1] },
    { start: [2, -0.5, 0], end: [3, -1, 0] },
    { start: [0.5, 3, 0], end: [1, 4, 0] },
  ];

  return (
    <group ref={groupRef}>
      {atoms.map((atom, index) => (
        <Atom key={index} position={atom.position} color={atom.color} label={atom.label} />
      ))}
      {bonds.map((bond, index) => (
        <Bond key={index} start={bond.start} end={bond.end} double={bond.double} />
      ))}
    </group>
  );
};

const MoleculeViewer = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Explore Complex Molecular Structures</h2>
        <div className="w-full h-[600px]">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
              <color attach="background" args={['#111']} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Caffeine />
              <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.5} />
            </Canvas>
          </Suspense>
        </div>
        <p className="text-center text-gray-300 mt-8">
          Interactive 3D model of a caffeine molecule. Use your mouse to rotate and explore the structure.
        </p>
      </div>
    </section>
  );
};

export default MoleculeViewer;