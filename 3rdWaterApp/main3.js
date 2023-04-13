// const input = document.querySelector(".waterInput");
// let waterValue = "";
// const log = document.querySelector(".waterDone");

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

let plus = document.getElementById("plus");
let input = document.getElementById("input");
let minus = document.getElementById("minus");
let inputValue = input.value;
const log = document.querySelector(".waterDone");

//
let error = document.getElementById("invalidError");
// let x = document.getElementById("minus").Disabled;

//try to get local storage to work
// let waterInLocal = locatStorage.setItem("inputValue");

// create the function for increasing button (plus)

plus.addEventListener("click", function () {
  inputValue++;
  input.value = inputValue;

  if (inputValue >= 12 || inputValue < 1) {
    error.innerHTML = "Limit Over";
  } else {
    error.innerHTML = "";
  }
  updateValue();
  addGlassOfH20();
});

// create the function for decreasing button (minus)
minus.addEventListener("click", function () {
  inputValue--;
  input.value = inputValue;

  if (inputValue <= 0 || inputValue >= 12) {
    error.innerHTML = "Limit Under";
    // disable the - btn
    minus.disabled = true;
    //reset btn
    input.value = 0;
    //enable the btn
    minus.disabled = false;
  } else {
    error.innerHTML = "";
  }

  updateValue();
  removeGlassOfH20();
});

const inputH3 = document.querySelector(".waterInput");
let waterValue = inputValue;
const logH3 = document.querySelector(".waterDone");
inputH3.addEventListener("input", updateValue);

function updateValue(e) {
  if (inputValue <= 1) {
    logH3.innerHTML = `${inputValue} Cup`;
  } else {
    logH3.innerHTML = `${inputValue} Cups`;
  }
}

//add small cup of water to img src

function addGlassOfH20() {
  if (inputValue >= 1) {
    let parentCup = document.getElementById("parentCup");
    let newCupImg = document.createElement("img");
    newCupImg.src = "/images/greenWaterCup.png";
    newCupImg.style.width = "90px";
    newCupImg.className = "addedCups";
    parentCup.appendChild(newCupImg);
  } else {
    console.log("do nothing");
    //need to put something like an error
  }
}

//not working :(
function removeGlassOfH20() {
  // var d = document.querySelector("parentCup");
  // var dParent = document.querySelector(".circleBackGround");

  let deletedImage = parentCup.removeChild(parentCup.firstElementChild);

  deletedImage.remove();
}

//create
//append
//link
//be able to remove and add
