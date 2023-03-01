import { Text, Image} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function AgentCard({position, scale, imgSrc, name, title, bio, }) {

    const [clicked, setClicked] = useState(false);
    const card = useRef();
    const details = useRef();

    useFrame(() => {
        if(clicked){
            gsap.to(card.current.position, 2, {x: -1})
            gsap.to(details.current.scale, 2, {x: 1})
        }else{
            gsap.to(card.current.position, 2, {x: 0})
            gsap.to(details.current.scale, 2, {x: 0})
        }
    });

    return (
        <group 
            position={position} 
            scale={scale}
            onClick={() => setClicked(true)} 
            onPointerMissed={() => setClicked(false)}
        >
            <group ref={card}>
                <Image
                    url={imgSrc}
                    scale={[1.5, 2]}
                    position-z={-0.01}
                />
                <Text
                    font='./MontserratExtraBold.json'
                    scale={0.2}
                    color='white'
                    outlineBlur={0.5}
                    position={[0, -0.7, 0]}
                >
                    {name}
                </Text>
                <Text
                    font='./MontserratBold.json'
                    scale={0.1}
                    color='white'
                    outlineBlur={0.5}
                    position={[0, -0.9, 0]}
                >
                    {title}
                </Text>
            </group>
            <group ref={details} scale={[0, 1, 1]}>
                <Text
                    font='./MontserratExtraBold.json'
                    scale={0.1}
                    color='black'
                    position={[0.7, 0.7, -0.02]}
                    maxWidth={15}
                >
                    {bio}
                </Text>
            </group>
        </group>
    )
}