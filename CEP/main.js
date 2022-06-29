$(document).ready(function(){
    let form = document.querySelector("form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        getCEP(document.querySelector("input").value)
        document.querySelector("input").value = ""
    })
})

function getDados(dados){
    var text = document.querySelector("h3")
    if(dados.erro){
        alert("Algo deu errado! Digite outro CEP.")
        text.innerText = ""
    }
    else{
       Create(dados.logradouro, dados.localidade, dados.uf, text)
    }
}

function getCEP(CEP){
    let url = `https://viacep.com.br/ws/${CEP}/json/`
    $.getJSON(url, getDados)
}

function Create(rua, cidade, estado, text){
    text.innerText = ""
    text.innerText = `${rua}, em ${cidade} - ${estado}.`
}