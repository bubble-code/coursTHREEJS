import * as THREE from 'three';
// import { } from 'three/addons/libs/stats'


function makePerspectiveCamera() {
    const fov = 95;
    const aspect = window.innerHeight / window.innerWidth;
    const near = 0.1
    const far = 1000
    const newCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    return newCamera
}
const mio = document.querySelector('#mio');
function init() {
    const perspectiveDista = 2.5
    const scene = new THREE.Scene();
    const camera = makePerspectiveCamera();
    camera.position.set(0, 0, perspectiveDista)

    const renderer = new THREE.WebGL1Renderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    mio.appendChild(renderer.domElement)

    const gemetric = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
        color: 0x000fff,
        wireframe: true,
    })
    const cube = new THREE.Mesh(gemetric, material)
    scene.add(cube)

    renderer.render(scene, camera)
}


init()