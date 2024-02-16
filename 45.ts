function carInfo(manufacturer: string, model: string, ...options: { [key: string]: any }): { manufacturer: string, model: string, options: { [key: string]: any } } {
    return { manufacturer, model, options };
}

const myCar = carInfo("Toyota", "Corolla", color: "blue", year: 2022);

console.log(myCar);
