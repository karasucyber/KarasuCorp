import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import '../styles.css';

const ParticleWaves = () => {
    const pointsRef = useRef();
    const geometryRef = useRef(new THREE.BufferGeometry());
    const positions = useRef(new Float32Array(1000 * 3)); // Número de pontos * 3 (x, y, z)
    const [mousePosition, setMousePosition] = useState(new THREE.Vector2());
    const { camera } = useThree();

    const numberOfPoints = 1000;
    const width = 100; // Largura da tela em unidades 3D
    const speed = 0.5; // Velocidade da animação

    // Função para inicializar os pontos das ondas
    const initializePoints = () => {
        const posArray = positions.current;
        for (let i = 0; i < numberOfPoints; i++) {
            const x = (Math.random() - 0.5) * width;
            const y = Math.sin(x * 0.1) * Math.random(); // Ajuste a frequência e a amplitude
            const z = (Math.random() - 0.5) * width;
            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;
        }

        geometryRef.current.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    };

    // Função para atualizar as posições das partículas com efeito de rastro
    useFrame(({ clock, mouse }) => {
        const time = clock.getElapsedTime();
        const geometry = geometryRef.current;
        const positionAttr = geometry.attributes.position;

        if (positionAttr) {
            const positionArray = positionAttr.array;
            for (let i = 0; i < positionArray.length; i += 3) {
                // A posição Y é baseada na função seno para criar uma onda suave
                const index = i / 3;
                positionArray[i + 1] = Math.sin((index + time * speed) * 0.1) * 5; // Efeito de onda
            }
            positionAttr.needsUpdate = true; // Marca a geometria para atualização
        }
    });

    // Função para empurrar os pontos ao passar o mouse
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const mouse = new THREE.Vector2(
            (clientX / window.innerWidth) * 2 - 1,
            -(clientY / window.innerHeight) * 2 + 1
        );
        setMousePosition(mouse);
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        
        const intersects = raycaster.intersectObject(pointsRef.current);
        if (intersects.length > 0) {
            const intersect = intersects[0];
            const pointIndex = Math.floor(intersect.index / 3);
            const offset = intersect.point.sub(new THREE.Vector3());
            const positionAttr = geometryRef.current.attributes.position;
            const positionArray = positionAttr.array;

            // Desloca o ponto atingido
            positionArray[pointIndex * 3] += offset.x;
            positionArray[pointIndex * 3 + 1] += offset.y;
            positionArray[pointIndex * 3 + 2] += offset.z;

            positionAttr.needsUpdate = true;
        }
    };

    useEffect(() => {
        initializePoints();
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <points ref={pointsRef} geometry={geometryRef.current}>
            <pointsMaterial attach="material" color="white" size={0.1} sizeAttenuation={true} />
        </points>
    );
};

const App = () => (
    <Canvas
        style={{
            background: 'black' // Cor de fundo do Canvas
        }}
        camera={{ position: [0, 0, 50], near: 0.1, far: 1000, fov: 60 }} // Ajuste a posição da câmera e o campo de visão
    >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <ParticleWaves />
    </Canvas>
);

export default App;
