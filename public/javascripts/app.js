var itemList = new Array();

function main() {

  do {

    var newItemName = prompt('Name of item');
    var newItemPrice = prompt('Price of item');
    newItemPrice = parseInt(newItemPrice);
    var newItem = new Item(newItemName, newItemPrice);

    itemList.push(newItem);

    appendItem(newItem);

    var lastItem = confirm('Press Ok if this is your last item.');

  } while (lastItem === false);

  var totalBill = calculateBill();
  alert(totalBill);

}

function Item(name, price) {
  this.name = name;
  this.price = price;
}

function calculateBill() {
  var total = 0;
  for(var i = 0; i < itemList.length; i++) {
    total += itemList[i].price;
  }
  var gstTax = total * 0.17;
  gstTax = Math.round(gstTax * 100) / 100;
  total *= 1.17;
  total = Math.round(total * 100) / 100;

  document.getElementById('gstTax').innerHTML = 'GST + Tax: $' + gstTax;
  document.getElementById('total').innerHTML = 'Total: $' + total;

  return total;
}

function appendItem(item) {
  var table = document.getElementById('items');
  var row = table.insertRow();

  var cell1 = row.insertCell();
  var cell2 = row.insertCell();

  cell1.innerHTML = item.name;
  cell2.innerHTML = item.price;
}