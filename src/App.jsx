import { Environment, Scroll, useMatcapTexture, Text, Text3D, Center, ScrollControls, Image, Gltf, Bounds, useBounds, } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";
import AgentCard from "./AgentCard";

export default function App() {
  const { width, height } = useThree((state) => state.viewport)

  const logoRef = useRef();

  const goldTexture = useMatcapTexture('51462B_DFCA7E_948050_A49874', 128);
  const zmtTexture = useMatcapTexture('4F4C45_A7AEAA_7A8575_9D97A2', 128);

  const [camera, setCamera] = useState({x: 0, y: 0, z: (window.innerWidth < 600 ? 27 : 10)});

  useFrame((state) => {
    gsap.to(logoRef.current.rotation, 3, {y: Math.PI * 2 + 0.15});
    gsap.to(state.camera.position, 3, camera);
  });

  return (
    <>
      <color args={['#fff']} attach='background' />


      <Environment preset="city" />

      <ScrollControls pages={2} damping={0.5}>
        <Scroll>
          <Center position={[-0.5, 0, 0]}>
            <Gltf
              ref={logoRef}
              src='./logo.gltf'
              scale={1.5}
              position={[-1.1, 0.4, -1]}
              rotation={[0, 0.1, 0]}
            />

            <Text3D
              font='./MontserratBold.json'
              scale={1.3}
            // rotation={[0, 0.2, 0]}
            >
              Vortex
              <meshMatcapMaterial matcap={goldTexture[0]} />
            </Text3D>
            <Text3D
              font='./MontserratBold.json'
              scale={0.3}
              // rotation={[0, 0.2, 0]}
              position={[0.3, -0.7, 0]}
            >
              business consulting
              <meshMatcapMaterial matcap={goldTexture[0]} />
            </Text3D>
          </Center>

          
          <Center position={[-0.5, -height, 0]}>
            <Text3D
              font='./MontserratBold.json'
              scale={1}
            // rotation={[0, 0.2, 0]}
            >
              Consultants
              <meshMatcapMaterial matcap={zmtTexture[0]} />
            </Text3D>
            <Text3D
              font='./MontserratBold.json'
              scale={0.3}
              // rotation={[0, 0.2, 0]}
              position={[0.1, -0.7, 0]}
            >
              experts in online industry
              <meshMatcapMaterial matcap={zmtTexture[0]} />
            </Text3D>
            
            <group 
              onClick={() => setCamera({x: -2, y: -1, z: (window.innerWidth < 600 ? 27 : 6)})} 
              onPointerMissed={() => setCamera({x: 0, y: 0, z: (window.innerWidth < 600 ? 27 : 10)})}
            >
              <AgentCard 
                position={(window.innerWidth < 600 ? [3.5, -5, 0] : [0, -3, 0])} 
                scale={(window.innerWidth < 600 ? 3 : 1)}
                imgSrc='./profilepic.png'
                name='Jack Youk'
                title='Javascript Wizard'
                bio='Web developer and tech founder with valuable insight on the technical side of startups.'
              />
            </group>
            
  
          </Center>
          
        </Scroll>
      </ScrollControls>
    </>
  );
}