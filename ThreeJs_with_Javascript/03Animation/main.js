

import * as THREE from 'three';
import gsap from 'gsap' ;


// console.log(THREE) ;

const canvas =  document.querySelector('canvas.webgl') ;

// // scene creation
const scene = new THREE.Scene() ;




// const axesHelper = new THREE.AxesHelper() ;
// scene.add(axesHelper) ;





const geometry = new THREE.BoxGeometry( 1 , 1 , 1 ) ;
const material = new THREE.MeshBasicMaterial( { color : 'red' }) ;
const mesh = new THREE.Mesh(geometry , material ) ;

scene.add(mesh) ; 



const sizes = {
	width : 800 ,
	height : 600 
}
const camera = new THREE.PerspectiveCamera( 75 , sizes.width / sizes.height ) ; 
camera.position.z = 3 ;
scene.add(camera) ;

// //  lookAt
// camera.lookAt(new THREE.Vector3(0 , 0 , 0)) ;
// camera.lookAt(mesh.position) ;


const renderer = new THREE.WebGLRenderer( {
	canvas: canvas
})
renderer.setSize(sizes.width , sizes.height ) ;





// // //   animation 

// let time = Date.now() ;
// const tick = () => {
// 	// console.log( 'tick ' ) ;
// 	const currentTime = Date.now() ;
// 	const deltaTime = currentTime - time ;
// 	time = currentTime ;
// 	// console.log(deltaTime) ;

// 	mesh.rotation.y += 0.01 * deltaTime ;
// 	renderer.render(scene , camera) ;
// 	window.requestAnimationFrame(tick) ;
// }
// tick() ;



gsap.to(mesh.position , { duration : 1 , delay : 1 , x : 2} ) ;
gsap.to(mesh.position , { duration : 1 , delay : 2 , x : 0} ) ;

const clock =  new THREE.Clock() ; 
const tick = () => {
	
	const elapsedTime = clock.getElapsedTime() ;
	// console.log(elapsedTime) ;

	mesh.rotation.y = elapsedTime  ;
	renderer.render(scene , camera) ;
	window.requestAnimationFrame(tick) ;
}
tick() ;























