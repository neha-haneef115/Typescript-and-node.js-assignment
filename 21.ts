interface Landmark {
    name: string;
    location: string;
    yearBuilt: number | string; 
}

let landmarks: Landmark[] = [
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
landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. Name: ${landmark.name}`);
    console.log(`   Location: ${landmark.location}`);
    console.log(`   Year Built: ${landmark.yearBuilt}`);
    console.log();
});
