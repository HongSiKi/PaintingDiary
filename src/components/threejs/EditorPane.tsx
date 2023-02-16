import React, { RefObject, useRef } from 'react';
import { Mesh } from 'three';
import { Plane } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { useAppSelector } from '../../redux/hook';
import DynamicMaterial from '../decorateMyRoom/DynamicMaterial';

interface PlaneProps {
  width: number;
  height: number;
  color: string;
}

function EditorPane({ width, height, color }: PlaneProps) {
  const planeMeshRef = useRef<Mesh>() as RefObject<Mesh>;

  const assetState = useAppSelector((state) => state.asset);

  const onPointerDownHandler = (event: ThreeEvent<MouseEvent>) => {
    // console.log('onPointerDownHandler', event);
  };

  const onPointerUpHandler = (event: ThreeEvent<MouseEvent>) => {
    // console.log('onPointerUpHandler', event);
  };

  const onPointerMoveHandler = (event: ThreeEvent<MouseEvent>) => {
    // console.log('onPointerMoveHandler', event);
  };

  console.log(assetState);

  return (
    <>
      <Plane
        ref={planeMeshRef}
        args={[width, height]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerDown={onPointerDownHandler}
        onPointerUp={onPointerUpHandler}
        onPointerMove={onPointerMoveHandler}
      >
        <DynamicMaterial
          textureSrc={assetState.floor === null ? assetState.floorDefault : assetState.floor.src}
        />
      </Plane>
      {assetState.assetList.map((asset, idx) => (
        <mesh key={idx} position={asset.position} rotation={asset.rotation}>
          <planeGeometry args={[2, 2]} />
          <DynamicMaterial textureSrc={asset.src} />
        </mesh>
      ))}
    </>
  );
}

export default EditorPane;
