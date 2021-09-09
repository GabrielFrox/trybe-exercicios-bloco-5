function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

// Exercicio 1 --------------
let lista = document.getElementById('days');

function tagsLiElements(num) {
  let tagName = 'day'
  if (num === 24 || num === 25 || num === 31) tagName += ' holiday';
  if (num === 4 || num === 11 || num === 18 || num === 25) tagName += ' friday';
  return tagName;
}

for (let i of dezDaysList) {
  let newElement = document.createElement('li');
  newElement.innerText = i;
  newElement.className = tagsLiElements(i);
  lista.appendChild(newElement);
}

// Exercicio 2 --------------
let btnContainer = document.querySelector('.buttons-container')

function holidayBtn(event) {
  let btn = document.createElement('button');
  btn.innerText = 'Feriados';
  btn.id = 'btn-holiday';
  btnContainer.appendChild(btn);
}
holidayBtn('Feriados')

// Exercicio 3 --------------
let holidayFunc = document.querySelector('#btn-holiday');
let holidayElements = document.querySelectorAll('.holiday');
let btncount = 0;

function btnHolidayColorChange() {
  btncount += 1;
  if (btncount % 2 !== 0) {
    for (let i = 0; i < holidayElements.length; i += 1) {
      holidayElements[i].style.backgroundColor = 'black';
      holidayElements[i].style.borderRadius = '14px';
    }
  }
  else {
    for (let i = 0; i < holidayElements.length; i += 1) {
      holidayElements[i].style.backgroundColor = 'rgb(238,238,238)'
    }
  }
}

holidayFunc.addEventListener('click', btnHolidayColorChange)

// Exercicio 4 ---------------
function fridayBtn(str) {
  let btn = document.createElement('button');
  btn.innerText = 'Sexta-feira';
  btn.id = 'btn-friday';
  btnContainer.appendChild(btn);
}
fridayBtn('Feriados')

// Exercicio 5 ---------------  Créditos ao gabarito, eu já estava quase desistindo
function displayFridays(fridayslist) {
  let fridayButton = document.querySelector('#btn-friday')
  let fridayDays = document.getElementsByClassName('friday')
  let newStr = 'Sextou!'
  let cont = 0
  
  fridayButton.addEventListener('click', function () {
    for (let i = 0; i < fridayDays.length; i += 1) {
      if (fridayDays[i].innerHTML !== newStr) {
        fridayDays[i].innerHTML = newStr;
      }
      else {
        fridayDays[i].innerHTML = fridayslist[i]
      }
    }
  })
}
let arrayDeSextas = [4, 11, 18, 25]
displayFridays(arrayDeSextas)

// Exercicio 6 ---------------