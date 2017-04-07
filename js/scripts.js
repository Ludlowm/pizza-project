//Business Logic

function Pizza (name, topping, size) {
this.name = name;
this.topping = topping;
this.size = size;

var pizzaOutput = [];
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
