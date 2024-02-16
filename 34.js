var favoritePizzas = ["Margherita", "Pepperoni", "Vegetarian"];
console.log("Favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nFavorite pizzas with statements:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
console.log("\nI really love pizza!");
