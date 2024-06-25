


import * as THREE from 'three';
// console.log(THREE) ;

const canvas =  document.querySelector('canvas.webgl') ;

// // scene creation
const scene = new THREE.Scene() ;


const geometry = new THREE.BoxGeometry( 1 , 1 , 1 ) ;
const material = new THREE.MeshBasicMaterial( { color : 'red' }) ;
const mesh = new THREE.Mesh(geometry , material ) ;

scene.add(mesh) ; 




 

// const width = 800 ;
// const height = 800 ;
const sizes = {
	width : 800 ,
	height : 600 
}
const camera = new THREE.PerspectiveCamera( 75 , sizes.width / sizes.height ) ; 
scene.add(camera) ;


const renderer = new THREE.WebGLRenderer( {
	canvas: canvas
})
renderer.setSize(sizes.width , sizes.height ) ;
renderer.render(scene , camera) ;























