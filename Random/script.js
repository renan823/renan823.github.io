window.onload = ()=>{
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 500;

	var w = new Walker(canvas);
	for(let i = 0; i < 50000; i++){
		setTimeout(()=> {w.Move(ctx);}, 500);
	}
}

class Walker{
	constructor(canvas){
		this.x = canvas.width/2;
		this.y = canvas.height/2;
	}
	Move(ctx){
		let choice = Math.random()
		if(choice >= 0.75){
			this.x++;
		}
		else if(choice >= 0.5){
			this.x--;
		}
		else if(choice >= 0.25){
			this.y++;
		}
		else{
			this.y--;
		}
		ctx.fillRect(this.x, this.y, 1, 1)
		ctx.fill()
	}
}