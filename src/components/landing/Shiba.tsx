/* eslint-disable react/no-unknown-property */

import React from 'react';
import { useGLTF } from '@react-three/drei';

function Shiba() {
  const {
    nodes: { Sketchfab_model: shibaObject },
  } = useGLTF('/resources/shiba.gltf');

  return <primitive object={shibaObject} />;
}

export default Shiba;
