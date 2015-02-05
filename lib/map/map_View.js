import MapViewItem from './mapItem_View';

class MapView{
	constructor(g, c){
		this.group = g;
		this.controller = c;
		this.parseData();
	}

	parseData(){
		var list = this.controller.list;
		list.forEach( controllerItem => {
			var viewItem = new MapViewItem(controllerItem);


			this.group.add(viewItem);

		} )
	}
}

export default MapView;

