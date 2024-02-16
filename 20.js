var landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
];
console.log("List of Famous Landmarks:");
landmarks.forEach(function (landmark, index) {
    console.log("".concat(index + 1, ". ").concat(landmark));
});
