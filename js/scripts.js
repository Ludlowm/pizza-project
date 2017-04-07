//Business Logic

function Pizza (name, cost, topping, size) {
this.name = name;
this.cost = cost;
this.topping = topping;
this.size = size;
}
function fullOrder (pizzaOutput) {
 this.pizzaOutput = [];
 }

Pizza.prototype.pizzacost = function() {
  if (this.topping === "Pepperoni" && this.size === "Small") {
    this.cost = 5;
  } else if (this.topping === "Pepperoni" && this.size === "Medium") {
      this.cost = 7;
  } else if (this.topping === "Pepperoni" && this.size === "Large") {
      this.cost = 9;
  } else if (this.topping === "Chicken" && this.size === "Small") {
      this.cost = 6;
  } else if (this.topping === "Chicken" && this.size === "Medium") {
      this.cost = 8;
  } else if (this.topping === "Chicken" && this.size === "Large") {
      this.cost = 10;
  } else if (this.topping === "Pineapple" && this.size === "Small") {
      this.cost = 5.50;
  } else if (this.topping === "Pineapple" && this.size === "Medium") {
      this.cost = 7.50;
  } else if (this.topping === "Pineapple" && this.size === "Large") {
      this.cost = 9.50;
  }
}


//User-interface logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userName = $("#name-input").val();
    var sizeInput = $("#size-select").val();
    var toppingInput = $("#topping-select").val();
    var newPizza = new Pizza (userName, toppingInput, sizeInput);
    console.log(newPizza);
  });
});
