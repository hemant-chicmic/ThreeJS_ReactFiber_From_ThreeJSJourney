import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows , SoftShadows , BakeShadows , useHelper , OrbitControls, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf' ; 
import * as THREE from 'three' ;



export default function Experience()
{

    const directionalLight = useRef() ; 
    useHelper(directionalLight , THREE.DirectionalLightHelper , 1  ) ; 


    const cube = useRef()
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    return <>
        
        <BakeShadows/>
        {/* <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } /> */}

        <color args={[ 'ivory']} attach='background' />

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <AccumulativeShadows
            position={[0 , -0.99 , 0]}
            scale={10}
            >

            <RandomizedLight
                amount={ 8 }
                radius={ 1 }
                ambient={ 0.5 }
                intensity={ 3 }
                position={ [ 1, 2, 3 ] }
                bias={ 0.001 }
            />

        </AccumulativeShadows>

        <directionalLight 
            ref={directionalLight} 
            position={ [ 1, 2, 3 ] } 
            intensity={ 4.5 } 
            castShadow 
            shadow-mapSize={[1024 , 1024 ]}
            />
        <ambientLight intensity={ 1.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}
























