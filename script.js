// Task 1 change logo

let newLogo = document.getElementsByClassName("logo")[0];
console.log(newLogo)

newLogo.src = "./assets/ineuron-logo.png";

// Task 2 change price

let pricePerMonth = document.querySelector(".app_price span");
// console.log(pricePerMonth.innerText)

pricePerMonth.innerText = "$10";

// Task 3 Linked in Button

let socialLogos = document.querySelector(".footer_social")

let linkedInLogo = document.createElement("div");

linkedInLogo.classList.add("footer_social_ico");

let linkI = document.createElement("i");

linkI.classList.add("fa-brands", "fa-linkedin")

linkedInLogo.appendChild(linkI);

socialLogos.appendChild(linkedInLogo);

