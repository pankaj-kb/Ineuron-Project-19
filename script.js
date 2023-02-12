// Task 1 change logo

let newLogo = document.getElementsByClassName("logo")[0];
console.log(newLogo)

newLogo.src = "./assets/ineuron-logo.png";

// Task 2 change price

let pricePerMonth = document.querySelector(".app_price span");
// console.log(pricePerMonth.innerText)

pricePerMonth.innerText = "$10";