import SvgPoints from '../svgPoints';
import MapItem from './mapItem_Controller';
import Signals from 'signals';

var _signals = {
	onAmountChanged: new Signals()

}

class MapController{
	constructor(){
		this.amount = {
			isFuture: null,
			isPast: null,
			active: 0,
			options: ["future", "past"]
		}
		this.list = [];
		this.center = SvgPoints.center;
		this.parseData();
	}

	amountToggle(){
		this.amount.active++;
		if(this.amount.active%2 == 0){
			this.amount.isFuture = true;
			this.amount.isPast = false;
		}else{
			this.amount.isFuture = false;
			this.amount.isPast = true;
		}
		_signals.onAmountChanged.dispatch(this.amount)
	}



	parseData(){
		var minX=99999, maxX=0, minY=99999, maxY=0;


		SvgPoints.paths.forEach( (dataItem) => {
			var mapItem = new MapItem(dataItem, _signals);


			// minX = (mapItem.minMax.minX<minX) ? mapItem.minMax.minX : minX;
			// minY = (mapItem.minMax.minY<minY) ? mapItem.minMax.minY : minY;
			// maxX = (mapItem.minMax.maxX>maxX) ? mapItem.minMax.maxX : maxX;
			// maxY = (mapItem.minMax.maxY>maxY) ? mapItem.minMax.maxY : maxY;
			this.list.push(mapItem);
		});

		// this.minMax = {minX:minX, maxX:maxX, minY:minY, maxY:maxY}
		// this.minMax.width = maxX - minX;
		// this.minMax.height = maxY - minY;
		// this.minMax.centerX = this.minMax.minX + (this.minMax.width*.5)
		// this.minMax.centerY = this.minMax.minY + (this.minMax.height*.5)
	}
}

export default MapController;

