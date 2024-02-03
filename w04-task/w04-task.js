/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
name: "Brigham Eduardo Aviles Ovalle",
photo: "images/20170104_165914_Original.jpg",
favoriteFoods: ["Pizza", "Sushi", "Burgers,Salads"],
hobbies: ["Video Games", "Working on cars", "Podcast"],
placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: "Utah", length: "5 years" },
    { place: "Chicago", length: "20" }
);
/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(function(placeObj) {
    document.getElementById("places-lived").appendChild(document.createElement("dt")).textContent = placeObj.place;
    
    document.getElementById("places-lived").appendChild(document.createElement("dd")).textContent = placeObj.length;
});


