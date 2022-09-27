//Mude os valores para obter outro desenho
var values = [12, 20, 140, 50, 30, 76, 11, 69, 24, 200, 45, 10, 82, 42, 54, 150, 63, 98, 142, 139, 15, 27, 39, 61, 129, 43, 91, 35, 49, 21, 90, 190, 38]


var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
canvas.width = 500
canvas.height = 500
window.onload = ()=>{
	Draw()
	Sort()
}

function Sort(){
	for(let i = 0; i < values.length -1; i++){
		setTimeout(function(){
			for(let c = 0; c < values.length -1 -i; c++){
				setTimeout(function(){
					if(values[c] > values[c + 1]){
						let item = values[c]
						values[c] = values[c + 1]
						values[c + 1] = item
					}
					Draw()
				}, 1000)
			}
		}, 1000)
	}
}

function Draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let w = canvas.width/values.length
	let x = 0
	for(let v = 0; v < values.length; v++){
		let h = values[v]*2
		let y = canvas.height - h
		ctx.fillRect(x, y, w, h)
		ctx.fill()
		x += w
	}
}