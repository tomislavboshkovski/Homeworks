let phones = 30;
let price = 119.95;
let taxRate = (price / 100) * 5;
let total = phones * (price + taxRate).toFixed(2);

document.getElementById("demo").innerHTML = `Answer&colon; The total price is ${total} &#36;.`;