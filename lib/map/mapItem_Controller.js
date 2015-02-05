import Signal from 'signals';

class MapItemController{
	constructor(data, signalParent){
		this.signalLocal = {
			onAmountChanged: new Signal()
		};
		this.amount = data.amount;
		this.amount.active = data.amount.future;
		this.color = data.color;
		this.name = data.name;
		this.points = data.points;

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

