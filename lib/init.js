


var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setClearColor( 0xb0b0b0 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );


var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 3000 );
camera.position.set( 0, 0, 200 );
camera.position.z = 900;
window.camera = camera;




var light = new THREE.DirectionalLight( 0x404040 );
light.position.set( 0.75, 0.75, 1.0 ).normalize();
scene.add( light );


var ambientLight = new THREE.AmbientLight(0x404040);
scene.add( ambientLight );

export default {renderer:renderer, scene:scene, camera:camera};