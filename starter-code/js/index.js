const btnCalculate = document.querySelector(".btn-success");
let productPrice = document.querySelector(".product-price");
let quantity = document.querySelector(".quant");
console.log(quantity.value, "hhhhi");
console.log(quantity.value);
console.log(productPrice);

const productTotalPrice = document.querySelector(".total-price");
console.log(btnCalculate);
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.quantity = 0;
//   }
// }
// var product2 = new Product("IronShirt", 15);

function handlerPrice() {
  var price = productPrice.textContent;
  // console.log(quantity.value);
  var quant = Number(quantity.value);
  var totalPrice = price * quant;
  productTotalPrice.textContent =`$${totalPrice}.00`;
  console.log(totalPrice);
}

btnCalculate.onclick = handlerPrice;

function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

// window.onload = function() {
//   var calculatePriceButton = document.getElementById("calc-prices-button");
//   var createItemButton = document.getElementById("new-item-create");
//   var deleteButtons = document.getElementsByClassName("btn-delete");

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
