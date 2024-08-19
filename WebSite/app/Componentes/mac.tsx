import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from '@react-three/drei';


const ModelViewer = () => {
  const gltf = useLoader(GLTFLoader, '/mac.gltf');
  const group: any = useRef();

  return (

    <>
      <group ref={group}>
        <primitive object={gltf.scene} position={[0, -1 , 0]} scale={[7, 7, 7]} />
      </group>
    </>


  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={10} />
      <directionalLight intensity={10} position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <ModelViewer />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};





const Mac = () => {
  return (
    <>
      <Scene />
    </>);
};

export default Mac;