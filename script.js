//inicio do script

//função seleciona primeira box de cor 
window.onload = function () {
  let mainColor = document.getElementById('black');
  mainColor.classList.add('selected');
}



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

//função de selecionar cores 
function colorPicker() {
  let colorPalette = document.getElementById('color-palette');
  let black = 'black';
  let colorSelected = document.getElementsByClassName('selected');
  colorPalette.addEventListener('click', function(event) {
    for(let i = 0; i < colorSelected.length; i += 1) {
        colorSelected[i].classList.remove('selected');  
      }
      let alvo = event.target
      alvo.classList.add('selected');
      black = alvo.style.backgroundColor
      })
    };
  
colorPicker();




