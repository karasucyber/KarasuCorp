import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/money.gltf');
  const group = useRef<THREE.Group>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const floatSpeed = 1; // Velocidade de flutuação
  const floatRange = 1; // Intervalo de flutuação

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => mixer.current?.clipAction(clip).play());
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }

    if (group.current) {
      // Flutuação
      const elapsedTime = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(elapsedTime * floatSpeed) * floatRange;
    }
  });

  return (
    <group ref={group} rotation={[Math.PI / 4, 0, 0]}> {/* Inclinação leve para baixo */}
      <primitive object={gltf.scene} scale={[6, 6, 6 ]} position={[-1, 0, 0]}/>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[5, 10, 7]} />
      <Suspense fallback={null}>
        <ModelViewer />
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={false} /> {/* Desativa a rotação e o zoom via mouse */}
    </Canvas>
  );
};

const Money = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default Money;
