// 1. Скрыть элемент по нажатию кнопки

// const hideBtn = document.getElementById('hider')
// const content = document.getElementById('text');
// hideBtn.addEventListener('click', () => {
//     content.remove()
// })


// alternataive
// document.getElementById('hider').onclick = function () {
//     document.getElementById('text').hidden = true;
// }


// 2. Какой обработчик запустится?

// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);

// сработает первый обработчик потому что он не был удалён методом removeEventListener, потом сработает второй обработчик который через dom-свойство
// поэтому 1 и 2


// 3. Добавить кнопку закрытия

// const contentPane = document.querySelectorAll('.pane')

// contentPane.forEach(elem => {
//     let btn = document.createElement('button')
//     btn.className = 'remove-button'
//     btn.textContent = '[x]'
//     btn.addEventListener('click', () => {
//         elem.remove();
//     })
//     elem.append(btn)
// })

// alternative 
// const panes = document.querySelectorAll('.pane')
// for (let pane of panes) {
//     pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');

//     pane.firstChild.onclick = () => {
//         pane.remove();
//     }
// }


//EXTRA!

// Создать раскрывающееся меню

// const menu = document.querySelector('.menu');
// const menuBtn = document.querySelector('.menu__title')

// menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('open')
// })


// Карусель

// let i = 1;
// for (let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }


// let width = 130;
// let count = 3;

// let position = 0;

// const list = document.querySelector('ul');
// const listElem = document.querySelectorAll('li');

// carousel.querySelector('.prev').onclick = function () {
//     position += width * count;

//     position = Math.min(position, 0);

//     list.style.marginLeft = position + 'px';
// }

// carousel.querySelector('.next').onclick = function () {
//     position -= width * count;

//     position = Math.max(position, -width * (listElem.length - count));

//     list.style.marginLeft = position + 'px';
// }



