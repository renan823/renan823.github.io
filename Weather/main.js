var clima = ["Clear", "Clouds", "Drizzle", "Rain", "Thunderstorm", "Snow", "Mist"]
var imagens = [
	{
	src: "Icones/clear.png",
	nome: "Céu limpo"
},
{
	src: "Icones/clouds.png",
	nome: "Nublado"
},
{
	src: "Icones/srain.png",
	nome: "Chuva leve"
},
{
	src: "Icones/rain.png",
	nome: "Chuvoso"
},
{
	src: "Icones/thunderstorm.png",
	nome: "Tempestade"
},
{
	src: "Icones/snow.png",
	nome: "Nevando"
},
{
	src: "Icones/mist.png",
	nome:"Clima misto"
}
]

let BUTTON = document.querySelector("input")
BUTTON.addEventListener("click", ()=>{
	if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getData);
  }
  else{
    alert("Infelizmente este navegador não suporta geolocalização!")
  }
})

function getData(position){
	var lat = position.coords.latitude
	var lon = position.coords.longitude
	var key = "4fe11715cde9f26f6f047dfd06bfc789"
	var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

	$.getJSON(url, Create)
}


function Create(dados){
	document.querySelector("#container").innerHTML = ""
	let DIV = document.createElement("div")
	let CONT = document.querySelector("#container")

	let H2 = document.createElement("h2")
	H2.innerText = dados.name
	DIV.append(H2)

	let H3 = document.createElement("h3")
	let IMG = document.createElement("img")
	IMG.width = 96
	IMG.height = 96
	for(let i = 0; i < clima.length; i++){
		if(dados.weather[0].main == clima[i]){
			IMG.src = imagens[i].src
			H3.innerText = imagens[i].nome
		}
	}
	DIV.append(IMG)
	DIV.append(H3)

	let P = document.createElement("p")
	P.innerText = "Temp. "+ Math.floor(dados.main.temp - 273) +"°C"
	DIV.append(P)

	CONT.append(DIV)
}
