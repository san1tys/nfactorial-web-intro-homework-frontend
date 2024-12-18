// Задержка на промисах

// function delay(ms) {
//     return new Promise(res => setTimeout(res, ms))
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));


// Можно ли "перевыполнить" промис?
// Что выведет код ниже?

// let promise = new Promise(function (resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);

// выводится 1, последующие вызовы – игнорируются


// Промисы: сравните then и catch

// Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2);

// Против:

// promise.then(f1, f2);

// нет, они не эквивалентны
// Если ошибка произойдёт в f1, она не будет передана в f2 и останется необработанной, если далее в цепочке нет других блоков catch.
// Однако, если мы используете .then(f1).catch(f2), то любая ошибка в f1 будет передана далее в .catch(f2), 
// так как .catch ловит все ошибки, возникшие в предыдущих частях цепочки