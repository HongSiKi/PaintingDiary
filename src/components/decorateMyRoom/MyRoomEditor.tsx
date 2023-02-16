import React, { Suspense } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import EditorPane from '../threejs/EditorPane';

enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}

const width = 50;
const height = 50;
const cameraDistance = 50;
const cameraPosition = [2.5, 2.5, 1.5] as Vector3;

function MyRoomEditor() {
  return (
    <div className="flex-[3] bg-lightGray">
      <Canvas
        camera={{
          position: cameraPosition,
        }}
      >
        <MapControls
          minPolarAngle={0}
          maxPolarAngle={(Math.PI / 2) * 0.9}
          maxDistance={cameraDistance}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={1.6} />
          <EditorPane width={width} height={height} color="#999999" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MyRoomEditor;
