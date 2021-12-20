
import * as THREE from 'three'


//Scene Creation
const scene = new THREE.Scene()
//Camera Creation
let camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)
//Renderer Creation
const renderer = new THREE.WebGLRenderer({
  antialias: true
})
renderer.setSize(innerWidth, innerHeight)

//Make it high res
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
// create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
   map: new THREE.TextureLoader().load('./img/globe.jpg')
  })
)

scene.add(sphere)
camera.position.z=15

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()