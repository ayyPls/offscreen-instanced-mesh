import { Detailed, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas as OffscreenCanvas } from '@react-three/offscreen';
import CubeInstances from './CubeInstances';
import PointsCloud from './PointsCloud';
import BoxHelper from './BoxHelper';
import Scene from './scene';
import './index.css';


const MainThreadApp = () => {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 30, 60] }}>
      <ambientLight />
      <color attach="background" args={['#EFEFEF']} />
      <Detailed distances={[0, 30, 60]}>
        <CubeInstances />
        <PointsCloud />
        <BoxHelper />
      </Detailed>
      <OrbitControls />
    </Canvas>
  );
};

const worker = new Worker(new URL('./worker.tsx', import.meta.url), { type: 'module' });

const WorkerThreadApp = () => {
  return <OffscreenCanvas fallback={<Scene />} frameloop="demand" camera={{ position: [0, 30, 60] }} worker={worker} />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MainThreadApp /> */}
    <WorkerThreadApp />
  </React.StrictMode>
);
