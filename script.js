// Setup Three.js scene
const container = document.getElementById("canvas-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
light.position.set(0, 20, 0);
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Load FBX model
const loader = new THREE.FBXLoader();

// Load BodyFemale
loader.load("models/BodyFemale.fbx", (object) => {
  object.scale.set(0.01, 0.01, 0.01);
  object.position.set(-1.5, 0, 0); // geser biar tidak numpuk
  scene.add(object);
});

// Load Class
loader.load("models/Class.fbx", (object) => {
  object.scale.set(0.01, 0.01, 0.01);
  object.position.set(0, 0, 0);
  scene.add(object);
});

// Load Boy
loader.load("models/Boy.fbx", (object) => {
  object.scale.set(0.01, 0.01, 0.01);
  object.position.set(1.5, 0, 0); // geser ke kanan
  scene.add(object);
});


// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
