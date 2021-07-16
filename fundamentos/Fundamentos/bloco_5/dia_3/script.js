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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let lista = dezDaysList[index];
  const createLi = document.createElement('li');
  createLi.className = ('day');
  const classDay = document.getElementById('days');
  createLi.innerText = lista;
  classDay.appendChild(createLi);
    if ( lista === 24 || lista === 25 || lista === 31) {
      createLi.className = ('day holiday');
      createLi.innerText = lista;
      classDay.appendChild(createLi);
    }
    if (lista === 4 || lista === 11 || lista === 18 || lista === 25) {
      createLi.className = ('day friday');
      createLi.innerText = lista;
      classDay.appendChild(createLi);
    }
    if (lista === 25) {
      createLi.className = ('day friday holiday');
      createLi.innerText = lista;
      classDay.appendChild(createLi);
    }
  }

  function feriados() {
    const divButton = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    const IdButton = 'btn-holiday';
     button.innerHTML = 'Feriados';
     button.id = IdButton;
     divButton.appendChild(button);
  }
    feriados();


  function changeBgColor() {
    const recuperaButton = document.querySelector('#btn-holiday');
    const recuperaClass = document.querySelectorAll('.holiday');
    const backgroundColor = 'rgb(238,238,238)';
    const newColor = 'red';

  recuperaButton.addEventListener('click', function() {
    for (let index = 0; index < recuperaClass.length; index += 1) {
      if (recuperaClass[index].style.backgroundColor === newColor) {
        recuperaClass[index].style.backgroundColor = backgroundColor;
      } else {
        recuperaClass[index].style.backgroundColor = newColor;
      }
    }
  })
  };

changeBgColor();


function fridayButton(sextaFeira) {
  const classContainer = document.querySelector('.buttons-container');
  const Fbutton = document.createElement('button');
  const idFriday = 'btn-friday';
  Fbutton.id = idFriday;
  Fbutton.innerHTML = sextaFeira
  classContainer.appendChild(Fbutton);

}
fridayButton('Sexta-Feira');


function changeNameFriday(fridays) {
  const recoverButton = document.querySelector('#btn-friday');
  const recoverClass = document.getElementsByClassName('friday');
  const changeText = 'SEXTOU!!!';

  recoverButton.addEventListener('click', function() {
    for (let index = 0; index < recoverClass.length; index += 1) {
      if (recoverClass[index].innerHTML !== changeText) {
        recoverClass[index].innerHTML = changeText;
      } else {
        recoverClass[index].innerHTML = fridays[index];
      }
    }
  })
};
let fridaysArray = [ 4, 11, 18, 25 ];
changeNameFriday(fridaysArray);


const dayElements = document.querySelector('#days');

function zoom() {
  dayElements.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    event.target.style.color = 'green';
  })
}
function undoZoom() {
  dayElements.addEventListener('mouseout', function(evento) {
    evento.target.style.fontSize = '20px';
    evento.target.style.fontWeight = '300';
    evento.target.style.color = 'grey'
  })
}
  zoom();
  undoZoom();


function myTasks(tarefa) {
 const createSpan = document.createElement('span');
 const divMyTasks = document.querySelector('.my-tasks');
  createSpan.innerHTML = tarefa;
  divMyTasks.appendChild(createSpan);
 }
  myTasks('Estudar React');

  const criarDiv = document.createElement('div');
function subtitleColor(cor) {
  const usandoDivMyTasks = document.querySelector('.my-tasks');
  criarDiv.className = 'task';
  criarDiv.style.backgroundColor = cor;
  usandoDivMyTasks.appendChild(criarDiv);
}
  subtitleColor('blue');

function selecionarTarefa() {
  criarDiv.addEventListener('click', function(event) {
    event.target.className = 'task selected';
  criarDiv.addEventListener('click', function(event) {
    event.target.className = 'task';
  });
})
};
selecionarTarefa();

function mudarCorTarefa() {
const recuperaUl = document.getElementById('days');
const recuperali = document.getElementsByClassName('day');
const newColor = 'blue';
const originalColor = 'rgb(119,119,119)';

recuperaUl.addEventListener('click', function() {
  for (let index = 0; index < recuperali.length; index += 1) {

  }
});
}
mudarCorTarefa();
