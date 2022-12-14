
class Modal{
    constructor(dimensions, title, text, btn){

        //Cannot run in node!
        if (typeof window === 'undefined') {
            return
        }

        //set document body
        this.html = document.querySelector("body");

        //Set width/height (with/without params)
        if(dimensions.length === 0){
            this.width = 350;
        }
        else{
            this.width = dimensions[0];
            this.height = dimensions[1];
        }

        //Set base modal configs
        this.title = title;
        this.text = text;
        this.btn = btn;

        //Show modal
        const modal = this.init();
        this.html.appendChild(modal);
    }

    init(){

        const modal = document.createElement("div");
        modal.style.width = `${this.width}px`;
        if(this.height){
            modal.style.height = `${this.height}px`;
        }
        modal.classList.add("modal");

        const title = document.createElement("h3");
        title.innerText = this.title.msg || "No title's found!";
        title.style.color = this.title.color || "black";
        modal.appendChild(title);

        const text = document.createElement("p");
        text.innerText = this.text.msg || "No text's found!";
        text.style.color = this.text.color || "black";
        modal.appendChild(text);

        const button = document.createElement("button");
        button.innerText = this.btn.msg || "Click me";
        button.style.background = this.btn.color || "blue";
        button.style.border = `2px solid ${this.btn.color}`;
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            modal.style.display = "none";
            this.html.removeChild(modal);
        })
        modal.appendChild(button);

        modal.style.display = "block";
        return modal;
    }
}


class SuccessModal extends Modal{
    constructor(dimensions, title, text, btn){
        title.color = "yellowgreen";
        btn.color = "limegreen";
        super(dimensions, title, text, btn);
    }
}

class ErrorModal extends Modal{
    constructor(dimensions, title, text, btn){
        title.color = "red";
        btn.color = "crimson";
        super(dimensions, title, text, btn);
    }
}


