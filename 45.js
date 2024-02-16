function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturer, model: model, options: options };
}
var myCar = carInfo("Toyota", "Corolla", color, "blue", year, 2022);
console.log(myCar);
