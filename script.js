//inicio do script

//função criar box de cores 




//função criar quadrados de pixel
let pixelLine = document.querySelectorAll('.pixelLine');
for (i=0; i < 5; i += 1) {
  pixelLineItens = pixelLine[i]
  for (let index = 0; index < 5; index += 1) {
    let pixels = document.createElement('div');;
  pixels.className = 'pixel';
  pixelLineItens.appendChild(pixels);
  }
}

