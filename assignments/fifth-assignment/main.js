// Поиск элементов

const table = document.getElementById('age-table')


const labelELements = table.getElementsByTagName('label')
// const labelELements = document.querySelectorAll('#age-table label')


const firstTd = table.getElementsByTagName('td')[0];


const form = document.getElementsByName('search')[0]
// const form = document.querySelector('form[name="search"]')


const firstInput = form.getElementsByTagName('input')[0];


const inputs = form.querySelectorAll('input');
inputs[inputs.length - 1]


// Тег в комментарии

// Код выведет BODY, так как body.firstChild — это комментарий <!--BODY-->, а firstChild.data возвращает его содержимое