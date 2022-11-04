/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import HeroPage from './HeroPage'
export default function Model({ ...props }) {
  const [pause, setPause] = useState(false)
  const group = useRef()
  const { nodes, materials } = useGLTF('/arcade-v2-transformed.glb')
  return (

    <group ref={group} {...props} dispose={null}>
      <group  rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.25, 1.64, -1.79]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.black} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} />
          </group>
          <group position={[1.19, 7.12, -1.2]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.base} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.pacman_logo_oben} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Material.013']} />
            <mesh geometry={nodes.Screen.geometry} >

                 {pause? <Html className="content" transform occlude rotation={[-0.45, 0, 0]} position={[1.07,0.58 ,0.1]} scale={0.2} >
                <HeroPage />
            </Html>:<group></group> }
            </mesh>
          </group>
          <group position={[4.36, 5.98, 0]} rotation={[-Math.PI, 0, 0]} scale={[-0.07, -5.34, -2.79]}>
            <mesh geometry={nodes.Object_19.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.014']} />
          </group>
          <group position={[0.18, 5.98, 0]} scale={[0.07, 5.34, 2.79]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.014']} />
          </group>
          <group position={[2.34, 6.1, 0.82]} rotation={[0.16, 0, 0]} scale={[0.03, 0.17, 0.03]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.base} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.007']} />
          </group>
          <group position={[3.73, 5.94, 1.03]} rotation={[0.16, 0, 0]} scale={[0.11, 0.01, 0.11]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.material_0} />
          </group>
          <group position={[3.73, 6.02, 0.56]} rotation={[0.16, 0, 0]} scale={[0.11, 0.01, 0.11]}>
            <mesh geometry={nodes.Object_26.geometry} material={materials.material_0} />
          </group>
        </group>
      </group>
       <mesh onClick={() => setPause(!pause)} scale={1.5} position={[2,4,1]} >
                <boxGeometry />
                <meshStandardMaterial
                    // map={textur}
                    color='hotpink'
                />
            </mesh>
    </group>
  )
}

useGLTF.preload('/arcade-v2-transformed.glb')

           
