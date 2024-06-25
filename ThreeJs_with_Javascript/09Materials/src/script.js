

// // //    Materials ====>    materials are used to put a color on each visible pixel of the geometries
// // //
// // // algorithm that decide on the color of each pixel are written in program called shaders





import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui' ;
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const gui = new GUI() ;


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene() ;


const textureLoader = new THREE.TextureLoader() ;

const doorColorTexture = textureLoader.load('./textures/door/color.jpg') ;
doorColorTexture.colorSpace = THREE.SRGBColorSpace
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg' )
doorAlphaTexture.colorSpace = THREE.SRGBColorSpace
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg' )
doorHeightTexture.colorSpace = THREE.SRGBColorSpace
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg' )
doorNormalTexture.colorSpace = THREE.SRGBColorSpace
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg' )
doorAmbientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg' )
doorMetalnessTexture.colorSpace = THREE.SRGBColorSpace
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg' )
doorRoughnessTexture.colorSpace = THREE.SRGBColorSpace

const matcapTexture = textureLoader.load('./textures/matcaps/1.png' )
matcapTexture.colorSpace = THREE.SRGBColorSpace
const gradientTexture = textureLoader.load('./textures/gradients/3.jpg' )
gradientTexture.colorSpace = THREE.SRGBColorSpace







// // const material = new THREE.MeshBasicMaterial( {map : doorColorTexture} ) ;            
// const material = new THREE.MeshBasicMaterial() ;            
// material.map = doorColorTexture ; 
// // material.color = new THREE.Color('green') ;
// // material.wireframe = true ;  
// // material.transparent = true ;
// // material.opacity = 0.5 ;
// material.alphaMap = doorAlphaTexture ;
// material.side = THREE.DoubleSide ;



// const material = new THREE.MeshNormalMaterial() ;            
// // material.wireframe = true ;
// material.flatShading = true ;


// const material = new THREE.MeshMatcapMaterial() ;            
// material.matcap = matcapTexture ;


const material = new THREE.MeshStandardMaterial() ;            
material.metalness = 0.45 ;
material.roughness = 0.65 ;
material.map = doorColorTexture ;


gui.add(material , 'metalness' ).min(0).max(1).step(0.001) ;
gui.add(material , 'roughness' ).min(0).max(1).step(0.001) ;





const sphere = new THREE.Mesh( 
    new THREE.SphereGeometry(0.5 , 16 , 16 ) ,
    material
)
sphere.position.x = -1.5

const plane = new THREE.Mesh( 
    new THREE.PlaneGeometry(1 , 1) ,
    material
)

const torus = new THREE.Mesh( 
    new THREE.TorusGeometry(0.3 , 0.2 , 16 , 32) ,
    material
)
torus.position.x = 1.5


scene.add(sphere , plane  , torus ) ;


const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 30)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)



const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) =>
{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping  ; 

    scene.background = environmentMap ;
    scene.environment = environmentMap ;
})



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime() ;


    sphere.rotation.y = 0.1 * elapsedTime ;
    plane.rotation.y = 0.1 * elapsedTime ;
    torus.rotation.y = 0.1 * elapsedTime ;

    sphere.rotation.x = -0.15 * elapsedTime ;
    plane.rotation.x = -0.15 * elapsedTime ;
    torus.rotation.x = -0.15 * elapsedTime ;




    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()














