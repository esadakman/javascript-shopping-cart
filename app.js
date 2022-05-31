var btn_min_bag = document.getElementById("min-bag");
var btn_max_bag = document.getElementById("max-bag");
var bag_quantity = document.getElementById("bag_quantity");
var remove_bag = document.querySelectorAll(".btn")[0];
var bag_total = document.querySelectorAll("#spans")[0];
var bag_price = document.getElementById("bag_price");

var btn_min_shoes = document.querySelector("#min-shoes");
var btn_max_shoes = document.querySelector("#max-shoes");
var shoes_quantity = document.querySelector("#shoes_quantity");
var remove_shoes = document.querySelectorAll(".btn")[1];
var shoes_total = document.querySelectorAll("#spans")[1];
var shoes_price = document.querySelector("#shoes_price");

var btn_min_clock = document.querySelector("#min-clock");
var btn_max_clock = document.querySelector("#max-clock");
var clock_quantity = document.querySelector("#clock_quantity");
var remove_clock = document.querySelectorAll(".btn")[2];
var clock_total = document.querySelectorAll("#spans")[2];
var clock_price = document.querySelector("#clock_price");

var subtotal = document.getElementById("total_sub");
var tax = document.getElementById("total_tax");
var shipping = document.getElementById("total_var");
var total = document.getElementById("total_cost");
// var ship = parseFloat(shipping.innerText.replace("$", ""));
// parseFloat(total.innerText.replace("$", ""));

// console.log(ship);
// console.log(total.innerText);

// ! ===============Bag==================

btn_max_bag.addEventListener("click", function (event) {
  bag_quantity.textContent++;

  totalPrice();
});

btn_min_bag.addEventListener("click", function (event) {
  if (bag_quantity.innerHTML > 0) {
    bag_quantity.textContent--;
  }
  totalPrice();
});

remove_bag.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  bag_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

// ! ===============Shoes==================

btn_max_shoes.addEventListener("click", function (event) {
  shoes_quantity.textContent++;
  totalPrice();
});

btn_min_shoes.addEventListener("click", function (event) {
  if (shoes_quantity.innerHTML > 0) {
    shoes_quantity.textContent--;
  }
  totalPrice();
});
remove_shoes.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  shoes_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

// ! ===============clock==================

btn_max_clock.addEventListener("click", function (event) {
  clock_quantity.textContent++;
  totalPrice();
});

btn_min_clock.addEventListener("click", function (event) {
  if (clock_quantity.innerHTML > 0) {
    clock_quantity.textContent--;
  }

  totalPrice();
});

remove_clock.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  clock_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

function totalPrice() {
  var sPrice = parseFloat(shoes_price.innerText.replace("$", ""));
  var sQuantity = shoes_quantity.innerText;
  var bPrice = parseFloat(bag_price.innerText.replace("$", ""));
  var bQuantity = bag_quantity.innerText;
  var cPrice = parseFloat(clock_price.innerText.replace("$", ""));
  var cQuantity = clock_quantity.innerText;
  var totals = 0;

  Math.round(bPrice * bQuantity * 100) / 100;
  bag_total.innerText = Math.round(bPrice * bQuantity * 100) / 100;
  shoes_total.innerText = Math.round(sPrice * sQuantity * 100) / 100;
  clock_total.innerText = Math.round(cPrice * cQuantity * 100) / 100;
  totals =
    totals + sPrice * sQuantity + bPrice * bQuantity + cPrice * cQuantity;
  tax.innerText = "$" + Math.round(totals * 0.18 * 100) / 100;
  subtotal.innerText = "$" + Math.round(totals * 100) / 100;

  // if (sQuantity > 0 || cQuantity > 0 || bQuantity > 0) {
  //   total.innerText = "$" + Math.round((totals + ship) * 100) / 100;
  // } else {
  //   total.innerText = "$" + 0;
  //   ship.innerText = "0";
  // }
  if (sQuantity > 0 || cQuantity > 0 || bQuantity > 0) {
    shipping.innerText = "$" + 19;
    var ship = parseFloat(shipping.innerText.replace("$", ""));
    total.innerText = "$" + Math.round((totals + ship) * 100) / 100;
  } else {
    total.innerText = "$" + 0;
    shipping.innerText = "$" + 0;
  }
}
