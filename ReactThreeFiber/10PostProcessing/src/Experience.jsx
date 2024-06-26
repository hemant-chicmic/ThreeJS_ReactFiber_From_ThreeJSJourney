

import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf' ;
import { Bloom , Vignette , EffectComposer } from '@react-three/postprocessing' ; 
import { BlendFunction } from 'postprocessing';


export default function Experience()
{
    return <>

        <color  args={['#000000']} attach='background' />

        <EffectComposer>
            {/* <Vignette
                offset={0.3}
                darkness={0.9}
                blendFunction={BlendFunction.COLOR_BURN}
            /> */}

            <Bloom mipmapBlur />
        </EffectComposer>


        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color='white' emissive='orange' emissiveIntensity={2} toneMapped={false} />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>


    </>




}
















