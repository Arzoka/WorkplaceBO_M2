let container;
let camera;
let renderer;
let scene;
let golden_snitch;

function init() {
  container = document.querySelector(".scene");

  //create scene
  scene = new THREE.Scene();

  //filed of view
  const fov = 4;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 1;
  const far = 300;
  
  //camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 70, 50);
  camera.rotation.set(-0.2,0,0);

  const ambient = new THREE.AmbientLight(0x2222ff, 1);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xddddff, 5);
  light.position.set(0, 57, 120);
  scene.add(light);

  //renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.position = (container.clientWidth / 2);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //load model
  let loader = new THREE.GLTFLoader();
  loader.load("../3D/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    golden_snitch = gltf.scene.children[0];
    golden_snitch.position.y = 58.5;
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  golden_snitch.rotation.y -= 0.002;
  renderer.render(scene, camera);
}

function resizeWindow() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

function throttle(fn, wait = 200) {
  let timer = null;
  return function () {
    if (timer === null) {
      timer = setTimeout(() => {
        fn.apply(this);
        timer = null;
      }, wait);
    }
  };
}

init();
window.addEventListener("resize", throttle(resizeWindow));