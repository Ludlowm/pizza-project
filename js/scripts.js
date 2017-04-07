//Business Logic

function Pizza (name, size, topping) {
this.name = name;
this.size = size;
this.topping = topping;
}
// function fullOrder (pizzaOutput) {
//  this.pizzaOutput = [];
//  }

Pizza.prototype.cost = function() {
  if (this.topping === 0 && this.size === 0) {
    this.cost = 5;
  } else if (this.topping === 0 && this.size === 1) {
      this.cost = 7;
  } else if (this.topping === 0 && this.size === 2) {
      this.cost = 9;
  } else if (this.topping === 1 && this.size === 0) {
      this.cost = 6;
  } else if (this.topping === 1 && this.size === 1) {
      this.cost = 8;
  } else if (this.topping === 1 && this.size === 2) {
      this.cost = 10;
  } else if (this.topping === 2 && this.size === 0) {
      this.cost = 5.50;
  } else if (this.topping === 2 && this.size === 1) {
      this.cost = 7.50;
  } else if (this.topping === 2 && this.size === 2) {
      this.cost = 9.50;
  }
}
var pizzaOutput = [];

//User-interface logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userName = $("#name-input").val();
    var sizeInput = parseInt($("#size-select").val());
    var toppingInput = parseInt($("#topping-select").val());
    var newPizza = new Pizza (userName, sizeInput, toppingInput);
    var totalCost = 0;
    pizzaOutput.push(newPizza);
    pizzaOutput.forEach(function(pizza) {
      totalCost += pizza.cost();
       $(("ul#result").pizzaOutput());
    });
  });
});
