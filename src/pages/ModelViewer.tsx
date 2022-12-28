/* eslint-disable react/no-unknown-property */

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Ironman() {
  const {
    nodes: { mesh14datout001: ironmanObject },
  } = useGLTF('resources/ironman.gltf');

  ironmanObject.position.set(0, 2.39, 0);
  ironmanObject.rotateX(-Math.PI / 2);
  ironmanObject.rotateY(1);

  return <primitive object={ironmanObject} />;
}

function ModelViewer(): JSX.Element {
  return (
    <div style={{ width: 1000, height: 1000 }}>
      <Canvas
        camera={{
          position: [6, 4, 4],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <pointLight position={[10, 10, 10]} />
          <gridHelper />
          <Ironman />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
