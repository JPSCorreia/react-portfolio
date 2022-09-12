import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";

const Sprite = ({url, position, color, ...props}) => {

  // This reference gives us direct access to the THREE.Mesh object
  const sprites = useRef()
  useFrame((state, delta) => {
    (sprites.current.rotation.y += 0.0022)
  })

  const texture = useLoader(TextureLoader, url)
  
  return (
    <group ref={sprites}>
      <sprite scale={[20, 20, 20]} position={position} >
        <spriteMaterial 
          attach='material' 
          gl={
            { 
              alpha:true, 
              antialias:true,
            }
          } 
          map={texture}  
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