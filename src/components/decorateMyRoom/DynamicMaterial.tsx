import React, { useRef, useState } from 'react';
import { Texture, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function DynamicMaterial({ textureSrc }: { textureSrc: string | null }) {
  const floorRef = useRef<String | null>(textureSrc);
  const [currentTexture, setCurrentTexture] = useState<Texture | null>(
    textureSrc !== null ? useLoader(TextureLoader, textureSrc) : null,
  );

  if (textureSrc !== null && textureSrc !== floorRef.current) {
    const texture = useLoader(TextureLoader, textureSrc);

    floorRef.current = textureSrc;
    setCurrentTexture(texture);
  }

  return <meshBasicMaterial map={currentTexture} />;
}

export default DynamicMaterial;
