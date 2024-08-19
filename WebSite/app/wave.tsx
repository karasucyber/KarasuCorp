import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Função para gerar alturas de picos variadas
const getAmplitude = (index: number, total: number) => {
  const maxAmplitude = 2; // Aumenta a amplitude máxima
  const minAmplitude = 0.5; // Aumenta a amplitude mínima
  return maxAmplitude - (index / total) * (maxAmplitude - minAmplitude); // Amplitude decrescente
};

const getLineLength = (index: number, total: number) => {
  // Define o comprimento da linha com base no índice e no total
  const maxLength = 20; // Comprimento máximo da linha
  return maxLength - (index / total) * (maxLength - 1); // Comprimento decrescente
};

const WaveLine: React.FC<{ y: number; index: number; amplitude: number }> = ({ y, index, amplitude }) => {
  const lineRef = useRef<THREE.Line>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = lineRef.current!.geometry.attributes.position.array as Float32Array;

    // Atualiza a altura das ondas para simular um tsunami
    const scaleFactor = Math.min(time * 1, 8); // Aumenta a escala ao longo do tempo
    const frequency = 3; // Aumenta a frequência da onda

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      // Cria um efeito de tsunami com a frequência ajustada
      positions[i + 1] = Math.sin(x * frequency + time * 2 - index * -0.1) * amplitude;
    }
    lineRef.current!.geometry.attributes.position.needsUpdate = true;

    // Aumenta o comprimento das linhas ao longo do tempo
    lineRef.current!.scale.set(scaleFactor, 1, 1);
  });

  const points = [];
  const length = getLineLength(index, 10); // Obtém o comprimento da linha
  for (let x = -length / 2; x <= length / 2; x += 0.1) { // Ajusta o intervalo para maior largura
    points.push(new THREE.Vector3(x, 1, 1));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line ref={lineRef} geometry={geometry} position={[0, y, 0]}>
      <lineBasicMaterial attach="material" color="#ff0000" /> {/* Cor vermelha fixa */}
    </line>
  );
};

const WaveRectangle: React.FC = () => {
  const [amplitudes, setAmplitudes] = useState<number[]>([]);

  useEffect(() => {
    // Inicializa as amplitudes para cada linha, variando do maior ao menor
    const totalLines = 10;
    setAmplitudes(Array.from({ length: totalLines }, (_, index) => getAmplitude(index, totalLines)));
  }, []);

  const lines = [];
  for (let i = 0; i < 10; i++) { // 10 linhas de ondas
    lines.push(
      <WaveLine
        key={i}
        y={i * 0.5 - 2.5}
        index={i}
        amplitude={amplitudes[i] || 1} // Usa a amplitude definida ou um valor padrão
      />
    );
  }

  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      {lines}
    </Canvas>
  );
};

export default WaveRectangle;
