const thankState = document.getElementsByClassName("container-thank-state")[0];
thankState.classList.add("displayNone");

const ratingState = document.getElementsByClassName("container-rating-state")[0];
const btnSubmit = document.getElementsByTagName("button")[0];
const listOfNumber = document.getElementsByTagName("li");
const ratingNumber = document.getElementsByClassName("rating-number");
const finalRating = document.getElementsByClassName("selected-number")[0];
let numberSelected = 0;
let lastSelectedLi = undefined;

for (let i = 0; i < ratingNumber.length; i++) {
    ratingNumber[i].addEventListener("click", (event) => {
        if (lastSelectedLi != undefined) {
            lastSelectedLi.classList.remove("selected");

        }
        listOfNumber[i].classList.add("selected");
        lastSelectedLi = listOfNumber[i];

        numberSelected = event.target.innerHTML;
    })

}



btnSubmit.addEventListener("click", () => {
    if (numberSelected !== 0) {
        ratingState.classList.add("displayNone");
        thankState.classList.remove("displayNone");
        finalRating.innerHTML = `You selected ${numberSelected} out of 5`

    }


})