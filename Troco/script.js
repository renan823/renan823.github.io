
//Usei o round para manter o valor em duas decimais, evitando numeros longos 
//E foram duas decimais pois é assim que usamos no dinheiro

var LI = document.createElement("li")
var UL = document.getElementById("listaValores")
function Input(valorTotal){
    while(UL.hasChildNodes()){
        UL.removeChild(UL.firstChild)
    }
    var t1 = new Troco(valorTotal)
    t1.Calcular() 
}
class Troco{
    constructor(valorTotal){
        this.valor = valorTotal
        this.dinheiro = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]
        this.dinheiroUsado = []
    }
    Calcular(){
        for(let contador = 0; contador < this.dinheiro.length; contador++){
            let valorSubtrair = (this.dinheiro[contador])
            if(this.valor - valorSubtrair >= 0){
                while(this.valor - valorSubtrair >= 0){
                    this.valor -= valorSubtrair
                    this.valor = Math.round(this.valor * 100)/100
                    this.dinheiroUsado.push(valorSubtrair)
                }
            }
        }
        this.MostrarValores()
    }
    MostrarValores(){
    let i = 0
    let valorAnterior = 0;
    let tipo = "nota(s)"
       while(i < this.dinheiroUsado.length){
           let valor = this.dinheiroUsado[i]
           if(valor >= 2){
                tipo = "nota(s)"
           }
           else{
            tipo = "moeda(s)"
           }
           if(valor != valorAnterior){
                let Qnt = this.dinheiroUsado.filter(a => a === valor).length
                let LI = document.createElement("li")
                LI.innerText = `${Qnt} ${tipo} de ${valor}`
                UL.appendChild(LI)
           }
           valorAnterior = valor
           i++
       }
    }
}
(document.getElementById("enviar")).addEventListener('click', function(e){
    var valorTotal = document.getElementById("valor").value
    if(valorTotal <= 0){
        e.preventDefault()
    }
    else{
        Input(valorTotal)
    }
})