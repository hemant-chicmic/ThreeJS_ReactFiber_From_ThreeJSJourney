



// // //  Testure =>  texture are image that will cover the surface of the geometries 





import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



// // // 1st way to load texture   ===>  
// const image = new Image() ;
// const texture = new THREE.Texture(image) ;
// texture.colorSpace = THREE.SRGBColorSpace
// image.onload = () => {
//     console.log( 'image loaded ' ) ;
//     texture.needsUpdate = true ;
// }
// image.src = '/textures/door/color.jpg' ;
 


// // // // 2nd way to load texture   ===>  
// const textureLoader = new THREE.TextureLoader() ;
// const colorTexture = textureLoader.load(
//     '/textures/door/color.jpg' ,
//     () =>
//     {
//         console.log('load') ;
//     } ,
//     () =>
//     {
//         console.log('progress ') ;
//     } ,
//     () =>
//     {
//         console.log('error ') ;
//     } 
// )
// colorTexture.colorSpace = THREE.SRGBColorSpace


// // // 3rd way to load texture   ===>  
const loadingManager = new THREE.LoadingManager() ;
loadingManager.onStart = () => {
    console.log("on start ")
}
loadingManager.onLoad = () => {
    console.log("on Loaded ")
}
loadingManager.onProgress = () => {
    console.log("on Progress ")
}
loadingManager.onError = () => {
    console.log("on Error ")
}
const textureLoader = new THREE.TextureLoader(loadingManager) ;
const colorTexture = textureLoader.load('/textures/door/color.jpg' )
colorTexture.colorSpace = THREE.SRGBColorSpace
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg' )
alphaTexture.colorSpace = THREE.SRGBColorSpace
const heightTexture = textureLoader.load('/textures/door/height.jpg' )
heightTexture.colorSpace = THREE.SRGBColorSpace
const normalTexture = textureLoader.load('/textures/door/normal.jpg' )
normalTexture.colorSpace = THREE.SRGBColorSpace
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg' )
ambientOcclusionTexture.colorSpace = THREE.SRGBColorSpace
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg' )
metalnessTexture.colorSpace = THREE.SRGBColorSpace
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg' )
roughnessTexture.colorSpace = THREE.SRGBColorSpace



// colorTexture.repeat.x = 2 ;
// colorTexture.repeat.y = 3 ;
// colorTexture.wrapS = THREE.MirroredRepeatWrapping ;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping ;

// colorTexture.offset.x = 0.5 ;
// colorTexture.offset.y = 0.5 ;
// colorTexture.rotation = 1 ;
// colorTexture.rotation = Math.PI/4 ;

// colorTexture.generateMipmaps = false;
// colorTexture.minFilter = THREE.NearestFilter ;
// colorTexture.magFilter = THREE.NearestFilter










/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 1
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
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()