/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useInput } from "./hooks/useInput";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useUpdateMyPresence } from "./liveblocks.config";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/man3-transformed.glb");
  const { actions } = useAnimations(animations, group);

  const { isPlaying, x, z, offset } = props;

  const updatePresence = useUpdateMyPresence();

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  }, [actions]);

  const { KeyW, KeyS, KeyA, KeyD } = useInput();
  const currentAction = useRef();
  const controlsRef = useRef();
  const camera = useThree((state) => state.camera);

  let walkDirection = new THREE.Vector3();
  let rotateAngle = new THREE.Vector3(0, 1, 0);
  let rotateQuaterion = new THREE.Quaternion();
  let cameraTarget = new THREE.Vector3();

  if (!isPlaying && group.current && x && z && offset) {
    group.current.position.x = x;
    group.current.position.z = z;
    rotateQuaterion.setFromAxisAngle(rotateAngle, offset);
    group.current.quaternion.rotateTowards(rotateQuaterion, 0.2);
  }

  const directionOffset = ({ KeyW, KeyS, KeyA, KeyD }) => {
    let directionOffset = 0;
    if (KeyW) {
      if (KeyA) {
        directionOffset = Math.PI / 4;
      } else if (KeyD) {
        directionOffset = -Math.PI / 4;
      }
    } else if (KeyS) {
      if (KeyA) {
        directionOffset = (Math.PI / 4) * 3;
      } else if (KeyD) {
        directionOffset = (-Math.PI / 4) * 3;
      } else {
        directionOffset = Math.PI;
      }
    } else if (KeyA) {
      directionOffset = Math.PI / 2;
    } else if (KeyD) {
      directionOffset = -Math.PI / 2;
    }
    return directionOffset;
  };

  const updateCameraTarget = (moveX, moveZ) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;

    cameraTarget.x = group.current.position.x;
    cameraTarget.y = group.current.position.y + 5;
    cameraTarget.z = group.current.position.z;
    if (controlsRef.current) {
      controlsRef.current.target = cameraTarget;
    }
  };

  useFrame((state, delta) => {
    if (isPlaying) {
      let angleYCameraDirection = Math.atan2(
        camera.position.x - group.current.position.x,
        camera.position.z - group.current.position.z
      );
      let newDirectionOffset = directionOffset({ KeyW, KeyS, KeyA, KeyD });

      rotateQuaterion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      group.current.quaternion.rotateTowards(rotateQuaterion, 0.2);

      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);
      var velocity = 0;
      if (KeyW || KeyS || KeyA || KeyD) {
        velocity = 15;
      }
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      group.current.position.x += moveX;
      group.current.position.z += moveZ;

      updateCameraTarget(moveX, moveZ);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onUpdate={(self) => {
        if (isPlaying && camera && group.current) {
          // console.log(self.position);
          if (
            self.position.x < -227 &&
            self.position.z < -4 &&
            self.position.z > -16
          ) {
            console.log("Portal 1");
            navigate("/merchandise");
          }
          let angleYCameraDirection = Math.atan2(
            camera.position.x - group.current.position.x,
            camera.position.z - group.current.position.z
          );
          let newDirectionOffset = directionOffset({ KeyW, KeyS, KeyA, KeyD });
          return updatePresence({
            id: "4",
            x: self.position.x,
            z: self.position.z,
            offset: angleYCameraDirection + newDirectionOffset,
          });
        }
      }}
    >
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        >
          {isPlaying && <OrbitControls ref={controlsRef} />}
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch23_Belt"
            geometry={nodes.Ch23_Belt.geometry}
            material={materials.Ch23_body}
            skeleton={nodes.Ch23_Belt.skeleton}
          />
          <skinnedMesh
            name="Ch23_Body"
            geometry={nodes.Ch23_Body.geometry}
            material={materials.Ch23_body}
            skeleton={nodes.Ch23_Body.skeleton}
          />
          <skinnedMesh
            name="Ch23_Eyelashes"
            geometry={nodes.Ch23_Eyelashes.geometry}
            material={materials.Ch23_hair}
            skeleton={nodes.Ch23_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch23_Hair"
            geometry={nodes.Ch23_Hair.geometry}
            material={materials.Ch23_hair}
            skeleton={nodes.Ch23_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch23_Shirt"
            geometry={nodes.Ch23_Shirt.geometry}
            material={materials.Ch23_body}
            skeleton={nodes.Ch23_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch23_Suit"
            geometry={nodes.Ch23_Suit.geometry}
            material={materials.Ch23_body}
            skeleton={nodes.Ch23_Suit.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/man3-transformed.glb");
