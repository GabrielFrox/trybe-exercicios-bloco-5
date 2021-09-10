let backColorBtns = document.getElementsByClassName('back-color');
let body = document.querySelector('body');
let paragraph = document.querySelector('p')
let defaultBackColor = ''
let defaultFontColor = ''
let defaultFontSize = ''

// Função que coloca fundo em modo noturno
function backNoturno() {
  let noturn = backColorBtns[0];
  noturn.addEventListener('click', function() {
    let corAtual = body.style;
    if (corAtual.backgroundColor !== 'black') {
      corAtual.backgroundColor = 'black';
      corAtual.color = 'white'
      defaultBackColor = localStorage.setItem('backgroundColor', 'black')
      defaultFontColor = localStorage.setItem('fontColor', 'white')
    }
    else {
      corAtual.backgroundColor = 'rgb(197, 197, 197)'
      corAtual.color = 'black'
      defaultBackColor = localStorage.setItem('backgroundColor', 'rgb(197, 197, 197)')
      defaultFontColor = localStorage.setItem('fontColor', 'black')
    }
  })
}
backNoturno()
// ---------------------------------

// Função que coloca fundo em branco
function backbranco() {
  let white = backColorBtns[1];
  white.addEventListener('click', function() {
    let corAtual = body.style;
    if (corAtual.backgroundColor !== 'white') {
      corAtual.backgroundColor = 'white';
      corAtual.color = 'green'
      defaultBackColor = localStorage.setItem('backgroundColor', 'white')
      defaultFontColor = localStorage.setItem('fontColor', 'green')
    }
    else {
      corAtual.backgroundColor = 'rgb(197, 197, 197)'
      corAtual.color = 'black'
      defaultBackColor = localStorage.setItem('backgroundColor', 'rgb(197, 197, 197)')
      defaultFontColor = localStorage.setItem('fontColor', 'black')
    }
  })
}
backbranco()
// ---------------------------------

// Função que coloca fundo em Amarelo
function backyellow() {
  let yellow = backColorBtns[2];
  yellow.addEventListener('click', function() {
    let corAtual = body.style;
    if (corAtual.backgroundColor !== 'yellow') {
      corAtual.backgroundColor = 'yellow';
      corAtual.color = 'black'
      defaultBackColor = localStorage.setItem('backgroundColor', 'yellow')
      defaultFontColor = localStorage.setItem('fontColor', 'black')
    }
    else {
      corAtual.backgroundColor = 'rgb(197, 197, 197)'
      corAtual.color = 'black'
      defaultBackColor = localStorage.setItem('backgroundColor', 'rgb(197, 197, 197)')
      defaultFontColor = localStorage.setItem('fontColor', 'black')
    }
  })
}
backyellow()
// ---------------------------------

// Função que altera tamanho do texto
function fontSizeChange() {
  let btnToSize = document.querySelector('#applyFontSize')
  let newSize = document.querySelector('#fontSize')
  btnToSize.addEventListener('click', function() {
    let size = newSize.value + 'px'
    paragraph.style.fontSize = size
    defaultFontSize = localStorage.setItem('fontSize', size)
  })
}
fontSizeChange()
// Auxiliar de reversão
function revertFontSize() {
  let revertBtn = document.querySelector('#revertFontSize')
  revertBtn.addEventListener('click', function() {
    paragraph.style.fontSize = '16px'
    defaultFontSize = localStorage.setItem('fontSize', '16px')
  })
}
revertFontSize()
// ---------------------------------


// Função que inicia página com localStorage do user
function newinit() {
  body.style.backgroundColor = localStorage.getItem('backgroundColor')
  body.style.color = localStorage.getItem('fontColor')
  paragraph.style.fontSize = localStorage.getItem('fontSize')
}
newinit()
// --------------------------------------------------