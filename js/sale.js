// kitchen 1 products

document.querySelector("#kitchen-1").addEventListener("click", function () {
  const product1Value = document.querySelector("#product1").innerText;
  const product1Price = document.querySelector("#price1").innerText;

  totalPrice(product1Price);

  // console.log(typeof product1Price);
  // console.log(typeof product1PriceNum);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;

  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product1Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});

let priceValue = 0;
function totalPrice(price) {
  const amount = parseFloat(price);
  priceValue += amount;

  const totalPrice = document.querySelector("#total-input");

  totalPrice.innerText = `${priceValue.toFixed(2)}TK`;
}

// Kitchen 2 products
document.querySelector("#kitchen-2").addEventListener("click", function () {
  const product2Value = document.querySelector("#product2").innerText;
  const product2Price = document.querySelector("#price2").innerText;

  totalPrice(product2Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product2Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 3 products
document.querySelector("#kitchen-3").addEventListener("click", function () {
  const product3Value = document.querySelector("#product3").innerText;
  const product3Price = document.querySelector("#price3").innerText;

  totalPrice(product3Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product3Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});

// Kitchen 4 products
document.querySelector("#kitchen-4").addEventListener("click", function () {
  const product4Value = document.querySelector("#product4").innerText;
  const product4Price = document.querySelector("#price4").innerText;

  totalPrice(product4Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product4Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 5 products
document.querySelector("#kitchen-5").addEventListener("click", function () {
  const product5Value = document.querySelector("#product5").innerText;
  const product5Price = document.querySelector("#price5").innerText;

  totalPrice(product5Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product5Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 6 products
document.querySelector("#kitchen-6").addEventListener("click", function () {
  const product6Value = document.querySelector("#product6").innerText;
  const product6Price = document.querySelector("#price6").innerText;

  totalPrice(product6Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product6Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 7 products
document.querySelector("#kitchen-7").addEventListener("click", function () {
  const product7Value = document.querySelector("#product7").innerText;
  const product7Price = document.querySelector("#price7").innerText;

  totalPrice(product7Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product7Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 8 products
document.querySelector("#kitchen-8").addEventListener("click", function () {
  const product8Value = document.querySelector("#product8").innerText;
  const product8Price = document.querySelector("#price8").innerText;

  totalPrice(product8Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product8Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
// Kitchen 9 products
document.querySelector("#kitchen-9").addEventListener("click", function () {
  const product9Value = document.querySelector("#product9").innerText;
  const price9Value = document.querySelector("#price9").innerText;

  totalPrice(product9Price);

  const cart = document.querySelector("#cart");

  const count = cart.childElementCount;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${product9Value}`;
  p.setAttribute("class", "mb-3");

  cart.appendChild(p);
});
