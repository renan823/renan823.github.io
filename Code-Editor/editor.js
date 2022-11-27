
window.onload = ()=>{
    const button = document.querySelector("button");
    const iframe = document.querySelector("iframe");
    const code = document.querySelector("textarea");

    button.addEventListener("click", ()=>{
        let HTML = code.value;
        iframe.src = "data:text/html;charset=utf-8," + encodeURI(HTML);
    })

    
}

