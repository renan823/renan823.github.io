
window.onload = ()=>{
	var Frog = {
		x: 300 - 15,
		y: 600 - 30,
		w: 30,
		h: 30,
		v: 30,
		c: "green"
	}
	var contador = 0

	function Start_Map(contador){
		let map = maps[contador]
		return map
	}

	function Draw(obj, ctx){
		ctx.beginPath()
		ctx.fillStyle = obj.c
		ctx.fillRect(obj.x, obj.y, obj.w, obj.h)
		ctx.fill()
	}

	function Start_Game(map){
		Frog.x = 300 - 15
		Frog.y = 600 - 30
		Frog.v = Frog.h
		const canvas = document.querySelector("canvas")
		const ctx = canvas.getContext('2d')
		canvas.width = 600
		canvas.height = 600
		map = Start_Map(contador)

		let id = setInterval(Animate, 30)

		function Animate(){
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			Draw(map.start, ctx)
			Draw(map.end, ctx)
			let list = map.parts.length
			for(let i = 0; i < list; i++){
				let item = map.parts[i]
				Draw(item, ctx)
			}
			list = map.enemys.length
			for(let i = 0; i < list; i++){
				let item = map.enemys[i]
				Draw(item, ctx)
				if(Frog.x < item.x + item.w && Frog.x + Frog.w > item.x && Frog.y < item.y + item.h && Frog.y + Frog.h > item.y){
					clearInterval(id)
					document.removeEventListener('keyup', Keys)
					contador = 0
					
    				Start_Game(map)
  				}
				else{
					if(map.enemys[i].right){
						map.enemys[i].x += map.enemys[i].v
						if(map.enemys[i].x > canvas.width){
							map.enemys[i].x = 0 - map.enemys[i].w
						}
					}
					else{
						map.enemys[i].x -= map.enemys[i].v
						if(map.enemys[i].x < 0){
							map.enemys[i].x = canvas.width
						}
					}
				}
			}
			Draw(Frog, ctx)
		}
		function Keys(e){
			if(e.key === "ArrowUp"){
				if(Frog.y < map.end.y + map.end.h){
					clearInterval(id)
					if(contador == maps.length - 1){
						ctx.clearRect(0, 0, canvas.width, canvas.height)
						ctx.font = "50px Monospace"
						ctx.fillStyle = "goldenrod"
						ctx.fillText("You win!", canvas.width/2 - 110, canvas.height/2 - 20)
					}
					else{
						document.removeEventListener('keyup', Keys)
						contador++
						Start_Game(map)
					}	
				}
				else{
					if(Frog.y > 0){
						Frog.y -= Frog.v
					}
				}
			}
			else if(e.key === "ArrowDown"){
				if(Frog.y < canvas.width - Frog.h){
					Frog.y += Frog.v
				}
			}
			else if(e.key === "ArrowLeft"){
				if(Frog.x > 15){
					Frog.x -= Frog.v
				}
			}
			else if(e.key === "ArrowRight"){
				if(Frog.x < canvas.width - 45){
					Frog.x += Frog.v
				}
			}
		}
		document.addEventListener('keyup', Keys)
		Animate()
	}
	Start_Game(contador)
}