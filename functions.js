/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */	

var numberToString = function(n) {
  return n + "";

};

numberToString(12);
	
 /**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
var increase = function(n){
	return n+1;
};

increase(54);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 var decrease = function(n){
 	return n-1;
 };

decrease(72);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var add = function(x,y){
	return x+y;

};

add(2,78);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 var subtract = function(x,y){
 	return x-y;

 };
 subtract(11,5);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
var multiply = function(x,y){
	return x*y;
};
multiply(2,3);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 var divide = function(x,y){
 	return x/y
 };

 divide(4,2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 var square = function(x){
 	return Math.pow(x, 2);

 };
 square(5);


/**
	*Need Help with this one Mark
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 function calculate (operation,x,y){

 	var opSymbol = "";
 	var result = 0;
 	
 	if (operation == "add") {
 		result = x+y;
 		opSymbol = "+"
	}

	if (operation == "subtract") {

		result = x-y
		opSymbol = "-"
	}

	if (operation == "multiply") {
		result = x*y
		opSymbol = "*"



	}

	if (operation == "divide") {

		result = x/y
		opSymbol ="/"

	}
	console.log(x + " " + opSymbol + " " + y + " = " + result);
return result;
  
 };

calculate ("add", 5, 7);
calculate ("subtract", 5, 7);
calculate ("multiply", 5, 7);
calculate ("divide", 5, 7);





/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var isGreaterThan = function(a,b) {if (a>b)
	{return true} else {return false}
	
};
isGreaterThan(3,2);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 
var isLessThan = function(a,b) {if (a<b)
	{return true} else {return false}
	
};
isLessThan(2,3);


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var areEqual = function (a,b){if (a===b)
	{return true} else {return false}

};

areEqual(3,3);


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

var minimum = function (x,y){

	return Math.min(x,y)

};

 minimum(3,1);



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var maximum = function (x,y){

	return Math.max(x,y)
};

maximum(3,1);



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var isEven = function (n){if (n%2 === 0)


	{return true} else {return false}


};

isEven(4);



/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 var isOdd = function (n){if (n%2 != 0)

 	{return true} else {return false}


 };

 isOdd(3);

/**
	*Need help with this one Mark
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, totalPercentage){
	var pct = score/totalPercentage;
	
	if (pct >= 0.9) 
		
		return "A";
	
	else if (pct >= 0.8)
		
		return "B";
	
	else if (pct >= 0.7)
		
		return "C";

	else if (pct >= 0.6)
		return "D";
	
	
	else 

	return "F";




}


/**
	* Need Help With this one Mark
 * Checks if a `restaurant` object has are `views` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */
function incrementReviews(restaurant) {

	if (restaurant.reviews === undefined) 

		restaurant.reviews = 1;
		
		else
			restaurant.reviews++;

		return restaurant;

}



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 var combine = function (word1, word2){
 	return word1 +" "+ word2;


 };

 combine("cat","dog");

/**
	*Need Help with this one Mark
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle (radius){
	var area = Math.PI*Math.pow(radius, 2);
	var circumference = Math.PI*radius*2;
	return {
		area: area,
		circumference: circumference
	};

 

}

	

console.log ("A circle with radius of " + radius + " has an area of " + myCircle.area + " and an circumference of " + myCircle.circumference + ".");




