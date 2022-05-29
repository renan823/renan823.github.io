$(document).ready(function(){
    
    var index = 0
    var respostas = []
    var con = 1
    
    function jogar(){   
        let lista = []
        let q = questoes[index].questao
        let a = questoes[index].a
        lista.push(a)
        let b = questoes[index].b
        lista.push(b)
        let c = questoes[index].c
        lista.push(c)
        let d = questoes[index].d
        lista.push(d)

        let div = $("<div>")
        div.attr("id", "questao")
        div.remove($(`#op_${con}`))
        div.addClass("card")

        //texto da questao
        let texto = $("<h3>")
        texto.text(q)
        div.append(texto)

        //alternativas
        let local = 1
        for(let i = 0; i < lista.length; i++){

            let op = $("<input>")
            op.attr("type", "radio")
            op.attr("name", "questao")
            op.attr("id", `op_${con}_${local}`)
            op.attr("value", lista[i])

            div.append(op)
            div.append(lista[i])
            div.append($("<br>"))
            local++
        }

        let enviar = $("<input>")
        enviar.attr("type", "button")
        enviar.attr("value", "Enviar")
        enviar.attr("id", "enviar")
        enviar.addClass("botao")


        div.append(enviar)
        $("#container").append(div)
        var botaoE = $("#enviar")
    
        botaoE.click(function(){

            var check = false

            for (let k = 1; k < 5; k++){
                var id = `#op_${con -1}_${k}`
                
                var opc = $(id).is(":checked")
                

                if(opc == true){
                    check = true 
                    respostas.push(($(id)).val())
                    
                }
            }

            if(check != false){
                $("#questao").remove()
                if (index < questoes.length - 1){
                    index++
                    
                    jogar()
                
                }
    
                else{
                    let pontos = 0
                    for(let i = 0; i < respostas.length; i++){
                        let resposta = respostas[i]
                        for(let c = 0; c < questoes.length; c++){
                            let certa = questoes[c].resposta

                            if(resposta == certa){
                                pontos++
                            }
                        }
                    }

                    var final = $("<h1>")
                    final.text(`Você acertou ${pontos}/${questoes.length}!`)
                    $("#container").append(final)
                }
            }
           

        })
        con++
    } 
    jogar()    
})
       
    

