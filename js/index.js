// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subtotalValue = quantity * price
  
  const subtotal = product.querySelector(".subtotal span")
  subtotal.innerText = subtotalValue

  return subtotalValue
}

function calculateAll() {
  const products = document.querySelectorAll(".product")
  const totalPriceField = document.querySelector("#total-value span")
  let totalPrice = 0

  products.forEach(function (product) {
      totalPrice += updateSubtotal(product)
  })

  totalPriceField.innerText = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const tbody = target.parentNode.parentNode.parentNode

  tbody.removeChild(target.parentNode.parentNode)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll(".create-product input")
  const name = inputs[0].value
  const price = inputs[1].value
  const tbody = document.querySelector("tbody")
  const row = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`

  const tr = document.createElement("tr")
  tr.classList.add("product")
  tr.innerHTML = row

  tbody.appendChild(tr)
  
  // let removeProductBtn = tr.querySelector(".btn-remove")
  
  // removeProductBtn.addEventListener("click", removeProduct)
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate")
  calculatePricesBtn.addEventListener("click", calculateAll)

  const removeProductBtns = document.querySelectorAll(".btn-remove")
  removeProductBtns.forEach(function (removeProductBtn) {
      removeProductBtn.addEventListener("click", removeProduct)
  })

  const addProductBtn = document.getElementById("create")
  addProductBtn.addEventListener("click", createProduct)
})
