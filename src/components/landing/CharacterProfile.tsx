import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface IProps {
  model: JSX.Element[] | JSX.Element;
  camera: Object;
  intensity?: number;
}

function CharacterProfile({ model, camera, intensity }: IProps) {
  return (
    <div className="h-[100%]">
      <Canvas camera={camera}>
        <Suspense fallback={null}>
          <OrbitControls enableDamping />
          <ambientLight intensity={intensity} />
          <directionalLight />
          {model}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CharacterProfile;
