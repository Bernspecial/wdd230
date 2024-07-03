// This code is to validate the passwood, to check if they really match
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

pwd2.addEventListener("focusout", confirmation);


function confirmation() {
if(pwd1.value !== pwd2.value){
    pwd1.value="";
    pwd2.value="";
    pwd1.focus();
    feedback.textContent = "Passwords do not match!!"
} else{
    feedback.textContent ="";
}
};

// This code is used to calculate the range (the page rating)
const rangeRating = document.querySelector("#rangeRating");
const range = document.querySelector("#range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeRating.innerHTML = range.value;
}


