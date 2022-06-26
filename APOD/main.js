const img = document.querySelector("img")
const title = document.querySelector("h1")
const msg = document.querySelector("h3")
let text = ""

$.ajax({
    type: "GET",
    url: "https://api.nasa.gov/planetary/apod?api_key=ghIOacdG4hewbQtwOfkD8Tc2HhISVF0rbph5xZ2A",
    success: (data)=>{
        text = data.explanation
    
        title.innerText = data.title

        msg.innerText = "Clique para saber mais"

        let h, w
        if(screen.width <= 300){
            h = 400
            w = 300
        }
        else if(screen.width <= 800){
            h = 600
            w = 500
        }
        else{
            h = 800
            w = 600
        }
        img.src = data.hdurl
        img.height = h
        img.width = w
    }
})

img.addEventListener("click", (e)=>{
    swal({
        title: "Sobre",
        text: text,
        button: "OK"
    })
})