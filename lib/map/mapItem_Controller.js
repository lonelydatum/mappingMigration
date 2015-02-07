import Signal from 'signals';
import Converter from '../converter';


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
		


		// this.setMinMax();

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

	// setMinMax(){
	// 	console.log(this.points)

	// 	var threeShape = Converter.transformSVGPath( this.points );
	// 	var minX=99999, maxX=0, minY=99999, maxY=0;
	// 	threeShape.curves.forEach(line => {
	// 		minX = (line.v1.x<minX) ? line.v1.x : minX;
	// 		minY = (line.v1.y<minY) ? line.v1.y : minY;
	// 		maxX = (line.v1.x>maxX) ? line.v1.x : maxX;
	// 		maxY = (line.v1.y>maxY) ? line.v1.y : maxY;

	// 	})
	// 	this.minMax = {minX:minX, maxX:maxX, minY:minY, maxY:maxY}


	// }

	changeAmountPast(){
		this.amount.active = this.amount.past;
	}

	changeAmountFuture(){
		this.amount.active = this.amount.future;
	}
}

export default MapItemController;

