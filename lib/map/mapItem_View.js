import SvgPoints from '../svgPoints';
import Converter from '../converter';

function MapItem(c){

	var once = false;
	this.controller = c;
	this.controller.signalLocal.onAmountChanged.add( amt => {
		once = true;
		var v = this.geometry.vertices;
		var self = this;
		v.forEach(item => {
			if(item.z > 0){

				TweenLite.to(item, 1, {z:amt.active,
					onComplete:function(){

						if(once){

							console.log(self)
							once = false;
						}
						// self.rotation.x = Math.PI;
						// self.translateZ( - this.target.z - 1);

					},
					onUpdate:function(a,b){
						self.position.z = this.target.z;

						console.log(this.target.z)
						self.geometry.verticesNeedUpdate = true;

				}})
			}
		})
	});



	var points = this.controller.points;
	var color =  this.controller.color;
	var amount =  this.controller.amount.active;
	console.log(this.controller.amount)



	var path = Converter.transformSVGPath( points );
	var color = new THREE.Color( color );
	var material = new THREE.MeshLambertMaterial({
		color: color,
		ambient: color,
		emissive: color,
	});

	var simpleShapes = path.toShapes(true);
	var len1 = simpleShapes.length;

	for (let simpleShape of simpleShapes){
		var shape3d = simpleShape.extrude({
			amount: amount,
			bevelEnabled: false
		});

		THREE.Mesh.call(this, shape3d, material)


		this.rotation.x = Math.PI;
		this.translateZ( - amount - 1);

		this.translateX( - 365);
		this.translateY( - 125);

	}




}

MapItem.prototype = Object.create(THREE.Mesh.prototype);

MapItem.prototype.constructor = MapItem;







export default MapItem;
