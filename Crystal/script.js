var audio = new Audio()
audio.src = "musica.mp3"
audio.loop = true
audio.currentTime = 0

window.onload = function(){
    var canvas = document.getElementById("canvas")
    if(canvas.getContext){
        var ctx = canvas.getContext("2d")
        canvas.width = 600
        canvas.height = 600
        //player-------------------------------------------------------------------
        var tamanho_Player = 40;
        var x_Player = (canvas.width - tamanho_Player)/2 // centraliza x
        var y_Player = (canvas.height - tamanho_Player)/2 // centraliza y
        var velo_Player = 10;
        var cor_Player = 'goldenrod'
        var cores_Player = ['#58EDCF', '#90E9F0', '#D8C4F0', '#BDBFF0', '#F08298', '#1C18F0', '#E8F081', '#60A68E']
        //cristal-------------------------------------------------------------------
        var tamanho_Cristal = 20
        var x_Cristal = Math.floor((canvas.width - 20) * Math.random() + 1)
        var y_Cristal = Math.floor((canvas.height - 20) * Math.random() + 1) 
        var cor_Cristal = 'lightblue'
        var cores_Cristal = ['#E76FED', '#F0E077', '#75F097', '#F0A986', '#F0EA86', '#6160A6', '#A3534F', '#9243A3']
        //geral---------------------------------------------------------------------
        var colisao = false
        var pontos = 0
        var pontuacao = document.getElementById("pontos")
        var cores = ['#EDC540', '#F060B5', '#F0D4AD', '#A39289', '#D5E8F0', '#A38D81', '#F0D7D5', '#F0D181']
        var mudar_cor = true
        //classe--------------------------------------------------------------------
        class objetos_Jogo{
            constructor(x, y, tamanho, velo, tipo, cor){
                this.x = x
                this.y = y 
                this.width = tamanho
                this.velo = velo
                this.tipo = tipo // o tipo diferencia cristal de player
                this.cor = cor
            }
            Desenhar(ctx){
                ctx.beginPath()
                ctx.fillStyle = this.cor
                ctx.strokeStyle = this.cor
                ctx.fillRect(this.x, this.y, this.width, this.width)
                ctx.stroke()
                ctx.fill()
            }
            Colidir(x1, y1, t1, x2, y2, t2, colisao){
                colisao = false

                if(x1 < x2 + t2 && x1 + t1 > x2 && y1 < y2 + t2 && y1 + t1 > y2){
                    colisao = true
                    }
                return(colisao)
            }
            Atualizar(colisao, pontos, ctx, canvas){
                if(this.tipo == "cristal"){
                    if(colisao == true){
                        pontos++
                        this.x = Math.floor((canvas.width - 20) * Math.random() + 1)
                        this.y = Math.floor((canvas.height - 20) * Math.random() + 1)
                        this.Desenhar(ctx)
                        pontuacao.innerText = `Pontuação: ${pontos}`
                    }
                    else{
                        this.Desenhar(ctx)
                    }
                    return(pontos)
                }
            }
        }
        //evento
        addEventListener("keydown", (e)=>{
            audio.play()
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            if(e.key == "ArrowUp"){
                player.y -= player.velo
                if(player.y <= -20){
                    player.y += canvas.height
                }
                colisao = cristal.Colidir(player.x, player.y, player.width, cristal.x, cristal.y, cristal.width, colisao, pontos)
            }
            else if(e.key == "ArrowDown"){
                player.y += player.velo
                if(player.y >= canvas.height + 20){
                    player.y -= canvas.height + 20
                }
                colisao = cristal.Colidir(player.x, player.y, player.width, cristal.x, cristal.y, cristal.width, colisao, pontos)
            }
            else if(e.key == "ArrowRight"){
                player.x += player.velo
                if(player.x >= canvas.width + 20){
                    player.x -= canvas.width + 20
                }
                colisao = cristal.Colidir(player.x, player.y, player.width, cristal.x, cristal.y, cristal.width, colisao, pontos)
            }
            else if(e.key == "ArrowLeft"){
                player.x -= player.velo
                if(player.x <= - 20){
                    player.x += canvas.width 
                }
                colisao = cristal.Colidir(player.x, player.y, player.width, cristal.x, cristal.y, cristal.width, colisao, pontos)
            }
            if(pontos != 0 && pontos % 3 == 0){
                if(mudar_cor == true){
                    let valor = (Math.floor((cores.length) * Math.random() + 1))- 1
                    player.cor = cores_Player[valor]
                    cristal.cor = cores_Cristal[valor]
                    canvas.style.backgroundColor = cores[valor]
                    mudar_cor = false
                }
            }
            else{
                mudar_cor = true
            }
            pontos = cristal.Atualizar(colisao, pontos, ctx, canvas)
            player.Desenhar(ctx)
        })
        //criar objs
        var cristal = new objetos_Jogo(x_Cristal, y_Cristal, tamanho_Cristal, 0, "cristal", cor_Cristal)
        cristal.Desenhar(ctx)
        var player  = new objetos_Jogo(x_Player, y_Player, tamanho_Player, velo_Player, "player", cor_Player)
        player.Desenhar(ctx)
    }
}
function Mudo(){
    if(audio.muted){
        audio.muted = false
    }
    else{
        audio.muted = true
    }
}