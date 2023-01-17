/* eslint-disable react/no-unknown-property */

import React from 'react';
import { useGLTF } from '@react-three/drei';

function Room() {
  const {
    nodes: { floor, wall1, wall2 },
  } = useGLTF('/resources/room.gltf');

  return (
    <>
      <primitive object={floor} />;
      <primitive object={wall1} />;
      <primitive object={wall2} />;
    </>
  );
}

export default Room;
