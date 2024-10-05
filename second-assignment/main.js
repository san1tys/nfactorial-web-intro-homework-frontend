let restaurantName = "SanTaste";
const maxCapacity = 100;


let isOpen = true;
let rating = null;


let restaurant = {
    name: restaurantName,
    capacity: maxCapacity,
    open: isOpen,
    rating: rating
};


restaurant.location = "Tole bi 59";


restaurant.open = false;


delete restaurant.rating;

//////////////////////////////////////////

let vehicle = {};

vehicle.brandName = "BMW"

vehicle.model = "X5"

vehicle.model = "M1"

delete vehicle.model

//////////////////////////////////////////

let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);


