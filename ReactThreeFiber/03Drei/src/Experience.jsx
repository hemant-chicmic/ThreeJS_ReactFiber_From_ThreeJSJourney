import { useThree , extend } from '@react-three/fiber'
import { Text , PivotControls , TransformControls , OrbitControls, Float, MeshReflectorMaterial } from '@react-three/drei' ;
import { useRef } from 'react';

export default function Experience()
{

    const cube = useRef() ; 

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <PivotControls anchor={[0 , 0 , 0]} depthTest={false} >
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        <mesh ref={cube} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cube} />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
            <MeshReflectorMaterial/>
        </mesh>


        <Float
            speed={5}
            floatIntensity={2}
            >
            <Text 
                font='./bangers-v20-latin-regular.woff'
                fontSize={1}  
                color='salmon' 
                position-y={2}
                maxWidth={2}
                textAlign='center'
                >
                I Like R3F
            </Text>
        </Float>

    </>
}
