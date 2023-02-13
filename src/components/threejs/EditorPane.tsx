import React, { RefObject, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';
import { Plane } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { useAppSelector } from '../../redux/hook';

interface PlaneProps {
  width: number;
  height: number;
  color: string;
}

function EditorPane({ width, height, color }: PlaneProps) {
  const planeRef = useRef<Mesh>() as RefObject<Mesh>;
  const { camera, mouse } = useThree();

  const assetList = useAppSelector((state) => state.asset.assetList);

  useFrame((state) => {
    // planeRef.current.rotation.x = -Math.PI / 2;
    // planeRef.current.rotation.y = 0;
    // planeRef.current.rotation.z = 0;
  });

  const onPointerDownHandler = (event: ThreeEvent<MouseEvent>) => {
    console.log('onPointerDownHandler', event);
  };

  const onPointerUpHandler = (event: ThreeEvent<MouseEvent>) => {
    console.log('onPointerUpHandler', event);
  };

  const onPointerMoveHandler = (event: ThreeEvent<MouseEvent>) => {
    console.log('onPointerMoveHandler', event);
  };

  console.log(assetList);

  return (
    <>
      <Plane
        ref={planeRef}
        args={[width, height]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerDown={onPointerDownHandler}
        onPointerUp={onPointerUpHandler}
        onPointerMove={onPointerMoveHandler}
      />
      {assetList.map((asset, idx) => (
        <mesh key={idx} position={asset.position}>
          <planeBufferGeometry args={asset.geometry} />
          <meshBasicMaterial color="#387fea" />
        </mesh>
      ))}
    </>
  );
}

export default EditorPane;
