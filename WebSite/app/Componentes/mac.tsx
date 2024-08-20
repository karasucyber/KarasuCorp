import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const group = useRef<THREE.Group>(null);

  // Adiciona a rotação lenta ao modelo
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Ajuste a velocidade de rotação conforme necessário
    }
  });

  return (
    <group ref={group} rotation={[Math.PI / 4, Math.PI / 4, 0]}> {/* Define a rotação inicial */}
      <primitive object={gltf.scene} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <ModelViewer />
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={false} /> {/* Desativa a rotação via mouse */}
    </Canvas>
  );
};

const Mac = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default Mac;
