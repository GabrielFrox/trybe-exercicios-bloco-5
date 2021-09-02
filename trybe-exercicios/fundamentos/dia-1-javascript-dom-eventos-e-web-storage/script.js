document.getElementsByTagName('p')[0].innerText = 'Em 2 anos me vejo sendo um programador com mais responsabilidades dentro de uma empresa, fazendo outros cursos por fora para agregar meu conhecimento.';

backColor = document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'

let upper = document.getElementsByTagName('p');
for (let i = 0; i < upper.length; i += 1) {
  upper[i].innerText = upper[i].innerText.toLocaleUpperCase()
}

let consoleMess = document.getElementsByTagName('p');
for (let i = 0; i < consoleMess.length; i += 1) {
  console.log(consoleMess[i].innerText)
}