function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(item => {
        console.log(item);
    });
    console.log("Bread\n");
}

makeSandwich("Cheese", "Tomato", "luttece");
makeSandwich("Ham", "Swiss Cheese");
makeSandwich("Turkey");
