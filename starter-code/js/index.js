const btnCalculate = document.querySelector(".btn-success");
const btnCreate = document.querySelector(".btn-create")

const products = document.querySelectorAll("product")
const mainContainer = document.querySelector(".container")
const newItemName = document.querySelector(".new-item-name > input")
const newItemPrice = document.querySelector(".new-item-price > input")

console.log(btnCalculate)

function handlerPrice() {
  var bigTotal = 0
  const prices = document.querySelectorAll(".product-price")
  const quantity = document.querySelectorAll(".quant");
  const productTotalPrice = document.querySelectorAll(".total-price");
  const total = document.getElementById("bigTotal")

  prices.forEach(function (price, i) {
    var priceU = (price.textContent.slice(1));
    var quant = Number(quantity[i].value);
    var totalPrice = priceU * quant;
    productTotalPrice[i].textContent = `$${totalPrice}.00`;
    bigTotal += totalPrice
    console.log(priceU)
  })
  total.textContent = `Total price : $ ${bigTotal}`;
}

function newProduct() {
  var itemName = newItemName.value
  var itemPrice = newItemPrice.value
  mainContainer.innerHTML += `
  <div class="product">
        <div>
          <span>${itemName}</span>
        </div>
        <div class="price">
          <span class="product-price">$${itemPrice}</span>
        </div>
        <div class="input">
          <Label class="quantity">Qty</Label>
          <input class="quant" type="number" />
        </div>
        <div>
          <span class="total-price">Total price</span>
        </div>
        <div><button class="btn btn-delete">Delete</button></div>
      </div>
  `
  const btnsDelete = document.querySelectorAll(".btn-delete");

  btnsDelete.forEach(function (btnDelete, i) {
    console.log(btnDelete.parentElement.parentElement)
    btnDelete.onclick = () => btnDelete.parentElement.parentElement.remove();
  });

}

btnCalculate.onclick = handlerPrice;

btnCreate.onclick = newProduct;