//Business Logic

function Pizza (name, topping, size) {
this.name = name;
this.topping = topping;
this.size = size;
}

Pizza.prototype.cost = function() {
  if (this.topping === 0 && this.size === 0) {
    return 5;
  } else if (this.topping === 0 && this.size === 1) {
    return 7;
  } else if (this.topping === 0 && this.size === 2) {
    return 9;
  } else if (this.topping === 1 && this.size === 0) {
    return 6;
  } else if (this.topping === 1 && this.size === 1) {
    return 8;
  } else if (this.topping === 1 && this.size === 2) {
    return 10;
  } else if (this.topping === 2 && this.size === 0) {
    return 5.50;
  } else if (this.topping === 2 && this.size === 1) {
    return 7.50;
  } else if (this.topping === 2 && this.size === 2) {
    return 9.50;
  }
}
var pizzaOutput = [];

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
