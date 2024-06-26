












export default function Placeholder( props )
{

    return  <>
        <mesh {...props } position-y={ 0.5 } scale={ [ 2, 3, 2 ] }>
            <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } />
            <meshBasicMaterial wireframe color="red" />
        </mesh>  
    </>


}


































