// Setup scene, camera, renderer
const canvas = document.getElementById("viewer");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 3);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Load models.json
fetch("models/models.json")
  .then((res) => res.json())
  .then((models) => {
    models.forEach((file, index) => {
      loadModel("models/" + file, index);
    });
  })
  .catch((err) => console.error("Error loading models.json:", err));

// Function load model
function loadModel(path, index) {
  const loader = new THREE.GLTFLoader();
  loader.load(
    path,
    (gltf) => {
      const model = gltf.scene;
      model.position.set(index * 2, 0, 0); // geser biar nggak numpuk
      model.scale.set(0.5, 0.5, 0.5); // sesuaikan skala
      scene.add(model);
    },
    undefined,
    (error) => {
      console.error("Error loading model:", path, error);
    }
  );
}

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
