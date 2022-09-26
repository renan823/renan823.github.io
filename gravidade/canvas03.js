function draw() {
    var canvas = document.getElementById("canvas")
    
    if (canvas.getContext) {

        canvas.width = 800
        canvas.height = 500
        var ctx = canvas.getContext("2d")

        cores = ['blue', 'red', 'green', 'yellow', 'purple', 'orange']

        class Circulo {
            constructor(x, y, raio, vx, vy, cor){
                this.x = x
                this.y = y
                this.raio = raio
                this.vx = vx
                this.vy = vy
                this.gravidade = 1
                this.cor = cor
        
            }

            atualizar(){
                this.y += this.vy
                this.x += this.vx

                if(this.y + this.raio > 500){
                    this.vy = -this.vy * 0.9
                    this.vx = this.vx * 0.9
                    this.y = 500 - this.raio
                }
               
                this.vy += this.gravidade

                if(this.x + this.raio > 800 || this.x - this.raio < 0 ){
                    this.vx = -this.vx 
                }
            }

            desenhar(){

                ctx.beginPath()
                ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2)
                ctx.fillStyle = this.cor
                ctx.stroke()
                ctx.fill()
              
            }
        }

        function aleatorio(n1, n2){
            return(Math.random() * (n1 - n2) + n2)
        }
        
        let circulos = []

        for(let i = 0; i < 10; i++){

            let x = aleatorio(0, 800 - 30 )
            let y = 100
            let cor =  cores[Math.floor(Math.random() * cores.length)]
            let vx = aleatorio(-8, 8)
            circulos.push(new Circulo(x, y, 30, vx, 5, cor) )
           
        }
        
        function animar(){

            requestAnimationFrame(animar)
            ctx.clearRect(0, 0,800, 500)

            for(let i = 0; i < 10; i++){
                circulos[i].desenhar()
                circulos[i].atualizar()
            }

        }

       

        animar()
        
    }
} 
    