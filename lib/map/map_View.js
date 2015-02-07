import MapViewItem from './mapItem_View';

class MapView{
	constructor(g, c){
		this.group = g;
		this.controller = c;


		this.groupMap = new THREE.Group();
		g.add( this.groupMap );




		this.parseData();

		console.log(this.controller.minMax)

		this.groupMap.translateX( -this.controller.minMax.center.x);
		this.groupMap.translateY(  this.controller.minMax.center.y);
		this.groupMap.rotation.x = Math.PI;

	}

	parseData(){
		var list = this.controller.list;

		list.forEach( controllerItem => {
			var viewItem = new MapViewItem(controllerItem);


			this.groupMap.add(viewItem);

		} )
	}
}

export default MapView;



