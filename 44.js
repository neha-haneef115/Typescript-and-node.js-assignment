function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(function (item) {
        console.log(item);
    });
    console.log("Bread\n");
}
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Swiss Cheese");
makeSandwich("Turkey");
