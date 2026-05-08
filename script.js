console.log("--- Part 1: PLANTS LAB ---");

// pie
const PI = 3.1415;
// radius of garden
const radius = 5;
// how much space our garden
const area = PI * radius * radius;
// minimum space a single plant takes (in square meters)
const minPlantSpace = 0.8;
// starting number of plants
const startingPlants = 20;
// how many plants can fit the area of the garden
// parseInt removes the decimal and keeps it simple.
const capacity = parseInt(area / minPlantSpace);
// 80% of the maximum capacity
const eightyPercentOfMax = capacity * 0.8;
// 50% of the maximum capacity
const fiftyPercentOfMax = capacity * 0.5;

console.log("Area: ", area);
console.log("Capacity: ", capacity);
console.log("80% of Capacity: ", eightyPercentOfMax);
console.log("50% of Capacity: ", fiftyPercentOfMax);

// WEEK 1
let totalNumberOfPlants = startingPlants * 2;
console.log("\nWeek 1 # of plants: ", totalNumberOfPlants);

if (totalNumberOfPlants > eightyPercentOfMax) {
  console.log("Pruned. Too many plants...");
} else if (totalNumberOfPlants >= fiftyPercentOfMax && totalNumberOfPlants <= eightyPercentOfMax) {
  console.log("Monitor. Acceptable rate of growth.");
} else {
  console.log("Planted. We need more plants.");
}

// WEEK 2
totalNumberOfPlants = totalNumberOfPlants * 2;
console.log("\nWeek 2 # of plants: ", totalNumberOfPlants);

if (totalNumberOfPlants > eightyPercentOfMax) {
  console.log("Pruned. Too many plants...");
} else if (totalNumberOfPlants >= fiftyPercentOfMax && totalNumberOfPlants <= eightyPercentOfMax) {
  console.log("Monitor. Acceptable rate of growth.");
} else {
  console.log("Planted. We need more plants.");
}

// WEEK 3
totalNumberOfPlants = totalNumberOfPlants * 2;
console.log("\nWeek 3 # of plants: ", totalNumberOfPlants);

if (totalNumberOfPlants > eightyPercentOfMax) {
  console.log("Pruned. Too many plants...");
} else if (totalNumberOfPlants >= fiftyPercentOfMax && totalNumberOfPlants <= eightyPercentOfMax) {
  console.log("Monitor. Acceptable rate of growth.");
} else {
  console.log("Planted. We need more plants.");
}


console.log("\n--- Part 2: Thinking Bigger ---");

// start with 100 plants
let plants = 100;

// grow for 10 weeks (doubling each week)
for (let i = 0; i < 10; i++) {
    plants = plants * 2;
}

console.log("Plants after 10 weeks:", plants);

// calculate required area
const requiredArea = plants * minPlantSpace;
console.log("Required area:", requiredArea);

// use Math.sqrt to find radius
// area = PI × radius²
// radius = √(area ÷ PI)
const newRadius = Math.sqrt(requiredArea / PI);
// toFixed(2) rounds the number to 2 decimal places
// It also converts the number into a string
console.log("Required radius:", newRadius.toFixed(2));
console.log("The radius type is", typeof newRadius.toFixed(2));


console.log('\n--- Part 3: Errors in Judgment ---');

try {
    const initialPlants = 100;

    // space required for 100 plants
    const requiredSpace = initialPlants * minPlantSpace;

    console.log('Required space:', requiredSpace);
    console.log('Available space:', area);

    // check if plants exceed available space
    if (requiredSpace > area) {
        throw new Error('Not enough space in the garden for these plants!');
    }

    console.log('Plants fit in the garden.');

} catch (error) {
    console.log('Error:', error.message);
}