//Business Logic

function Pizza (name, size, topping) {
this.name = name;
this.size = size;
this.topping = [];
this.cost = 0;
}

Pizza.prototype.cost = function() {
  if (this.topping === 0 && this.size === "small") {
    this.cost += 5;
  } else if (this.topping === 0 && this.size === "medium") {
      this.cost += 7;
  } else if (this.topping === 0 && this.size === "large") {
      this.cost += 9;
  } else if (this.topping === 1 && this.size === "small") {
      this.cost += 6;
  } else if (this.topping === 1 && this.size === "medium") {
      this.cost += 8;
  } else if (this.topping === 1 && this.size === "large") {
      this.cost += 10;
  } else if (this.topping === 2 && this.size === "small") {
      this.cost += 5.50;
  } else if (this.topping === 2 && this.size === "medium") {
      this.cost += 7.50;
  } else if (this.topping === 2 && this.size === "large") {
      this.cost += 9.50;
  }
  return this.cost;
}

//User-interface logic
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var userName = $("#name-input").val();
    var sizeInput = parseInt($("#size-select").val());
    var toppingInput = parseInt($("#topping-select").val());
    newPizza.topping.push(toppingInput);
    var newPizza = new Pizza(userName, sizeInput, toppingInput);
       $("#result").append(userName);
       newPizza.cost();
    });
  });
