/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brigham Aviles';

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);

let profilePicture = "images/20170104_165914_Original.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute("alt", profilePicture + " " + fullName);



/* Step 5 - Array */

let favoriteFoods = ["Sushi", "Chocolate", "Burgers"];


let anotherFavoriteFood = "Ice Cream";
//favoriteFoods.push(anotherFavoriteFood);


foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;


//favoriteFoods.shift();
favoriteFoods.push(anotherFavoriteFood);


foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.shift();

favoriteFoods.pop();

favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();


foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;






