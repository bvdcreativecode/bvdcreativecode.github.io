/**
 * Responsive event and menu button styles
*/

const btnMenu = document.getElementById('btn-menu');
let btnLine = document.querySelectorAll('.btn-line');
const navbarContent = document.getElementById('navbar-content');

btnMenu.addEventListener('click', actionBtnMenu);

function actionBtnMenu(e) {
  e.preventDefault();
  btnLine.forEach((line, count)=> {
    line.classList.toggle(`btn-line${count+=1}`);
  });
  navbarContent.classList.toggle('navbar-content--active');
}


/**
 * Event radiobutton web Dark - Light
 */
const radioBtnLine = document.getElementById('radio-btn-line');
const radioBtn = document.getElementById('radio-btn');

let listClass = document.body.querySelectorAll(`.logo, #svg-moon, #svg-sol, 
            .component, .navbar-content, .navbar-li, .icons, .text1, .text2,
            .image-gradient, .coments, .point, .number-strategy, .title-strategy,
            .title-portafolio, .content-web-site, .box-gradient-footer, .btn-contac-my`);

// console.log(listClass);

const addClassLight = ()=> {
  for (const item of listClass) {
    if (item.matches('.logo') || item.matches('.icons')) item.classList.add('icons-ligth');
    else if (item.matches('#svg-moon')) item.style.display = 'none';
    else if (item.matches('#svg-sol')) item.classList.add('svg-sol--active');
    else if (item.matches('.component')) item.classList.add('component-ligth');
    else if (item.matches('.navbar-content')) item.classList.add('menu-ligth');
    else if (item.matches('.navbar-li')) item.firstElementChild.classList.add('text-light');
    else if (item.matches('.title-strategy')) item.classList.add('text-light');
    else if (item.matches('.text1')) item.classList.add('text-light1');
    else if (item.matches('.text2')) item.classList.add('text-light2');
    else if (item.matches('.image-gradient')) item.classList.add('gradient-dark');
    else if (item.matches('.coments') || item.matches('.content-web-site')) item.classList.add('card-ligth');
    else if (item.matches('.point')) item.classList.add('point-ligth');
    else if (item.matches('.number-strategy')) item.classList.add('numbers-light-before');
    else if (item.matches('.box-gradient-footer')) item.classList.add('gradient-blue');
    else if (item.matches('.btn-contac-my')) item.classList.add('btn-light');
    if (item.matches('.title-portafolio')) item.classList.add('numbers-light-before');
  }
}

const removeClassLight = ()=> {
  for (const item of listClass) {
    if (item.matches('.logo') || item.matches('.icons')) item.classList.remove('icons-ligth');
    else if (item.matches('#svg-moon')) item.style.display = 'block';
    else if (item.matches('#svg-sol')) item.classList.remove('svg-sol--active');
    else if (item.matches('.component')) item.classList.remove('component-ligth');
    else if (item.matches('.navbar-content')) item.classList.remove('menu-ligth');
    else if (item.matches('.navbar-li')) item.firstElementChild.classList.remove('text-light');
    else if (item.matches('.title-strategy')) item.classList.remove('text-light');
    else if (item.matches('.text1')) item.classList.remove('text-light1');
    else if (item.matches('.text2')) item.classList.remove('text-light2');
    else if (item.matches('.image-gradient')) item.classList.remove('gradient-dark');
    else if (item.matches('.coments') || item.matches('.content-web-site')) item.classList.remove('card-ligth');
    else if (item.matches('.point')) item.classList.remove('point-ligth');
    else if (item.matches('.number-strategy')) item.classList.remove('numbers-light-before');
    else if (item.matches('.box-gradient-footer')) item.classList.remove('gradient-blue');
    else if (item.matches('.btn-contac-my')) item.classList.remove('btn-light');
    if (item.matches('.title-portafolio')) item.classList.remove('numbers-light-before');
  }
}

radioBtn.addEventListener('click', (e)=> {
  e.preventDefault();

  radioBtn.classList.toggle('web-ligh');
  radioBtnLine.classList.toggle('web-ligh-line');

  if (document.body.matches('.dark')) {
    document.body.classList.replace('dark', 'light');
    addClassLight();
  } else if (document.body.matches('.light')) {
    document.body.classList.replace('light', 'dark');
    removeClassLight();
  }
  Dark_Light();

  // Guardar el modo en el --------------- Local Storage ---------------
  if (document.body.classList.contains('light')) {
    localStorage.setItem('light-mode', 'true');
  } else {
    localStorage.setItem('light-mode', 'false');
  }
});

function Dark_Light () {
  if (document.body.matches('.light')) {
    strategy.classList.replace('active','active-light');
    design.classList.replace('active','active-light');
    developing.classList.replace('active', 'active-light');
    support.classList.replace('active', 'active-light');
  } else if (document.body.matches('.dark')) {
    strategy.classList.replace('active-light', 'active');
    design.classList.replace('active-light', 'active');
    developing.classList.replace('active-light', 'active');
    support.classList.replace('active-light', 'active');
  }
}

//variables global - estrategia - diseño - desarrollo - soporte
const strategy = document.getElementById('estrategia');
const design = document.getElementById('diseño');
const developing = document.getElementById('desarrollo');
const support = document.getElementById('soporte');

if (document.body.matches('.dark')) {strategy.classList.add('active');}

// Obtenemos el modo actual --------------- Local Storage ---------------
if (localStorage.getItem('light-mode') == 'true') {
  radioBtn.classList.toggle('web-ligh');
  radioBtnLine.classList.toggle('web-ligh-line');

  document.body.classList.replace('dark', 'light');
  if (document.body.matches('.light')) {strategy.classList.replace('active','active-light');}
  addClassLight();
} else {
  document.body.classList.replace('light', 'dark');
  if (document.body.matches('.dark')) {strategy.classList.replace('active-light', 'active');}
  removeClassLight();
}


/**
  Efect coments point
*/
let point = document.querySelector('.point-1');
let coment = document.querySelectorAll('.coments')[0];

window.addEventListener('resize', (e)=> {
  e.preventDefault();
  let y = coment.clientHeight;
  point.style.marginTop = `${y+11}px`;
});


/* 
  Slider reset
*/ 
window.addEventListener('resize', ()=> {
  if (strategySlider.clientWidth > 728 && paragrahpSlider.clientWidth > 728) {
    strategySlider.style.transform = `translateX(${0}px)`;
    paragrahpSlider.style.transform = `translateX(${0}px)`;
    activeStrategySlider()
    Dark_Light();
  } else {
    strategySlider.style.transform = `translateX(${0}px)`;
    paragrahpSlider.style.transform = `translateX(${0}px)`;
    activeStrategySlider()
    Dark_Light();
  }
});

function activeStrategySlider() {
  for (let i=0; i<strategySlider.children.length; i++) {
    if (i == 0) {
      strategySlider.children[i].classList.add('active');
      strategySlider.children[i].classList.add('active-light');
    } else {
      strategySlider.children[i].classList.remove('active');
      strategySlider.children[i].classList.remove('active-light');
    }
  }
}


/**
  Efecto touch en MAIN - STRATEGY 
*/
const boxStrategy = document.getElementById('box-strategy');
const strategySlider = document.getElementById('strategy-slider');

const paragrahpSlider = document.getElementById('paragrahp-slider');
const paragrahp = document.querySelectorAll('.paragrahp-strategy');

// Evento click en los texto con delegación
boxStrategy.addEventListener('click', delegacionTitulos);

// Function agrega y elimina el active - active-light segun la posición del array [1][3][5][7]
const functionRepeat = (position)=> {
  let count = 1;
  while (count < strategySlider.childNodes.length) {
    if (count == position) {
      if (document.body.matches('.light')) {
        strategySlider.childNodes[count].classList.add('active-light');
      } else if (document.body.matches('.dark')) {
        strategySlider.childNodes[count].classList.add('active');
      }
    } else {
      if (document.body.matches('.light')) {
        strategySlider.childNodes[count].classList.remove('active-light');
      } else if (document.body.matches('.dark')) {
        strategySlider.childNodes[count].classList.remove('active');
      }
    }
    count += 2;
  }
}

function slider(valor, widthParagrahp, num) {
  if (strategySlider.clientWidth > 728) {
    strategySlider.style.transform = `translateX(${0}px)`;
  } else {
    strategySlider.style.transform = `translateX(-${valor*num}px)`;
  }
  paragrahpSlider.style.transform = `translateX(-${widthParagrahp*num}px)`;
}

function delegacionTitulos(e) {
  e.preventDefault();
  let itemStrategyClass = e.target.classList;
  let valor = 180;
  let widthParagrahp = paragrahp[0].clientWidth; // valor de la caja
  
  switch (itemStrategyClass[1]) {
    case "estrategia":
      // console.log('diste click en Estrategia');
      slider(valor, widthParagrahp, 0);
      functionRepeat(1);
      break;

    case "diseño": 
      // console.log('diste click en diseño');
      slider(valor, widthParagrahp, 1);
      functionRepeat(3);
      break;

    case "desarrollo": 
      // console.log('diste click en desarrollo');
      slider(valor, widthParagrahp, 2);
      functionRepeat(5);
      break;

    case "soporte": 
      // console.log('diste click en soporte');
      slider(valor, widthParagrahp, 3);
      functionRepeat(7);

      setTimeout (()=> {
        functionRepeat(1);
        strategySlider.style.transform = `translateX(${0}px)`;
        paragrahpSlider.style.transform = `translateX(${0}px)`;
      },8000);
      break;
  }
}