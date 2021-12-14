function logGroceries() {
  // Note: document.getElementById("").value returns text input in form
  var item1 = document.getElementById("item-1").value;
  var item2 = document.getElementById("item-2").value;
  var item3 = document.getElementById("item-3").value;
  var item4 = document.getElementById("item-4").value;
  var item5 = document.getElementById("item-5").value;
  var item6 = document.getElementById("item-6").value;
  // Sort array elements in aplhabetical order
  var groceryList = [item1, item2, item3, item4, item5, item6];
  var groceryList = groceryList.sort();
   // Convert array into a string
  var groceries = groceryList.toString();
  // Split items in the string at the comma
  var groceryItems = groceries.split(",");
  // Print grocery items to Java Console
  var printGroceries = groceryItems.map(function(groceryItem){
    console.log(groceryItem);
  });
}