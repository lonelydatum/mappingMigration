import MapViewItem from './mapItem_View';

class MapView{
	constructor(g, c){
		this.group = g;
		this.controller = c;


		this.groupMap = new THREE.Group();
		g.add( this.groupMap );

		this.groupMap.translateX( -this.controller.minMax.centerX);
		this.groupMap.translateY(  this.controller.minMax.centerY);



		this.parseData();

	}

	parseData(){
		var list = this.controller.list;
		list.forEach( controllerItem => {
			var viewItem = new MapViewItem(controllerItem);

			// console.log(this.groupMap);
			this.groupMap.add(viewItem);

		} )
	}
}

export default MapView;



