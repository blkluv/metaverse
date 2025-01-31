import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useParams } from "react-router";
import { Model as Club } from "./library/Library";
import { getAvatar } from "./constants";

const LibPage = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
      <Sky sunPosition={[0, 1, 0]} />
      {/* <Player scale={5} position={[0, 1, 0]} /> */}
      {getAvatar(id, true, { scale: 5 })}
      {/* <OrbitControls /> */}
      <Club scale={7} />
    </Canvas>
  );
};

export default LibPage;
