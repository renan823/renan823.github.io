let quote = '';
let author = '';

async function getQuote(){
    const response = await fetch("https://api.quotable.io/random?tags=technology,famous-quotes");
    const data = await response.json();
    if(response.ok){
        quote = "' "+data.content+" '";
        author = data.author;

        let i = 0;
        let writingQuote = true;

        const writer = () => {
            if(i < quote.length && writingQuote){
                document.querySelector(".quote").innerHTML += quote.charAt(i);
                i++;
                setTimeout(writer, 100)
            }
            else{
                if(writingQuote){
                    i = 0;
                }
                writingQuote = false;

                if(i < author.length){
                    document.querySelector(".quote-author").innerHTML += author.charAt(i);
                    i++;
                    setTimeout(writer, 100)
                }
            }
        }
        writer()
    }
}

getQuote();
