import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface CharacterProps {
  model: JSX.Element[] | JSX.Element;
}

function Character({ model }: CharacterProps) {
  return (
    <div className="h-[100%]">
      <Canvas
        camera={{
          position: [0.1, 0.1, 2],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          {model}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Character;
