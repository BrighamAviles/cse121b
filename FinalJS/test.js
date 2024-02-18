const images = ["https://starwars-visualguide.com/assets/img/characters/1.jpg", "https://starwars-visualguide.com/assets/img/characters/14.jpg", "https://starwars-visualguide.com/assets/img/characters/13.jpg", "https://starwars-visualguide.com/assets/img/characters/5.jpg", "https://starwars-visualguide.com/assets/img/characters/4.jpg"];

let softnessLevel = document.getElementById("softness");

let recommendDiv = document.getElementById("recommendations");
let textDiv = document.createElement("div");

textDiv.className = "textdiv";



let j;
let materialImg;

let nameP;
let genderP;
let homeP;
let birthP;

nameP = document.createElement("p");
genderP = document.createElement("p");
birthP = document.createElement("p");
homeP = document.createElement("p");
materialImg = document.createElement("img");

async function loadJSON(fname, ) {
    let results = await fetch(fname)
    const data =  await results.json();      
    

        nameP.textContent = "Name: " + data.name;
        genderP.textContent = "Gender: " + data.gender;
        birthP.textContent = "Birth Year: " + data.birth_year;
        

        

    

    

materialImg.className = "materialImg";

recommendDiv.appendChild(textDiv);
recommendDiv.appendChild(nameP);
recommendDiv.appendChild(genderP);
recommendDiv.appendChild(homeP);
recommendDiv.appendChild(birthP);
recommendDiv.appendChild(materialImg);

}
   


function generate() {


// const form = document.getElementById('preferencesForm');

let selection = document.getElementById("selection");
let value = selection.value;
// let option = selection.options[selection.selectedIndex].text


if(value == "luke") {
    
    homeP.textContent = "Homeworld: Tatooine";
    loadJSON(`https://swapi.dev/api/people/1/`);
    materialImg.setAttribute("src", images[0]);
    
            
}

if(value == "chewbacca") {
    
    homeP.textContent = "Homeworld: Kashyyyk";
    loadJSON(`https://swapi.dev/api/people/13/`);
    materialImg.setAttribute("src", images[2]);
            
}

if(value == "han") {
    
    homeP.textContent = "Homeworld: Corellia";
    loadJSON(`https://swapi.dev/api/people/14/`);
    materialImg.setAttribute("src", images[1]);
}

if(value == "leia") {
    
    homeP.textContent = "Homeworld: Alderaan";
    loadJSON(`https://swapi.dev/api/people/5/`);
    materialImg.setAttribute("src", images[3]);    
}

if(value == "vader") {
    
    homeP.textContent = "Homeworld: Tatooine";
    loadJSON(`https://swapi.dev/api/people/4/`);
    materialImg.setAttribute("src", images[4]);  
}



}