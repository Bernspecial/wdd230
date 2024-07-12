const dateOption = {
  year: "numeric"
};

document.querySelector("#year").textContent = new Date().toLocaleDateString("en-Us", dateOption);

// This code is to show when last the site was updated
const lastModifie = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "#0E1208";
color.textContent = (`This site was last modified: ${lastModifie}`);

// This code is create a hambugger for the mobile view
const menu = document.querySelector("#menu");
const links = document.querySelector("nav");

menu.addEventListener("click", () => {
  links.classList.toggle("open");
  menu.classList.toggle("open");
});


// This code is to create how many times a user visits the webpage


// Initialize display element variable
// const visit = document.querySelector(".visits");
// Get the stored VALUE for the numberOfVisit KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the 
// numVisits variable.
/*let lastVisit = localStorage.getItem("firstVisit");
lastVisit = now.getTime();

//  Determine if this is the first visit or display the number of visits. 
if (lastVisit == 0) {
    visit.textContent = `🎉Welcome! It's your first time here.`;
    localStorage.setItem("firstVisit", lastVisit);

    visit.style.color = "blue"
    visit.style.fontSize = "15px"
    visit.style.fontFamily = "Lato"
    visit.style.fontWeight = "bold"
}
else {
    const prevVisitDate = new Date(localStorage.getItem('lastVisit'));
    const currentDate = new Date();
    // Calculate time difference in milliseconds
    const timeDifference = currentDate - prevVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference == 1) {
        visit.textContent = daysDifference ;
        visit.style.color = "blue"
        // console.log(`You last visited 1 day ago.`);
    } else {
        visit.textContent = `You last visited ${daysDifference} days ago.`;
        visit.style.color = "blue"
        // console.log(`You last visited ${daysDifference} days ago.`);
    }

    lastVisit++;
    localStorage.setItem('lastVisit', new Date().toISOString());
}

// increment the number of visits by one

// Update last visit date



//  store the new visit total into localStorage, numberOfVisit
// localStorage.setItem("numberOfVisit", numbVisit);*/



const visit = document.querySelector(".visits");

// Get the current date and time
const now = new Date();

// Check if this is the user's first visit
if (!localStorage.getItem('lastVisit')) {
  // Set the last visit date to now
  localStorage.setItem('lastVisit', now.getTime());
  visit.textContent = 'Welcome! Let us know if you have any questions.';
  visit.style.fontWeight = "bold";
} else {
  // Get the last visit date from localStorage
  const lastVisit = new Date(parseInt(localStorage.getItem('lastVisit')));

  // Calculate the time difference between visits
  const timeDiff = now.getTime() - lastVisit.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Display the appropriate message
  if (daysDiff == 0) {
    visit.textContent = 'Back so soon! Awesome!';
    visit.style.fontWeight = "bold";
  } else {
    const daysText = daysDiff == 1 ? 'day' : 'days';
    visit.textContent = `You last visited ${daysDiff} ${daysText} ago.`;
    visit.style.fontWeight = "bold";
  }

  //   lastVisit++;
  // Update the last visit date to now
  localStorage.setItem('lastVisit', now.getTime());
}
