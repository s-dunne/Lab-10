
//A sample array using a random list of numbers
var arrayOfNumbers = [4, 8, 15, 16, 28, 42];


//This function uses a for loop to add up every number in the array
function findSum(array) {

let sum = 0;

for (let i = 0; i < array.length; i++){
	
	sum += array[i];
	
}

return sum;


}


//This function does the same thing as the findSum function then divides the sum by the length of the array
function findMean(array) {
	
let sum = 0;

for (let i = 0; i < array.length; i++){
	
	sum += array[i];
	
}
	
let mean = sum/array.length;

return mean;
	
	
}

//Using the functions to establish the sum and mean of our array
var sum = findSum(arrayOfNumbers);
var mean = findMean(arrayOfNumbers);

//Using a Div and innerHTML to display the sum and mean on the page
var sumAndMeanDiv = document.getElementById("sumAndMean");
sumAndMeanDiv.innerHTML = "Sum = " + sum + "<br> Mean = " + mean;