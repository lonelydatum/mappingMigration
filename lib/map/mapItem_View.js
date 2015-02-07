// import SvgPoints from '../svgPoints';
import Converter from '../converter';

function MapItem(c){
	THREE.Group.call(this);
	this.controller = c;

	this.controller.signalLocal.onAmountChanged.add( amt => {
		this.children.forEach(child=>{
			var v = child.geometry.vertices;
			v.forEach(item => {
				if(item.z > 0){
					TweenLite.to(item, 5, {z:amt.active, ease:Back.easeOut,
						onUpdate:function(){
							child.position.z = -item.z;
							child.geometry.verticesNeedUpdate = true;
						}.bind(child)
					})
				}
			})
		})

		return;

	});




	this.color =  this.controller.color;
	this.amount =  this.controller.amount.active;


	this.controller.shapes.forEach(function(s){
		this.createShape(s.shape);
	}, this)
















}

MapItem.prototype = Object.create(THREE.Group.prototype);

MapItem.prototype.constructor = MapItem;

MapItem.prototype.createShape = function(shape){





	var color = new THREE.Color( this.color );
	var material = new THREE.MeshLambertMaterial({
		color: color,
		ambient: color,
		emissive: color,
	});

	var simpleShapes = shape.toShapes(true);

	var len1 = simpleShapes.length;

	for (var simpleShape of simpleShapes){

		var shape3d = simpleShape.extrude({
			amount: this.amount,
			bevelEnabled: false
		});


		console.log(this.amount)





		var mesh = new THREE.Mesh(shape3d, material);
		mesh.translateZ( - this.amount - 1);

		this.add(mesh);

		// this.translateX( - 365);
		// this.translateY( - 125);

	}

	return;


};







export default MapItem;

