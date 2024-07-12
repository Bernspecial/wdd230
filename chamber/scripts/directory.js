// This code is to use api to fetch the members record

const card = document.querySelector("#memberCards");

const cardLink = "https://bernspecial.github.io/wdd230/chamber/data/members.json";

async function memberlink() {
  try {
    const response = await fetch(cardLink);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayMember(data.members);
    } else {
      throw new Error(`Error: ${response.status}`);
    }

  }
  catch (error) {
    console.log(error)
  }
}

function displayMember(members) {
  members.forEach((eachMember) => {
    let section = document.createElement("section");
    let name = document.createElement("h5");
    let addresses = document.createElement("h6");
    let contact = document.createElement("i");
    let websites = document.createElement("a");
    let image = document.createElement("img");
    let memberLevel = document.createElement("p");
    let industry = document.createElement("p");
    let description = document.createElement("p");


    image.setAttribute("src", eachMember.image);
    image.setAttribute("alt", `image of ${eachMember.name} company`);
    image.setAttribute("loading", "lazy");
    name.textContent = `${eachMember.name}`;
    addresses.textContent = `${eachMember.address}`;
    contact.textContent = `${eachMember.phone}`;
    websites.href = eachMember.website;
    websites.textContent = `${eachMember.website}`;

    section.appendChild(image);
    section.appendChild(name);
    section.appendChild(addresses);
    section.appendChild(contact);
    section.appendChild(websites);

    card.appendChild(section);

  });
}

memberlink();

// This code is use to toggle the preferred display 

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const display = document.querySelector("article");

grid.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

list.addEventListener("click", showList);

function showList(){
  display.classList.add("list");
  display.classList.remove("grid");
}