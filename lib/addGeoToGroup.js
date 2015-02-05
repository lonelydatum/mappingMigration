import SvgPoints from './svgPoints';
import Converter from './converter';

var addGeoObject = function( group ) {


	for (let item of SvgPoints.paths){
		var path = Converter.transformSVGPath( item.points );
		var color = new THREE.Color( item.color );
		var material = new THREE.MeshLambertMaterial({
			color: color,
			ambient: color,
			emissive: color,
		});
		var amount = item.amount;
		var simpleShapes = path.toShapes(true);
		var len1 = simpleShapes.length;

		for (let simpleShape of simpleShapes)
			var shape3d = simpleShape.extrude({
				amount: amount,
				bevelEnabled: false
			});
			var mesh = new THREE.Mesh(shape3d, material);
			mesh.rotation.x = Math.PI;
			mesh.translateZ( - amount - 1);
			mesh.translateX( - SvgPoints.center.x);
			mesh.translateY( - SvgPoints.center.y);
			group.add(mesh);
	}
};

export default addGeoObject;