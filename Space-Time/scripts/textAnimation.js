window.addEventListener("load", () => {
  let i = 0;
  const title = '> Space Time'; 
  const subtitle = 'Your space adventures enterprise <';
  let writingTitle = true;

  const writer = () => {
    if (i < title.length && writingTitle) {
      document.querySelector(".title").innerHTML += title.charAt(i);
      i++;
      setTimeout(writer, 100);
    }
    else{
      if(writingTitle){
          i = 0;
      }
      writingTitle = false;
      
      if(i < subtitle.length){
          document.querySelector(".subtitle").innerHTML += subtitle.charAt(i);
          i++;
          setTimeout(writer, 50);
      }
    }
  }

  writer();
})


