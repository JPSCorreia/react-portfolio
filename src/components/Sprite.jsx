import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
// import { useTexture } from '@react-three/drei';
import { ACESFilmicToneMapping, NoToneMapping } from 'three'
import * as THREE from 'three';

const Sprite = ({url, position, color, ...props}) => {

  // This reference gives us direct access to the THREE.Mesh object
  const sprites = useRef()
  useFrame((state, delta) => {
    (sprites.current.rotation.y += 0.0022)
  })

  const texture = useLoader(TextureLoader, url)

  const color1 = new THREE.Color("#67E8F9");
  const color2 = new THREE.Color("#22D3F8");

  // const texture = useTexture(url)
  
  return (
    <group ref={sprites}>
      <sprite scale={[20, 20, 20]} position={position} >
        <spriteMaterial 
          attach='material' 
          gl={
            { 
              alpha:true, 
              antialias:true,
              // toneMapping: ACESFilmicToneMapping,
              // toneMappingExposure: 0.5,
              // colorManagement: false,
              // lightMapIntensity: 4,       
              // attenuationColor: color1,
              // sheenColor: color2,
            }
          } 
          map={texture}  
          // color={color} 
          fog={false} 
          opacity={0.85}
        />
      </sprite>
    </group>
  )
}

export default Sprite










  // const spriteNewReactMap = new THREE.TextureLoader().load(reactIcon)
  // const spriteNewHtmlMap = new THREE.TextureLoader().load(htmlIcon)

  // const spriteReactMap = loader.load('../../assets/react-icon2.png');

  // const spriteReactMaterial = new THREE.SpriteMaterial( { map: spriteReactMap, color: '#00ccff', fog: false } );
  // const spriteReact = new THREE.Sprite( spriteReactMaterial );
  // spriteReact.position.set(0, 0, 50)
  // spriteReact.scale.set( 15, 15, 15);