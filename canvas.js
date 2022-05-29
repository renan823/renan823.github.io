

function draw() {
    var canvas = document.getElementById("canvas")
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")

        canvas.width = innerWidth -50
        canvas.height = innerHeight -50

        class Circulo {
            constructor(){
                this.raio = 1
                this.x = Math.random() * (800 - this.raio * 2) + this.raio
                this.y = Math.random() * (500 - this.raio * 2) + this.raio
                this.veloX = (Math.random() * 10) + 1
                this.veloY = (Math.random() * 10) + 1
                this.color = "white"
            
                
            }

            atualizar(){
                this.x += this.veloX
                this.y += this.veloY
    
                if(this.x + this.raio > canvas.width || this.x - this.raio <= 0){
                    this.veloX = -this.veloX
                }
    
                if(this.y + this.raio > canvas.height || this.y - this.raio <=0){
                    this.veloY = -this.veloY
                }
            }

            desenhar(){
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.strokeStyle = "rgba(255, 255, 255, 0.4"
                ctx.strokeWidth = 3
                ctx.shadowColor = "white"
                ctx.shadowBlur = 2
                ctx.shadowOffsetX = 1.5
                ctx.shadowOffsetY = 1.5
                ctx.stroke()
                ctx.fill()
            }
        }

        var circulos = []

        for(let i = 0; i < 100; i++){
            circulos.push(new Circulo())
        }
        var cont = 0
        function animar(){

            requestAnimationFrame(animar)
            ctx.clearRect(0, 0,canvas.width, canvas.height)
            
            for(let i = 0; i < 100; i++){
               
                 
                circulos[i].desenhar(cont)
                circulos[i].atualizar()
            }
             
        }

        animar()
    }
  }
    