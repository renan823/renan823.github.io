$(document).ready(function(){
    //msg inicial
    var corpo = $(".locals")
    corpo.css({"background":"black", "color":"white"})
    var paragrafo = $("<p>")
    paragrafo.text("Que tal explorar alguns pontos curiosos do mundo? Basta clicar nos botões e viajar! Boa viagem!!")
    paragrafo.css({"font-size":"18px", "width": "300px", "margin-top": "20%"})
    corpo.append(paragrafo)
    var img = $("<img>")
    img.attr("src", "terra.png")
    corpo.append(img)
    
    //criar pais
    function lugares(nome, texto, imgSRC, imgNOME, nomeLugar){
        corpo.css({"background":"white", "color":"#333"})
        //texto
        let divT = $("<div>")
        let H2 = $("<h2>")
        H2.text(nome)
        let P = $("<p>")
        P.text(texto)
        P.css("font-size", "16px")
        divT.append(H2)
        divT.append(P)
        divT.css({"margin-bottom": "20px"})

        //IMG
        let divIMG = $("<div>")
        let img = $("<img>")
        img.attr("src", imgSRC)
        img.attr("title", imgNOME)
        img.addClass('imagens')
        divIMG.append(img)
        divIMG.css({"margin-bottom": "20px"})

        corpo.append(divT)
        corpo.append(divIMG)

        $("#titulo").text(`-${nomeLugar}-`)
    }

    //Brasil
    $("#BR").click(function(){
        corpo.empty()
        for(let i = 0; i < 3; i++){
            let lugar = Brasil[i]
            let nomeLugar = "Brasil"
            lugares(lugar.nome, lugar.texto, lugar.src, lugar.title, nomeLugar)
        }
           
        
    })
    //Inglaterra
    $("#IG").click(function(){
        corpo.empty()
        for(let i = 0; i < 3; i++){
            let lugar = Inglaterra[i]
            let nomeLugar = "Inglaterra"
            lugares(lugar.nome, lugar.texto, lugar.src, lugar.title, nomeLugar)
        }
    })

    //Africa
    $("#AF").click(function(){
        corpo.empty()
        for(let i = 0; i < 3; i++){
            let lugar = Africa[i]
            let nomeLugar = "África do Sul"
            lugares(lugar.nome, lugar.texto, lugar.src, lugar.title, nomeLugar)
        }
    })

    //Singapura
    $("#SI").click(function(){
        corpo.empty()
        for(let i = 0; i < 3; i++){
            let lugar = Singapura[i]
            let nomeLugar = "Singapura"
            lugares(lugar.nome, lugar.texto, lugar.src, lugar.title, nomeLugar)
        }
    })

    //Nova
    $("#NO").click(function(){
        corpo.empty()
        for(let i = 0; i < 3; i++){
            let lugar = Nova[i]
            let nomeLugar = "Nova Zelândia"
            lugares(lugar.nome, lugar.texto, lugar.src, lugar.title, nomeLugar)
        }
    })
})