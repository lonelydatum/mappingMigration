import MapController from './map/map_Controller';
import MapView from './map/map_View';
import Interaction from './interaction';
import Init3d from './init';
import Signals from 'signals';
import Asia from './data/asia';







var signals = {
	onTargetRotation: new Signals()
}

signals.onTargetRotation.add(function(d){
	targetRotation = d;
})

Interaction(signals);




var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var renderer = Init3d.renderer;
var scene = Init3d.scene;
var camera = Init3d.camera;


var group = new THREE.Group();
scene.add( group );
group.rotation.x = Math.PI/180 * -60;



var mapController = new MapController();
var mapView = new MapView(group, mapController);


var helper = new THREE.GridHelper( 80, 10 );
helper.rotation.x = Math.PI / 2;
group.add( helper );


var container = document.getElementById("map");
document.body.appendChild( container );
container.appendChild( renderer.domElement );

var obj = {}

var btn = document.getElementById("tester");
btn.addEventListener("click", function(){
	mapController.amountToggle();
}.bind(obj));




function animate() {
	requestAnimationFrame( animate );
	render();
};

function render() {
	group.rotation.z += ( targetRotation - group.rotation.z ) * 0.006;
	renderer.render( scene, camera );
};
animate();


export var main = {};