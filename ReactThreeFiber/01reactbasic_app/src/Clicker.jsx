
import { useState , useEffect, useRef } from "react";



export default function  Clicker( {  increment , keyName , color = 'darkOrchid' } )
{
    // const countState = useState(0) ;
    // const count = countState[0] ;
    // const setCount = countState[1] ;

    const [ count , setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0 )) ;

    const buttonRef = useRef() ;
    console.log(buttonRef); 


    useEffect( () =>{
        return() => {
            localStorage.removeItem(keyName) ; 
        }
    } )

    useEffect( () => {
        console.log('hello  Use Effect  ') ;
        localStorage.setItem( keyName , count ) ; 
    } , [count ] )

    const buttonClick = () => {
        console.log( "button clicked " )
        // setCount(count+1) ;
        setCount( (value) => value+1 ) ;
        increment() ;
    }

    
    return <div>
        <div style={ {color : color} } > Click Count : {count} </div>
        <button ref={buttonRef} onClick={ buttonClick} > Click Me </button>
    </div>
}





















