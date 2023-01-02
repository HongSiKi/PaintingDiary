import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Shiba from './Shiba';

function Character() {
  return (
    <div className="h-[100%]">
      <Canvas
        camera={{
          position: [0.1, 0.1, 2],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <Shiba />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Character;
