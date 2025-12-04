//task-1

// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.


const PI = 3.1415;
const total_radius = 5;
const total_area = PI * total_radius * total_radius;

let week = 2

let plant_area = 0.8;
let weekly_increment = 20*2**week;
let weekly_increment_area = (20*2**week)*plant_area;



if(weekly_increment_area < 0.5*(total_area)) {
    console.log(`Planted as the covered area by plant is ${weekly_increment_area}`);
}
else if(weekly_increment_area >= 0.5*(total_area) && weekly_increment_area <= 0.8*(total_area)){
    console.log(`Monitored as the covered area by plant is ${weekly_increment_area}`);
}
else {
    console.log(`Pruned as the covered area by plant is ${weekly_increment_area}`);
}



//Task-2

