import SvgPoints from '../svgPoints';
import Converter from '../converter';

function MapItem(c){
	this.controller = c;

	// this.controller.signalLocal.onAmountChanged.add( amt => {
	// 	var v = this.geometry.vertices;
	// 	v.forEach(item => {
	// 		if(item.z > 0){
	// 			TweenLite.to(item, 1, {z:amt.active, ease:Back.easeOut,
	// 				onUpdate:function(a,b){
	// 					this.position.z = item.z;
	// 					this.geometry.verticesNeedUpdate = true;
	// 				}.bind(this)
	// 			})
	// 		}
	// 	})
	// });



	var points = this.controller.points;
	var color =  this.controller.color;
	var amount =  this.controller.amount.active;


	points.forEach(function(p){
		console.log(p)
	})

	// var path = Converter.transformSVGPath( points );


	// var color = new THREE.Color( color );
	// var material = new THREE.MeshLambertMaterial({
	// 	color: color,
	// 	ambient: color,
	// 	emissive: color,
	// });

	// var simpleShapes = path.toShapes(true);

	// var len1 = simpleShapes.length;

	// for (let simpleShape of simpleShapes){
	// 	var shape3d = simpleShape.extrude({
	// 		amount: amount,
	// 		bevelEnabled: false
	// 	});

	// 	THREE.Mesh.call(this, shape3d, material)


	// 	this.rotation.x = Math.PI;
	// 	this.translateZ( - amount - 1);

	// 	// this.translateX( - 365);
	// 	// this.translateY( - 125);

	// }




}

MapItem.prototype = Object.create(THREE.Mesh.prototype);

MapItem.prototype.constructor = MapItem;

MapItem.prototype.createShape = function(){

};







export default MapItem;

