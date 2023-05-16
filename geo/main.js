let lat = [];
let lon = [];
let id = null;

document.addEventListener('click', (e) => {
    switch(e.target.id) {
        case 'start':
            watchLocation();
            break;
        case 'stop':
            stopWatch();
            break;
    }
})
const plot = () => {
    let data = [{
        x: lat,
        y: lon,
        mode: 'markers',
        type: 'scatter'
    }]
    console.log(data)
    Plotly.newPlot('map', data, {title: 'Seu deslocamento'});
}

const watchLocation = () => {
    lat = [];
    lon = [];

    if(!navigator.geolocation) {
        alert("Não foi dessa vez!");
    } else {
        id = navigator.geolocation.watchPosition((pos) => {
            lat.push(pos.coords.latitude);
            lon.push(pos.coords.longitude);
            plot();
        })
    }
}

const stopWatch = () => {
    if(id) {
        navigator.geolocation.clearWatch(id);
    }
}