import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface CharacterProfileProps {
  model: JSX.Element[] | JSX.Element;
}

function MyRoom({ model }: CharacterProfileProps) {
  return (
    <div className="w-[75%] bg-lightGray">
      <Canvas
        camera={{
          position: [2.5, 2.5, 1.5],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={1.6} />
          {model}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyRoom;
