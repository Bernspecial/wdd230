const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData (){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data);
    
}

const displayProphets = (prophets) =>{
        prophets.forEach((prophet) => {
            let card = document.createElement("section");
            let fullname = document.createElement("h2");
            let portrait = document.createElement("img");
            let dateBirth = document.createElement("h3")
            let placeOfBirth = document.createElement("h3")


            fullname.textContent = `${prophet.name} ${prophet.lastname}`;
            portrait.setAttribute("src", prophet.imageurl);
            portrait.setAttribute("alt", `Portrait of ${prophet.name}, ${prophet.lastname}`);
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "340");
            portrait.setAttribute("height", "440");
            dateBirth.textContent = `Date Of Birth: ${prophet.birthdate}`;
            placeOfBirth.textContent =`Place Of Birth ${prophet.birthplace}`;

            card.appendChild(fullname);
            card.appendChild(dateBirth);
            card.appendChild(placeOfBirth);
            card.appendChild(portrait);

            cards.appendChild(card);

        });
}
getProphetData();