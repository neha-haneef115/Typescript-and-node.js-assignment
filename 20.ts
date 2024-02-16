let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    
];

console.log("List of Famous Landmarks:");
landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
});
