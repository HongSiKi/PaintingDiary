/* eslint-disable react/no-unknown-property */

import React from 'react';
import { useGLTF } from '@react-three/drei';

function Rabbit() {
  const {
    nodes: { Sketchfab_model: rabbitObject },
  } = useGLTF('/resources/rabbit/rabbit.gltf');

  return <primitive object={rabbitObject} />;
}

export default Rabbit;
