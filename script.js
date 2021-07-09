//inicio do script

//função seleciona primeira box de cor 
window.onload = function () {
  let mainColor = document.getElementById('black');
  mainColor.classList.add('selected');
}

//função criar quadrados de pixel
let pixelRow = document.querySelectorAll('#pixelRow');
for (i=0; i < 5; i += 1) {
  pixelRowItens = pixelRow[i]
  for (let index = 0; index < 5; index += 1) {
    let pixels = document.createElement('div');;
  pixels.className = 'pixel';
  pixelRowItens.appendChild(pixels);
  }
}

//função de selecionar cores 
function colorPicker() {
  let colorSelected = document.getElementsByClassName('selected');
  addEventListener('click', function(event) {
    let alvo = event.target
    for(let i = 0; i < colorSelected.length; i += 1) {
      if( alvo.className === 'color') { 
      colorSelected[i].classList.remove('selected');
      alvo.classList.add('selected');   
      } else if ( alvo.className === 'pixel') {
      alvo.style.backgroundColor = colorSelected[0].id;
      }}
      })
    };
  
colorPicker();

//função do botão limpar
function clearButton() {
  let clear = document.getElementById('clear-board');
  let pixelSelect = document.getElementsByClassName('pixel');
  clear.addEventListener('click', function(event) {
    for(let i =0; i < pixelSelect.length; i += 1) {
    pixelSelect[i].style.backgroundColor = '#fff'  
    }
      })
    };
clearButton();