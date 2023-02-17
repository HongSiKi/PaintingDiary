/* eslint-disable react/no-unknown-property */

import React from 'react';
import { useGLTF } from '@react-three/drei';

function Cat() {
  const {
    nodes: { Sketchfab_model: catObject },
  } = useGLTF('/resources/cat/cat.gltf');

  return <primitive object={catObject} />;
}

export default Cat;
