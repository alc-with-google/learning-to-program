//using the process project
//process.argv returns all the input in the console/ command line in array
//process.argv[2] returns the third input
//in node gettingstrated.js 4, process.argv[2] = 2

// var totalCost = 14.99;

// var sizeOfParty = process.argv[2];

// var averageCost  = totalCost / sizeOfParty;

// console.log("$" + averageCost);

//Next Lesson

// var x =3,
//     y = 3;

// //or

// var x= 3, y = 3;

// //or

// var x = 3;
// var y = 2; 

/******Next Lesson*******/
//coersion

// var x = 2, y = 'Hello', z = '3';
// console.log(x+z) //x is conerced to the type of y,so returns 23

/* Functions */
// var firstDie = Math.ceil(6 * Math.random());

// var secondDie = Math.ceil(6 * Math.random()); 

// console.log(firstDie);

// console.log(secondDie)

/* Conditionals */
// var x = 3;o5
// var y = 5;

// if (!(x>4 || y < 6)){ //use of of ! outside the parenthesis
//     console.log('x is greater than 4 or y is less than 6')
// } else {console.log('sorry, try again')}

/* Working with Loop */
// var getDieRool = function (dieSize){
//     var result = Math.ceil(dieSize * Math.random());
//     return result;
// };

// var roll = getDieRool(6); //returns numbers less than or equal to 6

//while loop, executes 0 or more times
// while (roll < 4) {
//     console.log(roll);
//     roll = getDieRool(6);
// };


// Do-While loop, executes at least 1 time
// do {
//     roll = getDieRool(6);
//     console.log(roll);
// } while (roll>4)

// for (var i=0; i<10; i+= 1){
//     console.log(i) //returns 1 to 9
// }
// console.log(i) //returns 10

/* Working with Objects*/

// var die = {
//     size: 4,
//     roll : function(dieSize){
//         var result = Math.ceil(dieSize * Math.random());
//         return result;
//     }
// }

// console.log(die.size); //returns 4

// console.log(die.roll(6));

// var die = {
//     dieSize: 4,
//     /*dieSize is a ppt, not a variable
//     so when used in thr function,'this' becomes important
//     we don't just write "dieSize", as if we are referring to a declared variable*/
//     totalRoll: 0,
//     roll : function(){
//         var result = Math.ceil(this.dieSize * Math.random());
//         this.totalRoll += 1;
//         return result;
//     }
// }

// console.log(die.roll());
// console.log(die.totalRoll);

/*Using Functions/ Objects in different files*/
//this does not know of any dice
//so we require it
// var dices = require('./dice');

// console.log(dices); 
// //returns an array
// //which has the object defined as 'newGame' with its ppt,
// //and the string object 'name'

// var dice = dices.newGame //assigns the object defined in the export to dice

// dice.diceSize = 10; //access one of its ppt
// console.log(dice.roll()); //calls its function
// console.log(dice.roll());
// console.log(dice.roll());
// console.log(dice.totalRolls); //access another ppt
// console.log('Total rolls ' + dice.totalRolls);

/*testing
mkdir gradeBook
cd into gradeBook
mkdir tests
mkdir lib

*/






