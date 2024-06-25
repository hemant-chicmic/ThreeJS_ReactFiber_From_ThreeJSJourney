



import * as THREE from 'three';
// console.log(THREE) ;

const canvas =  document.querySelector('canvas.webgl') ;

// // scene creation
const scene = new THREE.Scene() ;





// // // transformation using group 
const group = new THREE.Group() ;
// group.position.y = 1 ;
// group.scale.y = 2 ;
// group.rotation.y = 1 ;
scene.add(group) ;

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1 , 1 , 1) ,
	new THREE.MeshBasicMaterial( { color : 'red'})
)
group.add(cube1) ; 

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1 , 1 , 1) ,
	new THREE.MeshBasicMaterial( { color : 'green'})
)
cube2.position.x = -2 ;
group.add(cube2) ; 

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1 , 1 , 1) ,
	new THREE.MeshBasicMaterial( { color : 'blue'})
)
cube3.position.x = 2 ;
group.add(cube3) ; 






const axesHelper = new THREE.AxesHelper() ;
scene.add(axesHelper) ;





// const geometry = new THREE.BoxGeometry( 1 , 1 , 1 ) ;
// const material = new THREE.MeshBasicMaterial( { color : 'red' }) ;
// const mesh = new THREE.Mesh(geometry , material ) ;

// // position
// mesh.position.x = 0.7 ;
// mesh.position.y = - 0.6 ;
// mesh.position.z = 1 ;
// mesh.position.set(0.7 , -0.6 , 1 ) ;

// // scale
// mesh.scale.x = 2 ; 
// mesh.scale.y = 0.5 ; 
// mesh.scale.z = 0.5 ; 
// mesh.scale.set( 2 , 0.5 , 0.5 ) ;

// // rotation 
// mesh.rotation.reorder('YXZ') ;
// mesh.rotation.x = Math.PI * 0.25 ;
// mesh.rotation.y = 1 ;
// mesh.rotation.y = Math.PI * 0.25 ;

// scene.add(mesh) ; 




 

// const width = 800 ;
// const height = 800 ;
const sizes = {
	width : 800 ,
	height : 600 
}
const camera = new THREE.PerspectiveCamera( 75 , sizes.width / sizes.height ) ; 
// camera.position.x = 1 ;
// camera.position.y = 1 ;
camera.position.z = 3 ;
scene.add(camera) ;

// //  lookAt
// camera.lookAt(new THREE.Vector3(0 , 0 , 0)) ;
// camera.lookAt(mesh.position) ;


const renderer = new THREE.WebGLRenderer( {
	canvas: canvas
})
renderer.setSize(sizes.width , sizes.height ) ;
renderer.render(scene , camera) ;
























