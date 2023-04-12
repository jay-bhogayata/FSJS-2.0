const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);
