//Тренируемся общаться с пользователем посредством alert / confirm / prompt

// name = prompt('What is your name?');
// age = prompt("How old are you?")
// gender = prompt("What is your gender?")

// if (age !== null && age.trim() !== "" && !isNaN(+age)) {
//     age = +age; 
// } else {
//     age = "Invalid age";
// }

// let user = {
//     name,
//     age,
//     gender,
// }

// console.log(user);


//Работа с операторами

// let input = prompt("Enter a number:");

// if (input === null) {
//     alert("You canceled the input");
// } else if (input.trim() === "") {
//     alert("You entered nothing");
// } else if (isNaN(+input)) {
//     alert("You entered not a number");
// } else {
//     alert("You entered the number: " + input);
// }


//Работа с условиями

// let a = +prompt('a?', '');
// console.log(a)
// a = +a
// console.log(a)

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
//     default:
//         alert('Unknown value');
// }


//Работа с циклами(loops)

// 1
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);


// 2
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }