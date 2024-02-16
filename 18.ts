let placesToVisit: string[] = ["Santorini", "Kyoto", "Machu Picchu", "Banff National Park", "Victoria Falls"];
console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order after sorting:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order after reverse sorting:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order after double reversal:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

