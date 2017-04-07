//Business Logic

function Pizza (name, topping, size) {
this.name = name;
this.topping = topping;
this.size = size;
}
function fullOrder (pizzaOutput) {
 this.pizzaOutput = [];
 }

Pizza.prototype.cost = function() {
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
  } else if (this.topping === "Chicken" && this.size === 2) {
      this.cost = 10;
  } else if (this.topping === "Pineapple" && this.size === 0) {
      this.cost = 5.50;
  } else if (this.topping === "Pineapple" && this.size === 1) {
      this.cost = 7.50;
  } else if (this.topping === "Pineapple" && this.size === 2) {
      this.cost = 9.50;
      console.log(this.cost)
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
