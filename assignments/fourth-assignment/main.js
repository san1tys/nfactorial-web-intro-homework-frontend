// Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }


// Функция pow(x,n)

// function pow(x, n) {
//     if (n == 0 || x == 1) {
//         return 1;
//     }

//     if (n < 0) {
//         x = 1 / x;
//         n = -n;
//     }

//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }

/// alternatative
// function pow(x, n) {
//     if (n == 0) {
//         return 1;
//     }

//     if (n < 0) {
//         x = 1 / x;
//         n = -n;
//     }

//     if (n % 2 == 0) {
//         let half = pow(x, n / 2);
//         return half * half;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }


//Перепишите с использованием функции-стрелки

// ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// );


//Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a < b)

// alert(arr);


//Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(user => user.name)

// alert(names); // Вася, Петя, Маша


// Трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(user => {
//     user.fullName = user.name + " " + user.surname;
//     id = user.id
//     return user;
// })

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин


// Получить средний возраст

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// getAverageAge = (arr) => {
//     return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length
// }

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28