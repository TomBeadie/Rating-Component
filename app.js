const ratingCircleOne = document.getElementById("circ1");
const ratingCircleTwo = document.getElementById("circ2");
const ratingCircleThree = document.getElementById("circ3");
const ratingCircleFour = document.getElementById("circ4");
const ratingCircleFive = document.getElementById("circ5");

const msgContainer = document.querySelector(".message-container");



ratingCircleOne.addEventListener("click", (e) => {
  console.log("ayy");
    msgContainer.style.display = 'block'
});
