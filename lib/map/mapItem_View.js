// import SvgPoints from '../svgPoints';
import Converter from '../converter';

function MapItem(c){
	THREE.Group.call(this);
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



	this.points = this.controller.points;
	this.color =  this.controller.color;
	this.amount =  this.controller.amount.active;


	this.points.forEach(function(p){
		
		
	}, this)

	// var d = this.createShape()	
	console.log(this.points[0]);

	// this.createShape(this.points[1])	

	


	

	




}

MapItem.prototype = Object.create(THREE.Group.prototype);

MapItem.prototype.constructor = MapItem;

MapItem.prototype.createShape = function(points){
	
	console.log(points);
	var path = Converter.transformSVGPath( points );
	var color = new THREE.Color( this.color );
	var material = new THREE.MeshLambertMaterial({
		color: color,
		ambient: color,
		emissive: color,
	});

	var simpleShapes = path.toShapes(true);

	var len1 = simpleShapes.length;

	for (var simpleShape of simpleShapes){

		var shape3d = simpleShape.extrude({
			amount: this.amount,
			bevelEnabled: false
		});

		


		this.rotation.x = Math.PI;
		this.translateZ( - this.amount - 1);

		var mesh = THREE.Mesh(shape3d, material);

		this.add(mesh);

		// this.translateX( - 365);
		// this.translateY( - 125);

	}


};







export default MapItem;

