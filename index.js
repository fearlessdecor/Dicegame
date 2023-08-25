/* const prompt = require('prompt-sync')();

var fname = prompt("enter your first name:");
var lname = prompt("enter your last name: ");

console.log("your full name is ", fname, lname);
*/


/*function lifeinWeeks(age){

    var yearsremaining = 90-age;
    var monthsremaining = yearsremaining*12;
    var weekremaining = monthsremaining*4;
    var daysremainig = weekremaining*7;

    console.log(" you have " + yearsremaining + " years " + monthsremaining + " months " + weekremaining + " weeks and " + daysremainig + " days remaining ");
}

lifeinWeeks(21);

*/


// BMI calculator;

/*
function BMIcalculator(weight,height){

    var bmi = weight/ Math.pow(height,2);
    return bmi;
}

bmi = BMIcalculator(70, 1.8);
console.log(bmi);

Love calculator:


prompt("enter your name");
prompt("enter their name");

var lovescore = Math.random()*100;
lovescore = Math.floor(lovescore);
console.log("your love score is " + lovescore+ "%");

*/

// arrays in javascript;
/*
var guestlist = ["tarun", "jack" , "harry"];
console.log(guestlist); */
/*
function whosPaying(names) {
        var numberOfPeople = names.length;
        
        var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
        
        var randomPerson = names[randomPersonPosition];
        
        return randomPerson + "is going to buy lunch today!" ;
    }
    

const prompt = require('prompt-sync')();

var firstname = prompt("Enter your first name :");
var lastname = prompt("Enter your last name :");

console.log("Your full name is", firstname, lastname); 



// who will buy the lunch
function whosPaying(names) {
    var numberOfPeople = names.length;
    
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson + "is going to buy lunch today!" ;
}

*/

/*

var n =10;
var a = 0;
var b = 1;
var c = a+b;

for(var i =1; i<n ; i++){
    console.log(+a);
    console.log(+b);
    a = b;
    b = c;
}


*/


// fibonacci numbers using function and array

/*
function fibonaccigenerator (n){

    var output = [];
    if(n ===1 ){
        output = [0];
    }
    else if(n === 2){
        output = [0,1];
    }
    else{
        output = [0,1];

        for(var i =2; i<n; i++){
            output.push(output[output.length-2]+ output[output.length-1]);
        }
    }

    return output;

}

output = fibonaccigenerator(5);
console.log(output);
*/

//player 1 :

var randomnumber1 = Math.floor(Math.random()*6 +1 ); // will give numnbers 1-6

var randomDiceImage = "dice" + randomnumber1 + ".png"; // dice1.png - dice6.png

var randomdiceImagesource = randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceImagesource);


//player 2:

var randomnumber2 = Math.floor(Math.random()*6 +1); // will give number from 1 -6
var randomDiceimage2 = "dice" + randomnumber2 + ".png"; // dice1.png - dice.2png
var randomDiceimageSource2 = randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceimageSource2);

// OR FOR PLAYER TWO we can do, for setting the attribute:
// var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagSource2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins !!"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins !!"
}
else {
    document.querySelector("h1").innerHTML = " Its a Draw "
}