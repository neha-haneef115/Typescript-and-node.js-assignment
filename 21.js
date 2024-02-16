var landmarks = [
    {
        name: "Eiffel Tower",
        location: "Paris, France",
        yearBuilt: 1889
    },
    {
        name: "Great Wall of China",
        location: "China",
        yearBuilt: "7th century BCE to 17th century CE"
    },
    {
        name: "Taj Mahal",
        location: "Agra, India",
        yearBuilt: 1648
    },
];
console.log("Information about Famous Landmarks:");
landmarks.forEach(function (landmark, index) {
    console.log("".concat(index + 1, ". Name: ").concat(landmark.name));
    console.log("   Location: ".concat(landmark.location));
    console.log("   Year Built: ".concat(landmark.yearBuilt));
    console.log();
});
