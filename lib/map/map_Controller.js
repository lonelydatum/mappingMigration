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
		SvgPoints.paths.forEach( (dataItem) => {
			var mapItem = new MapItem(dataItem, _signals);
			this.list.push(mapItem);
		})
	}
}

export default MapController;

