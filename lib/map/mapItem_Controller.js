import Signal from 'signals';
import Converter from '../converter';
import MinMax from '../util/minMax';



class MapItemController{
	constructor(data, signalParent){
		this.signalLocal = {
			onAmountChanged: new Signal()
		};
		this.amount = data.amount;
		this.amount.active = data.amount.future;
		this.color = data.color;
		// this.name = data.name;
		this.points = data.points;
		// this.shapes =

		this.minMax = new MinMax();
		this.shapes = this.points.map(function(p){
			var obj = Converter.transformSVGPath( p );
			this.minMax.testFamily(obj.minMax);
			return obj;
		}, this)





		signalParent.onAmountChanged.add( amt => {
			if(amt.isFuture){
				this.changeAmountFuture();
			}else{
				this.changeAmountPast();
			}

			if(this.name==="red"){

			}
			this.signalLocal.onAmountChanged.dispatch(this.amount);

		})

	}



	changeAmountPast(){
		this.amount.active = this.amount.past;
	}

	changeAmountFuture(){
		this.amount.active = this.amount.future;
	}
}

export default MapItemController;

