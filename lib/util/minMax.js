class MinMax{

	constructor(){
		this.minX = 999999;
		this.maxX = 0;
		this.minY = 999999;
		this.maxY = 0;
		this.family = [];
	}
	testXY(x,y){
		this.minX = (x<this.minX) ? x : this.minX;
		this.minY = (y<this.minY) ? y : this.minY;
		this.maxX = (x>this.maxX) ? x : this.maxX;
		this.maxY = (y>this.maxY) ? y : this.maxY;
		this.setCenter();
	}
	testFamily(minMax){
		this.family.push(minMax);
		this.family.forEach(item=>{
			this.testXY(item.minX, item.minY);
			this.testXY(item.maxX, item.maxY);
		});


	}
	setCenter(){
		this.width = this.maxX - this.minX;
		this.height = this.maxY - this.minY;
		this.center = {
			x: this.minX + (this.width*.5),
			y: this.minY + (this.height*.5)
		}
	}

}

export default MinMax;

